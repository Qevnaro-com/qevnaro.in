import { motion, type Variants } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, type: "spring", bounce: 0.4 } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#050B14] relative overflow-hidden pt-24 lg:pt-32 pb-20">
      
      {/* Animated Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-[#0052FF] rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#00C6FF] rounded-full blur-[150px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-semibold mb-6 backdrop-blur-sm"
          >
            <MessageSquare className="w-4 h-4 text-[#00C6FF]" />
            <span className="tracking-wide">Get in Touch</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0052FF]">extraordinary.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Whether you have a specific project in mind or just want to explore possibilities, our team is ready to listen and strategize.
          </motion.p>
        </div>

        {/* Contact Container */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] p-4 md:p-8 shadow-2xl">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8">
            
            {/* Left Info Panel */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#0052FF] to-[#00C6FF] rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden"
            >
              {/* Decorative circles inside panel */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Contact Information</h3>
                  <p className="text-white/80 mb-12">Fill up the form and our team will get back to you within 24 hours.</p>

                  <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
                    <motion.div variants={fadeInUp} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-white/70 text-sm mb-1">Call Us Directly</div>
                        <div className="font-bold text-lg">+1 (555) 123-4567</div>
                        <div className="font-bold text-lg">+91 98765 43210</div>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-white/70 text-sm mb-1">Email Address</div>
                        <div className="font-bold text-lg">hello@qevnaro.in</div>
                        <div className="font-bold text-lg">support@qevnaro.in</div>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-white/70 text-sm mb-1">Our Headquarters</div>
                        <div className="font-bold text-lg">Tech Park Avenue, Block C</div>
                        <div className="font-bold text-lg">Bangalore, India 560001</div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Social Links */}
                <div className="mt-16 flex gap-4">
                  {['Twitter', 'LinkedIn', 'Instagram'].map((social, i) => (
                    <motion.a 
                      key={i}
                      whileHover={{ y: -5 }}
                      href="#" 
                      className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium border border-white/10"
                    >
                      {social}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Form Panel */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="p-4 md:p-8 lg:p-10 relative"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2 group">
                      <label className="text-sm font-bold text-slate-400 group-focus-within:text-[#00C6FF] transition-colors">First Name</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full bg-transparent border-b-2 border-slate-700 py-2 text-white focus:outline-none focus:border-[#00C6FF] transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-sm font-bold text-slate-400 group-focus-within:text-[#00C6FF] transition-colors">Last Name</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full bg-transparent border-b-2 border-slate-700 py-2 text-white focus:outline-none focus:border-[#00C6FF] transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2 group">
                      <label className="text-sm font-bold text-slate-400 group-focus-within:text-[#00C6FF] transition-colors">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        className="w-full bg-transparent border-b-2 border-slate-700 py-2 text-white focus:outline-none focus:border-[#00C6FF] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-sm font-bold text-slate-400 group-focus-within:text-[#00C6FF] transition-colors">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full bg-transparent border-b-2 border-slate-700 py-2 text-white focus:outline-none focus:border-[#00C6FF] transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-bold text-slate-400">What services are you interested in?</label>
                    <div className="flex flex-wrap gap-3">
                      {['Web Development', 'App Development', 'Digital Marketing', 'Brand Identity', 'Other'].map((service, i) => (
                        <label key={i} className="cursor-pointer">
                          <input type="radio" name="service" className="peer sr-only" defaultChecked={i===0} />
                          <div className="px-5 py-2.5 rounded-full border border-slate-700 text-slate-400 peer-checked:bg-[#0052FF]/20 peer-checked:border-[#0052FF] peer-checked:text-white transition-all text-sm font-medium hover:border-slate-500">
                            {service}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <label className="text-sm font-bold text-slate-400 group-focus-within:text-[#00C6FF] transition-colors">Message</label>
                    <textarea 
                      required 
                      rows={4}
                      className="w-full bg-transparent border-b-2 border-slate-700 py-2 text-white focus:outline-none focus:border-[#00C6FF] transition-colors resize-none"
                      placeholder="Tell us about your project goals and requirements..."
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-[#0052FF] to-[#00C6FF] hover:shadow-[0_0_30px_rgba(0,198,255,0.5)] text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(0,82,255,0.3)] flex items-center justify-center gap-3 group">
                      Send Message <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-slate-400 max-w-md">
                    Thank you for reaching out. We have received your message and our team will get back to you shortly.
                  </p>
                </motion.div>
              )}
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
