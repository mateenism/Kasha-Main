import React, { useState, useMemo } from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { PortfolioItem } from '../types';

const PageHeader: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => (
    <div className="relative bg-brand-light-gray dark:bg-brand-gray py-24 sm:py-32">
        <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1582574581513-b5417937e735?w=1920&q=80" alt="background" className="w-full h-full object-cover"/>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-heading font-bold text-brand-dark dark:text-white tracking-wider">{title}</h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

type Category = 'all' | PortfolioItem['category'];

const PortfolioPage: React.FC = () => {
    const [filter, setFilter] = useState<Category>('all');

    const categories: {key: Category, name: string}[] = [
        { key: 'all', name: 'All' },
        { key: 'weddings', name: 'Weddings' },
        { key: 'corporate', name: 'Corporate' },
        { key: 'concerts', name: 'Concerts' },
        { key: 'sports', name: 'Sports' },
        { key: 'activations', name: 'Activations' },
    ];

    const filteredPortfolio = useMemo(() => {
        if (filter === 'all') {
            return PORTFOLIO_DATA;
        }
        return PORTFOLIO_DATA.filter(item => item.category === filter);
    }, [filter]);

    return (
        <div className="bg-brand-light dark:bg-brand-dark">
            <PageHeader title="Our Portfolio" subtitle="A Visual Journey Through Our Finest Creations" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Filters */}
                <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12 scroll-target">
                    {categories.map(cat => (
                         <button
                            key={cat.key}
                            onClick={() => setFilter(cat.key)}
                            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                                filter === cat.key
                                ? 'bg-brand-gold text-brand-dark'
                                : 'bg-brand-light-gray dark:bg-brand-gray text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                            }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {filteredPortfolio.map((item, index) => (
                         <div key={item.id} className="scroll-target overflow-hidden rounded-lg shadow-lg group relative break-inside-avoid" style={{ transitionDelay: `${index * 50}ms`}}>
                            <img src={item.imageUrl} alt={item.title} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <h3 className="text-white font-heading text-lg">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;