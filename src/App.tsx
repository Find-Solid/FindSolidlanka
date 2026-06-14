import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import RequestQuoteSection from './components/RequestQuoteSection';
import { InquirySubmission, QuoteSubmission } from './types';

export default function App() {
  const [currentSection, setCurrentSection] = useState<string>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [preselectedCategory, setPreselectedCategory] = useState<string>('');

  // Submit states for local simulation logger
  const [inquiries, setInquiries] = useState<InquirySubmission[]>([]);
  const [quotes, setQuotes] = useState<QuoteSubmission[]>([]);

  // Load any prior submissions on mount
  useEffect(() => {
    try {
      const storedInquiries = localStorage.getItem('find_solid_inquiries');
      const storedQuotes = localStorage.getItem('find_solid_quotes');
      if (storedInquiries) setInquiries(JSON.parse(storedInquiries));
      if (storedQuotes) setQuotes(JSON.parse(storedQuotes));
    } catch (e) {
      console.error('Failed to load storage values', e);
    }
  }, []);

  // Handle inquiry submits
  const handleInquirySubmit = (data: Omit<InquirySubmission, 'id' | 'timestamp'>) => {
    const newInquiry: InquirySubmission = {
      ...data,
      id: `inq-${Date.now()}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    localStorage.setItem('find_solid_inquiries', JSON.stringify(updated));
  };

  // Handle quote submits
  const handleQuoteSubmit = (data: Omit<QuoteSubmission, 'id' | 'timestamp'>) => {
    const newQuote: QuoteSubmission = {
      ...data,
      id: `quote-${Date.now()}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    const updated = [newQuote, ...quotes];
    setQuotes(updated);
    localStorage.setItem('find_solid_quotes', JSON.stringify(updated));
  };

  const handleSetSection = (section: string) => {
    setCurrentSection(section);
  };

  const renderActiveSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <HomeSection 
            setSection={handleSetSection} 
            setSelectedProduct={(id) => {
              setSelectedProductId(id);
              // Pre-select category name based on active product
              if (id === 'prod-fire-doors') setPreselectedCategory('Fire Rated Doors');
              if (id === 'prod-timber-doors') setPreselectedCategory('Fire Rated Timber Doors');
              if (id === 'prod-ironmongery') setPreselectedCategory('Architectural Ironmongery');
              if (id === 'prod-glass') setPreselectedCategory('Glass Solutions');
            }} 
          />
        );
      case 'about':
        return (
          <AboutSection 
            onSubmitInquiry={handleInquirySubmit} 
          />
        );
      case 'products':
        return (
          <ProductsSection 
            setSection={handleSetSection}
            selectedProductId={selectedProductId}
            setSelectedProductId={setSelectedProductId}
            setPreselectedCategory={(cat) => setPreselectedCategory(cat)}
          />
        );
      case 'projects':
        return <ProjectsSection />;
      case 'certifications':
        return <CertificationsSection />;
      case 'quote':
        return (
          <RequestQuoteSection 
            onSubmitQuote={handleQuoteSubmit} 
          />
        );
      default:
        return (
          <HomeSection 
            setSection={handleSetSection} 
            setSelectedProduct={setSelectedProductId}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#f9faf5] flex flex-col justify-between selection:bg-[#cca23b] selection:text-white" id="app-root-container">
      <div>
        {/* Navigation bar Header */}
        <Header 
          currentSection={currentSection} 
          setSection={handleSetSection} 
        />

        {/* Dynamic transition canvas content */}
        <main id="main-content-fluid">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              id={`section-container-${currentSection}`}
            >
              {renderActiveSection()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Corporate Modern Footer */}
      <Footer setSection={handleSetSection} />
    </div>
  );
}
