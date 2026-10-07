import { motion, type Variants } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Zap, Globe, Coffee, Laptop, GraduationCap, UploadCloud, Users, Star, Target, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function Careers() {
  const [selectedRole, setSelectedRole] = useState<string>("General Application");

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
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
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section (Dark) */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#050B14]">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ willChange: 'transform, opacity' }}
            className="absolute top-10 left-10 w-[400px] h-[400px] bg-[#0052FF] rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{ willChange: 'transform, opacity' }}
            className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#00C6FF] rounded-full blur-[150px]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0052FF]/20 to-[#00C6FF]/20 border border-[#0052FF]/30 text-white text-sm font-semibold mb-8 shadow-[0_0_20px_rgba(0,82,255,0.2)] backdrop-blur-sm"
          >
            <Zap className="w-4 h-4 text-[#00C6FF]" />
            <span className="tracking-wide">We're Hiring</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight max-w-4xl mx-auto"
          >
            Do the best work of your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0052FF]">life here.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Join a passionate team of creators, engineers, and marketers building the future of digital experiences. Work from anywhere, learn every day, and make an impact.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <a href="#open-roles" className="inline-block px-8 py-4 bg-gradient-to-r from-[#0052FF] to-[#00C6FF] hover:shadow-[0_0_30px_rgba(0,198,255,0.5)] text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(0,82,255,0.3)]">
              View Open Roles
            </a>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section (White Background) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 max-w-2xl mx-auto text-lg"
            >
              These are the principles that guide our work, our interactions, and our growth every single day.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 border border-slate-100 p-8 rounded-3xl"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ownership</h3>
              <p className="text-slate-600">We take full responsibility for our work. If you see a problem, you have the authority to fix it.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 border border-slate-100 p-8 rounded-3xl"
            >
              <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Collaboration</h3>
              <p className="text-slate-600">Egos are left at the door. We believe the best ideas win, no matter where they come from.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 border border-slate-100 p-8 rounded-3xl"
            >
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Excellence</h3>
              <p className="text-slate-600">We don't settle for "good enough". We push boundaries to deliver exceptional digital experiences.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perks & Benefits Section (Light Gray) */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4"
            >
              Why You'll Love It Here
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 max-w-2xl mx-auto text-lg"
            >
              We believe that when we take care of our team, our team takes care of our clients. Here's what you get when you join us.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br ${benefit.gradient} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hiring Process (White Background) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Our Hiring Process</h2>
            <p className="text-slate-500">Fast, transparent, and respectful of your time.</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-6 left-10 right-10 h-1 bg-slate-100 z-0 rounded-full"></div>
            
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4 mb-10 md:mb-0 px-4"
              >
                <div className="w-12 h-12 rounded-full bg-white border-4 border-[#00C6FF] flex items-center justify-center font-bold text-[#0052FF] mb-4 shadow-[0_0_15px_rgba(0,198,255,0.3)]">
                  {index + 1}
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-xs text-slate-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles & Application Form (White/Light Theme) */}
      <section id="open-roles" className="py-24 bg-white relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Roles (Modern List) */}
            <div className="lg:col-span-5 flex flex-col">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Open Positions</h2>
                <p className="text-slate-500 text-lg">Click on a role to apply directly.</p>
              </motion.div>

              <div className="flex-1 space-y-4">
                {jobs.map((job, idx) => (
                  <motion.div 
                    key={idx}
                    onClick={() => setSelectedRole(job.title)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`group relative overflow-hidden rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                      selectedRole === job.title 
                        ? 'bg-gradient-to-r from-[#0052FF] to-[#00C6FF] text-white shadow-[0_15px_30px_rgba(0,82,255,0.2)] scale-[1.02]' 
                        : 'bg-white border border-slate-200 hover:border-[#0052FF]/30 hover:shadow-lg hover:bg-slate-50'
                    }`}
                  >
                    <div className="relative z-10">
                      <h3 className={`text-xl font-bold mb-3 ${selectedRole === job.title ? 'text-white' : 'text-slate-900 group-hover:text-[#0052FF]'}`}>
                        {job.title}
                      </h3>
                      <div className={`flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium ${selectedRole === job.title ? 'text-white/90' : 'text-slate-500'}`}>
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4 opacity-70" /> {job.department}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 opacity-70" /> {job.location}
                        </div>
                      </div>
                    </div>
                    {/* Selected Indicator */}
                    {selectedRole === job.title && (
                      <motion.div layoutId="activeIndicator" className="absolute right-6 top-1/2 -translate-y-1/2">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
                
                {/* General Application Card */}
                <motion.div 
                  onClick={() => setSelectedRole("General Application")}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: jobs.length * 0.1 }}
                  className={`group relative overflow-hidden rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                    selectedRole === "General Application" 
                      ? 'bg-slate-900 text-white shadow-xl scale-[1.02]' 
                      : 'bg-slate-50 border border-slate-200 border-dashed hover:border-slate-400 hover:bg-slate-100'
                  }`}
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <h3 className={`text-lg font-bold ${selectedRole === "General Application" ? 'text-white' : 'text-slate-900'}`}>
                        General Application
                      </h3>
                      <p className={`text-sm mt-1 ${selectedRole === "General Application" ? 'text-slate-400' : 'text-slate-500'}`}>
                        Don't see a perfect fit? Pitch us.
                      </p>
                    </div>
                    {selectedRole === "General Application" && (
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Column: Application Form (Modern & Clean) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="bg-white border border-slate-100 rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative overflow-hidden">
                {/* Subtle top gradient accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0052FF] to-[#00C6FF]"></div>

                <div className="mb-8">
                  <span className="text-[#0052FF] text-sm font-bold tracking-wider uppercase mb-2 block">Application Form</span>
                  <h3 className="text-3xl font-extrabold text-slate-900">
                    Applying for: <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052FF] to-[#00C6FF]">{selectedRole}</span>
                  </h3>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 group">
                      <label className="text-sm font-bold text-slate-700 group-focus-within:text-[#0052FF] transition-colors">First Name <span className="text-red-500">*</span></label>
                      <input type="text" placeholder="John" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all" required />
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-sm font-bold text-slate-700 group-focus-within:text-[#0052FF] transition-colors">Last Name <span className="text-red-500">*</span></label>
                      <input type="text" placeholder="Doe" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 group">
                      <label className="text-sm font-bold text-slate-700 group-focus-within:text-[#0052FF] transition-colors">Email Address <span className="text-red-500">*</span></label>
                      <input type="email" placeholder="john@example.com" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all" required />
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-sm font-bold text-slate-700 group-focus-within:text-[#0052FF] transition-colors">Phone Number <span className="text-red-500">*</span></label>
                      <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all" required />
                    </div>
                  </div>

                  <div className="pt-2">
                    <h4 className="text-sm font-bold text-slate-700 mb-3">Resume & Portfolio <span className="text-red-500">*</span></h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Option 1: Upload */}
                      <label className="relative flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-xl p-6 cursor-pointer hover:border-[#0052FF] hover:bg-[#0052FF]/5 transition-all group">
                        <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".pdf,.doc,.docx" />
                        <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-[#0052FF]/10 text-slate-500 group-hover:text-[#0052FF] flex items-center justify-center mb-2 transition-colors">
                          <UploadCloud className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-bold text-slate-700 text-center">Upload Resume</span>
                        <span className="text-[10px] text-slate-500 mt-1">PDF or DOCX</span>
                      </label>

                      {/* Option 2: Link */}
                      <div className="space-y-2 group flex flex-col justify-center">
                        <label className="text-xs font-bold text-slate-500">OR provide a link</label>
                        <input type="url" placeholder="LinkedIn or Portfolio URL" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <label className="text-sm font-bold text-slate-700 group-focus-within:text-[#0052FF] transition-colors">Cover Letter <span className="text-red-500">*</span></label>
                    <textarea required rows={5} placeholder="Tell us why you are the perfect fit for this role. What unique value will you bring to our team?" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all resize-none"></textarea>
                  </div>

                  <button type="submit" className="w-full mt-4 px-8 py-4 bg-[#0F172A] hover:bg-slate-800 text-white rounded-xl font-bold transition-all shadow-[0_10px_20px_rgba(15,23,42,0.15)] hover:shadow-[0_10px_30px_rgba(15,23,42,0.25)] flex items-center justify-center gap-2 group">
                    Submit Application <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

    </div>
  );
}

const benefits = [
  {
    icon: Globe,
    title: "Work From Anywhere",
    desc: "We are a remote-first company. Work from your home, a cafe, or a beach house in Bali.",
    gradient: "from-[#0052FF] to-blue-500"
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    desc: "Premium health, dental, and vision insurance for you and your dependents.",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Laptop,
    title: "Home Office Budget",
    desc: "We provide a generous stipend to help you set up a productive and comfortable home workspace.",
    gradient: "from-[#00C6FF] to-cyan-500"
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    desc: "Annual budget for courses, conferences, and books to keep your skills sharp.",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    desc: "We care about results, not hours logged. Work when you are most productive.",
    gradient: "from-emerald-400 to-teal-500"
  },
  {
    icon: Coffee,
    title: "Paid Time Off",
    desc: "Unlimited PTO policy with a mandatory minimum of 3 weeks off to ensure you rest and recharge.",
    gradient: "from-orange-400 to-amber-500"
  }
];

const processSteps = [
  { title: "Application Review", desc: "We review your resume and portfolio within 48 hours." },
  { title: "Introductory Call", desc: "A 30-min chat with HR to align on goals and culture fit." },
  { title: "Skills Assessment", desc: "A technical interview or a small take-home assignment." },
  { title: "Final Offer", desc: "Meet the founders, get an offer, and welcome aboard!" }
];

const jobs = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-Time"
  },
  {
    title: "UI/UX Product Designer",
    department: "Design",
    location: "Remote (Global)",
    type: "Full-Time"
  },
  {
    title: "Performance Marketing Manager",
    department: "Marketing",
    location: "Remote (India)",
    type: "Full-Time"
  },
  {
    title: "B2B Sales Executive",
    department: "Sales",
    location: "Remote (US/EU)",
    type: "Full-Time"
  }
];
