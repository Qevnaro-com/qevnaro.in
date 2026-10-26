import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { 
  Mail, 
  PhoneCall, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  MessageCircle, 
  Send, 
  ChevronDown, 
  Zap, 
  Headphones,
  Check
} from 'lucide-react';
import { useState } from 'react';

const serviceOptions = [
  'Web Development',
  'Mobile App Development',
  'UI/UX & Brand Identity',
  'Digital Marketing & SEO',
  'E-Commerce Solutions',
  'Custom Software / SaaS'
];

const budgetOptions = [
  'Under ₹50,000',
  '₹50,000 - ₹1.5 Lakh',
  '₹1.5 Lakh - ₹5 Lakh',
  '₹5 Lakh+'
];

const clientFaqs = [
  {
    q: "How soon can our project kick off?",
    a: "Usually within 2 to 4 business days! Once we align on your requirements, architecture, and milestones, our engineering sprint begins immediately."
  },
  {
    q: "Do you sign a Non-Disclosure Agreement (NDA)?",
    a: "Yes, 100%. We respect your intellectual property. Before discussing confidential product ideas or business logic, we are always ready to execute a bilateral NDA."
  },
  {
    q: "Can I directly talk to your team on WhatsApp or Phone?",
    a: "Absolutely! You can call us directly or drop a quick WhatsApp message at +91 87965 30323. We typically respond within 15 minutes during business hours."
  },
  {
    q: "Can we schedule a Google Meet or Zoom video session?",
    a: "Yes! Once you submit the inquiry form or message us, our tech lead will share a direct calendar link to jump on a 30-minute discovery call."
  },
  {
    q: "What are your payment and milestone terms?",
    a: "We work with transparent, milestone-based deliverables (e.g. 30% kickoff, 40% beta sprint, 30% final deployment). You only pay as tangible milestones are achieved."
  }
];

