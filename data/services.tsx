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
    serviceTypes: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        title: 'Corporate & Business Website',
        description: 'Professional websites that establish your brand presence, showcase your services, and build credibility with potential clients.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
        title: 'E-Commerce Website Development',
        description: 'Complete online stores with secure payment gateways, inventory management, and seamless shopping experiences.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ),
        title: 'Landing Page & Microsites',
        description: 'High-converting single-page sites designed to capture leads, promote campaigns, and drive specific actions.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        ),
        title: 'Web Application Development',
        description: 'Custom web applications with advanced functionality, user authentication, databases, and complex workflows.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        ),
        title: 'Website Redesign & Migration',
        description: 'Modernize outdated websites with fresh designs, improved UX, and seamless migration to new platforms without losing data or SEO rankings.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        ),
        title: 'Progressive Web Apps (PWAs)',
        description: 'App-like web experiences that work offline, send push notifications, and can be installed on devices for enhanced engagement.'
      }
    ],
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
    serviceTypes: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        ),
        title: 'Android App Development',
        description: 'Native Android applications built with Kotlin and Java, optimized for performance and seamless integration with Google services.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        ),
        title: 'iOS App Development',
        description: 'Native iOS applications crafted with Swift, delivering exceptional user experience and following Apple\'s design guidelines.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        title: 'Cross-Platform Development',
        description: 'Build once, deploy everywhere. Cost-effective mobile apps using React Native and Flutter that work seamlessly on both iOS and Android.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        title: 'MVP Development for Startups',
        description: 'Rapid development of Minimum Viable Products to validate your ideas, attract investors, and get to market quickly with essential features.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        ),
        title: 'Enterprise Mobile Applications',
        description: 'Scalable, secure enterprise-grade mobile solutions with advanced features, integrations, and support for large-scale deployments.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        title: 'App Maintenance & Support',
        description: 'Ongoing maintenance, bug fixes, security updates, OS compatibility updates, and feature enhancements to keep your app running smoothly.'
      }
    ],
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
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    shortDescription: 'We develop custom software solutions that solve the complexity of your business processes, improve your performance and accelerate your business productivity with tailored technology.',
    fullDescription: 'Transform your business with bespoke software solutions designed specifically for your unique needs. We build powerful, scalable custom software that streamlines workflows, automates processes, and provides actionable insights. From enterprise applications to SaaS platforms, our solutions are crafted to drive efficiency and growth.',
    icon: 'WebAppIcon',
    serviceTypes: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        ),
        title: 'Enterprise Software Development',
        description: 'Robust, scalable enterprise solutions designed to handle complex business operations, large data volumes, and mission-critical processes with high security and reliability.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        ),
        title: 'SaaS Product Development',
        description: 'Build scalable Software-as-a-Service platforms with multi-tenancy, subscription management, and cloud infrastructure for recurring revenue business models.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        ),
        title: 'Business Process Automation',
        description: 'Automate repetitive tasks, workflows, and business processes to increase efficiency, reduce errors, and free your team to focus on strategic initiatives.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ),
        title: 'Data Dashboard & Analysis Platform',
        description: 'Custom dashboards and analytics platforms that transform raw data into actionable insights with real-time visualization, reporting, and business intelligence.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        title: 'API Development & Integration',
        description: 'Design and develop robust RESTful and GraphQL APIs, integrate third-party services, and connect disparate systems for seamless data flow and functionality.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        ),
        title: 'Legacy System Modernization',
        description: 'Upgrade and modernize outdated legacy systems with modern technologies, improved performance, enhanced security, and better user experiences without disrupting operations.'
      }
    ],
    features: [
      'Custom Software Architecture & Design',
      'Enterprise Application Development',
      'SaaS Platform Development',
      'Business Process Automation Tools',
      'API Development and Integration',
      'Legacy System Modernization',
      'Data Analytics & Reporting Dashboards',
      'Database Design and Optimization',
      'Cloud-Native Application Development',
      'Microservices Architecture',
      'DevOps and CI/CD Implementation',
      'Security and Compliance Implementation',
      'Scalable System Architecture',
      'Performance Monitoring & Optimization'
    ],
    benefits: [
      'Tailored solutions designed for your unique business needs',
      'Automate complex workflows and increase productivity',
      'Gain competitive advantage with custom features',
      'Scale effortlessly as your business grows',
      'Reduce operational costs and improve ROI',
      'Make data-driven decisions with real-time insights',
      'Seamless integration with existing systems and tools',
      'Enhanced security and compliance for your industry'
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
    metaTitle: 'Custom Software Development | Enterprise Software Solutions',
    metaDescription: 'Professional custom software development services. We build tailored enterprise solutions, SaaS platforms, and business automation tools that drive growth and efficiency.',
    metaKeywords: ['custom software development', 'enterprise software', 'SaaS development', 'business automation', 'API development', 'legacy system modernization', 'data analytics platform']
  },
  {
    id: '6',
    slug: 'cloud-solutions',
    title: 'Cloud Solutions',
    shortDescription: 'We provide comprehensive cloud solutions to help businesses migrate, build, and optimize their infrastructure on leading cloud platforms with enhanced scalability and security.',
    fullDescription: 'Transform your business with our comprehensive cloud solutions. We help organizations leverage the power of cloud computing to improve scalability, reduce costs, and accelerate innovation. From cloud migration to native application development, our experts design and implement cloud strategies that drive business growth and operational excellence.',
    icon: 'CMSIcon',
    serviceTypes: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        ),
        title: 'Cloud Migration',
        description: 'Seamlessly migrate your applications, data, and infrastructure to the cloud with minimal disruption, ensuring security and optimal performance throughout the process.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        ),
        title: 'Cloud Native Application Development',
        description: 'Build modern, scalable applications designed specifically for cloud environments using microservices, containers, and serverless architectures.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        ),
        title: 'Cloud Infrastructure Management',
        description: 'Comprehensive management of your cloud infrastructure including monitoring, automation, scaling, and maintenance to ensure optimal performance and reliability.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        title: 'Cloud Cost Optimization',
        description: 'Analyze and optimize your cloud spending with right-sizing, reserved instances, and automated cost management strategies to maximize ROI.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        ),
        title: 'Cloud Security & Compliance',
        description: 'Implement robust security measures, encryption, access controls, and compliance frameworks to protect your cloud infrastructure and data.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        title: 'DevOps & CI/CD',
        description: 'Implement DevOps practices and continuous integration/continuous deployment pipelines to accelerate software delivery and improve collaboration.'
      }
    ],
    features: [
      'Cloud Strategy and Architecture Design',
      'AWS, Azure, and Google Cloud Solutions',
      'Cloud Migration Services',
      'Kubernetes and Container Orchestration',
      'Serverless Architecture Implementation',
      'Microservices Development',
      'Cloud Infrastructure as Code (IaC)',
      'Automated Backup and Disaster Recovery',
      'Cloud Monitoring and Logging',
      'DevOps and CI/CD Pipeline Setup',
      'Multi-Cloud and Hybrid Cloud Solutions',
      'Cloud Security and Compliance',
      'Cost Optimization and Management',
      'Performance Tuning and Scaling'
    ],
    benefits: [
      'Scale resources up or down based on demand',
      'Reduce infrastructure costs and overhead',
      'Improve application performance and reliability',
      'Enhance security with enterprise-grade protection',
      'Access data and applications from anywhere',
      'Accelerate innovation and time-to-market',
      'Ensure business continuity with disaster recovery',
      'Stay compliant with industry regulations'
    ],
    technologies: [
      'AWS',
      'Microsoft Azure',
      'Google Cloud',
      'Kubernetes',
      'Docker',
      'Terraform',
      'Jenkins',
      'GitLab CI/CD',
      'CloudFormation',
      'Ansible'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Assessment & Planning',
        description: 'We assess your current infrastructure, applications, and business requirements to develop a comprehensive cloud strategy and migration roadmap.'
      },
      {
        step: 2,
        title: 'Architecture Design',
        description: 'We design a scalable, secure cloud architecture tailored to your needs, selecting the right services and technologies for optimal performance.'
      },
      {
        step: 3,
        title: 'Implementation & Migration',
        description: 'We execute the migration or build cloud-native applications, ensuring minimal disruption and maintaining data integrity throughout the process.'
      },
      {
        step: 4,
        title: 'Optimization & Security',
        description: 'We optimize performance, implement security best practices, set up monitoring, and configure automated scaling and backup solutions.'
      },
      {
        step: 5,
        title: 'Support & Management',
        description: 'We provide ongoing management, monitoring, and support to ensure your cloud infrastructure operates efficiently and cost-effectively.'
      }
    ],
    pricing: {
      starting: '$3,000',
      note: 'Pricing varies based on cloud platform, infrastructure complexity, migration scope, and ongoing management requirements. Custom quotes provided.'
    },
    faqs: [
      {
        question: 'Which cloud platform should I choose?',
        answer: 'The choice depends on your specific requirements, existing technology stack, and business needs. AWS is comprehensive, Azure integrates well with Microsoft products, and Google Cloud excels in data analytics. We help you choose the best fit.'
      },
      {
        question: 'How long does cloud migration take?',
        answer: 'Migration timelines vary based on complexity. Simple applications can migrate in 2-4 weeks, while complex enterprise systems may take 3-6 months. We create a detailed timeline during the planning phase.'
      },
      {
        question: 'Will cloud migration disrupt my business?',
        answer: 'We plan migrations carefully to minimize disruption. Most migrations can be done with minimal downtime using phased approaches, parallel running, and careful scheduling during low-traffic periods.'
      },
      {
        question: 'How much can I save with cloud solutions?',
        answer: 'Savings vary but typically range from 20-40% compared to traditional infrastructure. We optimize your cloud spending through right-sizing, reserved instances, and automated management.'
      },
      {
        question: 'Is my data secure in the cloud?',
        answer: 'Yes, cloud platforms offer enterprise-grade security. We implement encryption, access controls, compliance frameworks, and monitoring to ensure your data is secure and meets industry regulations.'
      }
    ],
    metaTitle: 'Cloud Solutions Services | AWS, Azure, Google Cloud',
    metaDescription: 'Expert cloud solutions including migration, cloud-native development, infrastructure management, DevOps, and cost optimization. Transform your business with scalable cloud technology.',
    metaKeywords: ['cloud solutions', 'cloud migration', 'AWS', 'Azure', 'Google Cloud', 'DevOps', 'cloud infrastructure', 'Kubernetes', 'cloud security']
  },
  {
    id: '7',
    slug: 'agentic-ai-solutions',
    title: 'Agentic AI Solutions',
    shortDescription: 'We develop intelligent AI agents and automation solutions that transform your business operations with cutting-edge artificial intelligence, machine learning, and natural language processing.',
    fullDescription: 'Harness the power of AI agents to revolutionize your business operations. We build intelligent systems that understand, learn, and act autonomously to solve complex problems. From custom AI agents to RAG systems and intelligent chatbots, our solutions leverage the latest in generative AI and machine learning to deliver measurable business value.',
    icon: 'WebAppIcon',
    serviceTypes: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        title: 'Custom AI Agent Development',
        description: 'Build autonomous AI agents that can perform complex tasks, make decisions, and interact with systems to achieve business objectives without human intervention.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        ),
        title: 'Intelligent Chatbot & Virtual Assistant',
        description: 'Create sophisticated conversational AI that understands context, provides accurate responses, and delivers exceptional customer experiences 24/7.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        title: 'AI-Powered Workflow Automation',
        description: 'Automate complex business workflows with AI that can understand documents, make decisions, route tasks, and handle exceptions intelligently.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        ),
        title: 'RAG (Retrieval Augmented Generation) System',
        description: 'Build systems that combine your proprietary knowledge base with large language models to provide accurate, context-aware answers grounded in your data.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        ),
        title: 'AI Strategy & Consulting',
        description: 'Get expert guidance on AI adoption, identifying high-impact use cases, building AI roadmaps, and implementing responsible AI practices for your organization.'
      }
    ],
    features: [
      'Custom AI Agent Development',
      'Large Language Model (LLM) Integration',
      'Natural Language Processing (NLP)',
      'Conversational AI & Chatbots',
      'RAG System Implementation',
      'Vector Database Integration',
      'AI Workflow Automation',
      'Sentiment Analysis',
      'Document Understanding & Processing',
      'Multi-Agent Systems',
      'AI Model Fine-tuning',
      'Prompt Engineering',
      'AI Ethics and Responsible AI',
      'Performance Monitoring & Optimization'
    ],
    benefits: [
      'Reduce operational costs with intelligent automation',
      'Provide 24/7 customer support with AI assistants',
      'Make faster, data-driven decisions',
      'Scale operations without proportional headcount growth',
      'Improve customer satisfaction and engagement',
      'Extract insights from unstructured data',
      'Accelerate knowledge discovery and retrieval',
      'Stay competitive with cutting-edge AI technology'
    ],
    technologies: [
      'OpenAI GPT',
      'Claude AI',
      'LangChain',
      'Pinecone',
      'Chroma',
      'Hugging Face',
      'TensorFlow',
      'PyTorch',
      'Python',
      'FastAPI'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Discovery & Use Case Analysis',
        description: 'We identify high-value AI use cases, assess data readiness, and define success metrics aligned with your business objectives.'
      },
      {
        step: 2,
        title: 'Data Preparation & Model Selection',
        description: 'We prepare and structure your data, select appropriate AI models and frameworks, and design the system architecture.'
      },
      {
        step: 3,
        title: 'Development & Training',
        description: 'We develop the AI solution, fine-tune models, implement RAG systems, and create intelligent workflows tailored to your needs.'
      },
      {
        step: 4,
        title: 'Testing & Refinement',
        description: 'We rigorously test the AI system for accuracy, safety, and performance, refining prompts and workflows based on results.'
      },
      {
        step: 5,
        title: 'Deployment & Monitoring',
        description: 'We deploy the AI solution, implement monitoring systems, and provide ongoing optimization to ensure consistent performance.'
      }
    ],
    pricing: {
      starting: '$10,000',
      note: 'Pricing varies based on AI complexity, data volume, model requirements, and integration needs. Enterprise solutions quoted individually.'
    },
    faqs: [
      {
        question: 'What is an AI agent?',
        answer: 'An AI agent is an autonomous system that can perceive its environment, make decisions, and take actions to achieve specific goals. Unlike traditional software, AI agents can learn, adapt, and handle complex tasks with minimal human intervention.'
      },
      {
        question: 'How is RAG different from regular AI chatbots?',
        answer: 'RAG (Retrieval Augmented Generation) systems combine large language models with your specific knowledge base. This ensures responses are accurate and grounded in your data, reducing hallucinations and providing domain-specific expertise.'
      },
      {
        question: 'How long does it take to develop an AI solution?',
        answer: 'Simple chatbots can be deployed in 2-4 weeks. Complex AI agents and RAG systems typically take 2-4 months. Enterprise multi-agent systems may require 4-6 months depending on requirements.'
      },
      {
        question: 'Do I need a lot of data for AI solutions?',
        answer: 'It depends on the solution. Chatbots and RAG systems can work with existing documentation. Custom model training requires more data. We assess your data readiness and recommend the best approach.'
      },
      {
        question: 'How do you ensure AI safety and accuracy?',
        answer: 'We implement guardrails, validation layers, human-in-the-loop workflows where needed, and comprehensive testing. We also monitor AI performance continuously and refine systems based on real-world usage.'
      }
    ],
    metaTitle: 'Agentic AI Solutions | Custom AI Agents & Automation',
    metaDescription: 'Transform your business with custom AI agents, intelligent chatbots, RAG systems, and AI-powered automation. Expert AI development and consulting services.',
    metaKeywords: ['AI agents', 'artificial intelligence', 'chatbot development', 'RAG system', 'AI automation', 'machine learning', 'NLP', 'generative AI', 'LLM integration']
  },
  {
    id: '8',
    slug: 'it-consulting',
    title: 'IT Consulting',
    shortDescription: 'We provide strategic IT consulting services to help businesses make informed technology decisions, optimize processes, and achieve digital transformation goals.',
    fullDescription: 'Navigate the complex technology landscape with our expert IT consulting services. We help organizations develop technology strategies, optimize architectures, and drive digital transformation. From fractional CTO services to technical due diligence, our consultants bring deep expertise to solve your most challenging technology problems.',
    icon: 'SEOIcon',
    serviceTypes: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        ),
        title: 'Technology Strategy & Roadmap',
        description: 'Develop comprehensive technology strategies aligned with business goals, including roadmaps for implementation, resource planning, and measurable milestones.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        ),
        title: 'Architecture & Tech Stack Consulting',
        description: 'Expert guidance on system architecture design, technology stack selection, and best practices to build scalable, maintainable, and efficient solutions.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        title: 'Digital Transformation Consulting',
        description: 'Guide your organization through digital transformation with change management, process optimization, and technology adoption strategies.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        title: 'Fractional CTO / Technical Advisory',
        description: 'Get executive-level technical leadership on a flexible basis. Strategic guidance, team mentoring, and technical decision-making without full-time commitment.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        ),
        title: 'Technical Due Diligence',
        description: 'Comprehensive technical assessment for M&A, investments, or partnerships. Evaluate code quality, architecture, security, scalability, and technical debt.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
        title: 'IT Process & Team Optimization',
        description: 'Optimize development workflows, implement best practices, improve team productivity, and establish effective processes for sustainable growth.'
      }
    ],
    features: [
      'Technology Strategy Development',
      'System Architecture Review',
      'Tech Stack Evaluation & Selection',
      'Digital Transformation Planning',
      'Technical Leadership & Mentoring',
      'Code Quality Assessment',
      'Security Audit & Review',
      'Scalability Assessment',
      'Technical Debt Analysis',
      'Process Improvement',
      'Vendor Selection & Management',
      'Team Structure & Hiring Strategy',
      'Risk Assessment & Mitigation',
      'Technology ROI Analysis'
    ],
    benefits: [
      'Make informed technology decisions with expert guidance',
      'Reduce technology risks and costly mistakes',
      'Accelerate time-to-market with proven strategies',
      'Optimize technology investments and ROI',
      'Build scalable, future-proof solutions',
      'Improve team efficiency and productivity',
      'Access C-level expertise without full-time cost',
      'Navigate complex technology challenges with confidence'
    ],
    technologies: [
      'All Major Tech Stacks',
      'Cloud Platforms',
      'Enterprise Software',
      'DevOps Tools',
      'Security Frameworks',
      'Agile Methodologies',
      'ITIL',
      'TOGAF',
      'Project Management',
      'Business Analysis'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Initial Assessment',
        description: 'We conduct a thorough assessment of your current technology landscape, challenges, goals, and organizational structure.'
      },
      {
        step: 2,
        title: 'Analysis & Research',
        description: 'We analyze your systems, processes, and market landscape to identify opportunities, risks, and best practices applicable to your situation.'
      },
      {
        step: 3,
        title: 'Strategy Development',
        description: 'We develop comprehensive recommendations, strategies, and roadmaps tailored to your business objectives and constraints.'
      },
      {
        step: 4,
        title: 'Presentation & Planning',
        description: 'We present our findings and recommendations with clear action plans, priorities, and implementation strategies.'
      },
      {
        step: 5,
        title: 'Implementation Support',
        description: 'We provide ongoing guidance, support, and advisory services during implementation to ensure successful execution.'
      }
    ],
    pricing: {
      starting: '$2,500',
      note: 'Consulting rates vary based on engagement type, duration, and complexity. We offer project-based, retainer, and hourly arrangements.'
    },
    faqs: [
      {
        question: 'What is a Fractional CTO?',
        answer: 'A Fractional CTO provides executive-level technical leadership on a part-time or contract basis. You get strategic guidance, technical decision-making, and leadership without the cost of a full-time executive.'
      },
      {
        question: 'How long does a typical consulting engagement last?',
        answer: 'Engagements vary widely. Technical due diligence might take 2-4 weeks, strategy development 1-2 months, while fractional CTO services are often ongoing relationships lasting 6-12 months or more.'
      },
      {
        question: 'Do you work with startups or only enterprises?',
        answer: 'We work with organizations of all sizes. Our services scale from startup advisory to enterprise transformation consulting, tailored to each client\'s stage and needs.'
      },
      {
        question: 'What deliverables do I receive?',
        answer: 'Deliverables depend on the engagement but typically include detailed reports, architecture diagrams, technology roadmaps, implementation plans, and ongoing advisory support.'
      },
      {
        question: 'Can you help us implement your recommendations?',
        answer: 'Absolutely. While consulting focuses on strategy and guidance, we can also provide implementation support or transition to development services to execute the plans we create together.'
      }
    ],
    metaTitle: 'IT Consulting Services | Technology Strategy & Advisory',
    metaDescription: 'Expert IT consulting including technology strategy, architecture consulting, fractional CTO services, technical due diligence, and digital transformation guidance.',
    metaKeywords: ['IT consulting', 'technology strategy', 'fractional CTO', 'technical advisory', 'digital transformation', 'architecture consulting', 'technical due diligence', 'technology roadmap']
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
