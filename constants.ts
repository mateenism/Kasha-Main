import { Service, PortfolioItem, Testimonial, TeamMember, WhyChooseUsItem, JobOpening, BlogPost } from './types';
import { DesignIcon, PlanIcon, ProductionIcon, ExecutionIcon, MapPinIcon, PuzzlePieceIcon, SparklesIcon } from './components/Icons';

export const BRAND_INFO = {
  name: 'KaSha',
  tagline: 'India’s Pan-India Event, Wedding & Corporate Experience Company',
  email: 'info@kasha.co.in',
  phones: ['+91 9810987169', '+91 9720588808'],
  website: 'www.kasha.co.in',
  location: 'Delhi, India',
  social: {
    instagram: 'https://www.instagram.com/kasha.events',
    linkedin: 'https://www.linkedin.com/company/kasha-events/',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
  },
};

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Vision Engine', path: '/image-generator' },
  { name: 'Cost Calculator', path: '/cost-calculator' },
  { name: 'Our Team', path: '/team' },
  { name: 'Blog', path: '/blog' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 1,
    slug: 'weddings',
    title: 'Weddings',
    shortDescription: 'Crafting unforgettable unions with elegance and precision.',
    longDescription: 'From grand ceremonies to intimate gatherings, we manage every detail of your special day. We offer a comprehensive suite of services to ensure a seamless and magical experience, whether you need a full-service solution or specific expertise.',
    imageUrl: 'https://images.unsplash.com/photo-1596207891243-14946973c65d?w=800&q=80',
    process: [
      { title: 'Design', description: 'Conceptualizing your dream theme and aesthetic.' },
      { title: 'Plan', description: 'Meticulous planning of every detail, vendor, and timeline.' },
      { title: 'Production', description: 'Bringing the vision to life with flawless execution.' },
      { title: 'Execution', description: 'On-site management for a stress-free celebration.' },
    ],
    showcaseImages: [
        'https://images.unsplash.com/photo-1511285560921-4c9A9cf33ad_?w=800&q=80',
        'https://images.unsplash.com/photo-1616165415772-1b1a7e447b4c?w=800&q=80',
        'https://images.unsplash.com/photo-1583939003579-56d7a3a41da2?w=800&q=80',
    ],
    detailedServices: {
        title: 'From grand visions to the finest details, we cover every aspect of your special day.',
        items: [
            { title: 'Venue Selection', description: 'Discovering and securing the perfect backdrop for your celebration.' },
            { title: 'Hotel & Destination Management', description: 'Coordinating seamless accommodation and travel for you and your guests.' },
            { title: 'Theme Design & Decor', description: 'Creating immersive atmospheres with stunning floral arrangements and bespoke decor.' },
            { title: 'Caterers & Cuisine', description: 'Curating exquisite culinary experiences tailored to your tastes and preferences.' },
            { title: 'Designer Coordination', description: 'Liaising with top designers to ensure your wedding attire is nothing short of perfection.' },
            { title: 'Photography & Videography', description: 'Capturing every precious moment with a team of elite creative professionals.' },
            { title: 'Pagdiwala & Safawala', description: 'Arranging traditional and elegant headwear for a touch of regal splendor.' },
            { title: 'Mehendiwala & Dholwala', description: 'Organizing vibrant entertainment and traditional artists for your festive ceremonies.' },
            { title: 'Transportation & Logistics', description: 'Managing all guest and vendor transit with precision for a smooth experience.' },
        ]
    },
    serviceFlexibility: {
        title: 'A Flexible Partnership Model',
        description: "We are your one-stop solution for the entire wedding celebration. However, we also understand that every client's needs are unique. We work on a service-based model as well, so if you require one or multiple specific services from our end, we are happy to tailor our partnership to fit your exact requirements."
    }
  },
  {
    id: 2,
    slug: 'corporate-events',
    title: 'Corporate Events',
    shortDescription: 'Executing professional events that reflect your brand’s prestige.',
    longDescription: 'We specialize in creating impactful corporate events that elevate your brand and leave a lasting impression. From high-profile product launches and international conferences to exclusive brand activations, our team provides strategic planning and flawless execution to ensure your brand message resonates with your audience and achieves its objectives.',
    imageUrl: 'https://images.unsplash.com/photo-1543196614-e046c7d3d82e?w=800&q=80',
    process: [
      { title: 'Strategy & Ideation', description: 'Developing a core event concept that aligns perfectly with your strategic brand goals.' },
      { title: 'Meticulous Planning', description: 'Handling all logistics, including venue sourcing, technical specifications, and scheduling.' },
      { title: 'World-Class Production', description: 'Managing all fabrication, stage design, and audio-visual requirements for a stunning show.' },
      { title: 'Flawless Execution', description: 'Providing seamless on-site management to ensure a professional and impactful event.' },
    ],
    showcaseImages: [
        'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80',
        'https://images.unsplash.com/photo-1560523159-4a9692d22268?w=800&q=80',
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
    ],
    detailedServices: {
        title: 'A comprehensive suite of services to ensure a flawless corporate event.',
        items: [
            { title: 'Brand Theme Creation', description: 'We develop a cohesive brand theme that integrates your company\'s identity into every visual and interactive element.' },
            { title: 'Stage Design & Fabrication', description: 'Our team designs and builds stunning, custom stages and sets equipped with cutting-edge technology and branding.' },
            { title: 'Sound & Lighting', description: 'We provide professional-grade sound systems and sophisticated lighting to create the perfect ambiance and ensure clarity.' },
            { title: 'Technical Production', description: 'From LED walls to live streaming, we manage all technical aspects to deliver a seamless and engaging production.' },
            { title: 'MC / Anchors', description: 'We source professional MCs and anchors who can expertly host your event and engage the audience.' },
            { title: 'Promoters & Staffing', description: 'Our experienced and well-trained event staff ensure your guests receive a professional and welcoming experience.' },
            { title: 'Printing & Collateral', description: 'We handle the design and printing of all event materials, including lanyards, passes, brochures, and signage.' },
            { title: 'Corporate Gifting', description: 'Elevate your guest experience with curated corporate gifts that reflect your brand\'s prestige and leave a lasting impression.' },
            { title: 'Flawless Event Execution', description: 'Our on-site management team oversees every detail, proactively solving challenges to ensure your event runs perfectly.' },
        ]
    },
    serviceFlexibility: {
        title: 'Scalable for Any Corporate Need',
        description: "Whether it's an exclusive C-suite retreat, a large-scale international conference, or a dynamic product launch, our services are fully scalable. We tailor our production and management to fit the size, scope, and objectives of your event, ensuring impactful results every time."
    }
  },
   {
    id: 3,
    slug: 'concerts-live-shows',
    title: 'Concerts & Live Shows',
    shortDescription: 'Producing electrifying live experiences for massive audiences.',
    longDescription: 'We manage large-scale concerts and live shows, handling artist management, stage production, sound & lighting, and crowd control to create unforgettable entertainment experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    process: [
      { title: 'Conceptualization', description: 'Designing the show flow and artist lineup.' },
      { title: 'Technical Planning', description: 'Arranging state-of-the-art sound, light, and visuals.' },
      { title: 'Production', description: 'Building the infrastructure for a world-class show.' },
      { title: 'Execution', description: 'Managing the live event for a seamless performance.' },
    ],
    showcaseImages: [
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
        'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
    ],
    detailedServices: {
        title: 'End-to-end production for world-class live entertainment.',
        items: [
            { title: 'Artist & Rider Management', description: 'Securing talent and managing all contractual and hospitality requirements.' },
            { title: 'Stage & Production Design', description: 'Creating immersive stages with cutting-edge lighting, sound, and visual effects.' },
            { title: 'Venue Sourcing & Management', description: 'Finding and preparing the perfect venue for acoustics and audience capacity.' },
            { title: 'Ticketing & Access Control', description: 'Implementing secure and efficient systems for ticket sales and entry management.' },
            { title: 'Security & Crowd Management', description: 'Ensuring a safe and enjoyable environment for all attendees and performers.' },
            { title: 'Technical Crew & Support', description: 'Providing experienced engineers and technicians for a flawless live production.' },
        ]
    }
  },
  {
    id: 4,
    slug: 'sports-events',
    title: 'Sports Events',
    shortDescription: 'Organizing dynamic marathons, runathons, and cycling events.',
    longDescription: 'From city marathons to corporate sports days, we provide end-to-end management, including route planning, participant registration, safety protocols, and on-ground logistics for a successful sporting event.',
    imageUrl: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80',
     process: [
      { title: 'Design', description: 'Planning the event format, route, and participant experience.' },
      { title: 'Plan', description: 'Managing registrations, permissions, and logistics.' },
      { title: 'Production', description: 'Setting up the course, start/finish lines, and aid stations.' },
      { title: 'Execution', description: 'Overseeing the event day for safety and success.' },
    ],
    showcaseImages: [
        'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=800&q=80',
        'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&q=80',
        'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?w=800&q=80',
    ],
    detailedServices: {
        title: 'Precision planning for high-energy sporting competitions.',
        items: [
            { title: 'Route Planning & Safety Protocols', description: 'Designing safe and certified courses with comprehensive on-ground safety measures.' },
            { title: 'Participant Registration & Management', description: 'Utilizing robust platforms for seamless registration and communication.' },
            { title: 'Timing & Scoring Systems', description: 'Implementing professional, chip-based timing systems for accurate results.' },
            { title: 'Volunteer & Staff Coordination', description: 'Recruiting, training, and managing a large workforce to ensure smooth operations.' },
            { title: 'Sponsorship & Brand Integration', description: 'Creating valuable opportunities for sponsors to engage with participants.' },
            { title: 'Logistics & Infrastructure', description: 'Managing everything from start/finish line setup to hydration stations and medical support.' },
        ]
    }
  },
  {
    id: 5,
    slug: 'destination-weddings',
    title: 'Destination Weddings',
    shortDescription: 'Curating magical weddings in breathtaking locations.',
    longDescription: 'We specialize in planning and executing exquisite destination weddings across India and beyond. Our services cover everything from location scouting and vendor management to guest logistics and multi-day itinerary planning.',
    imageUrl: 'https://images.unsplash.com/photo-1595460019246-a48691035661?w=800&q=80',
    process: [
        { title: 'Discover', description: 'Helping you find the perfect destination that tells your story.' },
        { title: 'Design & Plan', description: 'Crafting a cohesive theme and managing all travel and vendor logistics.' },
        { title: 'Guest Experience', description: 'Ensuring your guests have a seamless and enjoyable journey and stay.' },
        { title: 'Flawless Execution', description: 'On-site management to orchestrate your dream wedding perfectly.' },
    ],
    showcaseImages: [
        'https://images.unsplash.com/photo-1628198342416-2b4a1b025b5d?w=800&q=80',
        'https://images.unsplash.com/photo-1603953683512-b19b52857e48?w=800&q=80',
        'https://images.unsplash.com/photo-1601131454170-9018504ca03a?w=800&q=80',
    ],
    detailedServices: {
        title: 'Orchestrating dream weddings in paradise locations.',
        items: [
            { title: 'Global Venue Scouting', description: 'Identifying and securing breathtaking venues that match your vision and budget.' },
            { title: 'Guest Travel & Accommodation', description: 'Managing flights, hotel blocks, and local transportation for a seamless guest experience.' },
            { title: 'Multi-day Itinerary Planning', description: 'Curating a memorable schedule of events, from welcome dinners to farewell brunches.' },
            { title: 'Local Vendor Management', description: 'Leveraging our network of trusted local vendors to ensure quality and reliability.' },
            { title: 'Legal & Permit Assistance', description: 'Navigating local regulations and paperwork for a hassle-free celebration.' },
            { title: 'Cultural Integration', description: 'Beautifully weaving local traditions and flavors into your wedding festivities.' },
        ]
    }
  },
  {
    id: 6,
    slug: 'brand-activations',
    title: 'Brand Activations',
    shortDescription: 'Creating immersive brand experiences that captivate audiences.',
    longDescription: 'We design and execute innovative brand activations, product launches, and promotional events that create lasting impressions and drive engagement. From concept to execution, we bring your brand story to life.',
    imageUrl: 'https://images.unsplash.com/photo-1594904533826-8acb61e05844?w=800&q=80',
    process: [
        { title: 'Strategy', description: 'Understanding brand objectives to develop a powerful activation concept.' },
        { title: 'Creative Design', description: 'Designing an engaging and interactive experience for the target audience.' },
        { title: 'Production', description: 'Managing all fabrication, technology, and staffing for the event.' },
        { title: 'Execution & Amplification', description: 'Flawless on-ground management and strategies for social media buzz.' },
    ],
    showcaseImages: [
        'https://images.unsplash.com/photo-1579542791931-55866755b6b1?w=800&q=80',
        'https://images.unsplash.com/photo-1620207412130-435761358b5f?w=800&q=80',
        'https://images.unsplash.com/photo-1617066345388-3e5f22319985?w=800&q=80',
    ],
    detailedServices: {
        title: 'Bringing your brand story to life with impactful experiences.',
        items: [
            { title: 'Experiential Concept Design', description: 'Developing unique, hands-on experiences that connect consumers with your brand.' },
            { title: 'Interactive Technology Integration', description: 'Using AR, VR, and other tech to create memorable and shareable moments.' },
            { title: 'Pop-Up Shops & Store Launches', description: 'Designing and managing temporary retail spaces that generate buzz and sales.' },
            { title: 'Guerilla Marketing Stunts', description: 'Executing high-impact, unconventional marketing tactics for maximum visibility.' },
            { title: 'Influencer & Media Engagement', description: 'Curating and managing events that attract and engage key influencers and press.' },
            { title: 'Data Capture & Analytics', description: 'Implementing strategies to measure engagement and capture valuable consumer data.' },
        ]
    }
  },
  {
    id: 7,
    slug: 'event-staffing',
    title: 'Event Staffing & Coordination',
    shortDescription: 'Professional staff to ensure your event runs smoothly from start to finish.',
    longDescription: 'The success of any event lies in the quality of its execution team. We provide highly trained and professional staff, including promoters, ushers, wedding coordinators, personal shadows, and helpdesk personnel, to ensure every aspect of your event is managed flawlessly.',
    imageUrl: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800&q=80',
    process: [
      { title: 'Requirement Analysis', description: 'Understanding your specific staffing needs, roles, and responsibilities for the event.' },
      { title: 'Selection & Training', description: 'Handpicking and training the best personnel to represent your brand and manage guests.' },
      { title: 'Briefing & Deployment', description: 'Conducting thorough on-site briefings to align the entire team with your event objectives.' },
      { title: 'On-site Management', description: 'Supervising the staff to ensure professional conduct and seamless service throughout the event.' },
    ],
    showcaseImages: [
        'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=800&q=80',
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    ],
    detailedServices: {
        title: 'Providing the right people for a flawless event execution.',
        items: [
            { title: 'Promoters & Brand Ambassadors', description: 'Engaging and professional representatives to embody your brand and welcome guests.' },
            { title: 'Ushers & Guest Services', description: 'Courteous and efficient staff to manage guest flow and provide assistance.' },
            { title: 'Wedding Coordinators', description: 'Dedicated coordinators to manage timelines and vendors on your special day.' },
            { title: 'Personal Shadows for VIPs', description: 'Discreet and professional assistants to cater to the needs of your most important guests.' },
            { title: 'Helpdesk & Registration Staff', description: 'Organized and tech-savvy staff to ensure a smooth check-in process.' },
            { title: 'Guest Pick & Drop Logistics', description: 'Coordinating transportation to ensure timely and comfortable travel for attendees.' },
            { title: 'On-site Support Crew', description: 'Hardworking crew for setup, breakdown, and operational support during the event.' },
            { title: 'Technical Support Staff', description: 'Experienced technicians to manage audio-visual and lighting equipment.' },
        ]
    },
    serviceFlexibility: {
        title: 'Scalable to Your Needs',
        description: "Whether you need a single coordinator for a private gathering or a full team of 100+ staff for a large-scale concert, our staffing solutions are fully scalable. We provide the right people for the right roles, seamlessly integrated into your event structure."
    }
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  { id: 1, category: 'weddings', title: 'Grand Delhi Wedding', imageUrl: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600&h=800&fit=crop&q=80' },
  { id: 2, category: 'corporate', title: 'Tech Summit 2023', imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop&q=80' },
  { id: 3, category: 'concerts', title: 'Starlight Music Fest', imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=600&fit=crop&q=80' },
  { id: 4, category: 'activations', title: 'Luxury Car Launch', imageUrl: 'https://images.unsplash.com/photo-1617066345388-3e5f22319985?w=600&h=500&fit=crop&q=80' },
  { id: 5, category: 'weddings', title: 'Jaipur Palace Wedding', imageUrl: 'https://images.unsplash.com/photo-1628198342416-2b4a1b025b5d?w=600&h=400&fit=crop&q=80' },
  { id: 6, category: 'sports', title: 'City Marathon', imageUrl: 'https://images.unsplash.com/photo-1589122538402-4d1c6769eec6?w=600&h=800&fit=crop&q=80' },
  { id: 7, category: 'corporate', title: 'Annual Gala Dinner', imageUrl: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&h=600&fit=crop&q=80' },
  { id: 8, category: 'weddings', title: 'Goa Beach Wedding', imageUrl: 'https://images.unsplash.com/photo-1595460019246-a48691035661?w=600&h=500&fit=crop&q=80' },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  { id: 1, quote: 'KaSha turned our dream wedding into a reality. Every detail was perfect, and their team was an absolute pleasure to work with. Truly the best in the business!', author: 'A. & R. Sharma', event: 'Wedding in Udaipur', clientImageUrl: 'https://images.unsplash.com/photo-1558002367-2936a28401a0?w=100&h=100&fit=crop&q=80' },
  { id: 2, quote: 'Our annual corporate conference has never been smoother. KaSha’s professionalism and execution were flawless. They handled over 1000 attendees without a single hitch.', author: 'CEO, TechCorp', event: 'Corporate Conference', clientImageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&q=80' },
  { id: 3, quote: 'An absolutely epic product launch event! The creativity and production quality were world-class. KaSha understood our brand vision perfectly.', author: 'Marketing Head, Luxe Auto', event: 'Product Launch', clientImageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80' },
];

export const TEAM_DATA: TeamMember[] = [
    { 
        id: 1, 
        name: 'Mateen', 
        role: 'CEO & Founder', 
        imageUrl: 'https://images.unsplash.com/photo-1630653112351-40b8b2b083c2?w=400&h=400&fit=crop&q=80',
        bio: "A visionary leader with over a decade of experience in orchestrating large-scale luxury events. Mateen's passion lies in turning ambitious concepts into flawlessly executed realities, ensuring every client's vision is surpassed.",
        expertise: "Large-Scale Production & Brand Experiences"
    },
    { 
        id: 2, 
        name: 'Mujeeb', 
        role: 'COO & Co-Founder', 
        imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=400&fit=crop&q=80',
        bio: "The master of logistics and operations, Mujeeb ensures every event runs with precision and seamless efficiency. His meticulous attention to detail is the bedrock of KaSha's promise of a stress-free experience.",
        expertise: "Flawless Logistics & Operational Excellence"
    },
    { 
        id: 3, 
        name: 'Rajat Tyagi', 
        role: 'Creative Head', 
        imageUrl: 'https://images.unsplash.com/photo-1622635276427-3805b5e3f118?w=400&h=400&fit=crop&q=80',
        bio: "The creative force behind KaSha's iconic event designs. Rajat blends artistry with innovation to create immersive and breathtaking atmospheres that leave a lasting impression on every guest.",
        expertise: "Immersive Theme & Ambiance Design"
    },
    {
        id: 4,
        name: 'Arjun Khanna',
        role: 'Head of Production',
        imageUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop&q=80',
        bio: 'Arjun brings technical wizardry to life, managing everything from colossal stage setups to intricate sound and lighting. He ensures every production is a state-of-the-art spectacle.',
        expertise: "State-of-the-Art Technical Production"
    },
    {
        id: 5,
        name: 'Priya Sharma',
        role: 'Lead Wedding Planner',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80',
        bio: 'With a heart for romance and an eye for detail, Priya crafts dream weddings. She is dedicated to personalizing every celebration, making each couple’s journey truly unique and magical.',
        expertise: "Bespoke Destination Weddings"
    },
    {
        id: 6,
        name: 'Vikram Singh',
        role: 'Head of Corporate Relations',
        imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&q=80',
        bio: 'Vikram is the strategic mind behind our corporate events. He excels at understanding brand objectives and curating impactful experiences that drive business results and foster key relationships.',
        expertise: "Strategic Corporate Galas & MICE"
    },
];

export const PROCESS_STEPS = [
    {
        icon: DesignIcon,
        title: 'Design',
        description: 'We begin by conceptualizing your vision, crafting a unique theme and aesthetic that tells your story.'
    },
    {
        icon: PlanIcon,
        title: 'Plan',
        description: 'Our team meticulously plans every detail, from vendor management to logistical coordination, ensuring a seamless flow.'
    },
    {
        icon: ProductionIcon,
        title: 'Production',
        description: 'We bring the designs to life, managing all fabrication, technical setups, and on-site infrastructure.'
    },
    {
        icon: ExecutionIcon,
        title: 'Execution',
        description: 'On the event day, we provide flawless on-site management, allowing you to enjoy a stress-free experience.'
    }
];

export const CITIES_DATA = [
    { name: 'Delhi', imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=800&fit=crop&q=80' },
    { name: 'Jaipur', imageUrl: 'https://images.unsplash.com/photo-1599661046223-e067858d4a69?w=600&h=800&fit=crop&q=80' },
    { name: 'Mumbai', imageUrl: 'https://images.unsplash.com/photo-1562979314-bee7453e911c?w=600&h=800&fit=crop&q=80' },
    { name: 'Goa', imageUrl: 'https://images.unsplash.com/photo-1560179406-11612d462472?w=600&h=800&fit=crop&q=80' },
    { name: 'Udaipur', imageUrl: 'https://images.unsplash.com/photo-1596713737229-3733a46985a7?w=600&h=800&fit=crop&q=80' },
    { name: 'Bangalore', imageUrl: 'https://images.unsplash.com/photo-1596162235222-353d14334346?w=600&h=800&fit=crop&q=80' },
];

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
    {
        icon: MapPinIcon,
        title: 'Pan-India Presence',
        description: 'From the palaces of Rajasthan to the beaches of Goa, we execute flawless events anywhere in India.'
    },
    {
        icon: PuzzlePieceIcon,
        title: 'End-to-End Service',
        description: 'One roof for all your needs: ideation, design, production, vendor management, and execution.'
    },
    {
        icon: SparklesIcon,
        title: 'Unmatched Creativity',
        description: 'Our creative team designs bespoke concepts that are innovative, elegant, and uniquely yours.'
    }
];

export const CAREERS_DATA: JobOpening[] = [
    {
        id: 1,
        title: 'Senior Event Manager',
        location: 'Delhi, India',
        type: 'Full-time',
        description: 'Lead our most prestigious accounts, managing large-scale weddings and corporate events from conception to completion. 5+ years of experience required.'
    },
    {
        id: 2,
        title: 'Creative Designer',
        location: 'Remote / Delhi',
        type: 'Full-time',
        description: 'Conceptualize and design stunning event aesthetics, themes, and layouts. Proficiency in design software and a strong portfolio are essential.'
    },
    {
        id: 3,
        title: 'Production Intern',
        location: 'Mumbai, India',
        type: 'Internship',
        description: 'Assist the production team with on-site event setup, vendor coordination, and logistics. A great opportunity to learn from the best in the industry.'
    }
];

export const PARTNERS_DATA = [
    { name: 'Partner One', logoUrl: 'https://images.unsplash.com/photo-1618588507085-c79565432917?w=200&h=100&fit=crop&q=80' },
    { name: 'Partner Two', logoUrl: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=200&h=100&fit=crop&q=80' },
    { name: 'Partner Three', logoUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=200&h=100&fit=crop&q=80' },
    { name: 'Partner Four', logoUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=200&h=100&fit=crop&q=80' },
    { name: 'Partner Five', logoUrl: 'https://images.unsplash.com/photo-1554189097-f5ab42414924?w=200&h=100&fit=crop&q=80' },
    { name: 'Partner Six', logoUrl: 'https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?w=200&h=100&fit=crop&q=80' },
];

export const CALCULATOR_DATA = {
    eventTypes: [
        { 
            id: 'weddings', 
            name: 'Wedding', 
            baseCost: 500000, 
            perGuestCost: 7500,
            description: "Crafting unforgettable unions with elegance and precision. Our wedding packages provide a comprehensive foundation, covering essential planning, coordination, and vendor management for your special day.",
            applicableAddons: ['venue_decor_wedding', 'entertainment_wedding', 'food_beverage_wedding', 'photo_media', 'guest_management_wedding']
        },
        { 
            id: 'corporate-events', 
            name: 'Corporate Event', 
            baseCost: 250000, 
            perGuestCost: 4000,
            description: "Executing professional events that reflect your brand’s prestige. This estimate covers core logistics for conferences, product launches, or galas, including planning and on-site coordination.",
            applicableAddons: ['venue_decor_corporate', 'production_technical', 'entertainment_corporate', 'food_beverage_corporate', 'guest_management_corporate']
        },
        { 
            id: 'destination-weddings', 
            name: 'Destination Wedding', 
            baseCost: 1500000, 
            perGuestCost: 15000,
            description: "Curating magical weddings in breathtaking locations. The base cost includes multi-day planning, international vendor coordination, and comprehensive travel logistics for you and your guests.",
            applicableAddons: ['venue_decor_wedding', 'entertainment_wedding', 'food_beverage_wedding', 'photo_media', 'guest_management_destination']
        },
        { 
            id: 'concerts-live-shows', 
            name: 'Concert / Live Show', 
            baseCost: 1000000, 
            perGuestCost: 1500,
            description: "Producing electrifying live experiences for massive audiences. This covers fundamental production management, venue liaison, and core technical crew coordination for a seamless show.",
            applicableAddons: ['production_technical_concert', 'entertainment_concert', 'guest_management_concert']
        },
        { 
            id: 'brand-activations', 
            name: 'Brand Activation', 
            baseCost: 300000, 
            perGuestCost: 1000,
            description: "Creating immersive brand experiences that captivate audiences. Our base estimate includes concept development, fabrication oversight, and execution of pop-ups, launches, or experiential marketing campaigns.",
            applicableAddons: ['venue_decor_corporate', 'production_technical', 'guest_management_corporate']
        },
        { 
            id: 'sports-events', 
            name: 'Sports Event', 
            baseCost: 400000, 
            perGuestCost: 800,
            description: "Organizing dynamic marathons, runathons, and corporate sports days. The foundational cost includes route planning, safety management, registration setup, and on-ground logistics.",
            applicableAddons: ['production_technical_sports', 'guest_management_sports']
        },
    ],
    addonCategories: {
        'venue_decor_wedding': {
            category: 'Venue & Decor',
            items: [
                { id: 'venue_sourcing_5star', name: '5-Star Venue Sourcing', cost: 250000 },
                { id: 'thematic_decor_wedding', name: 'Bespoke Thematic Decor', cost: 400000 },
                { id: 'floral_design_luxury', name: 'Luxury Floral Design', cost: 150000 },
                { id: 'lighting_design_ambience', name: 'Advanced Ambience Lighting', cost: 120000 },
            ],
        },
        'venue_decor_corporate': {
            category: 'Venue & Branding',
            items: [
                { id: 'conference_venue', name: 'Conference Venue Sourcing', cost: 150000 },
                { id: 'branded_environment', name: 'Branded Environment Design', cost: 200000 },
                { id: 'modular_staging', name: 'Modular Staging & Backdrops', cost: 100000 },
            ],
        },
        'entertainment_wedding': {
            category: 'Entertainment',
            items: [
                { id: 'celebrity_artist_wedding', name: 'Celebrity Artist/Performer', cost: 1000000 },
                { id: 'live_band_premium', name: 'Premium Live Band (5-piece)', cost: 200000 },
                { id: 'dj_pro_console', name: 'Professional DJ with Console', cost: 80000 },
                { id: 'traditional_performers', name: 'Traditional & Folk Performers', cost: 60000 },
            ],
        },
        'entertainment_corporate': {
            category: 'Engagement & Entertainment',
            items: [
                { id: 'keynote_speaker', name: 'Keynote Speaker Booking', cost: 500000 },
                { id: 'professional_mc', name: 'Professional Event Host / MC', cost: 75000 },
                { id: 'corporate_live_band', name: 'Corporate Live Band / DJ', cost: 150000 },
                { id: 'interactive_workshop', name: 'Interactive Workshop/Activity', cost: 100000 },
            ],
        },
        'entertainment_concert': {
            category: 'Talent & Production',
            items: [
                { id: 'artist_rider_management', name: 'Artist & Rider Management', cost: 300000 },
                { id: 'opening_acts', name: 'Opening Acts Coordination', cost: 150000 },
            ],
        },
        'food_beverage_wedding': {
            category: 'Food & Beverage',
            items: [
                { id: 'premium_catering_wedding', name: 'Multi-Cuisine Premium Catering', cost: 3000, perGuest: true },
                { id: 'mixology_bar_wedding', name: 'Expert Mixology Bar', cost: 150000 },
                { id: 'designer_cake_wedding', name: 'Designer Wedding Cake', cost: 50000 },
            ],
        },
         'food_beverage_corporate': {
            category: 'Food & Beverage',
            items: [
                { id: 'corporate_catering', name: 'Corporate Catering (Buffet/Plated)', cost: 2500, perGuest: true },
                { id: 'networking_cocktail_bar', name: 'Networking Cocktail Bar', cost: 120000 },
                { id: 'branded_refreshments', name: 'Branded Refreshment Stations', cost: 40000 },
            ],
        },
        'production_technical': {
            category: 'Production & Technical',
            items: [
                { id: 'branded_stage_set', name: 'Branded Stage & Set Design', cost: 300000 },
                { id: 'professional_av', name: 'Professional A/V System', cost: 150000 },
                { id: 'led_walls_visuals', name: 'Large LED Walls & Visuals', cost: 250000 },
                { id: 'multi_cam_streaming', name: 'Multi-cam Live Streaming', cost: 75000 },
            ],
        },
        'production_technical_concert': {
            category: 'Production & Technical',
            items: [
                { id: 'concert_stage_rigging', name: 'Large Scale Staging & Rigging', cost: 800000 },
                { id: 'concert_sound_system', name: 'Concert Grade Sound System', cost: 500000 },
                { id: 'concert_lighting', name: 'Intelligent Lighting & FX', cost: 400000 },
                { id: 'broadcast_production', name: 'Live Broadcast Production', cost: 200000 },
            ],
        },
        'production_technical_sports': {
            category: 'Event Infrastructure',
            items: [
                { id: 'start_finish_setup', name: 'Start/Finish Line Gantry & Setup', cost: 150000 },
                { id: 'course_barricading', name: 'Route Barricading & Signage', cost: 100000 },
                { id: 'timing_chip_system', name: 'Official Timing Chip System', cost: 80000 },
            ],
        },
        'photo_media': {
            category: 'Photography & Media',
            items: [
                { id: 'elite_photo_team', name: 'Elite Photography Team', cost: 200000 },
                { id: 'cinematic_video_team', name: 'Cinematic Videography', cost: 250000 },
                { id: 'drone_aerial_coverage', name: 'Drone & Aerial Coverage', cost: 80000 },
                { id: 'interactive_photo_booth', name: 'Interactive Photo Booth', cost: 40000 },
            ],
        },
        'guest_management_wedding': {
            category: 'Guest Management',
            items: [
                { id: 'designer_invites', name: 'Designer Invitations (Digital & Print)', cost: 70000 },
                { id: 'luxury_transport_wedding', name: 'Luxury Guest Transportation', cost: 100000 },
                { id: 'curated_gifting_wedding', name: 'Curated Guest Gifting', cost: 1500, perGuest: true },
                { id: 'wedding_website_app', name: 'Custom Wedding Website/App', cost: 60000 },
            ],
        },
        'guest_management_corporate': {
            category: 'Guest & Attendee Management',
            items: [
                { id: 'registration_badging', name: 'Digital Registration & Badging', cost: 50000 },
                { id: 'corporate_gifting', name: 'Premium Corporate Gifting', cost: 2000, perGuest: true },
                { id: 'vip_logistics', name: 'VIP & Speaker Logistics', cost: 80000 },
            ],
        },
        'guest_management_destination': {
            category: 'Guest Management (Destination)',
            items: [
                { id: 'full_guest_logistics', name: 'Full Guest Travel & Logistics', cost: 200000 },
                { id: 'hospitality_desk', name: '24/7 Hospitality Desk', cost: 80000 },
                { id: 'curated_local_experiences', name: 'Curated Local Experiences', cost: 100000 },
                { id: 'destination_gifting', name: 'Destination-themed Gifting', cost: 2500, perGuest: true },
            ],
        },
        'guest_management_concert': {
            category: 'Audience Management',
            items: [
                { id: 'ticketing_platform', name: 'Ticketing Platform Integration', cost: 100000 },
                { id: 'access_control_security', name: 'Access Control & Security', cost: 250000 },
                { id: 'crowd_management_staff', name: 'Crowd Management Staffing', cost: 150000 },
            ],
        },
        'guest_management_sports': {
            category: 'Participant & Spectator Management',
            items: [
                { id: 'online_registration_portal', name: 'Online Registration Portal', cost: 60000 },
                { id: 'bib_kit_distribution', name: 'Bib & Kit Distribution Management', cost: 50000 },
                { id: 'medical_support', name: 'On-site Medical Support', cost: 70000 },
                { id: 'volunteer_management', name: 'Volunteer Management Program', cost: 40000 },
            ],
        },
    },
};

export const BLOG_DATA: BlogPost[] = [
    {
        id: 1,
        slug: 'top-5-destination-wedding-locations-2024',
        title: 'Top 5 Destination Wedding Locations in India for 2024',
        author: 'Rajat Tyagi',
        date: 'October 26, 2023',
        imageUrl: 'https://images.unsplash.com/photo-1599805908902-692a71f72a44?w=1200&q=80',
        excerpt: 'Discover the most breathtaking locations in India to host your dream destination wedding. From royal palaces to serene beaches, we explore the top spots for an unforgettable celebration.',
        content: `
            <p class="mb-6">Choosing the perfect location for a destination wedding is the first step towards creating a magical experience. In 2024, India offers an unparalleled blend of tradition, luxury, and natural beauty. Here are our top 5 picks for a wedding that you and your guests will remember forever.</p>
            
            <h3 class="text-2xl font-heading text-brand-gold mt-8 mb-4">1. Udaipur, Rajasthan - The City of Lakes</h3>
            <p class="mb-6">Known for its majestic palaces and romantic lakeside settings, Udaipur is the epitome of royal elegance. Imagine exchanging vows at a venue like the Oberoi Udaivilas or the Taj Lake Palace, with the Aravalli hills as your backdrop. It's a fairy-tale setting come to life.</p>
            
            <h3 class="text-2xl font-heading text-brand-gold mt-8 mb-4">2. Goa - Sun, Sand, and Vows</h3>
            <p class="mb-6">For couples who dream of a beach wedding, Goa is the ultimate destination. Whether you prefer a quiet, intimate ceremony on a secluded South Goa beach or a lavish celebration at a luxury resort in North Goa, the options are endless. The laid-back vibe combined with stunning sunsets creates a perfect celebratory mood.</p>
            
            <blockquote class="border-l-4 border-brand-gold pl-4 py-2 my-6 text-gray-400 italic">
                "A successful event is not just about the grand gestures, but the seamless execution of a thousand tiny details."
            </blockquote>
            
            <h3 class="text-2xl font-heading text-brand-gold mt-8 mb-4">3. Jaipur, Rajasthan - The Pink City's Charm</h3>
            <p class="mb-6">Jaipur offers a vibrant cultural backdrop with its historic forts and heritage hotels. Venues like Rambagh Palace or Samode Palace provide a regal ambiance that is hard to match. A wedding here is a dive into India's rich history and opulence.</p>
        `,
        tags: ['Weddings', 'Destinations', 'Planning', 'Luxury']
    },
    {
        id: 2,
        slug: 'planning-a-corporate-gala-that-wows',
        title: 'How to Plan a Corporate Gala That Wows',
        author: 'Mateen',
        date: 'September 15, 2023',
        imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd51622?w=1200&q=80',
        excerpt: 'A corporate gala is more than just a party; it\'s a reflection of your brand. Learn the key elements to planning an event that leaves a lasting impression on your guests.',
        content: `
            <p class="mb-6">A successful corporate gala requires meticulous planning and a clear vision. It's an opportunity to celebrate achievements, build relationships, and reinforce your brand's prestige. Here are the essential steps to ensure your gala is a resounding success.</p>

            <h3 class="text-2xl font-heading text-brand-gold mt-8 mb-4">Define Your Objectives</h3>
            <p class="mb-6">Before you begin planning, establish clear goals. Is the primary purpose to reward employees, impress clients, or launch a new product? Your objectives will guide every decision, from the venue to the entertainment.</p>

            <h3 class="text-2xl font-heading text-brand-gold mt-8 mb-4">Create an Immersive Theme</h3>
            <p class="mb-6">A cohesive theme elevates an event from ordinary to extraordinary. The theme should be integrated into every aspect, including invitations, decor, lighting, and even the menu. It creates a memorable and engaging atmosphere for your guests.</p>
            
            <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-gray-300">
                <li>Secure a high-profile keynote speaker.</li>
                <li>Integrate interactive technology like live polling or social media walls.</li>
                <li>Offer unique and high-quality corporate gifting.</li>
                <li>Ensure seamless technical production for all presentations and performances.</li>
            </ul>
        `,
        tags: ['Corporate Events', 'Planning', 'Branding']
    },
    {
        id: 3,
        slug: 'the-art-of-event-production',
        title: 'Behind the Scenes: The Art of Flawless Event Production',
        author: 'Mujeeb',
        date: 'August 02, 2023',
        imageUrl: 'https://images.unsplash.com/photo-1575024357670-2b5164f47061?w=1200&q=80',
        excerpt: 'What does it take to bring a grand event vision to life? We pull back the curtain on the world of event production, from stage design to technical coordination.',
        content: `
            <p class="mb-6">Event production is the magic that happens behind the scenes to create a seamless and impactful experience. It's a complex dance of logistics, technology, and creativity. At KaSha, our production process is built on a foundation of precision and innovation.</p>

            <h3 class="text-2xl font-heading text-brand-gold mt-8 mb-4">1. Stage Design & Fabrication</h3>
            <p class="mb-6">The stage is the focal point of any major event. Our process begins with designing a custom stage that reflects the event's theme and brand identity. We then move to fabrication, using state-of-the-art materials and technology to build a structure that is both stunning and safe.</p>

            <h3 class="text-2xl font-heading text-brand-gold mt-8 mb-4">2. Sound & Lighting</h3>
            <p class="mb-6">Audio and visual elements are critical to setting the mood. We use professional-grade sound systems to ensure crystal-clear audio and sophisticated lighting designs to create ambiance, highlight key moments, and transform the venue. From concert-grade systems to subtle atmospheric lighting, every detail is carefully planned.</p>
        `,
        tags: ['Production', 'Technology', 'Concerts']
    }
];