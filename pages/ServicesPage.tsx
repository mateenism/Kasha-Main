import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../constants';

const PageHeader: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => (
    <div className="relative bg-brand-light-gray dark:bg-brand-gray py-24 sm:py-32">
        <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80" alt="background" className="w-full h-full object-cover"/>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-heading font-bold text-brand-dark dark:text-white tracking-wider">{title}</h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

const ServiceCard: React.FC<{ service: typeof SERVICES_DATA[0], delay: number }> = ({ service, delay }) => (
    <Link to={`/services/${service.slug}`} className="scroll-target group block bg-brand-light-gray dark:bg-brand-gray rounded-lg overflow-hidden shadow-lg hover:shadow-brand-gold/20 transform hover:-translate-y-2 transition-all duration-300" style={{ transitionDelay: `${delay}ms`}}>
        <div className="relative h-56">
            <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
             <h3 className="absolute bottom-0 left-0 p-6 text-2xl font-heading text-white">{service.title}</h3>
        </div>
        <div className="p-6">
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">{service.shortDescription}</p>
             <span className="inline-block mt-4 text-brand-gold font-semibold text-sm group-hover:text-brand-gold-light transition-colors">
                Learn More &rarr;
            </span>
        </div>
    </Link>
);


const ServicesPage: React.FC = () => {
    return (
        <div className="bg-brand-light dark:bg-brand-dark">
            <PageHeader title="Our Services" subtitle="Comprehensive Solutions for Every Occasion" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES_DATA.map((service, index) => (
                        <ServiceCard key={service.id} service={service} delay={index * 100} />
                    ))}
                    <div className="scroll-target group flex flex-col items-center justify-center bg-brand-light-gray dark:bg-brand-gray rounded-lg p-6 text-center border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-brand-gold transition-colors duration-300" style={{ transitionDelay: `${SERVICES_DATA.length * 100}ms`}}>
                        <h3 className="text-2xl font-heading text-brand-dark dark:text-white">And Many More...</h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">We cater to all types of events, big or small. Contact us with your unique requirements.</p>
                         <Link to="/contact" className="mt-4 text-brand-gold font-semibold text-sm group-hover:text-brand-gold-light transition-colors">
                            Enquire Now &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;