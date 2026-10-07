export function AboutUs() {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Qevnaro</h2>
          <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-brand-dark mb-6">
              Empowering Businesses with Cutting-Edge IT Solutions
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At Qevnaro, we are passionate about transforming ideas into robust digital realities. As a forward-thinking IT company, we specialize in delivering scalable, secure, and innovative software solutions tailored to meet the unique challenges of modern businesses.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our mission is to bridge the gap between complex technology and business success. Whether you need a dynamic web application, a seamless mobile experience, or enterprise-grade cloud architecture, our team of expert developers and strategists is dedicated to driving your growth and efficiency.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="border-l-4 border-brand-primary pl-4">
                <h4 className="text-3xl font-bold text-brand-dark mb-1">50+</h4>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Projects Delivered</p>
              </div>
              <div className="border-l-4 border-brand-primary pl-4">
                <h4 className="text-3xl font-bold text-brand-dark mb-1">99%</h4>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Client Satisfaction</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 w-full">
            <div className="rounded-2xl overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 bg-brand-primary opacity-10 group-hover:opacity-0 transition-opacity duration-300"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our IT Team collaborating" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
