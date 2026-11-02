import React, { useEffect, useRef } from 'react';

/**
 * Full-bleed fluid shader: domain-warped fBm noise, brand-coloured, with a
 * cursor "ink" that bends the flow. Raw WebGL, no dependencies. Pauses when
 * off-screen / tab hidden; renders a single still frame for reduced motion.
 */
const VERT = `attribute vec2 p; void main(){ gl_Position = vec4(p,0.,1.); }`;

const FRAG = `
precision highp float;
uniform vec2 uRes; uniform float uTime; uniform vec2 uMouse; uniform float uStrength;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f*f*(3.-2.*f);
  return mix(mix(hash(i), hash(i+vec2(1,0)), u.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), u.x), u.y);
}
float fbm(vec2 p){
  float v = 0., a = .5;
  mat2 r = mat2(.8,-.6,.6,.8);
  for(int i=0;i<5;i++){ v += a*noise(p); p = r*p*2.02; a *= .5; }
  return v;
}
void main(){
  vec2 uv = gl_FragCoord.xy / uRes;
  float asp = uRes.x / uRes.y;
  vec2 p = (uv - .5) * vec2(asp, 1.) * 1.6;
  p.x -= .35;

  vec2 m = (uMouse - .5) * vec2(asp, 1.) * 1.6; m.x -= .35;
  float d = length(p - m);
  vec2 push = (p - m) * exp(-d*d*5.) * .55 * uStrength;

  float t = uTime * .06;
  vec2 q = vec2(fbm(p + t), fbm(p + vec2(5.2,1.3) - t));
  vec2 r = vec2(fbm(p + 3.*q + vec2(1.7,9.2) + t*1.3 + push),
                fbm(p + 3.*q + vec2(8.3,2.8) - t*1.1 - push));
  float f = fbm(p + 3.*r);

  vec3 ink    = vec3(.028,.035,.055);
  vec3 blue   = vec3(.18,.43,1.0);
  vec3 cyan   = vec3(.0,.82,.95);
  vec3 violet = vec3(.5,.38,.98);
  vec3 col = mix(ink, blue*.55, smoothstep(.25,.75,f));
  col = mix(col, violet*.7, smoothstep(.45,.95, length(q))*.55);
  col = mix(col, cyan, smoothstep(.6,1.05, r.x*f*1.9)*.55);
  col += blue * exp(-d*d*6.) * .22 * uStrength;

  float side = smoothstep(.0,.62,uv.x);
  col = mix(ink, col, mix(.18, 1., side));
  col *= 1. - .55*smoothstep(.55,1.15,length(uv-.5)*1.25);
  col += (hash(gl_FragCoord.xy + uTime) - .5) * .028;
  gl_FragColor = vec4(col, 1.);
}`;

export const HeroShader: React.FC<{ className?: string }> = ({ className = '' }) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'high-performance' });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, 'uRes');
    const uTime = gl.getUniformLocation(prog, 'uTime');
    const uMouse = gl.getUniformLocation(prog, 'uMouse');
    const uStrength = gl.getUniformLocation(prog, 'uStrength');

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.innerWidth < 768;
    // The field is soft, so rendering below native resolution is invisible but much cheaper.
    const scale = mobile ? 0.5 : 0.7;

    const resize = () => {
      canvas.width = Math.max(2, Math.round(canvas.clientWidth * scale));
      canvas.height = Math.max(2, Math.round(canvas.clientHeight * scale));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      if (reduce) draw();
    };

    const m = { x: 0.7, y: 0.5, tx: 0.7, ty: 0.5, s: 0, ts: 0 };
    const start = performance.now();
    const draw = () => {
      gl.uniform1f(uTime, reduce ? 12 : (performance.now() - start) / 1000 + 12);
      gl.uniform2f(uMouse, m.x, m.y);
      gl.uniform1f(uStrength, m.s);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      m.tx = (e.clientX - r.left) / r.width;
      m.ty = 1 - (e.clientY - r.top) / r.height;
      m.ts = 1;
    };
    const onLeave = () => { m.ts = 0; };
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);

    let visible = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(canvas);

    let raf = 0;
    const frame = () => {
      raf = requestAnimationFrame(frame);
      if (!visible || document.hidden) return;
      m.x += (m.tx - m.x) * 0.07;
      m.y += (m.ty - m.y) * 0.07;
      m.s += (m.ts - m.s) * 0.05;
      draw();
    };
    if (reduce) draw();
    else frame();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={`absolute inset-0 h-full w-full ${className}`} />;
};

export default HeroShader;
