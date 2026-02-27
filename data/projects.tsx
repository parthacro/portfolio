import React from 'react';
import type { Project } from '@/types/project';
import Image from 'next/image';

// Project image components using actual images from public folder
const CoachingInstituteImage = ({ onLoad, onError }: { onLoad?: () => void; onError?: () => void }) => (
  <div className="absolute inset-0">
    <Image 
      src="/icons/Coaching-institute.png" 
      alt="Coaching Institute Website"
      fill
      className="object-cover"
      onLoad={onLoad}
      onError={onError}
    />
  </div>
);

const CollegeWebsiteImage = ({ onLoad, onError }: { onLoad?: () => void; onError?: () => void }) => (
  <div className="absolute inset-0">
    <Image 
      src="/icons/College-website.png" 
      alt="College Website"
      fill
      className="object-cover"
      onLoad={onLoad}
      onError={onError}
    />
  </div>
);

const EcommerceImage = ({ onLoad, onError }: { onLoad?: () => void; onError?: () => void }) => (
  <div className="absolute inset-0">
    <Image 
      src="/icons/E-commerce.png" 
      alt="E-Commerce App"
      fill
      className="object-cover"
      onLoad={onLoad}
      onError={onError}
    />
  </div>
);

const ELearningImage = ({ onLoad, onError }: { onLoad?: () => void; onError?: () => void }) => (
  <div className="absolute inset-0">
    <Image 
      src="/icons/E-learning.png" 
      alt="E-Learning App"
      fill
      className="object-cover"
      onLoad={onLoad}
      onError={onError}
    />
  </div>
);

const FitnessImage = ({ onLoad, onError }: { onLoad?: () => void; onError?: () => void }) => (
  <div className="absolute inset-0">
    <Image 
      src="/icons/Fitness-tracking.png" 
      alt="Fitness Tracking App"
      fill
      className="object-cover"
      onLoad={onLoad}
      onError={onError}
    />
  </div>
);

const InventoryImage = ({ onLoad, onError }: { onLoad?: () => void; onError?: () => void }) => (
  <div className="absolute inset-0">
    <Image 
      src="/icons/Inventory-managment.png" 
      alt="Inventory Management System"
      fill
      className="object-cover"
      onLoad={onLoad}
      onError={onError}
    />
  </div>
);