export function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>(['Web Development']);
  const [selectedBudget, setSelectedBudget] = useState<string>('₹50,000 - ₹1.5 Lakh');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== service));
      }
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate responsive submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-28 pb-20 relative overflow-hidden">
      
      {/* Background Subtle Tech Grid & Ambient Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:28px_28px] opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-blue-50/70 via-cyan-50/40 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-100/30 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-cyan-100/30 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* HERO SECTION                                              */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50/80 border border-blue-200/60 text-[#0052FF] text-xs sm:text-sm font-semibold mb-6 shadow-sm backdrop-blur-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
            <span>Available for New Projects • Instant Support</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3"
          >
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052FF] via-[#0084FF] to-[#00C6FF]">
              Extraordinary.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal"
          >
            Got an ambitious product idea or need high-impact digital growth? 
            Connect with our Indian engineering & design team for transparent pricing and rapid execution.
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* 3 QUICK ACTION CONTACT CARDS (Direct Call / WhatsApp / Email) */}
        {/* ========================================================= */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {/* Card 1: Direct Call */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,82,255,0.08)] hover:border-blue-300 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0052FF] mb-6 group-hover:scale-110 group-hover:bg-[#0052FF] group-hover:text-white transition-all duration-300 shadow-sm">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Direct Phone Call</div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Talk to Tech Lead</h3>
              <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                For urgent requirements, scoping sessions, or immediate consultations.
              </p>
            </div>
            <div>
              <div className="text-xl font-extrabold text-[#0052FF] mb-4 tracking-tight flex items-center gap-2">
                +91 87965 30323
              </div>
              <a 
                href="tel:+918796530323" 
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-[#0052FF] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                <PhoneCall className="w-4 h-4" /> Call +91 87965 30323
              </a>
            </div>
          </motion.div>

          {/* Card 2: WhatsApp (Highlighted) */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-gradient-to-b from-emerald-50/50 to-white rounded-3xl p-7 border-2 border-emerald-400/80 shadow-[0_10px_30px_rgba(16,185,129,0.08)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] transition-all group flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-emerald-500 text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
              <Zap className="w-3 h-3 fill-current" /> Fastest Reply
            </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">Instant Messaging</div>
              <h3 className="text-xl font-black text-slate-900 mb-2">WhatsApp Chat</h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Send your design references, queries, or quick voice notes anytime.
              </p>
            </div>
            <div>
              <div className="text-xl font-extrabold text-emerald-600 mb-4 tracking-tight flex items-center gap-2">
                +91 87965 30323
              </div>
              <a 
                href="https://wa.me/918796530323?text=Hi%20Qevnaro%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project%20inquiry." 
                target="_blank" 
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Card 3: Official Email */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,198,255,0.08)] hover:border-cyan-300 transition-all group flex flex-col justify-between sm:col-span-2 lg:col-span-1"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 group-hover:bg-[#00C6FF] group-hover:text-white transition-all duration-300 shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Official Inquiries</div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Email Us</h3>
              <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                Send your RFPs, detailed briefs, documents, or partnership requests.
              </p>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-extrabold text-slate-900 mb-4 tracking-tight truncate">
                qevnaro@gmail.com
              </div>
              <a 
                href="mailto:qevnaro@gmail.com" 
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-[#0052FF] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                <Mail className="w-4 h-4" /> Send Email
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* ========================================================= */}
        {/* MAIN FORM & TRUST SECTION (Split Layout)                 */}
        {/* ========================================================= */}
        <div className="grid lg:grid-cols-[1.1fr_1.4fr] gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Column: Trust, Guarantees & Office Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Why Reach Out Box */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/70">
              <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-[#0052FF]" />
                What Happens Next?
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-[#0052FF] flex items-center justify-center shrink-0 font-bold text-sm">
                    01
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Rapid Scope Review</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Our senior engineering team reviews your goals within 2-4 hours and prepares a tailored approach.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-[#0052FF] flex items-center justify-center shrink-0 font-bold text-sm">
                    02
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Free 30-Min Strategy Call</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      We jump on a Google Meet / Zoom call to clarify tech stack, architectural options, and timelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-[#0052FF] flex items-center justify-center shrink-0 font-bold text-sm">
                    03
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Transparent Proposal & NDA</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      You receive a detailed milestone breakdown, fixed quote, and formal confidentiality agreement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">100% Confidential</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Strict NDA protection for all shared ideas.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052FF] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Fast Turnaround</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Guaranteed reply within 24 business hours.</p>
                </div>
              </div>
            </div>

            {/* Office & Operations Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-60 h-60 bg-[#0052FF]/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-cyan-300 mb-3">
                    <MapPin className="w-3.5 h-3.5" /> India Operations
                  </div>
                  <h4 className="text-xl font-black text-white">Qevnaro Digital Technologies</h4>
                  <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                    Bengaluru & New Delhi, India • Serving Clients Globally
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/80 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-400 mb-1">Working Hours</div>
                    <div className="font-bold text-white">Mon - Sat: 9 AM - 8 PM IST</div>
                  </div>
                  <div>
                    <div className="text-slate-400 mb-1">Direct Helpline</div>
                    <div className="font-bold text-cyan-300">+91 87965 30323</div>
                  </div>
                </div>

                {/* Direct 1-Click WhatsApp Bar inside card */}
                <a
                  href="https://wa.me/918796530323?text=Hi%20Qevnaro%2C%20I%20have%20an%20urgent%20requirement%20to%20discuss."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm transition-all shadow-md group"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" /> Message Tech Lead on WhatsApp
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-7">
                
                {/* Section Title */}
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Tell Us About Your Project</h3>
                  <p className="text-sm text-slate-500">
                    Fill in your details below and our lead strategist will respond with a preliminary proposal.
                  </p>
                </div>

                {/* 1. Services Selector Pills */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-slate-700">
                    Services You Need <span className="text-[#0052FF] text-xs font-normal">(Select multiple)</span>
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {serviceOptions.map((service) => {
                      const isSelected = selectedServices.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 border ${
                            isSelected
                              ? 'bg-blue-50 border-[#0052FF] text-[#0052FF] shadow-sm ring-1 ring-[#0052FF]'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-100/70'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Budget Range Selector */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-slate-700">
                    Estimated Project Budget
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetOptions.map((budget) => {
                      const isSelected = selectedBudget === budget;
                      return (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setSelectedBudget(budget)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-semibold text-center transition-all duration-200 border ${
                            isSelected
                              ? 'bg-[#0052FF] border-[#0052FF] text-white shadow-sm'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          {budget}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Inputs: Name & Company */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all text-sm font-medium text-slate-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700">
                      Company / Organization
                    </label>
                    <input 
                      type="text" 
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acme Innovations"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all text-sm font-medium text-slate-900"
                    />
                  </div>
                </div>

                {/* 4. Inputs: Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all text-sm font-medium text-slate-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700">
                      Phone / WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                        +91
                      </span>
                      <input 
                        type="tel" 
                        required 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="87965 30323"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all text-sm font-medium text-slate-900"
                      />
                    </div>
                  </div>
                </div>

                {/* 5. Message */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">
                    Project Overview & Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    required 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you want to build, any reference websites, key features, or expected launch date..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all text-sm font-medium text-slate-900 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-[#0052FF] to-[#00C6FF] hover:from-[#0045d8] hover:to-[#00b2e6] text-white font-extrabold text-base shadow-[0_10px_25px_rgba(0,82,255,0.25)] hover:shadow-[0_15px_30px_rgba(0,82,255,0.35)] active:scale-[0.99] transition-all flex items-center justify-center gap-3 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        <span>Sending Request...</span>
                      </div>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Your data is strictly confidential. Zero spam policy.</span>
                  </div>
                </div>
              </form>
            ) : (
              /* Success Animation State */
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 px-4 text-center flex flex-col items-center justify-center space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                </div>
                
                <div>
                  <h3 className="text-3xl font-black text-slate-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, <span className="font-bold text-slate-900">{formData.name || 'Friend'}</span>! Our team has received your project details and will review them immediately.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-sm w-full text-xs text-slate-600 space-y-1.5">
                  <div><strong>Email:</strong> {formData.email || 'Provided'}</div>
                  <div><strong>Phone:</strong> +91 {formData.phone || '87965 30323'}</div>
                  <div><strong>Services:</strong> {selectedServices.join(', ')}</div>
                  <div><strong>SLA:</strong> Response guaranteed within 24 hours.</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm pt-2">
                  <a
                    href="https://wa.me/918796530323?text=Hi%20Qevnaro%20Team%2C%20I%20just%20submitted%20a%20project%20inquiry%20on%20your%20website."
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4" /> Ping on WhatsApp
                  </a>
                  
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
                    }}
                    className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all"
                  >
                    Send Another
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* CLIENT FAQS & DOUBT CLEARING SECTION                      */}
        {/* ========================================================= */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0052FF] text-xs font-bold uppercase tracking-wider mb-3">
              <Headphones className="w-3.5 h-3.5" /> Frequently Asked Questions
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Have Questions Before Reaching Out?
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Everything you need to know about starting a project with Qevnaro.
            </p>
          </div>

          <div className="space-y-4">
            {clientFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition-all shadow-sm hover:shadow-md"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full py-5 px-6 text-left flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-bold text-base sm:text-lg text-slate-900">
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 text-slate-500"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM DIRECT CONNECT BANNER                              */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 border border-blue-200/70 p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            Prefer a Direct Phone or WhatsApp Discussion?
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base mb-8">
            You don't even have to fill out the form. Simply dial our team or tap WhatsApp to initiate an instant conversation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="tel:+918796530323"
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-[#0052FF] text-white text-sm font-bold shadow-md transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" /> Call +91 87965 30323
            </a>
            
            <a 
              href="https://wa.me/918796530323?text=Hi%20Qevnaro%20Team%2C%20let%27s%20connect%20for%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp: +91 87965 30323
            </a>

            <a 
              href="mailto:qevnaro@gmail.com"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-sm font-bold shadow-sm transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#0052FF]" /> qevnaro@gmail.com
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
