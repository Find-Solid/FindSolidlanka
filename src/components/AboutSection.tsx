import { useState, FormEvent } from 'react';
import { Phone, Mail, MessageSquare, MapPin, Clock, Send, Check } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface AboutSectionProps {
  onSubmitInquiry: (data: {
    fullName: string;
    company: string;
    email: string;
    phone: string;
    interest: 'Fire Rated Doors' | 'Ironmongery' | 'Glass Solutions' | 'General Inquiry';
    message: string;
  }) => void;
}

export default function AboutSection({ onSubmitInquiry }: AboutSectionProps) {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState<'Fire Rated Doors' | 'Ironmongery' | 'Glass Solutions' | 'General Inquiry'>('Fire Rated Doors');
  const [message, setMessage] = useState('');
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorText, setErrorText] = useState('');

  const handleInterestSelect = (value: typeof interest) => {
    setInterest(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorText('');

    if (!fullName || !email || !message) {
      setErrorText('Please fill out all required fields (*)');
      return;
    }

    try {
      onSubmitInquiry({
        fullName,
        company,
        email,
        phone,
        interest,
        message
      });

      setIsSubmitted(true);
      
      // Reset form fields
      setFullName('');
      setCompany('');
      setEmail('');
      setPhone('');
      setInterest('Fire Rated Doors');
      setMessage('');

      // Auto clear success banner
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setErrorText('An unexpected issue occurred. Please retry.');
    }
  };

  return (
    <div className="bg-gray-50/65 min-h-screen py-16 sm:py-24 font-sans" id="about-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Header */}
        <div className="max-w-3xl mb-16 space-y-4" id="about-intro-header">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0f1c2c] tracking-tight">
            Let's Build Something Solid
          </h1>
          <div className="h-[3px] w-12 bg-[#cca23b]"></div>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Whether you need premium fire-rated doors, architectural ironmongery, or bespoke glass solutions, our team of technical experts and estimators is ready to assist with your next major project.
          </p>
        </div>

        {/* Info & Form Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12" id="about-columns-grid">
          
          {/* Left Column - Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6" id="about-info-col">
            
            {/* Direct Connect Column Card */}
            <div className="bg-white rounded-sm border border-gray-100 p-6 sm:p-8 shadow-sm space-y-6" id="direct-connect-card">
              <h2 className="text-[#0f1c2c] text-lg font-extrabold pb-3 border-b border-gray-100">
                Direct Connect
              </h2>
              
              {/* Call Details */}
              <div className="flex gap-4">
                <div className="p-3 bg-gray-50 rounded-sm text-[#0f1c2c] self-start">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase block mb-1">
                    Call Us
                  </span>
                  {CONTACT_INFO.phones.map((p, i) => (
                    <a key={i} href={`tel:${p}`} className="text-[#0f1c2c] font-black text-sm sm:text-base hover:text-[#cca23b] block">
                      {p}
                    </a>
                  ))}
                </div>
              </div>

              {/* Whatsapp */}
              <div className="flex gap-4">
                <div className="p-3 bg-green-50 rounded-sm text-green-600 self-start">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase block mb-1">
                    WhatsApp
                  </span>
                  <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\s+/g, '')}`} target="_blank" rel="noreferrer" className="text-green-700 font-bold text-sm tracking-tight hover:underline">
                    {CONTACT_INFO.whatsapp}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="p-3 bg-blue-50 rounded-sm text-blue-600 self-start">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase block mb-1">
                    Email
                  </span>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#47607e] font-bold text-sm hover:underline block">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Head Office Address Card */}
            <div className="bg-[#0f1c2c] text-white rounded-sm p-6 sm:p-8 shadow-md space-y-6" id="head-office-card">
              <h2 className="text-white text-lg font-extrabold pb-3 border-b border-white/10">
                Head Office
              </h2>
              
              {/* Physical Location */}
              <div className="flex gap-4">
                <div className="p-2.5 bg-white/10 rounded-sm text-[#cca23b] self-start mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-white font-extrabold text-sm block">
                    Find Solid Lanka (Pvt) Ltd
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed max-w-sm">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              {/* Opening Hours Info */}
              <div className="flex gap-4">
                <div className="p-2.5 bg-white/10 rounded-sm text-[#cca23b] self-start mt-0.5">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase block">
                    Business Hours
                  </span>
                  <div className="text-xs text-gray-300 space-y-0.5 pt-0.5">
                    <p>{CONTACT_INFO.businessHours.weekdays}</p>
                    <p>{CONTACT_INFO.businessHours.saturday}</p>
                    <p className="text-red-400 font-medium">{CONTACT_INFO.businessHours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit Us Image Card */}
            <div className="relative group overflow-hidden rounded-sm border border-gray-100 h-44 bg-gray-200" id="office-visual-card">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" 
                alt="Find Solid Lanka Office interior" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 flex flex-col justify-end p-6">
                <h3 className="text-white font-extrabold text-lg">Visit Us</h3>
                <p className="text-gray-300 text-xs">Drop by for material consultations and product viewings.</p>
                <button
                  type="button"
                  onClick={() => alert(`Directions loaded for Moratuwa Office: ${CONTACT_INFO.address}`)}
                  className="mt-3 text-[#cca23b] font-bold text-xs hover:underline text-left"
                >
                  Get Directions &rarr;
                </button>
              </div>
            </div>

          </div>

          {/* Right Column - Send an Inquiry Form */}
          <div className="lg:col-span-7" id="about-form-col">
            <div className="bg-white rounded-sm border border-gray-100 p-6 sm:p-10 shadow-sm" id="inquiry-form-card">
              <h2 className="text-[#0f1c2c] text-xl font-extrabold" id="inquiry-form-title">
                Send an Inquiry
              </h2>
              <p className="text-gray-400 text-xs mt-1 mb-8">
                Provide details about your project requirements, and our specialists will respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6" id="inquiry-form">
                
                {/* Inputs Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Full Name *
                    </label>
                    <input 
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Randunu Perera"
                      className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#cca23b] focus:bg-white text-gray-800 transition"
                      id="inquiry-name-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Company / Organization
                    </label>
                    <input 
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Prestige Builders"
                      className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#cca23b] focus:bg-white text-gray-800 transition"
                      id="inquiry-company-input"
                    />
                  </div>
                </div>

                {/* Inputs Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="randunu@builders.lk"
                      className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#cca23b] focus:bg-white text-gray-800 transition"
                      id="inquiry-email-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+94 7X XXX XXXX"
                      className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#cca23b] focus:bg-white text-gray-800 transition"
                      id="inquiry-phone-input"
                    />
                  </div>
                </div>

                {/* Area of interest Selector Tabs (Exactly as Screenshot) */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Primary Area of Interest
                  </label>
                  <div className="flex flex-wrap gap-2" id="interest-selector">
                    {(['Fire Rated Doors', 'Ironmongery', 'Glass Solutions', 'General Inquiry'] as const).map((opt) => {
                      const isActive = interest === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleInterestSelect(opt)}
                          className={`px-4 py-2 text-xs font-semibold rounded-full border transition active:scale-95 ${
                            isActive
                              ? 'bg-[#0f1c2c] text-white border-[#0f1c2c] shadow-sm'
                              : 'bg-white text-gray-500 border-gray-200 hover:text-gray-800 hover:border-gray-300'
                          }`}
                          id={`interest-tag-${opt.replace(/\s+/g, '-').toLowerCase()}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message Details */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Project Details / Message *
                  </label>
                  <textarea 
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details about standard requirements, door sizes, or ironmongery schedule outlines..."
                    className="w-full bg-gray-50 border border-gray-200 p-4 text-sm rounded-sm focus:outline-none focus:border-[#cca23b] focus:bg-white text-gray-800 transition"
                    id="inquiry-message-input"
                  />
                </div>

                {/* Submitting Notification banners */}
                {isSubmitted && (
                  <div className="bg-emerald-50 text-emerald-800 text-xs p-4 rounded-sm border border-emerald-100 flex items-center gap-2" id="inquiry-success-banner">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Your inquiry was logged successfully! Our estimators are compiling custom specifications for you. Check the floating CRM icon at the top right to verify!</span>
                  </div>
                )}

                {errorText && (
                  <div className="bg-red-50 text-red-800 text-xs p-4 rounded-sm border border-red-100 text-left" id="inquiry-error-banner">
                    {errorText}
                  </div>
                )}

                {/* Action CTA Submission */}
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-[10px] text-gray-400">
                    Your data is handled securely and in complete regulatory confidence.
                  </span>
                  <button
                    type="submit"
                    className="bg-[#0f1c2c] hover:bg-black text-white px-6 py-3.5 text-xs font-bold tracking-wider uppercase rounded-sm flex items-center gap-2 transition active:scale-95 cursor-pointer shadow-md"
                    id="inquiry-submit-btn"
                  >
                    Send Message
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