// Projects data
export const projectsData: Project[] = [
  {
    id: '1',
    slug: 'coaching-institute-website',
    title: 'Coaching Institute Website',
    category: 'Web Development',
    description: 'Modern website for NEET and IIT-JEE exam preparation institute',
    detailedDescription: 'Discover our latest project - a modern, user-friendly coaching institute website designed to help students achieve success in their NEET and IIT-JEE exams through tailored courses and expert guidance. Features include result showcases, course listings, scholarship information, and integrated notification system.',
    image: <CoachingInstituteImage />,
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Node.js', 'MongoDB'],
    features: [
      'Dynamic result showcase with student scores',
      'Course catalog (NEET UG, IIT-JEE, Lakshya Batch)',
      'Scholarship and test series notifications',
      'Student enrollment system',
      'Success rate tracking (90% success rate)',
      'Mobile-responsive design',
      'Admission inquiry form',
      'Interactive notifications panel',
    ],
    challenges: [
      'Displaying real-time results and notifications',
      'Creating an engaging UI for students',
      'Managing course information dynamically',
      'Optimizing for mobile devices',
    ],
    solutions: [
      'Implemented dynamic content management system',
      'Used React for interactive components',
      'Created reusable notification components',
      'Optimized images and assets for fast loading',
    ],
    results: [
      '5,000+ students enrolled',
      '90% success rate achieved',
      'Featured on educational platforms',
      'Positive feedback from students and parents',
    ],
    liveLink: '#',
    duration: '4 months',
    teamSize: '4 members',
  },
  {
    id: '2',
    slug: 'college-website',
    title: 'College Website',
    category: 'Web Design',
    description: 'Modern and responsive college website for Yogeshwar College',
    detailedDescription: 'Discover our latest project – a modern and responsive college website designed to introduce Yogeshwar College, their programs, and services, providing an engaging and user-friendly experience for students and visitors. Features comprehensive information about faculties, courses, alumni, and active students.',
    image: <CollegeWebsiteImage />,
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Sanity CMS'],
    features: [
      '18 faculties showcase',
      '2 approved courses listing',
      '255 alumni students network',
      '180 active students portal',
      'Course exploration system',
      'Welcome section with college information',
      'Statistical overview dashboard',
      'Contact and inquiry forms',
    ],
    challenges: [
      'Organizing large amounts of academic information',
      'Creating an intuitive navigation system',
      'Showcasing statistics effectively',
      'Maintaining brand consistency',
    ],
    solutions: [
      'Implemented hierarchical content structure',
      'Designed clean statistical cards',
      'Used Sanity CMS for easy content updates',
      'Created cohesive color scheme and typography',
    ],
    results: [
      'Increased student inquiries by 45%',
      'Improved information accessibility',
      'Positive feedback from faculty and students',
      'Mobile traffic increased by 60%',
    ],
    liveLink: '#',
    duration: '3 months',
    teamSize: '3 members',
  },
  {
    id: '3',
    slug: 'e-commerce-app',
    title: 'E-Commerce App',
    category: 'Mobile App',
    description: 'Seamless shopping experience for hardware items',
    detailedDescription: 'Discover our latest e-commerce app designed to provide a seamless shopping experience for hardware items like paint colors, fans, and light fixtures. Features include product categorization, search functionality, deals of the day, shopping cart, and wishlist management.',
    image: <EcommerceImage />,
    techStack: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'Stripe'],
    features: [
      'Spring sale promotions up to 50% off',
      'Paint colors catalog with pricing',
      'Decorative ceiling fan collection',
      'Deals of the day section',
      'Shopping cart and wishlist',
      'Product search and filtering',
      'User authentication',
      'Order tracking system',
    ],
    challenges: [
      'Managing product catalog efficiently',
      'Implementing smooth checkout process',
      'Handling product images optimization',
      'Cross-platform compatibility',
    ],
    solutions: [
      'Used Redux for state management',
      'Integrated Stripe for secure payments',
      'Implemented image lazy loading',
      'Built with React Native for iOS and Android',
    ],
    results: [
      'Successfully launched on both platforms',
      'High user engagement with deals section',
      'Smooth checkout experience',
      'Positive user reviews',
    ],
    githubLink: '#',
    duration: '5 months',
    teamSize: '4 members',
  },
  {
    id: '4',
    slug: 'e-learning-app',
    title: 'E-Learning App',
    category: 'Mobile App',
    description: 'Interactive student engagement and learning platform',
    detailedDescription: 'Explore our latest e-learning app designed to enhance student engagement and learning through interactive and user-friendly dashboards. Features personalized learning pathways, performance tracking, study materials, and class schedules.',
    image: <ELearningImage />,
    techStack: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Node.js'],
    features: [
      'Personalized dashboard for students',
      'Study progress tracking (60% completion)',
      'Last exam results display (A+ in Maths)',
      'Attendance monitoring (92%)',
      'Next class notifications (Chemistry - Organic Compounds)',
      'Key learning pathways (Online Test, Video Library, Study Material)',
      'Live lectures access',
      'Question bank and syllabus',
    ],
    challenges: [
      'Creating intuitive student dashboard',
      'Real-time progress synchronization',
      'Organizing educational content',
      'Engagement and motivation features',
    ],
    solutions: [
      'Designed clean and motivating UI',
      'Implemented Firebase for real-time updates',
      'Created modular content structure',
      'Added gamification elements',
    ],
    results: [
      'High student engagement rates',
      'Improved learning outcomes',
      'Positive teacher and student feedback',
      'Featured in education app categories',
    ],
    duration: '5 months',
    teamSize: '5 members',
  },
  {
    id: '5',
    slug: 'fitness-tracking-app',
    title: 'Fitness Tracking App',
    category: 'Mobile App',
    description: 'Weight tracking app with intuitive dashboards',
    detailedDescription: 'Check out our latest weight tracking app designed to help users monitor their weight loss progress through intuitive and user-friendly dashboards. Features include goal setting, progress visualization, and monthly tracking.',
    image: <FitnessImage />,
    techStack: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Chart.js'],
    features: [
      'Weight loss progress tracking (7.00 kg lost)',
      'Current weight display (56 kg)',
      'Goal weight setting (63 kg)',
      'Monthly progress charts',
      'Total achievement tracking (-1 kg through app)',
      'Calendar view for January 2025',
      'Visual progress indicators',
      'Personalized greetings (Hello Jasmine)',
    ],
    challenges: [
      'Creating motivating visualizations',
      'Data persistence and syncing',
      'User engagement over time',
      'Privacy and data security',
    ],
    solutions: [
      'Implemented engaging chart components',
      'Used local and cloud storage',
      'Added achievement notifications',
      'Ensured encrypted data storage',
    ],
    results: [
      'Users reporting consistent tracking',
      'High retention rates',
      'Positive health outcomes',
      'Featured in fitness app lists',
    ],
    githubLink: '#',
    duration: '3 months',
    teamSize: '3 members',
  },
  {
    id: '6',
    slug: 'inventory-management-system',
    title: 'Inventory Management',
    category: 'Web Development',
    description: 'Business intelligence platform for stock management',
    detailedDescription: 'Discover our latest inventory management web application designed to help businesses track stock levels, manage orders, and gain insights through an intuitive and user-friendly dashboard. Features comprehensive analytics, low stock alerts, and order tracking.',
    image: <InventoryImage />,
    techStack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'D3.js', 'Express'],
    features: [
      'Real-time stock value tracking ($52,450)',
      'Daily order monitoring (1,252 orders)',
      'Product count dashboard (320 products)',
      'Low stock alerts (12 items)',
      'Top-selling items analytics (Power Drill - 248 sales)',
      'Inventory overview charts',
      'Recent orders tracking',
      'Order status management',
    ],
    challenges: [
      'Real-time inventory updates',
      'Complex data visualization',
      'Multi-user access control',
      'Scalable architecture',
    ],
    solutions: [
      'Implemented WebSocket for real-time data',
      'Used D3.js for charts and graphs',
      'Built role-based permissions',
      'Designed microservices architecture',
    ],
    results: [
      'Reduced stock discrepancies by 85%',
      'Improved order processing time',
      'Better inventory forecasting',
      'Used by multiple businesses',
    ],
    liveLink: '#',
    duration: '6 months',
    teamSize: '5 members',
  },
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.find((project) => project.slug === slug);
};
