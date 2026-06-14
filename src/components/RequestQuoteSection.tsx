import { useState, useRef, ChangeEvent, DragEvent, FormEvent } from 'react';
import { ShieldCheck, HelpCircle, Phone, Mail, MapPin, Upload, FileText, Check, Trash2 } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface RequestQuoteSectionProps {
  onSubmitQuote: (data: {
    companyName: string;
    contactPerson: string;
    email: string;
    phone: string;
    projectName: string;
    projectLocation: string;
    productCategory: string;
    quantity: string;
    deliveryDate: string;
    fileName?: string;
    fileSize?: string;
    additionalComments?: string;
  }) => void;
}

export default function RequestQuoteSection({ onSubmitQuote }: RequestQuoteSectionProps) {
  // Form values
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectName, setProjectName] = useState('');
  const [projectLocation, setProjectLocation] = useState('');
  const [productCategory, setProductCategory] = useState('Fire Rated Doors');
  const [quantity, setQuantity] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [additionalComments, setAdditionalComments] = useState('');

  // File states
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Status values
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorText, setErrorText] = useState('');

  // Dropdown options
  const categoryOptions = [
    'Fire Rated Doors',
    'Fire Rated Timber Doors',
    'Architectural Ironmongery',
    'Glass Solutions',
    'Complete Architectural Scope Integration'
  ];

  // Handle manual file browse click
  const triggerFileSearch = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Process selected file details
  const processMetadata = (file: File) => {
    setFileName(file.name);
    // Convert bytes to readable MB/KB
    const readableSize = file.size > 1024 * 1024 
      ? `${(file.size / (1024 * 1024)).toFixed(1)} MB` 
      : `${(file.size / 1024).toFixed(0)} KB`;
    setFileSize(readableSize);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processMetadata(e.target.files[0]);
    }
  };

  // Drag-and-drop actions
  const onDragOver = (e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const onDragLeave = () => {
    setIsDragOver(false);
  };

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processMetadata(e.dataTransfer.files[0]);
    }
  };

  const clearFile = () => {
    setFileName('');
    setFileSize('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorText('');

    if (!contactPerson || !email || !projectName || !projectLocation) {
      setErrorText('Please fill out all required client and project specification fields.');
      return;
    }

    try {
      onSubmitQuote({
        companyName,
        contactPerson,
        email,
        phone,
        projectName,
        projectLocation,
        productCategory,
        quantity,
        deliveryDate,
        fileName: fileName || undefined,
        fileSize: fileSize || undefined,
        additionalComments
      });

      setIsSubmitted(true);

      // Reset form controls
      setCompanyName('');
      setContactPerson('');
      setEmail('');
      setPhone('');
      setProjectName('');
      setProjectLocation('');
      setProductCategory('Fire Rated Doors');
      setQuantity('');
      setDeliveryDate('');
      setAdditionalComments('');
      setFileName('');
      setFileSize('');

      window.scrollTo({ top: 0, behavior: 'smooth' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 7000);
    } catch (err) {
      setErrorText('Submitting Quote Request failed. Please check inputs and retry.');
    }
  };

  return (
    <div className="bg-gray-50/65 min-h-screen py-16 sm:py-24 font-sans text-left" id="quote-request-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Banner Header */}
        <div className="max-w-3xl mb-16 space-y-4" id="quote-intro">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0f1c2c] tracking-tight">
            Request a Quotation
          </h1>
          <div className="h-[3px] w-12 bg-[#cca23b]"></div>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Provide us with your project details, drawings, or Bill of Quantities (BOQ), and our architectural solutions team will prepare a comprehensive proposal tailored to your specifications.
          </p>
        </div>

        {/* Submitting Notification banners */}
        {isSubmitted && (
          <div className="bg-emerald-50 text-emerald-800 text-sm p-5 rounded-sm border border-emerald-100 flex items-start gap-3 mb-8 animate-fadeIn" id="quote-success-banner">
            <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-extrabold">Quote Request Submitted Successfully!</p>
              <p className="text-xs pt-1">Our technical estimators have received your inquiry. A formal proposal matching your BOQ guidelines was added to the simulation inbox. Click the notification alert badge at the top right to verify your entries!</p>
            </div>
          </div>
        )}

        {errorText && (
          <div className="bg-red-50 text-red-800 text-xs p-4 rounded-sm border border-red-100 mb-8" id="quote-error-banner">
            {errorText}
          </div>
        )}

        {/* Form and Sidebar split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12" id="quote-split-grid">
          
          {/* Left Column: Form (Exactly matches Screenshot 5 layout) */}
          <div className="lg:col-span-8 bg-white border border-gray-100 p-6 sm:p-10 rounded-sm shadow-xs" id="quote-form-col">
            <form onSubmit={handleSubmit} className="space-y-8" id="quote-form">
              
              {/* SECTION: Client Information */}
              <div className="space-y-6" id="client-info-subform">
                <h2 className="text-[#0f1c2c] text-lg font-extrabold pb-3 border-b border-gray-100">
                  Client Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Company Name
                    </label>
                    <input 
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Prestige Construction Ltd"
                      className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#cca23b] focus:bg-white text-gray-800 transition"
                      id="quote-company-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Contact Person *
                    </label>
                    <input 
                      type="text"
                      required
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      placeholder="e.g. Randunu de Silva"
                      className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#cca23b] focus:bg-white text-gray-800 transition"
                      id="quote-person-input"
                    />
                  </div>
                </div>

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
                      placeholder="randunu@prestige.lk"
                      className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#cca23b] focus:bg-white text-gray-800 transition"
                      id="quote-email-input"
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
                      placeholder="+94 77 XXX XXXX"
                      className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#cca23b] focus:bg-white text-gray-800 transition"
                      id="quote-phone-input"
                    />
                  </div>
                </div>
              </div>


              {/* SECTION: Project Specifications */}
              <div className="space-y-6" id="project-specs-subform">
                <h2 className="text-[#0f1c2c] text-lg font-extrabold pb-3 border-b border-gray-100">
                  Project Specifications
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Project Name *
                    </label>
                    <input 
                      type="text"
                      required
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      placeholder="e.g. Majestic Galle Resort Hotel"
                      className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#cca23b] focus:bg-white text-gray-800 transition"
                      id="quote-projname-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Project Location (City/District) *
                    </label>
                    <input 
                      type="text"
                      required
                      value={projectLocation}
                      onChange={(e) => setProjectLocation(e.target.value)}
                      placeholder="e.g. Galle, Southern District"
                      className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#cca23b] focus:bg-white text-gray-800 transition"
                      id="quote-location-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#cca23b] mb-2">
                      Product Category *
                    </label>
                    <select
                      value={productCategory}
                      onChange={(e) => setProductCategory(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#cca23b] focus:bg-white text-gray-800 transition appearance-none cursor-pointer"
                      id="quote-category-select"
                    >
                      {categoryOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Estimated Quantity (Doors/Assemblies)
                    </label>
                    <input 
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="e.g. 150"
                      min="1"
                      className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#cca23b] focus:bg-white text-gray-800 transition"
                      id="quote-quantity-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-[#cca23b] font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Expected Delivery Date
                  </label>
                  <input 
                    type="date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-[#cca23b] focus:bg-white text-gray-500 transition cursor-pointer"
                    id="quote-date-input"
                  />
                </div>


                {/* Drag and Drop Upload Visual Box */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Upload Drawings/BOQ (PDF, DWG, DOCX)
                  </label>

                  <div 
                    onDragOver={onDragOver}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                    className={`border-2 border-dashed rounded-sm p-8 text-center transition cursor-pointer flex flex-col items-center justify-center ${
                      isDragOver 
                        ? 'border-[#cca23b] bg-amber-50/20' 
                        : 'border-gray-200 bg-gray-50/50 hover:bg-gray-50 hover:border-gray-300'
                    }`}
                    onClick={triggerFileSearch}
                    id="quote-upload-zone"
                  >
                    <input 
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.dwg,.docx"
                      id="quote-file-input"
                    />

                    {fileName ? (
                      <div className="space-y-3 flex flex-col items-center" id="file-loaded-view">
                        <div className="p-3 bg-amber-50 text-[#cca23b] rounded-full">
                          <FileText className="h-8 w-8" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-800 text-sm">{fileName}</p>
                          <p className="text-gray-400 text-xs">{fileSize}</p>
                        </div>
                        <button 
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            clearFile();
                          }}
                          className="flex items-center gap-1.5 text-red-600 hover:text-red-800 text-xs font-bold uppercase tracking-wider"
                          id="clear-file-btn"
                        >
                          <Trash2 className="h-3.5 h-3.5" />
                          Remove File
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-2" id="file-uploader-cta">
                        <div className="flex justify-center text-gray-400">
                          <Upload className="h-8 w-8" />
                        </div>
                        <p className="text-sm text-gray-600 font-medium">
                          Drag and drop files here, or <span className="text-[#cca23b] hover:underline font-bold">browse</span>
                        </p>
                        <p className="text-[10px] text-gray-400">
                          Supports certified document layouts, maximum size 15MB.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Additional Comments */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Additional Requirements or Comments
                  </label>
                  <textarea 
                    rows={4}
                    value={additionalComments}
                    onChange={(e) => setAdditionalComments(e.target.value)}
                    placeholder="Describe specific heights, lock schedules, fire integrity criteria, or structural finishes needed..."
                    className="w-full bg-gray-50 border border-gray-200 p-4 text-sm rounded-sm focus:outline-none focus:border-[#cca23b] focus:bg-white text-gray-800 transition"
                    id="quote-comments-input"
                  />
                </div>

              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-gray-100 flex justify-end">
                <button
                  type="submit"
                  className="bg-[#cca23b] hover:bg-[#b0882e] text-black font-extrabold uppercase tracking-wider text-xs px-10 py-4 shadow-md hover:shadow-lg transition active:scale-95 flex items-center gap-2 rounded-sm cursor-pointer"
                  id="quote-submit-btn"
                >
                  Submit Request &rarr;
                </button>
              </div>

            </form>
          </div>

          {/* Right Column: Sidebar (Screenshot 5 sidebar widgets) */}
          <div className="lg:col-span-4 space-y-8" id="quote-sidebar">
            
            {/* WIDGET: Why Choose Us */}
            <div className="bg-white border border-gray-100 rounded-sm p-6 sm:p-8 shadow-xs space-y-6" id="why-choose-us-widget">
              <h3 className="text-[#0f1c2c] text-sm font-black tracking-wider uppercase flex items-center gap-1.5 border-b border-gray-100 pb-3">
                <ShieldCheck className="h-4 w-4 text-[#cca23b]" />
                Why Choose Us
              </h3>

              <div className="space-y-5" id="whychooseus-items">
                {/* Reason 1 */}
                <div className="space-y-1">
                  <h4 className="text-gray-800 font-bold text-xs sm:text-sm">
                    International Standards
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Products certified strictly under BS EN standards for fire resistance integrity and general safety compliance.
                  </p>
                </div>

                {/* Reason 2 */}
                <div className="space-y-1">
                  <h4 className="text-gray-800 font-bold text-xs sm:text-sm">
                    Expert Consultation
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Access our dedicated team of in-house estimators and consultants to coordinate correct project scheduling dimensions.
                  </p>
                </div>

                {/* Reason 3 */}
                <div className="space-y-1">
                  <h4 className="text-gray-800 font-bold text-xs sm:text-sm">
                    Precision Manufacturing
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    State-of-the-art facilities ensuring exact dimensional tolerances for all timber and framing components.
                  </p>
                </div>
              </div>
            </div>

            {/* WIDGET: Direct Contact Navy Box */}
            <div className="bg-[#0f1c2c] text-white rounded-sm p-6 sm:p-8 shadow-md space-y-6" id="direct-contact-sidebar-widget">
              <div className="space-y-1">
                <h3 className="text-white text-base md:text-lg font-extrabold">
                  Direct Contact
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Need immediate assistance with BOQs or active specifications? Our dedicated engineers are on-call.
                </p>
              </div>

              <div className="space-y-4 pt-3 border-t border-white/10" id="sidebar-contacts-list">
                {/* Phone */}
                <div className="flex gap-3 items-center">
                  <Phone className="h-4 w-4 text-[#cca23b]" />
                  <a href={`tel:${CONTACT_INFO.landline}`} className="text-gray-200 font-bold text-xs tracking-tight hover:underline">
                    {CONTACT_INFO.landline}
                  </a>
                </div>

                {/* Email */}
                <div className="flex gap-3 items-center">
                  <Mail className="h-4 w-4 text-[#cca23b]" />
                  <a href={`mailto:${CONTACT_INFO.salesEmail}`} className="text-gray-200 font-bold text-xs tracking-tight hover:underline">
                    {CONTACT_INFO.salesEmail}
                  </a>
                </div>

                {/* Location */}
                <div className="flex gap-3 items-center">
                  <MapPin className="h-4 w-4 text-[#cca23b]" />
                  <span className="text-gray-200 font-semibold text-xs tracking-tight">
                    Colombo, Sri Lanka
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
