import { BadgeAlert, ShieldCheck, Flame, Layers, Hammer, LayoutGrid, Check, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data';

interface ProductsSectionProps {
  setSection: (section: string) => void;
  selectedProductId: string | null;
  setSelectedProductId: (id: string | null) => void;
  setPreselectedCategory: (category: string) => void;
}

export default function ProductsSection({ 
  setSection, 
  selectedProductId, 
  setSelectedProductId,
  setPreselectedCategory 
}: ProductsSectionProps) {

  const getIcon = (category: string) => {
    switch (category) {
      case 'doors':
        return <Flame className="h-6 w-6 text-[#cca23b]" />;
      case 'timber':
        return <Layers className="h-6 w-6 text-[#cca23b]" />;
      case 'ironmongery':
        return <Hammer className="h-6 w-6 text-[#cca23b]" />;
      case 'glass':
        return <LayoutGrid className="h-6 w-6 text-[#cca23b]" />;
      default:
        return <ShieldCheck className="h-6 w-6 text-[#cca23b]" />;
    }
  };

  const handleRequestQuote = (productName: string) => {
    setPreselectedCategory(productName);
    setSection('quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeProduct = selectedProductId 
    ? PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0]
    : PRODUCTS[0];

  return (
    <div className="bg-white min-h-screen py-16 sm:py-24 font-sans text-left" id="products-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 space-y-4" id="products-header">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0f1c2c] tracking-tight">
            Our Premium Solutions
          </h1>
          <div className="h-[3px] w-12 bg-[#cca23b]"></div>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            All of our solid joinery, composite structures, and structural hardware are fabricated under rigorous BS EN certified testing. Select an architecture product below to explore extensive performance specs.
          </p>
        </div>

        {/* Outer Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12" id="products-split-catalog">
          
          {/* Left Menu Selection Column */}
          <div className="lg:col-span-4 space-y-3" id="catalog-selector-sidebar">
            <span className="text-[10px] font-black tracking-widest text-[#cca23b] uppercase block mb-4">
              Select Product Line
            </span>
            {PRODUCTS.map((prod) => {
              const worksAsActive = activeProduct.id === prod.id;
              return (
                <button
                  key={prod.id}
                  onClick={() => setSelectedProductId(prod.id)}
                  className={`w-full text-left p-5 border rounded-sm flex items-center justify-between transition group cursor-pointer ${
                    worksAsActive
                      ? 'border-[#0f1c2c] bg-gray-50/50 shadow-xs'
                      : 'border-gray-100 bg-white hover:border-gray-200'
                  }`}
                  id={`catalog-sidebar-btn-${prod.id}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-gray-50 rounded-sm">
                      {getIcon(prod.category)}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[#0f1c2c] text-sm group-hover:text-[#cca23b] transition-colors">
                        {prod.name}
                      </h3>
                      <span className="text-[9px] text-gray-400 font-bold tracking-wider uppercase block mt-0.5">
                        {prod.category} solution
                      </span>
                    </div>
                  </div>
                  <ArrowRight className={`h-4 w-4 transition duration-300 ${
                    worksAsActive ? 'text-[#cca23b] translate-x-1' : 'text-gray-300'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Product Specifications Details Column */}
          <div className="lg:col-span-8 bg-gray-50/50 border border-gray-100 p-6 sm:p-10 rounded-sm" id="catalog-details-panel">
            <div className="space-y-8" id="product-details-container">
              
              {/* Image & Title Intro */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-5 h-56 rounded-sm overflow-hidden bg-gray-200 shadow-3xs">
                  <img 
                    src={activeProduct.imageUrl} 
                    alt={activeProduct.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#0f1c2c] text-white text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-sm">
                      BS EN Certified
                    </span>
                    <span className="text-gray-400 text-xs font-semibold">
                      Warringtonfire Accredited
                    </span>
                  </div>

                  <h2 className="text-[#0f1c2c] text-2xl sm:text-3xl font-black tracking-tight leading-none">
                    {activeProduct.name}
                  </h2>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {activeProduct.description}
                  </p>
                </div>
              </div>

              {/* Specs & Features Splits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-200/60" id="product-sub-sections">
                
                {/* Standard Features Column */}
                <div className="space-y-4">
                  <h3 className="text-[#0f1c2c] text-xs font-black tracking-widest uppercase border-b border-gray-200/60 pb-2">
                    Engineered Features
                  </h3>
                  <ul className="space-y-3" id="product-features-list">
                    {activeProduct.features.map((feat, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-xs text-gray-600">
                        <span className="p-0.5 bg-emerald-50 rounded-full text-emerald-600 shrink-0 mt-0.5">
                          <Check className="h-3 w-3" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Specifications Column Table */}
                <div className="space-y-4">
                  <h3 className="text-[#0f1c2c] text-xs font-black tracking-widest uppercase border-b border-gray-200/60 pb-2">
                    Performance Metadata
                  </h3>
                  <div className="border border-gray-200/50 rounded-sm overflow-hidden text-xs bg-white" id="product-specs-table">
                    {Object.entries(activeProduct.specifications).map(([key, value], idx) => (
                      <div 
                        key={key} 
                        className={`grid grid-cols-5 p-3.5 gap-2 ${
                          idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                        } border-b border-gray-100 last:border-b-0`}
                      >
                        <span className="col-span-2 text-gray-400 font-bold uppercase tracking-wider text-[9px]">
                          {key}
                        </span>
                        <span className="col-span-3 text-gray-700 font-semibold text-right">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Button prefils Quote request */}
              <div className="pt-8 border-t border-gray-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs text-gray-400">
                  Select this and request formal estimation aligned to custom drawings or BOQs.
                </p>
                <button
                  type="button"
                  onClick={() => handleRequestQuote(activeProduct.name)}
                  className="bg-[#cca23b] hover:bg-[#b0882e] text-white px-6 py-3.5 text-xs font-black tracking-widest uppercase rounded-sm flex items-center gap-2 transition active:scale-95 shadow-xs cursor-pointer"
                  id="quote-product-link-btn"
                >
                  Configure &amp; Quote for this Line
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
