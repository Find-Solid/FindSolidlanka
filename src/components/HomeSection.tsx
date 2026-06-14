import { ArrowRight, Flame, ShieldCheck, Hammer, Layers, LayoutGrid, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../data';

interface HomeSectionProps {
  setSection: (section: string) => void;
  setSelectedProduct?: (productId: string) => void;
}

export default function HomeSection({ setSection, setSelectedProduct }: HomeSectionProps) {
  // Map product entries to icons
  const getIcon = (id: string) => {
    switch (id) {
      case 'prod-fire-doors':
        return <Flame className="h-6 w-6 text-[#cca23b]" />;
      case 'prod-timber-doors':
        return <Layers className="h-6 w-6 text-[#cca23b]" />;
      case 'prod-ironmongery':
        return <Hammer className="h-6 w-6 text-[#cca23b]" />;
      case 'prod-glass':
        return <LayoutGrid className="h-6 w-6 text-[#cca23b]" />;
      default:
        return <ShieldCheck className="h-6 w-6 text-[#cca23b]" />;
    }
  };

  const handleProductDetailsClick = (id: string) => {
    if (setSelectedProduct) {
      setSelectedProduct(id);
    }
    setSection('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="font-sans" id="home-view">
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center bg-[#0f1c2c] overflow-hidden" 
        id="hero-banner"
      >
        {/* Sky Background Image with Overlay Tints */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" 
            alt="Modern architectural glass facade" 
            className="w-full h-full object-cover object-center opacity-45 mix-blend-overlay scale-105 transform hover:scale-100 transition-transform duration-10000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1c2c]/95 via-[#0f1c2c]/85 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0f1c2c] to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-6"
            id="hero-contents"
          >
            {/* Tagline Overline */}
            <div className="flex items-center gap-2 text-[#cca23b] font-bold text-xs tracking-widest uppercase" id="hero-overline">
              <span className="h-[2px] w-8 bg-[#cca23b]"></span>
              Find Solid Lanka
            </div>

            {/* Main Title Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight" id="hero-headline">
              Engineering Safety.<br />
              Delivering Quality.<br />
              <span className="text-[#cca23b]">Building Trust.</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl" id="hero-subtitle">
              Premium Fire Rated Doors, Timber Doors, Ironmongery, and Architectural Solutions for Sri Lanka's Leading Construction and Hospitality Projects.
            </p>

            {/* CTA Actions */}
            <div className="flex flex-wrap gap-4 pt-4" id="hero-actions">
              <button 
                onClick={() => setSection('products')}
                className="bg-[#cca23b] hover:bg-[#b0882e] text-black font-bold uppercase tracking-wider text-xs px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl rounded-sm active:scale-95 flex items-center gap-2"
                id="hero-cta-explore"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </button>
              <button 
                onClick={() => setSection('quote')}
                className="bg-transparent hover:bg-white/10 text-white font-bold uppercase tracking-wider text-xs px-8 py-4 transition-all duration-300 border border-white/50 hover:border-white rounded-sm active:scale-95"
                id="hero-cta-quote"
              >
                Request a Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Value Strip */}
      <section className="bg-white border-y border-gray-100 shadow-sm relative z-20" id="stats-strip">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {/* Stat Item 1 */}
            <div className="space-y-1 relative" id="stat-years">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1c2c] tracking-tight flex items-center justify-center gap-1">
                20
                <span className="text-[#cca23b] text-2xl sm:text-3xl">+</span>
              </div>
              <p className="text-gray-400 text-[10px] sm:text-xs font-bold tracking-wider uppercase">
                Years Experience
              </p>
            </div>

            {/* Stat Item 2 */}
            <div className="space-y-1 relative" id="stat-projects">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1c2c] tracking-tight flex items-center justify-center gap-1">
                500
                <span className="text-[#cca23b] text-2xl sm:text-3xl">+</span>
              </div>
              <p className="text-gray-400 text-[10px] sm:text-xs font-bold tracking-wider uppercase">
                Projects Completed
              </p>
            </div>

            {/* Stat Item 3 */}
            <div className="space-y-1 relative" id="stat-products">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1c2c] tracking-tight flex items-center justify-center gap-1">
                10k
                <span className="text-[#cca23b] text-2xl sm:text-3xl">+</span>
              </div>
              <p className="text-gray-400 text-[10px] sm:text-xs font-bold tracking-wider uppercase">
                Products Supplied
              </p>
            </div>

            {/* Stat Item 4 */}
            <div className="space-y-1 relative" id="stat-satisfaction">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1c2c] tracking-tight flex items-center justify-center gap-1">
                99
                <span className="text-[#cca23b] text-2xl sm:text-3xl">%</span>
              </div>
              <p className="text-gray-400 text-[10px] sm:text-xs font-bold tracking-wider uppercase">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Architectural Grid */}
      <section className="bg-gray-50 py-20 sm:py-28" id="solutions-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-16 space-y-4" id="solutions-heading">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1c2c] tracking-tight">
              Our Premium Solutions
            </h2>
            <div className="h-[3px] w-12 bg-[#cca23b]"></div>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Engineered to meet rigorous international standards, our product range ensures robust fire safety, durable hardware operations, and uncompromised aesthetic beauty for Sri Lanka's tier-1 developments.
            </p>
          </div>

          {/* Solutions Cards Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
            id="solutions-grid"
          >
            {PRODUCTS.map((prod) => (
              <motion.div
                key={prod.id}
                variants={itemVariants}
                className="bg-white rounded-sm border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row group"
                id={`solution-card-${prod.id}`}
              >
                {/* Product/Solution Thumb */}
                <div className="w-full sm:w-2/5 h-48 sm:h-auto min-h-[12rem] relative overflow-hidden bg-gray-100" id={`solution-thumb-${prod.id}`}>
                  <img 
                    src={prod.imageUrl} 
                    alt={prod.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Product/Solution Info Details */}
                <div className="p-6 sm:p-8 w-full sm:w-3/5 flex flex-col justify-between" id={`solution-body-${prod.id}`}>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-50 rounded-sm">
                        {getIcon(prod.id)}
                      </div>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-[#cca23b]">
                        certified safety
                      </span>
                    </div>

                    <h3 className="text-[#0f1c2c] text-lg font-extrabold group-hover:text-[#cca23b] transition-colors">
                      {prod.name}
                    </h3>

                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {prod.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-50 mt-6 flex justify-between items-center">
                    <button
                      onClick={() => handleProductDetailsClick(prod.id)}
                      className="text-[#47607e] group-hover:text-[#cca23b] font-bold text-xs tracking-wider uppercase flex items-center gap-1.5 transition-colors"
                      id={`solution-details-button-${prod.id}`}
                    >
                      View Specifications
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Built to Last Quality Overlay Banner */}
      <section className="bg-[#0f1c2c] text-white py-16 sm:py-24 relative overflow-hidden" id="about-teaser-banner">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
            alt="Corporate architecture design" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[#cca23b] font-bold text-xs tracking-wider uppercase">
            trusted in construction
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Need Bespoke Fire-Safe Partitioning or Security Joinery?
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Our architectural planning teams collaborate closely with developers, structural engineers, and quantity surveyors to draft exact BOQ scopes compliant with BS/EN standard fire certifications.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => setSection('about')}
              className="bg-transparent text-white border border-white/30 hover:bg-white/10 px-6 py-3 text-xs font-bold tracking-wider uppercase rounded-sm transition-all"
              id="teaser-contact-btn"
            >
              Contact Head Office
            </button>
            <button
              onClick={() => setSection('quote')}
              className="bg-[#cca23b] text-black hover:bg-[#b0882e] px-6 py-3 text-xs font-bold tracking-wider uppercase rounded-sm transition-all"
              id="teaser-quote-btn"
            >
              Request Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
