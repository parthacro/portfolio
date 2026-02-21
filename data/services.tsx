import React from 'react';
import { Service } from '@/types/service';

// Icon Components
export const WebDesignIcon = () => (
  <div className="relative w-64 h-48">
    <div className="absolute top-8 left-8 w-24 h-24 bg-[#5EBEEB] rounded-full opacity-30 blur-xl animate-pulse"></div>
    <div className="absolute bottom-8 right-8 w-32 h-32 bg-[#5EBEEB] rounded-full opacity-30 blur-xl animate-pulse-delayed"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FF8C6B] rounded-2xl w-48 h-32 shadow-xl p-3">
      <div className="bg-[#FFB347] h-6 rounded-t-lg mb-2 flex items-center px-2 gap-1">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
      <div className="space-y-2">
        <div className="h-2 bg-white/50 rounded w-3/4"></div>
        <div className="h-2 bg-white/50 rounded w-1/2"></div>
      </div>
      <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-[#FF6B6B] rounded-lg flex items-center justify-center text-white text-xs">▶</div>
    </div>
    <div className="absolute top-4 right-8 w-12 h-12 bg-[#FFB347] rounded-lg transform rotate-12 animate-float"></div>
    <div className="absolute top-0 left-12 w-8 h-8 bg-[#FF6B6B] rounded-full animate-float-delayed"></div>
    <div className="absolute bottom-4 left-4 w-8 h-12 bg-gray-800 rounded-full"></div>
  </div>
);

export const MobileAppIcon = () => (
  <div className="relative w-64 h-48">
    <div className="absolute top-8 right-8 w-24 h-24 bg-[#5EBEEB] rounded-full opacity-30 blur-xl animate-pulse"></div>
    <div className="absolute bottom-8 left-8 w-32 h-32 bg-[#5EBEEB] rounded-full opacity-30 blur-xl animate-pulse-delayed"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-gray-800 rounded-lg w-44 h-32 shadow-2xl p-2">
        <div className="bg-[#FF8C6B] rounded h-full w-full flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFB347] to-[#FF8C6B]"></div>
          <svg className="w-16 h-16 text-white z-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
      </div>
      <div className="bg-gray-800 w-16 h-4 mx-auto mt-1"></div>
      <div className="bg-gray-700 w-24 h-2 mx-auto mt-1 rounded"></div>
    </div>
    <div className="absolute top-6 left-6 w-10 h-10 bg-[#FFB347] rounded-full animate-float"></div>
    <div className="absolute top-2 right-12 w-8 h-8 bg-[#FF6B6B] rounded-full animate-float-delayed"></div>
    <div className="absolute bottom-8 right-4 w-6 h-10 bg-gray-800 rounded-full"></div>
    <div className="absolute bottom-8 left-8 w-6 h-10 bg-gray-800 rounded-full"></div>
  </div>
);

export const GraphicDesignIcon = () => (
  <div className="relative w-64 h-48">
    <div className="absolute top-8 left-12 w-28 h-28 bg-[#5EBEEB] rounded-full opacity-30 blur-xl animate-pulse"></div>
    <div className="absolute bottom-8 right-12 w-32 h-32 bg-[#5EBEEB] rounded-full opacity-30 blur-xl animate-pulse-delayed"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
      <div className="text-[#FF8C6B] text-7xl font-black transform -rotate-12 relative">
        3
        <div className="absolute inset-0 text-[#FFB347] transform translate-x-1 translate-y-1 -z-10">3</div>
      </div>
      <div className="text-[#FF8C6B] text-7xl font-black transform rotate-6 relative">
        D
        <div className="absolute inset-0 text-[#FFB347] transform translate-x-1 translate-y-1 -z-10">D</div>
      </div>
    </div>
    <div className="absolute top-4 right-8 w-10 h-10 bg-[#FF6B6B] rounded-full animate-float"></div>
    <div className="absolute top-8 left-4 w-8 h-8 bg-[#FFB347] rounded-full animate-float-delayed"></div>
    <div className="absolute bottom-4 right-4 w-6 h-10 bg-gray-800 rounded-full"></div>
    <div className="absolute bottom-8 left-12 w-6 h-10 bg-gray-800 rounded-full"></div>
    <div className="absolute bottom-2 left-8 bg-gray-800 w-16 h-12 rounded shadow-lg"></div>
    <div className="absolute bottom-2 right-8 bg-gray-800 w-20 h-14 rounded shadow-lg"></div>
  </div>
);

