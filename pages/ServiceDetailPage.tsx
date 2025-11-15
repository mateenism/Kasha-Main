import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES_DATA } from '../constants';
import { PuzzlePieceIcon } from '../components/Icons';

const ServiceDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const service = SERVICES_DATA.find(s => s.slug === slug);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    return (
        <div className="bg-brand-light dark:bg-brand-dark">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center text-center bg-brand-dark">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${service.imageUrl})` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent"></div>
                <div className="relative z-10 p-4 animate-fadeIn text-white">
                    <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-widest leading-tight">
                        {service.title}
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto font-light">
                        {service.shortDescription}
                    </p>
                </div>
            </div>

            {/* Description */}
            <section className="py-20 bg-brand-light dark:bg-brand-dark">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <div className="order-2 md:order-1 scroll-target">
                            <h2 className="text-4xl font-heading text-brand-dark dark:text-white">Experience Unparalleled Excellence</h2>
                            <div className="w-24 h-1 bg-brand-gold my-6"></div>
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                {service.longDescription}
                            </p>
                        </div>
                        <div className="order-1 md:order-2 scroll-target" style={{ transitionDelay: '200ms' }}>
                            <img src={service.showcaseImages[0]} alt={service.title} className="rounded-lg shadow-2xl w-full h-auto object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Services */}
            {service.detailedServices && (
                <section className="py-20 bg-brand-light-gray dark:bg-brand-gray">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <div className="text-center mb-16 scroll-target">
                            <h2 className="text-4xl font-heading text-brand-dark dark:text-white">Crafting Your Perfect Event</h2>
                            <div className="w-20 h-1 bg-brand-gold my-4 mx-auto"></div>
                            <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">{service.detailedServices.title}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {service.detailedServices.items.map((item, index) => (
                                <div key={index} className="scroll-target bg-brand-light dark:bg-brand-dark p-8 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-brand-gold/50 transition-all duration-300 transform hover:-translate-y-2 group shadow-lg hover:shadow-brand-gold/10" style={{ transitionDelay: `${index * 100}ms` }}>
                                    <h3 className="text-xl font-heading text-brand-gold group-hover:text-brand-dark dark:group-hover:text-white transition-colors duration-300 mb-3">{item.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Process */}
            <section className="py-20 bg-brand-light dark:bg-brand-dark">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 scroll-target">
                        <h2 className="text-4xl font-heading text-brand-dark dark:text-white">Our Path to Perfection</h2>
                        <div className="w-20 h-1 bg-brand-gold my-4 mx-auto"></div>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">A meticulous approach to ensure flawless execution and unforgettable results.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {service.process.map((step, index) => (
                            <div key={index} className="scroll-target relative bg-brand-light-gray dark:bg-brand-gray p-8 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-brand-gold/50 transition-colors duration-300 transform hover:-translate-y-2 group shadow-lg hover:shadow-brand-gold/10" style={{ transitionDelay: `${index * 150}ms` }}>
                                <span className="absolute -top-2 -right-2 text-8xl font-heading font-bold text-black/5 dark:text-white/5 group-hover:text-brand-gold/10 transition-all duration-300 select-none">
                                    {`0${index + 1}`}
                                </span>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-heading text-brand-gold mb-3">{step.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Service Flexibility */}
            {service.serviceFlexibility && (
                <section className="py-20 bg-brand-light-gray dark:bg-brand-gray">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl scroll-target">
                        <div className="text-center p-10 border border-gray-200 dark:border-gray-800 rounded-lg bg-brand-light dark:bg-brand-dark shadow-xl">
                            <PuzzlePieceIcon className="mx-auto text-brand-gold mb-4"/>
                            <h2 className="text-3xl font-heading text-brand-dark dark:text-white">{service.serviceFlexibility.title}</h2>
                            <div className="w-20 h-1 bg-brand-gold my-4 mx-auto"></div>
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                {service.serviceFlexibility.description}
                            </p>
                        </div>
                    </div>
                </section>
            )}

             {/* Showcase */}
            <section className="py-20 bg-brand-light dark:bg-brand-dark">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 scroll-target">
                        <h2 className="text-4xl font-heading text-brand-dark dark:text-white">Showcase</h2>
                        <div className="w-20 h-1 bg-brand-gold my-4 mx-auto"></div>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">A glimpse into the beautiful moments we've helped create.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {service.showcaseImages.map((image, index) => (
                             <div key={index} className="scroll-target overflow-hidden rounded-lg shadow-lg group relative h-80" style={{ transitionDelay: `${index * 100}ms` }}>
                                <img src={image} alt={`${service.title} showcase ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-24 bg-brand-light-gray dark:bg-brand-gray">
                 <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f550bb4e3f?w=1920&q=80')"}}></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-light-gray via-brand-light-gray/80 to-brand-light-gray dark:from-brand-gray dark:via-brand-gray/80 dark:to-brand-gray"></div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-target">
                    <h2 className="text-3xl font-heading text-brand-dark dark:text-white">Plan Your Next {service.title} With Us</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">Contact our experts to start planning an unforgettable experience that will leave a lasting impression.</p>
                    <Link
                        to="/contact"
                        className="mt-8 inline-block bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-sm hover:bg-brand-gold-light transition-colors duration-300 transform hover:scale-105"
                    >
                        Enquire Now
                    </Link>
                </div>
            </section>
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 1s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default ServiceDetailPage;