import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_INFO, SERVICES_DATA, PORTFOLIO_DATA, TESTIMONIALS_DATA, PROCESS_STEPS, CITIES_DATA, WHY_CHOOSE_US_DATA, PARTNERS_DATA, BLOG_DATA } from '../constants';
import { Service, Testimonial, BlogPost } from '../types';
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon, XIcon, CalendarIcon } from '../components/Icons';
import { generateEventIdeas } from '../services/geminiService';


const heroSlides = [
    {
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd51622?w=1920&q=80',
        title: 'Crafting Unforgettable Moments',
        tagline: 'From grand weddings to exclusive corporate events, we bring your vision to life.'
    },
    {
        image: 'https://images.unsplash.com/photo-1587899769963-2cf35a512c1d?w=1920&q=80',
        title: 'Luxury, Redefined',
        tagline: 'Experience meticulous planning and flawless execution for events that inspire.'
    },
    {
        image: 'https://images.unsplash.com/photo-1628198342416-2b4a1b025b5d?w=1920&q=80',
        title: 'Pan-India Presence',
        tagline: 'Creating extraordinary events in the most breathtaking locations across the nation.'
    }
];

const Hero: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [eventType, setEventType] = useState('');
    const [ideas, setIdeas] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!eventType.trim()) {
            setError('Please enter an event type.');
            return;
        }
        setError('');
        setIsLoading(true);
        setIdeas('');
        try {
            const result = await generateEventIdeas(eventType);
            setIdeas(result);
        } catch (e) {
            setError('Failed to generate ideas. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const closeIdeas = () => {
        setIdeas('');
        setError('');
    };

    const nextSlide = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % heroSlides.length);
    }, []);
    
    useEffect(() => {
        const timer = setTimeout(nextSlide, 7000);
        return () => clearTimeout(timer);
    }, [currentIndex, nextSlide]);

    return (
        <section className="relative h-screen flex items-center justify-center text-center text-white bg-brand-dark">
            {heroSlides.map((slide, index) => (
                 <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url('${slide.image}')` }}
                ></div>
            ))}
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 p-4 transition-opacity duration-1000 flex flex-col items-center">
                <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-widest leading-tight">
                    {heroSlides[currentIndex].title}
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto font-light">
                    {heroSlides[currentIndex].tagline}
                </p>
                <Link
                    to="/contact"
                    className="mt-8 inline-block bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-sm hover:bg-brand-gold-light transition-colors duration-300 transform hover:scale-105"
                >
                    Plan Your Event
                </Link>

                {/* Inspiration Generator */}
                <div className="mt-12 max-w-2xl w-full mx-auto p-6 bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg animate-fadeInUp">
                    <h3 className="font-semibold text-white mb-3">Need Inspiration?</h3>
                    <p className="text-gray-300 text-sm mb-4">
                        Let our AI spark your creativity for your next event.
                    </p>
                    <form onSubmit={handleGenerate} className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="text"
                            value={eventType}
                            onChange={(e) => { setEventType(e.target.value); setError(''); }}
                            placeholder="e.g., 'Luxury Wedding', 'Corporate Retreat'"
                            className="flex-grow bg-white/10 border border-gray-700 rounded-md py-2 px-4 text-white placeholder-gray-400 focus:ring-brand-gold focus:border-brand-gold focus:bg-white/20 transition-colors"
                        />
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-brand-gold text-brand-dark font-bold py-2 px-6 rounded-md hover:bg-brand-gold-light transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-wait"
                        >
                            {isLoading ? 'Generating...' : 'Get Ideas'}
                        </button>
                    </form>
                    {error && <p className="text-red-400 mt-2 text-xs">{error}</p>}
                </div>
            </div>

            {/* Loading Spinner Overlay */}
            {isLoading && (
                <div className="absolute inset-0 z-20 bg-black/70 flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-brand-gold"></div>
                </div>
            )}

            {/* Results Modal */}
            {ideas && (
                <div className="absolute inset-0 z-20 bg-black/70 flex items-center justify-center p-4 animate-fadeIn">
                    <div className="relative max-w-3xl w-full bg-brand-dark p-8 rounded-lg border border-brand-gold/50 shadow-2xl">
                        <button onClick={closeIdeas} className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
                            <XIcon />
                        </button>
                        <h4 className="text-2xl font-heading text-brand-gold mb-4">Here are some ideas for "{eventType}":</h4>
                        <pre className="text-gray-200 whitespace-pre-wrap font-body bg-black/20 p-4 rounded-md max-h-[50vh] overflow-y-auto">{ideas}</pre>
                    </div>
                </div>
            )}
            <style>{`
                 @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
                    animation-delay: 0.5s;
                    opacity: 0;
                }
                 @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out forwards;
                }
            `}</style>
        </section>
    );
};


const AboutPreview: React.FC = () => (
    <section className="py-20 bg-brand-light dark:bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 scroll-target">
                <h2 className="text-4xl font-heading text-brand-dark dark:text-white">About <span className="text-brand-gold">KaSha</span></h2>
                <div className="w-20 h-1 bg-brand-gold my-4"></div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    KaSha is a premium pan-India event management brand offering end-to-end solutions for weddings, corporate events, and large-scale activations. We bring visions to life through meticulous planning, creative design, and flawless execution.
                </p>
                <Link to="/about" className="text-brand-gold font-semibold hover:text-brand-gold-light transition-colors">
                    Learn More &rarr;
                </Link>
            </div>
            <div className="order-1 md:order-2 scroll-target" style={{ transitionDelay: '200ms' }}>
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80" alt="KaSha Team" className="rounded-lg shadow-2xl"/>
            </div>
        </div>
    </section>
);


const ServicesPreview: React.FC<{ services: Service[] }> = ({ services }) => (
    <section className="py-20 bg-brand-light-gray dark:bg-brand-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 scroll-target">
                <h2 className="text-4xl font-heading text-brand-dark dark:text-white">Our Services</h2>
                <div className="w-20 h-1 bg-brand-gold my-4 mx-auto"></div>
                <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">From intimate weddings to grand corporate galas, we deliver excellence.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <Link to={`/services/${service.slug}`} key={service.id} className="scroll-target group block bg-brand-light dark:bg-brand-dark rounded-lg overflow-hidden shadow-lg hover:shadow-brand-gold/20 transform hover:-translate-y-2 transition-all duration-300" style={{ transitionDelay: `${index * 100}ms` }}>
                        <div className="relative h-48">
                            <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-heading text-brand-dark dark:text-white group-hover:text-brand-gold transition-colors">{service.title}</h3>
                            <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">{service.shortDescription}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="text-center mt-12 scroll-target">
                 <Link to="/services" className="text-brand-gold font-semibold hover:text-brand-gold-light transition-colors">
                    View All Services &rarr;
                </Link>
            </div>
        </div>
    </section>
);

const OurProcess: React.FC = () => (
    <section className="py-20 bg-brand-light dark:bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 scroll-target">
                <h2 className="text-4xl font-heading text-brand-dark dark:text-white">Our Path to Perfection</h2>
                <div className="w-20 h-1 bg-brand-gold my-4 mx-auto"></div>
                <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">A streamlined process ensures flawless execution and unforgettable results.</p>
            </div>
            <div className="relative flex flex-col md:flex-row justify-between max-w-5xl mx-auto">
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-px border-t-2 border-dashed border-gray-300 dark:border-gray-700 -translate-y-1/2 -mt-10"></div>
                
                {PROCESS_STEPS.map((step, index) => (
                    <div key={index} className="scroll-target relative z-10 flex-1 text-center p-4" style={{ transitionDelay: `${index * 150}ms` }}>
                        <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 bg-brand-light-gray dark:bg-brand-gray rounded-full border-2 border-brand-gold/50 shadow-lg">
                           <div className="flex items-center justify-center w-20 h-20 bg-brand-light dark:bg-brand-dark rounded-full">
                                <step.icon className="text-brand-gold h-12 w-12"/>
                            </div>
                        </div>
                        <h3 className="text-xl font-heading font-bold text-brand-dark dark:text-white mb-2">{step.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const WhyChooseUs: React.FC = () => (
    <section className="py-20 bg-brand-light-gray dark:bg-brand-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 scroll-target">
                <h2 className="text-4xl font-heading text-brand-dark dark:text-white">Why Choose Us</h2>
                <div className="w-20 h-1 bg-brand-gold my-4 mx-auto"></div>
                <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">What sets us apart in the world of luxury event management.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {WHY_CHOOSE_US_DATA.map((item, index) => (
                    <div key={item.title} className="scroll-target p-8 text-center bg-brand-light dark:bg-brand-dark rounded-lg shadow-lg" style={{ transitionDelay: `${index * 150}ms` }}>
                        <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4">
                            <item.icon className="text-brand-gold" />
                        </div>
                        <h3 className="text-xl font-heading text-brand-gold mb-2">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const VisionEnginePreview: React.FC = () => (
    <section className="py-20 bg-brand-light dark:bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="scroll-target relative max-w-5xl mx-auto bg-brand-gray rounded-xl shadow-2xl overflow-hidden p-8 md:p-12 text-center md:text-left grid md:grid-cols-2 gap-8 items-center">
                 {/* Glowing background effect */}
                <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-brand-gold/20 via-transparent to-transparent animate-spin-slow -z-10"></div>
                
                <div className="relative z-10">
                    <h2 className="text-4xl font-heading text-white">Visualize Your Dream Event in Seconds</h2>
                    <div className="w-20 h-1 bg-brand-gold my-4 mx-auto md:mx-0"></div>
                    <p className="text-gray-300 mb-8">
                        Unleash your creativity with our AI-powered Vision Engine. Describe any event concept, from a lavish wedding mandap to a futuristic corporate stage, and watch it come to life instantly.
                    </p>
                    <Link
                        to="/image-generator"
                        className="inline-block bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-sm hover:bg-brand-gold-light transition-colors duration-300 transform hover:scale-105"
                    >
                        Try KaSha Vision Engine
                    </Link>
                </div>
                
                <div className="relative z-10 group">
                    <img 
                        src="https://images.unsplash.com/photo-1681244093370-983057398576?w=800&q=80" 
                        alt="AI Generated Event Concept" 
                        className="rounded-lg shadow-lg transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-center p-4 bg-black/50 rounded-md backdrop-blur-sm text-sm italic">
                            Prompt: "An opulent sangeet night in a Rajasthani palace courtyard, under a canopy of stars and fairy lights, with a grand central stage."
                        </p>
                    </div>
                </div>
                 <style>{`
                    @keyframes spin-slow {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                    .animate-spin-slow {
                        animation: spin-slow 20s linear infinite;
                    }
                `}</style>
            </div>
        </div>
    </section>
);


const PortfolioPreview: React.FC = () => (
    <section className="py-20 bg-brand-light dark:bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 scroll-target">
                <h2 className="text-4xl font-heading text-brand-dark dark:text-white">Our Portfolio</h2>
                <div className="w-20 h-1 bg-brand-gold my-4 mx-auto"></div>
                <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">A glimpse into the magical moments we've created.</p>
            </div>
            
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {PORTFOLIO_DATA.slice(0, 8).map((item, index) => (
                    <div key={item.id} className="scroll-target group relative overflow-hidden rounded-lg shadow-lg break-inside-avoid cursor-pointer" style={{ transitionDelay: `${index * 50}ms` }}>
                        <img 
                            src={item.imageUrl} 
                            alt={item.title} 
                            className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                            <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold">{item.category}</p>
                            <h3 className="text-xl font-heading font-bold mt-1">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
            
             <div className="text-center mt-12 scroll-target">
                 <Link to="/portfolio" className="text-brand-gold font-semibold hover:text-brand-gold-light transition-colors">
                    Explore Full Gallery &rarr;
                </Link>
            </div>
        </div>
    </section>
);


const BrowseByCity: React.FC = () => (
    <section className="py-20 bg-brand-light-gray dark:bg-brand-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 scroll-target">
                <h2 className="text-4xl font-heading text-brand-dark dark:text-white">Events Across India</h2>
                <div className="w-20 h-1 bg-brand-gold my-4 mx-auto"></div>
                <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Creating magic in every corner of the nation, from royal palaces to sun-kissed beaches.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {CITIES_DATA.map((city, index) => (
                    <div key={city.name} className="scroll-target relative group overflow-hidden rounded-lg shadow-lg h-64" style={{ transitionDelay: `${index * 100}ms` }}>
                         <img src={city.imageUrl} alt={city.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                         <h3 className="absolute bottom-4 left-4 text-white text-2xl font-heading font-bold">{city.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const BlogPreview: React.FC<{ posts: BlogPost[] }> = ({ posts }) => {
    if (!posts || posts.length === 0) return null;

    return (
        <section className="py-20 bg-brand-light dark:bg-brand-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 scroll-target">
                    <h2 className="text-4xl font-heading text-brand-dark dark:text-white">Event Insights</h2>
                    <div className="w-20 h-1 bg-brand-gold my-4 mx-auto"></div>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">The latest news, trends, and inspiration from our event experts.</p>
                </div>

                <div className="flex overflow-x-auto space-x-8 pb-8 scrollbar-hide scroll-target" style={{ scrollSnapType: 'x mandatory' }}>
                    {posts.map(post => (
                        <div key={post.id} className="flex-shrink-0 w-full sm:w-[45%] md:w-[30%] bg-brand-light-gray dark:bg-brand-gray rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2" style={{ scrollSnapAlign: 'start' }}>
                            <Link to={`/blog/${post.slug}`} className="block group">
                                <div className="h-56 overflow-hidden">
                                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                                        <CalendarIcon className="mr-2" />
                                        <span>{post.date}</span>
                                    </div>
                                    <h3 className="font-heading text-xl text-brand-dark dark:text-white mb-3 group-hover:text-brand-gold transition-colors duration-300 h-20 overflow-hidden">{post.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 h-24 overflow-hidden">{post.excerpt}</p>
                                    <span className="inline-block mt-4 text-brand-gold font-semibold text-sm">Read More &rarr;</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8 scroll-target">
                    <Link to="/blog" className="text-brand-gold font-semibold hover:text-brand-gold-light transition-colors">
                        View All Articles &rarr;
                    </Link>
                </div>
            </div>
            <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
        </section>
    );
};


const TestimonialSlider: React.FC<{ testimonials: Testimonial[] }> = ({ testimonials }) => {
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="py-20 bg-brand-light-gray dark:bg-brand-gray overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-target">
                <h2 className="text-4xl font-heading text-brand-dark dark:text-white">Words of Trust</h2>
                <div className="w-20 h-1 bg-brand-gold my-4 mx-auto"></div>
            </div>
            <div 
                className="relative w-full mt-12 group scroll-target"
                style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
            >
                <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
                    {duplicatedTestimonials.map((testimonial, index) => (
                        <div key={`${testimonial.id}-${index}`} className="flex-shrink-0 w-full sm:w-1/2 lg:w-[30%] xl:w-1/4 p-4">
                           <div className="bg-brand-light dark:bg-brand-dark p-8 rounded-lg shadow-2xl h-full flex flex-col items-center text-center relative">
                                <QuoteIcon className="text-brand-gold/20 dark:text-brand-gold/10 absolute -top-4 -left-4" />
                                <img src={testimonial.clientImageUrl} alt={testimonial.author} className="w-24 h-24 rounded-full mb-4 border-4 border-brand-gold shadow-xl" />
                                <p className="text-lg italic text-gray-600 dark:text-gray-300 mb-6 flex-grow">"{testimonial.quote}"</p>
                                <div className="w-12 h-px bg-gray-300 dark:bg-gray-700 my-2"></div>
                                <p className="font-bold text-brand-gold tracking-wider font-heading">{testimonial.author}</p>
                                <p className="text-gray-500 text-sm">{testimonial.event}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
             <style>{`
                @keyframes scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 60s linear infinite;
                }
            `}</style>
        </section>
    );
};

const OurPartners: React.FC = () => {
    const duplicatedPartners = [...PARTNERS_DATA, ...PARTNERS_DATA];

    return (
        <section className="py-20 bg-brand-light dark:bg-brand-dark overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 scroll-target">
                    <h2 className="text-4xl font-heading text-brand-dark dark:text-white">Our Esteemed Partners</h2>
                    <div className="w-20 h-1 bg-brand-gold my-4 mx-auto"></div>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">We are proud to collaborate with industry leaders to bring you the best.</p>
                </div>

                <div 
                    className="relative w-full group scroll-target"
                    style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
                >
                    <div className="flex items-center animate-scroll-partners group-hover:[animation-play-state:paused]">
                        {duplicatedPartners.map((partner, index) => (
                            <div key={`${partner.name}-${index}`} className="flex-shrink-0 w-1/3 md:w-1/4 lg:w-1/5 p-8">
                                <img
                                    src={partner.logoUrl}
                                    alt={partner.name}
                                    className="h-12 w-full object-contain grayscale hover:grayscale-0 transform hover:scale-110 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes scroll-partners {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .animate-scroll-partners {
                    animation: scroll-partners 40s linear infinite;
                }
            `}</style>
        </section>
    );
};


const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <ServicesPreview services={SERVICES_DATA.slice(0, 4)} />
      <OurProcess />
      <WhyChooseUs />
      <VisionEnginePreview />
      <PortfolioPreview />
      <BrowseByCity />
      <BlogPreview posts={BLOG_DATA} />
      <TestimonialSlider testimonials={TESTIMONIALS_DATA} />
      <OurPartners />
    </div>
  );
};

export default HomePage;