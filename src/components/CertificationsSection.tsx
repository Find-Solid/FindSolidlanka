import { ShieldAlert, Award, FileText, Download, CheckCircle, ExternalLink, HelpCircle } from 'lucide-react';
import { CERTIFICATIONS, PARTNERSHIPS, TECHNICAL_DATA_SHEETS } from '../data';

export default function CertificationsSection() {
  const getIcon = (type: 'shield' | 'award' | 'clipboard') => {
    switch (type) {
      case 'shield':
        return <ShieldAlert className="h-8 w-8 text-[#cca23b]" />;
      case 'award':
        return <Award className="h-6 w-6 text-[#cca23b]" />;
      default:
        return <CheckCircle className="h-6 w-6 text-[#cca23b]" />;
    }
  };

  const handleDownload = (filename: string) => {
    // Elegant download simulation popup
    alert(`Initiating download: "${filename}.pdf"\nPreparing requested Technical Data Sheet compliant with BS EN 1634-1.`);
  };

  const primaryCert = CERTIFICATIONS.find(c => c.isPrimary);
  const secondaryCerts = CERTIFICATIONS.filter(c => !c.isPrimary);

  return (
    <div className="bg-white min-h-screen py-16 sm:py-24 font-sans" id="certifications-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header */}
        <div className="max-w-3xl mb-16 space-y-4" id="certs-header">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0f1c2c] tracking-tight">
            Global Standards,<br />Local Assurance.
          </h1>
          <div className="h-[3px] w-12 bg-[#cca23b]"></div>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Our commitment to structural integrity, acoustics, and fire safety is validated by internationally recognized testing authorities including Warringtonfire UK. Explore our comprehensive portfolio of compliance certificates and manufacturer authorizations.
          </p>
        </div>

        {/* Accreditations & Compliance Layout */}
        <div className="mb-20 space-y-8" id="accreditations-sub-view">
          <div className="flex items-center gap-2" id="accreditations-header">
            <span className="p-1 bg-amber-50 rounded-sm text-[#cca23b]">
              <ShieldAlert className="h-4 w-4" />
            </span>
            <h2 className="text-[#0f1c2c] text-sm font-bold tracking-wider uppercase">
              Accreditations & Compliance
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="certs-grid">
            
            {/* Primary Certification Card (Left, larger) */}
            {primaryCert && (
              <div 
                className="lg:col-span-7 bg-gray-50/50 rounded-sm border border-gray-100 p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#cca23b] transition duration-300"
                id={`cert-card-${primaryCert.id}`}
              >
                {/* Visual badge top right */}
                <span className="absolute top-4 right-4 bg-[#0f1c2c] text-white text-[9px] font-black tracking-widest uppercase px-3 py-1.5 rounded-sm">
                  Primary Certification
                </span>

                <div className="space-y-6">
                  <div className="p-3 bg-white rounded-sm border border-gray-100 w-16 h-16 flex items-center justify-center shadow-sm">
                    {getIcon(primaryCert.iconType)}
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f1c2c]">
                      {primaryCert.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xl">
                      {primaryCert.description}
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-100/80 mt-8 flex flex-wrap justify-between items-center gap-4">
                  <span className="text-xs text-gray-400 font-bold tracking-wider uppercase">
                    Testing Authority: <span className="text-gray-600 block">{primaryCert.authority}</span>
                  </span>
                  <button
                    onClick={() => handleDownload(primaryCert.title)}
                    className="text-[#cca23b] hover:text-[#b0882e] font-bold text-xs tracking-wider uppercase flex items-center gap-1.5 transition"
                    id="primary-cert-download"
                  >
                    Download Certificate
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Secondary Certifications List (Right, stacked) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6" id="secondary-certs-col">
              {secondaryCerts.map((cert) => (
                <div 
                  key={cert.id}
                  className="bg-white rounded-sm border border-gray-100 p-6 flex gap-6 hover:shadow-xs hover:border-[#cca23b] transition duration-300"
                  id={`cert-card-${cert.id}`}
                >
                  <div className="p-2 bg-gray-50 rounded-sm border border-gray-50 self-start">
                    {getIcon(cert.iconType)}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-[#0f1c2c] font-extrabold text-base">
                      {cert.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {cert.description}
                    </p>
                    <div className="pt-3 flex justify-between items-center">
                      <span className="text-[10px] text-gray-400 font-semibold uppercase">
                        Issued by: {cert.authority}
                      </span>
                      <button 
                        onClick={() => handleDownload(cert.title)}
                        className="text-gray-400 hover:text-[#cca23b] p-1 transition"
                        title="Download"
                      >
                        <Download className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Authorized Partnerships list block (Screenshot 3 Middle Row) */}
        <div className="bg-gray-50/50 rounded-sm py-12 px-8 mb-20 space-y-8" id="partnerships-block">
          <div className="flex items-center gap-2 border-l-2 border-[#cca23b] pl-3">
            <h2 className="text-[#0f1c2c] text-sm font-bold tracking-wider uppercase">
              Authorized Partnerships
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center" id="partners-grid bg-white">
            {PARTNERSHIPS.map((partner) => (
              <div 
                key={partner.name}
                className="bg-white rounded-sm border border-gray-100 p-6 flex flex-col justify-center items-center shadow-xs hover:border-gray-200 transition"
                id={`partner-box-${partner.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <span className="text-[#0f1c2c] text-sm sm:text-base font-black tracking-wider block">
                  {partner.name}
                </span>
                <span className="text-gray-400 text-[9px] font-bold tracking-widest uppercase mt-1">
                  {partner.segment}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Data Sheets list grid (Screenshot 3 Bottom Section) */}
        <div className="space-y-6" id="datasheets-block">
          <div className="flex items-center gap-2" id="datasheets-header-row">
            <span className="p-1 bg-amber-50 rounded-sm text-[#cca23b]">
              <FileText className="h-4 w-4" />
            </span>
            <h2 className="text-[#0f1c2c] text-sm font-bold tracking-wider uppercase">
              Technical Data Sheets
            </h2>
          </div>

          {/* Grid rows conforming to Screenshot 3 layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="datasheets-grid">
            {TECHNICAL_DATA_SHEETS.map((sheet, index) => (
              <div 
                key={index}
                className="bg-white rounded-sm border border-gray-100 p-5 flex items-center justify-between hover:border-[#cca23b] transition duration-300 shadow-xs group"
                id={`datasheet-card-${index}`}
              >
                <div className="flex items-center gap-4">
                  {/* PDF design element */}
                  <div className="p-3 bg-red-50 text-red-600 rounded-sm font-black text-xs tracking-tighter shadow-3xs group-hover:bg-red-100 transition">
                    PDF
                  </div>
                  <div>
                    <h3 className="text-[#0f1c2c] font-bold text-sm leading-tight text-left">
                      {sheet.title}
                    </h3>
                    <div className="flex gap-2 text-[10px] text-gray-400 pt-1">
                      <span>{sheet.size}</span>
                      <span>&bull;</span>
                      <span>Updated {sheet.updated}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => handleDownload(sheet.title)}
                  className="bg-gray-50 hover:bg-[#cca23b] text-[#0f1c2c] hover:text-white p-2.5 rounded-sm transition self-center"
                  title="Download File"
                  id={`datasheet-download-btn-${index}`}
                >
                  <Download className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