export const SEOIcon = () => (
  <div className="relative w-64 h-48">
    <div className="absolute top-8 left-8 w-24 h-24 bg-[#5EBEEB] rounded-full opacity-30 blur-xl animate-pulse"></div>
    <div className="absolute bottom-8 right-8 w-32 h-32 bg-[#FFB347] rounded-full opacity-30 blur-xl animate-pulse-delayed"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-white rounded-xl w-44 h-32 shadow-xl p-4 border-4 border-[#FF8C6B]">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-[#FF6B6B] rounded-full"></div>
          <div className="h-2 bg-gray-300 rounded flex-1"></div>
        </div>
        <div className="space-y-2">
          <div className="h-2 bg-[#FFB347] rounded w-full"></div>
          <div className="h-2 bg-[#5EBEEB] rounded w-3/4"></div>
          <div className="h-2 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    </div>
    <div className="absolute top-2 right-4 w-10 h-10 bg-[#FF6B6B] rounded-full animate-float"></div>
    <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#FFB347] rounded-lg animate-float-delayed"></div>
  </div>
);

export const WebAppIcon = () => (
  <div className="relative w-64 h-48">
    <div className="absolute top-8 right-8 w-24 h-24 bg-[#FFB347] rounded-full opacity-30 blur-xl animate-pulse"></div>
    <div className="absolute bottom-8 left-8 w-32 h-32 bg-[#5EBEEB] rounded-full opacity-30 blur-xl animate-pulse-delayed"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-gray-800 rounded-2xl w-48 h-32 shadow-xl p-3">
        <div className="flex gap-1 mb-2">
          <div className="w-2 h-2 bg-[#FF6B6B] rounded-full"></div>
          <div className="w-2 h-2 bg-[#FFB347] rounded-full"></div>
          <div className="w-2 h-2 bg-[#5EBEEB] rounded-full"></div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-[#FF8C6B] rounded h-14"></div>
          <div className="bg-[#FFB347] rounded h-14"></div>
          <div className="bg-[#5EBEEB] rounded h-14"></div>
        </div>
      </div>
    </div>
    <div className="absolute top-4 left-4 w-12 h-12 bg-[#FF6B6B] rounded-lg animate-float"></div>
    <div className="absolute bottom-4 right-4 w-8 h-8 bg-[#5EBEEB] rounded-full animate-float-delayed"></div>
  </div>
);

export const CMSIcon = () => (
  <div className="relative w-64 h-48">
    <div className="absolute top-8 left-12 w-28 h-28 bg-[#5EBEEB] rounded-full opacity-30 blur-xl animate-pulse"></div>
    <div className="absolute bottom-8 right-8 w-32 h-32 bg-[#FFB347] rounded-full opacity-30 blur-xl animate-pulse-delayed"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-white rounded-xl w-44 h-32 shadow-xl p-3 border-2 border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <div className="w-8 h-8 bg-[#5EBEEB] rounded flex items-center justify-center text-white font-bold text-xs">W</div>
          <div className="flex gap-1">
            <div className="w-6 h-6 bg-[#FFB347] rounded"></div>
            <div className="w-6 h-6 bg-[#FF8C6B] rounded"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-2 bg-gray-200 rounded"></div>
          <div className="h-2 bg-gray-200 rounded w-2/3"></div>
          <div className="flex gap-2 mt-3">
            <div className="h-8 bg-[#5EBEEB] rounded flex-1"></div>
            <div className="h-8 bg-[#FF8C6B] rounded flex-1"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute top-6 right-6 w-10 h-10 bg-[#FFB347] rounded-full animate-float"></div>
    <div className="absolute bottom-6 left-6 w-8 h-8 bg-[#FF6B6B] rounded-lg animate-float-delayed"></div>
  </div>
);

// Map icon names to components
export const iconComponents: Record<string, React.ComponentType> = {
  WebDesignIcon,
  MobileAppIcon,
  GraphicDesignIcon,
  SEOIcon,
  WebAppIcon,
  CMSIcon,
};

// Services Data
export const servicesData: Service[] = [
  {
    id: '1',
    slug: 'web-design',
    title: 'Website Design',
    shortDescription: 'We offers creative, unique, economic, and trendy Website Design. We provide exclusive designs of your ideas with multiple options to choose from.',
    fullDescription: 'Transform your digital presence with our cutting-edge website design services. We combine creativity, user experience, and modern design trends to create websites that not only look stunning but also drive results. Our team of expert designers works closely with you to understand your brand, target audience, and business goals to deliver a website that perfectly represents your vision.',
    icon: 'WebDesignIcon',
    features: [
      'Responsive Design - Mobile, Tablet, and Desktop Optimized',
      'Custom UI/UX Design tailored to your brand',
      'Modern and Clean Design Aesthetics',
      'Fast Loading and Performance Optimized',
      'Cross-browser Compatibility',
      'Accessibility Standards Compliant (WCAG)',
      'Interactive Animations and Micro-interactions',
      'Multiple Design Revisions Included'
    ],
    benefits: [
      'Stand out from competitors with unique designs',
      'Increase user engagement and conversion rates',
      'Build trust and credibility with professional design',
      'Improve brand recognition and awareness',
      'Reduce bounce rates with intuitive navigation',
      'Future-proof design that scales with your business'
    ],
    technologies: [
      'Figma',
      'Adobe XD',
      'Sketch',
      'HTML5/CSS3',
      'Tailwind CSS',
      'React',
      'Next.js',
      'Framer Motion'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Discovery & Research',
        description: 'We analyze your business, competitors, and target audience to understand your unique requirements and create a strategic design approach.'
      },
      {
        step: 2,
        title: 'Wireframing & Prototyping',
        description: 'We create detailed wireframes and interactive prototypes to visualize the structure and user flow before moving to the design phase.'
      },
      {
        step: 3,
        title: 'Visual Design',
        description: 'Our designers craft beautiful, on-brand visual designs with multiple options for you to choose from, ensuring every pixel is perfect.'
      },
      {
        step: 4,
        title: 'Development & Testing',
        description: 'We transform approved designs into fully functional, responsive websites with rigorous testing across all devices and browsers.'
      },
      {
        step: 5,
        title: 'Launch & Support',
        description: 'We handle the complete launch process and provide ongoing support to ensure your website continues to perform optimally.'
      }
    ],
    pricing: {
      starting: '$999',
      note: 'Pricing varies based on project complexity, number of pages, and custom features required.'
    },
    faqs: [
      {
        question: 'How long does it take to design a website?',
        answer: 'Typically, a standard website design takes 2-4 weeks depending on the complexity and number of pages. Custom enterprise solutions may take 6-8 weeks or more.'
      },
      {
        question: 'Will my website be mobile-friendly?',
        answer: 'Absolutely! All our designs are fully responsive and optimized for mobile, tablet, and desktop devices to ensure a seamless experience across all screen sizes.'
      },
      {
        question: 'Can you redesign my existing website?',
        answer: 'Yes, we specialize in website redesigns. We can refresh your existing site with a modern look while maintaining your brand identity and improving user experience.'
      },
      {
        question: 'Do you provide website maintenance after launch?',
        answer: 'Yes, we offer ongoing maintenance and support packages to keep your website updated, secure, and performing at its best.'
      },
      {
        question: 'Will I be able to update the website myself?',
        answer: 'Yes, we can integrate a user-friendly CMS (Content Management System) that allows you to easily update content, images, and other elements without technical knowledge.'
      }
    ],
    metaTitle: 'Professional Website Design Services | Custom Web Design',
    metaDescription: 'Get stunning, responsive website design services that drive results. We create custom, user-friendly websites tailored to your brand and business goals. Contact us today!',
    metaKeywords: ['website design', 'web design services', 'custom web design', 'responsive design', 'UI/UX design', 'professional website design']
  },
  {
    id: '2',
    slug: 'seo-digital-marketing',
    title: 'SEO & Digital Marketing',
    shortDescription: 'We offers affordable SEO services which help our clients to gain online presence. Digital marketing & social media increase your brand online presence.',
    fullDescription: 'Dominate search engine rankings and expand your online reach with our comprehensive SEO and digital marketing services. We use proven strategies and cutting-edge techniques to increase your visibility, drive qualified traffic, and boost conversions. Our data-driven approach ensures every marketing dollar delivers measurable results.',
    icon: 'SEOIcon',
    features: [
      'Comprehensive SEO Audit and Analysis',
      'On-Page SEO Optimization',
      'Technical SEO Implementation',
      'Link Building and Off-Page SEO',
      'Local SEO for Local Business Visibility',
      'Content Strategy and Marketing',
      'Social Media Marketing (SMM)',
      'Pay-Per-Click (PPC) Campaign Management',
      'Email Marketing Campaigns',
      'Analytics and Performance Tracking',
      'Competitor Analysis',
      'Monthly Reporting and Insights'
    ],
    benefits: [
      'Increase organic traffic and visibility',
      'Improve search engine rankings for target keywords',
      'Generate high-quality leads and conversions',
      'Build brand authority and credibility',
      'Maximize ROI on marketing spend',
      'Stay ahead of competitors in your industry',
      'Long-term sustainable growth'
    ],
    technologies: [
      'Google Analytics',
      'Google Search Console',
      'SEMrush',
      'Ahrefs',
      'Moz',
      'Google Ads',
      'Facebook Ads Manager',
      'Mailchimp',
      'HubSpot'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Audit & Strategy',
        description: 'We conduct a comprehensive audit of your current online presence and develop a customized SEO and marketing strategy aligned with your business goals.'
      },
      {
        step: 2,
        title: 'Optimization',
        description: 'We optimize your website for search engines, improve technical aspects, create quality content, and implement on-page and off-page SEO best practices.'
      },
      {
        step: 3,
        title: 'Campaign Execution',
        description: 'We launch and manage targeted digital marketing campaigns across multiple channels including search, social media, and email marketing.'
      },
      {
        step: 4,
        title: 'Monitor & Analyze',
        description: 'We continuously monitor campaign performance, track key metrics, and analyze data to identify opportunities for improvement.'
      },
      {
        step: 5,
        title: 'Optimize & Scale',
        description: 'Based on insights, we refine strategies, optimize campaigns, and scale successful tactics to maximize your ROI and business growth.'
      }
    ],
    pricing: {
      starting: '$499/month',
      note: 'Pricing varies based on the scope of services, competition level, and campaign objectives. Custom packages available.'
    },
    faqs: [
      {
        question: 'How long does it take to see SEO results?',
        answer: 'SEO is a long-term strategy. You can typically expect to see initial improvements in 3-6 months, with significant results in 6-12 months. Timeline varies based on competition and current website status.'
      },
      {
        question: 'What is the difference between SEO and PPC?',
        answer: 'SEO focuses on organic search rankings through optimization, while PPC (Pay-Per-Click) involves paid advertising. SEO provides long-term sustainable results, while PPC delivers immediate visibility. We recommend a balanced approach for best results.'
      },
      {
        question: 'Do you guarantee first page rankings?',
        answer: 'While we cannot guarantee specific rankings (no one can ethically), we use proven strategies that have consistently helped our clients achieve top rankings. We focus on sustainable, white-hat techniques that deliver lasting results.'
      },
      {
        question: 'What industries do you specialize in?',
        answer: 'We have experience across various industries including e-commerce, healthcare, real estate, technology, hospitality, and professional services. Our strategies are customized to each industry\'s unique needs.'
      },
      {
        question: 'Will I receive reports on my SEO performance?',
        answer: 'Yes, we provide detailed monthly reports showing your rankings, traffic, conversions, and other key metrics. We also schedule regular calls to discuss progress and strategy adjustments.'
      }
    ],
    metaTitle: 'SEO & Digital Marketing Services | Increase Your Online Visibility',
    metaDescription: 'Boost your online presence with expert SEO and digital marketing services. Drive more traffic, generate leads, and grow your business with our proven strategies.',
    metaKeywords: ['SEO services', 'digital marketing', 'search engine optimization', 'online marketing', 'PPC management', 'social media marketing', 'content marketing']
  },
  {
    id: '3',
    slug: 'mobile-app-development',
    title: 'Mobile Application',
    shortDescription: 'We develop mobile apps which works on both iOS & Android platforms. We are expertise in building all type of custom apps for startup to large businesses.',
    fullDescription: 'Bring your ideas to life with our professional mobile app development services. We create high-performance, user-friendly mobile applications for iOS and Android that engage users and drive business growth. From concept to launch, our experienced developers ensure your app stands out in the crowded app marketplace.',
    icon: 'MobileAppIcon',
    features: [
      'Native iOS Development (Swift)',
      'Native Android Development (Kotlin/Java)',
      'Cross-Platform Development (React Native, Flutter)',
      'Custom App Design and Development',
      'API Integration and Backend Development',
      'App Store Optimization (ASO)',
      'Push Notifications Implementation',
      'In-App Purchases and Payment Integration',
      'Social Media Integration',
      'Cloud Storage Integration',
      'Real-time Features (Chat, Location, etc.)',
      'App Testing and Quality Assurance',
      'App Deployment and Launch Support'
    ],
    benefits: [
      'Reach customers on their preferred mobile devices',
      'Increase customer engagement and loyalty',
      'Streamline business operations with custom solutions',
      'Generate additional revenue streams',
      'Gain competitive advantage in your market',
      'Access valuable user data and insights',
      'Provide 24/7 accessibility to your services'
    ],
    technologies: [
      'Swift',
      'Kotlin',
      'React Native',
      'Flutter',
      'Firebase',
      'AWS Amplify',
      'GraphQL',
      'REST APIs',
      'MongoDB',
      'PostgreSQL'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Concept & Planning',
        description: 'We work with you to define your app concept, target audience, features, and create a detailed project roadmap with timelines and milestones.'
      },
      {
        step: 2,
        title: 'Design & Prototyping',
        description: 'Our designers create intuitive, beautiful app interfaces and interactive prototypes that showcase the user experience and visual design.'
      },
      {
        step: 3,
        title: 'Development',
        description: 'Our developers build your app using agile methodology, with regular updates and the ability to test features throughout the development process.'
      },
      {
        step: 4,
        title: 'Testing & QA',
        description: 'We conduct rigorous testing across devices, screen sizes, and operating systems to ensure your app is bug-free and performs flawlessly.'
      },
      {
        step: 5,
        title: 'Launch & Maintenance',
        description: 'We handle app store submission, launch strategy, and provide ongoing maintenance, updates, and feature enhancements post-launch.'
      }
    ],
    pricing: {
      starting: '$5,000',
      note: 'Pricing depends on app complexity, features, platforms, and design requirements. Contact us for a detailed quote.'
    },
    faqs: [
      {
        question: 'How long does it take to develop a mobile app?',
        answer: 'Development time varies based on complexity. A simple app takes 2-3 months, a moderately complex app takes 4-6 months, and a complex enterprise app can take 6-12 months or more.'
      },
      {
        question: 'Should I build a native or cross-platform app?',
        answer: 'Native apps offer better performance and user experience but cost more. Cross-platform apps are more cost-effective and faster to develop. We recommend the best approach based on your requirements, budget, and timeline.'
      },
      {
        question: 'Will my app work on both iPhone and Android?',
        answer: 'Yes, we can develop your app for both platforms. We can create separate native apps or use cross-platform technology to build one app that works on both iOS and Android.'
      },
      {
        question: 'How much does app maintenance cost?',
        answer: 'Maintenance typically costs 15-20% of the initial development cost annually. This includes bug fixes, OS updates, security patches, and minor improvements.'
      },
      {
        question: 'Can you help with app store submission?',
        answer: 'Absolutely! We handle the entire app store submission process for both Apple App Store and Google Play Store, including preparing assets, descriptions, and navigating the review process.'
      }
    ],
    metaTitle: 'Mobile App Development Services | iOS & Android App Development',
    metaDescription: 'Professional mobile app development for iOS and Android. We build custom, high-performance mobile applications that engage users and drive business growth.',
    metaKeywords: ['mobile app development', 'iOS app development', 'Android app development', 'cross-platform apps', 'React Native', 'Flutter', 'custom mobile apps']
  },
  {
    id: '4',
    slug: 'graphic-design',
    title: 'Graphics & Multimedia Design',
    shortDescription: 'We offer a range of graphic design services such as Logo Design, Business cards, Brochure Design, Banner Design, Newsletter Design, Letterhead, Flyer Design.',
    fullDescription: 'Elevate your brand with our comprehensive graphic design and multimedia services. We create visually stunning designs that capture attention, communicate your message effectively, and leave a lasting impression. Our talented designers combine creativity with strategic thinking to deliver designs that not only look great but also achieve your business objectives.',
    icon: 'GraphicDesignIcon',
    features: [
      'Logo Design and Brand Identity',
      'Business Card and Stationery Design',
      'Brochure and Flyer Design',
      'Banner and Poster Design',
      'Social Media Graphics',
      'Infographic Design',
      'Packaging Design',
      'Newsletter and Email Templates',
      'Presentation Design',
      'Book and Magazine Layout',
      'T-Shirt and Merchandise Design',
      '3D Modeling and Rendering',
      'Motion Graphics and Animation',
      'Video Editing and Production'
    ],
    benefits: [
      'Create a strong, memorable brand identity',
      'Stand out from competitors with unique designs',
      'Communicate complex information visually',
      'Increase marketing effectiveness',
      'Build brand consistency across all materials',
      'Professional appearance that builds trust',
      'Versatile designs for print and digital use'
    ],
    technologies: [
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe InDesign',
      'Adobe After Effects',
      'Figma',
      'Blender',
      'Cinema 4D',
      'Premiere Pro',
      'CorelDRAW'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Brief & Research',
        description: 'We discuss your design needs, brand guidelines, target audience, and goals. We research your industry and competitors to inform our creative direction.'
      },
      {
        step: 2,
        title: 'Concept Development',
        description: 'Our designers brainstorm and create multiple design concepts based on your brief, exploring different styles, colors, and approaches.'
      },
      {
        step: 3,
        title: 'Design & Refinement',
        description: 'We present initial concepts for your feedback, then refine the chosen direction with multiple revision rounds until you\'re completely satisfied.'
      },
      {
        step: 4,
        title: 'Finalization',
        description: 'We finalize the design, prepare all necessary file formats, and ensure everything is ready for your intended use (print, web, or both).'
      },
      {
        step: 5,
        title: 'Delivery & Support',
        description: 'We deliver all final files with proper organization and documentation, plus provide ongoing support for any questions or future design needs.'
      }
    ],
    pricing: {
      starting: '$199',
      note: 'Pricing varies by project type and complexity. Logo design starts at $499, while multimedia projects are quoted individually.'
    },
    faqs: [
      {
        question: 'How many design concepts will I receive?',
        answer: 'We typically provide 2-3 initial design concepts for most projects. For logo design, you\'ll receive 3-5 concepts to choose from. Additional concepts can be added if needed.'
      },
      {
        question: 'How many revisions are included?',
        answer: 'Most packages include 2-3 rounds of revisions. We work with you until you\'re completely satisfied with the design. Additional revisions beyond the included rounds can be arranged.'
      },
      {
        question: 'What file formats will I receive?',
        answer: 'You\'ll receive all source files plus multiple formats suitable for different uses (PNG, JPG, PDF, SVG, EPS, etc.). For print projects, we provide high-resolution print-ready files.'
      },
      {
        question: 'Can you match my existing brand style?',
        answer: 'Absolutely! We can work within your existing brand guidelines to maintain consistency, or we can help refresh and modernize your current brand identity.'
      },
      {
        question: 'Do you provide printing services?',
        answer: 'While we don\'t print in-house, we can recommend trusted printing partners and prepare print-ready files with proper specifications to ensure the best quality output.'
      }
    ],
    metaTitle: 'Graphic Design & Multimedia Services | Professional Design Solutions',
    metaDescription: 'Creative graphic design services including logo design, branding, print design, and multimedia production. Transform your brand with stunning visual designs.',
    metaKeywords: ['graphic design', 'logo design', 'branding', 'brochure design', 'multimedia design', 'motion graphics', '3D design', 'video editing']
  },
  {
    id: '5',
    slug: 'web-app-development',
    title: 'Web Application Development',
    shortDescription: 'We develop Web Applications that solve the complexity of your business processes, improve your performance and accelerate your business productivity.',
    fullDescription: 'Transform your business operations with custom web application development. We build powerful, scalable web applications that streamline workflows, automate processes, and provide actionable insights. Our solutions are tailored to your specific business needs and designed to grow with your organization.',
    icon: 'WebAppIcon',
    features: [
      'Custom Web Application Development',
      'Progressive Web Apps (PWA)',
      'Single Page Applications (SPA)',
      'Real-time Web Applications',
      'Enterprise Software Solutions',
      'SaaS Platform Development',
      'API Development and Integration',
      'Database Design and Optimization',
      'Cloud Deployment and Scaling',
      'Security Implementation',
      'User Authentication and Authorization',
      'Admin Dashboard Development',
      'Third-party Service Integration',
      'Performance Optimization'
    ],
    benefits: [
      'Automate repetitive tasks and save time',
      'Improve operational efficiency',
      'Access applications from anywhere, any device',
      'Scale easily as your business grows',
      'Reduce operational costs',
      'Gain real-time insights with custom reporting',
      'Integrate seamlessly with existing systems',
      'Enhance collaboration across teams'
    ],
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'Python',
      'Django',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'AWS',
      'Docker',
      'GraphQL',
      'TypeScript'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Requirements Analysis',
        description: 'We conduct in-depth analysis of your business processes, requirements, and goals to create a comprehensive specification document.'
      },
      {
        step: 2,
        title: 'Architecture Design',
        description: 'We design the application architecture, database schema, and technical infrastructure to ensure scalability, security, and performance.'
      },
      {
        step: 3,
        title: 'Agile Development',
        description: 'We develop your application in sprints, delivering working features regularly for your review and feedback throughout the process.'
      },
      {
        step: 4,
        title: 'Testing & QA',
        description: 'We perform comprehensive testing including unit tests, integration tests, and user acceptance testing to ensure quality and reliability.'
      },
      {
        step: 5,
        title: 'Deployment & Training',
        description: 'We deploy your application, provide user training and documentation, and offer ongoing support and maintenance to ensure success.'
      }
    ],
    pricing: {
      starting: '$8,000',
      note: 'Pricing depends on application complexity, features, integrations, and timeline. Enterprise solutions are quoted based on specific requirements.'
    },
    faqs: [
      {
        question: 'What is the difference between a website and a web application?',
        answer: 'A website primarily displays information, while a web application is interactive and performs specific functions or tasks. Web apps handle data, process user input, and often include dashboards, forms, and complex business logic.'
      },
      {
        question: 'How long does it take to develop a web application?',
        answer: 'Simple applications take 2-3 months, medium complexity apps take 4-6 months, and complex enterprise applications can take 6-12 months or longer depending on features and requirements.'
      },
      {
        question: 'Will my web application be secure?',
        answer: 'Security is our top priority. We implement industry-standard security practices including encryption, secure authentication, regular security audits, and protection against common vulnerabilities.'
      },
      {
        question: 'Can you integrate with our existing systems?',
        answer: 'Yes, we specialize in integrating web applications with existing systems including CRM, ERP, payment gateways, databases, and third-party APIs to create a seamless workflow.'
      },
      {
        question: 'Do you provide hosting and maintenance?',
        answer: 'Yes, we offer hosting solutions and ongoing maintenance packages including updates, bug fixes, security patches, performance monitoring, and feature enhancements.'
      }
    ],
    metaTitle: 'Custom Web Application Development | Enterprise Software Solutions',
    metaDescription: 'Professional web application development services. We build custom, scalable web apps that streamline operations and drive business growth.',
    metaKeywords: ['web application development', 'custom software development', 'SaaS development', 'enterprise software', 'progressive web apps', 'API development']
  },
  {
    id: '6',
    slug: 'cms-development',
    title: 'Content Management System',
    shortDescription: 'We develop a simple website or a multi-functional portal, engage our finest WordPress and umbraco developers to custom-build, manage and market your online presence.',
    fullDescription: 'Take control of your website content with our CMS development services. We create powerful, user-friendly content management systems that empower you to easily update and manage your website without technical knowledge. Whether you need WordPress, custom CMS, or headless CMS solutions, we deliver systems that are flexible, scalable, and tailored to your workflow.',
    icon: 'CMSIcon',
    features: [
      'WordPress Development and Customization',
      'Headless CMS Implementation',
      'Custom CMS Development',
      'Theme Development and Customization',
      'Plugin Development',
      'E-commerce Integration (WooCommerce)',
      'Membership and Subscription Systems',
      'Multi-language Support',
      'SEO-Friendly Architecture',
      'Media Library Management',
      'Role-Based Access Control',
      'Content Scheduling and Workflow',
      'Migration from Other Platforms',
      'CMS Training and Documentation'
    ],
    benefits: [
      'Update content easily without coding knowledge',
      'Reduce website maintenance costs',
      'Publish content faster and more frequently',
      'Manage multiple websites from one dashboard',
      'Collaborate with team members efficiently',
      'Maintain brand consistency across content',
      'Scale your content strategy as you grow',
      'Improve SEO with optimized content structure'
    ],
    technologies: [
      'WordPress',
      'Contentful',
      'Strapi',
      'Sanity',
      'Umbraco',
      'PHP',
      'React',
      'Next.js',
      'MySQL',
      'GraphQL'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Requirements Gathering',
        description: 'We understand your content needs, user roles, workflow requirements, and technical specifications to recommend the best CMS solution.'
      },
      {
        step: 2,
        title: 'Platform Selection & Setup',
        description: 'We select the optimal CMS platform based on your needs and set up the development environment with necessary configurations and integrations.'
      },
      {
        step: 3,
        title: 'Customization & Development',
        description: 'We customize the CMS with custom themes, plugins, and features to match your brand and workflow requirements perfectly.'
      },
      {
        step: 4,
        title: 'Content Migration',
        description: 'If needed, we migrate your existing content from your old platform to the new CMS, ensuring data integrity and SEO preservation.'
      },
      {
        step: 5,
        title: 'Training & Launch',
        description: 'We train your team on how to use the CMS effectively, provide comprehensive documentation, and ensure a smooth launch with ongoing support.'
      }
    ],
    pricing: {
      starting: '$1,500',
      note: 'Pricing varies based on CMS platform, customization level, number of pages, and integrations. Enterprise solutions are quoted individually.'
    },
    faqs: [
      {
        question: 'Which CMS platform is best for my business?',
        answer: 'It depends on your needs. WordPress is great for most websites and blogs. Headless CMS like Contentful or Strapi is ideal for multi-channel content delivery. We recommend the best platform based on your requirements, budget, and technical capabilities.'
      },
      {
        question: 'Can I update my website without technical knowledge?',
        answer: 'Absolutely! That\'s the main benefit of a CMS. We design intuitive interfaces and provide training so you and your team can easily add, edit, and publish content without any coding knowledge.'
      },
      {
        question: 'Can you migrate my existing website to a CMS?',
        answer: 'Yes, we specialize in website migrations. We can migrate your content, preserve your SEO rankings, and ensure a smooth transition with minimal downtime.'
      },
      {
        question: 'Will my CMS be secure?',
        answer: 'Security is a priority. We implement security best practices, regular updates, secure authentication, automated backups, and monitoring to protect your CMS from threats.'
      },
      {
        question: 'Do you provide CMS training?',
        answer: 'Yes, we provide comprehensive training sessions for your team, video tutorials, and detailed documentation to ensure you\'re comfortable managing your content independently.'
      }
    ],
    metaTitle: 'CMS Development Services | WordPress & Custom CMS Solutions',
    metaDescription: 'Expert CMS development services. We build and customize content management systems that make it easy to manage your website content. WordPress, Headless CMS, and more.',
    metaKeywords: ['CMS development', 'WordPress development', 'content management system', 'headless CMS', 'custom CMS', 'WordPress customization', 'Contentful', 'Strapi']
  }
];

// Helper function to get service by slug
export const getServiceBySlug = (slug: string): Service | undefined => {
  return servicesData.find(service => service.slug === slug);
};

// Helper function to get service icon component
export const getServiceIcon = (iconName: string): React.ComponentType | null => {
  return iconComponents[iconName] || null;
};
