import archWallPanelImage from './Assets/projects/arch-wall-panel.jpg';
import bedFrameImage from './Assets/projects/bed-frame.jpg';
import cafeBarImage from './Assets/projects/cafe-bar.jpg';
import circularPlanterImage from './Assets/projects/circular-planter.jpg';
import corniceSkirtingImage from './Assets/projects/cornice-skirting.jpg';
import deskImage from './Assets/projects/desk.jpg';
import lShapeWallPanelImage from './Assets/projects/l-shape-wall-panel.jpg';
import libraryCabinetImage from './Assets/projects/library-cabinet.jpg';
import openBookcaseImage from './Assets/projects/open-bookcase.jpg';
import receptionDeskImage from './Assets/projects/reception-desk.jpg';
import straightWallPanelImage from './Assets/projects/straight-wall-panel.jpg';

export const portfolio = {
  name: 'John',
  role: 'Technical Designer',
  intro:
    'I believe that good architectural or technical design is not just about creating an intelligent blend of style, form and function. It is also a form of storytelling.',
  location: 'Caloocan, Philippines',
  email: 'johnp.ogaya@gmail.com',
  phoneNumbers: ['+639560375437', '+639493075755'],
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/john-paulo-ogaya-ab1517237/' }
  ],
  nav: ['About', 'Skills', 'Experience', 'Projects', 'Contact'],
  about: {
    heading: 'About Me',
    body:
      'I am a detail-oriented creator who enjoys turning ideas into calm, useful, and memorable digital work. My background blends communication, design, and implementation, which helps me move smoothly from concept to finished experience.',
    stats: [
      { value: '5+', label: 'Years Experience' },
      { value: '100+', label: 'Projects Delivered' },
      { value: '10+', label: 'Experienced Using Tools' }
    ]
  },
  skills: [
    'AutoCAD',
    'SketchUp',
    'D5 Render',
    'Unreal Engine',
    'Photoshop',
    'CapCut',
    'Canva',
    'Salesforce',
    'Zoom',
    'Microsoft Office'

  ],
  experience: [
    {
      title: 'Technical Designer',
      company: 'Steinwood UK',
      period: 'Feb 2026 - Present',
      details: [
        'Strong attention to detail and understanding of joinery construction.',
        'Experience using AutoCAD, SketchUp, 3DS Max, Rhino, and V-Ray/Corona.',
        'Experience producing CNC production files using Vectric Aspire for CNC machines.',
        'Ensuring final designs are compliant with client requirements.'
      ]
    },
    {
      title: 'Account Manager',
      company: 'Accessory Power (Enhance Gaming)',
      period: 'Sept 2022 - Jan 18, 2026',
      details: [
        'Cold calling stores in the USA and EU.',
        'Conducting and scheduling meetings with CEOs, managers, or buyers.',
        'Creating sales orders and purchase orders for products.',
        'Sending emails for follow-ups.'
      ]
    },
    {
      title: 'Crypto Gaming Assistant',
      company: 'Independent Support Role',
      period: 'July 2021 - Mar 2024',
      details: [
        'Responsible for assisting customers with inquiries and resolving game account issues while efficiently processing account recharge and redemption requests.',
        'Ensured accuracy and security in all transactions, maintained smooth operational workflows, and monitored account activities to support compliance and enhance customer satisfaction.'
      ]
    },
    {
      title: 'CNC Cad Detailer',
      company: 'Pioneer Solutions Limited',
      period: 'July 2023 - Dec 2023',
      details: [
        'Create any wood technical detail for production.',
        'Input details to CNC.'
      ]
    },
    {
      title: 'CAD Designer/Cabinetry',
      company: 'BWI Interior (AMBB/Visiontech)',
      period: 'Mar 2017 - Mar 2021',
      details: [
        'Following specifications and calculations to create various technical drawings.',
        'Experience using AutoCAD, SketchUp, and V-Ray.',
        'Ensuring final designs are compliant with client requirements.',
        'Trained one CAD draftsman during company expansion to ensure attention to detail and adherence to company policy.'
      ]
    },
    {
      title: 'Mechanical Draftsman',
      company: 'Samsung (Lenwon)',
      period: 'Feb 2016 - Feb 2017',
      details: [
        'Made detailed drawings, specified design dimensions, and constructed models of mechanical devices and parts.',
        'Met with architects and engineers to ensure site dimensions and plans were on time.'
      ]
    }
  ],
  projects: [
    {
      title: 'Cafe Bar',
      category: 'Joinery Detail',
      description:
        'A custom cafe bar drawing package with rendered presentation views and technical production sheets.',
      image: cafeBarImage,
      pdf: '/projects/cafe-bar.pdf'
    },
    {
      title: 'Circular Planter',
      category: 'Feature Joinery',
      description:
        'Curved planter design with visual reference imagery and CNC-ready detailing for fabrication.',
      image: circularPlanterImage,
      pdf: '/projects/circular-planter.pdf'
    },
    {
      title: 'Reception Desk',
      category: 'Furniture Detail',
      description:
        'Reception desk design package combining clean rendered visuals with measured construction drawings.',
      image: receptionDeskImage,
      pdf: '/projects/reception-desk.pdf'
    },
    {
      title: 'Bed Frame',
      category: 'Furniture Detail',
      description:
        'Bedroom furniture technical drawings prepared for review, coordination, and production handoff.',
      image: bedFrameImage,
      pdf: '/projects/bed-frame.pdf'
    },
    {
      title: 'Desk',
      category: 'Furniture Detail',
      description:
        'Desk joinery design with rendered preview imagery and detailed drawing sheets for fabrication.',
      image: deskImage,
      pdf: '/projects/desk.pdf'
    },
    {
      title: 'Open Bookcase',
      category: 'Cabinetry Detail',
      description:
        'Open bookcase design package showing proportions, shelving layout, and construction details.',
      image: openBookcaseImage,
      pdf: '/projects/open-bookcase.pdf'
    },
    {
      title: 'Library Cabinet',
      category: 'Cabinetry Detail',
      description:
        'Library cabinet drawing package with rendered furniture views and detailed production sheets.',
      image: libraryCabinetImage,
      pdf: '/projects/library-cabinet.pdf'
    },
    {
      title: 'L-Shape Wall Panel',
      category: 'Wall Panel Detail',
      description:
        'L-shaped wall panel detail with visual material direction and technical drawing documentation.',
      image: lShapeWallPanelImage,
      pdf: '/projects/l-shape-wall-panel.pdf'
    },
    {
      title: 'Arch Wall Panel',
      category: 'Wall Panel Detail',
      description:
        'Arch wall panel concept with warm timber detailing and coordinated sheet documentation.',
      image: archWallPanelImage,
      pdf: '/projects/arch-wall-panel.pdf'
    },
    {
      title: 'Straight Wall Panel',
      category: 'Wall Panel Detail',
      description:
        'Straight wall panel technical package focused on elevation, proportions, and build details.',
      image: straightWallPanelImage,
      pdf: '/projects/straight-wall-panel.pdf'
    },
    {
      title: 'Cornice and Skirting',
      category: 'Interior Detail',
      description:
        'Cornice and skirting detailing package for coordinated interior joinery installation.',
      image: corniceSkirtingImage,
      pdf: '/projects/cornice-skirting.pdf'
    }
  ]
};
