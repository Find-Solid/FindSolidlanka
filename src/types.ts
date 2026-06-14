export interface Product {
  id: string;
  name: string;
  category: 'doors' | 'timber' | 'ironmongery' | 'glass';
  description: string;
  features: string[];
  imageUrl: string;
  specifications: { [key: string]: string };
}

export interface Project {
  id: string;
  title: string;
  location: string;
  status: 'COMPLETED' | 'ONGOING' | 'PRE-CONSTRUCTION';
  category: 'commercial' | 'hotel' | 'healthcare' | 'residential';
  imageUrl: string;
  scope: string[];
  details: string;
  year: string;
}

export interface Certification {
  id: string;
  title: string;
  description: string;
  authority: string;
  iconType: 'shield' | 'award' | 'clipboard';
  isPrimary?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface InquirySubmission {
  id: string;
  fullName: string;
  company: string;
  email: string;
  phone: string;
  interest: 'Fire Rated Doors' | 'Ironmongery' | 'Glass Solutions' | 'General Inquiry';
  message: string;
  timestamp: string;
}

export interface QuoteSubmission {
  id: string;
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
  timestamp: string;
}
