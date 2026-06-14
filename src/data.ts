import { Product, Project, Certification } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-fire-doors',
    name: 'Fire Rated Doors',
    category: 'doors',
    description: 'Certified steel and composite fire doors offering superior protection up to 120 minutes, designed for commercial compliance.',
    features: [
      'Up to 120 minutes integrity rating (FD120)',
      'Tested to BS 476 Part 22 & BS EN 1634-1 standards',
      'Heavy-duty galvanized steel or advanced composite core',
      'Available with certifire approved vision panels',
      'Pre-hung with premium acoustic and intumescent seals'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&q=80&w=600',
    specifications: {
      'Integrity Rating': '30, 60, 90, 120 Mins',
      'Core Material': 'Solid insulated mineral core',
      'Testing Authorizations': 'BM TRADA, UL Listed',
      'Frame Profile': '1.5mm galvanized steel pre-hung'
    }
  },
  {
    id: 'prod-timber-doors',
    name: 'Fire Rated Timber Doors',
    category: 'timber',
    description: 'Aesthetic elegance meets rigorous safety standards for luxury hotels, premium residences, and executive offices.',
    features: [
      'Premium hardwood veneers (Teak, Walnut, Mahogany, Oak)',
      'Acoustic insulation ratings up to 45dB Rw',
      'FD30 and FD60 certification choices',
      'Environmentally verified sustainably sourced solid core',
      'Fully customizable heights up to 2.8 meters'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600',
    specifications: {
      'Finishes Available': 'Natural wood veneer, high pressure laminate (HPL)',
      'Acoustic Attenuation': '32dB - 45dB single door leaf',
      'Core Configuration': 'Halspan, Kohlah, or dense flaxboard core',
      'Thickness': '44mm (FD30) or 54mm (FD60)'
    }
  },
  {
    id: 'prod-ironmongery',
    name: 'Architectural Ironmongery',
    category: 'ironmongery',
    description: 'Heavy-duty architectural hardware, hinges, door closers, and master-key cylinder locks certified to EN standards.',
    features: [
      'BS EN 1906 Class 4 high frequency commercial grade handles',
      'Certifire door closers tested to 500k cycles',
      'Mortise locks complying with BS EN 12209 standards',
      'Architectural grade ball-bearing and polymer hinge selections',
      'Bespoke electroplated gold, brass, and physical vapor deposition (PVD) finishes'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600',
    specifications: {
      'Grades Offered': 'Grade 316 and 304 stainless steel',
      'Certifications': 'BS EN 1634 double door hardware solutions',
      'Masterkeying': 'Custom multi-level master key systems',
      'Hinge Capacity': 'Up to 160kg doors leaf loading'
    }
  },
  {
    id: 'prod-glass',
    name: 'Glass Solutions',
    category: 'glass',
    description: 'Bespoke architectural glass, acoustic glazing, and fire-resistant glass partitions for corporate office spaces.',
    features: [
      'Acoustic single/double glazed partition walls',
      'Sleek frameless design with minimal structural profiles',
      'Fire rated safety glass options from E30 to EI120 integrity/insulation',
      'Satin-etched, frosted or personalized manifestation designs',
      'Heavy-duty hydraulic floor springs and magnetic patch fittings'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
    specifications: {
      'Glass Thickness': '10mm, 12mm toughened or laminated',
      'Fire Rating options': 'E30, EI30, EI60, EI120 safety standard',
      'Framing Material': 'Slim architectural aluminium profiles',
      'Joint system': 'Dry-joint polyurethane crystal-clear gaskets'
    }
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-apex-financial',
    title: 'Apex Financial Tower',
    location: 'Colombo',
    status: 'COMPLETED',
    category: 'commercial',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600',
    scope: ['Fire Rated Doors', 'Architectural Ironmongery'],
    details: 'Supplied and installed over 450 certified steel fire doorsets, complete with master-keyed panic exit hardware and high-density door closers across 35 levels of prime office real estate.',
    year: '2024'
  },
  {
    id: 'proj-azure-coast',
    title: 'Azure Coast Resort',
    location: 'Galle',
    status: 'ONGOING',
    category: 'hotel',
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=600',
    scope: ['Fire Rated Timber Doors', 'Glass Solutions'],
    details: 'Luxury hospitality fitout featuring custom teak-veneered FD30 acoustic timber doorsets for guest suites, paired with structural glass balustrades and slim-profile architectural sliding configurations.',
    year: '2025'
  },
  {
    id: 'proj-central-highlands',
    title: 'Central Highlands Medical',
    location: 'Kandy',
    status: 'COMPLETED',
    category: 'healthcare',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600',
    scope: ['Specialized Fire Doors', 'Access Control Ironmongery'],
    details: 'Critical healthcare setting demanding maximum hygiene and safety controls. Installed hermetically sealed fire doors, electro-magnetic hospital arm closers, and full integration with fire-alarm access systems.',
    year: '2024'
  },
  {
    id: 'proj-cinnamon-gardens',
    title: 'Cinnamon Gardens Villas',
    location: 'Colombo',
    status: 'COMPLETED',
    category: 'residential',
    imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=600',
    scope: ['Premium Ironmongery', 'Custom Glass Solutions'],
    details: 'Ultra-luxury residential project executing physical vapor deposition (PVD) solid brass door hardware and high-grade insulated double glazed acoustic slider partitions opening to outer landscapes.',
    year: '2023'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-bs-en-1634',
    title: 'BS EN 1634-1 Fire Resistance',
    description: 'Comprehensive fire resistance testing for door and shutter assemblies. Certified up to 120 minutes integrity, ensuring maximum occupant safety in critical infrastructure installations across Sri Lanka.',
    authority: 'EXOVA Warringtonfire, UK',
    iconType: 'shield',
    isPrimary: true
  },
  {
    id: 'cert-iso-9001',
    title: 'ISO 9001:2015 Certification',
    description: 'Quality Management Systems ensuring consistent engineering manufacturing, high-quality fabrication of materials, and strict regulatory project delivery processes.',
    authority: 'SGS Certification Body',
    iconType: 'award'
  },
  {
    id: 'cert-bm-trada',
    title: 'BM TRADA Q-Mark Scheme',
    description: 'Prestigious Q-Mark authentication validating fire door manufacture and installation chain of custody, verifying performance integrity remains robust from factory to frame.',
    authority: 'BM TRADA, United Kingdom',
    iconType: 'clipboard'
  }
];

export const PARTNERSHIPS = [
  { name: 'ASSA ABLOY', segment: 'Access Solutions' },
  { name: 'DORMA KABA', segment: 'Doors & Entry Systems' },
  { name: 'HALSPAN', segment: 'Fire Door Blanks' },
  { name: 'GEZE', segment: 'Glazing & Automation' }
];

export const TECHNICAL_DATA_SHEETS = [
  { title: 'Timber Fire Doors - FD30', size: '2.4 MB', updated: 'Oct 2023' },
  { title: 'Timber Fire Doors - FD60', size: '3.1 MB', updated: 'Oct 2023' },
  { title: 'Steel Fire Rated Doorsets', size: '4.5 MB', updated: 'Jan 2024' },
  { title: 'Acoustic Performance Data', size: '1.8 MB', updated: 'Nov 2023' },
  { title: 'Hardware Compatibility Matrix', size: '5.2 MB', updated: 'Feb 2024' }
];

export const CONTACT_INFO = {
  phones: ['+94 77 747 0379', '+94 76 658 2241'],
  whatsapp: '+94 77 747 0379',
  email: 'info@find-solid.com',
  salesEmail: 'sales@findsolidlanka.lk',
  landline: '+94 11 234 5678',
  address: '18/2, Edward Lane, Upper Indibedda, Moratuwa, Sri Lanka',
  businessHours: {
    weekdays: 'Mon - Fri: 8:30 AM - 5:30 PM',
    saturday: 'Saturday: 9:00 AM - 1:00 PM',
    sunday: 'Sunday: Closed'
  }
};
