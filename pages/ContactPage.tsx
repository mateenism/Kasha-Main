import React, { useState } from 'react';
import { BRAND_INFO } from '../constants';
import { generateEventIdeas } from '../services/geminiService';

const PageHeader: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => (
    <div className="relative bg-brand-light-gray dark:bg-brand-gray py-24 sm:py-32">
        <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1556740738-b6a63e2775d2?w=1920&q=80" alt="background" className="w-full h-full object-cover"/>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-heading font-bold text-brand-dark dark:text-white tracking-wider">{title}</h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

const EventIdeaGenerator: React.FC = () => {
    const [eventType, setEventType] = useState('');
    const [ideas, setIdeas] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerate = async () => {
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

    return (
        <div className="scroll-target bg-brand-light-gray dark:bg-brand-dark p-8 rounded-lg mt-16 border border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-heading text-brand-gold mb-4">Need Inspiration?</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">Use our AI-powered idea generator to spark your creativity.</p>
            <div className="flex flex-col sm:flex-row gap-4">
                <input
                    type="text"
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    placeholder="e.g., 'Luxury Wedding', 'Corporate Retreat'"
                    className="flex-grow bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 px-4 text-brand-dark dark:text-white focus:ring-brand-gold focus:border-brand-gold"
                />
                <button
                    onClick={handleGenerate}
                    disabled={isLoading}
                    className="bg-brand-gold text-brand-dark font-bold py-2 px-6 rounded-md hover:bg-brand-gold-light transition-colors duration-300 disabled:bg-gray-500"
                >
                    {isLoading ? 'Generating...' : 'Generate Ideas'}
                </button>
            </div>
            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
            {ideas && (
                 <div className="mt-6 p-6 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-lg">
                    <h4 className="text-xl font-heading text-brand-dark dark:text-white mb-4">Here are some ideas:</h4>
                    <pre className="text-gray-600 dark:text-gray-300 whitespace-pre-wrap font-body">{ideas}</pre>
                </div>
            )}
        </div>
    )
}

const ContactPage: React.FC = () => {
    return (
        <div className="bg-brand-light dark:bg-brand-dark">
            <PageHeader title="Contact Us" subtitle="Let's Create Your Next Unforgettable Event" />
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div className="scroll-target">
                            <h2 className="text-3xl font-heading text-brand-dark dark:text-white">Get in Touch</h2>
                            <div className="w-20 h-1 bg-brand-gold my-4"></div>
                            <form className="space-y-6">
                                <input type="text" placeholder="Your Name" className="w-full bg-brand-light-gray dark:bg-brand-gray border-gray-300 dark:border-gray-700 p-3 rounded-md focus:ring-brand-gold focus:border-brand-gold" />
                                <input type="email" placeholder="Your Email" className="w-full bg-brand-light-gray dark:bg-brand-gray border-gray-300 dark:border-gray-700 p-3 rounded-md focus:ring-brand-gold focus:border-brand-gold" />
                                <input type="tel" placeholder="Your Phone" className="w-full bg-brand-light-gray dark:bg-brand-gray border-gray-300 dark:border-gray-700 p-3 rounded-md focus:ring-brand-gold focus:border-brand-gold" />
                                <input type="text" placeholder="Event Type" className="w-full bg-brand-light-gray dark:bg-brand-gray border-gray-300 dark:border-gray-700 p-3 rounded-md focus:ring-brand-gold focus:border-brand-gold" />
                                <textarea placeholder="Your Message" rows={5} className="w-full bg-brand-light-gray dark:bg-brand-gray border-gray-300 dark:border-gray-700 p-3 rounded-md focus:ring-brand-gold focus:border-brand-gold"></textarea>
                                <button type="submit" className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-sm hover:bg-brand-gold-light transition-colors duration-300">
                                    Send Message
                                </button>
                            </form>
                        </div>
                        {/* Contact Info & Map */}
                        <div className="scroll-target" style={{ transitionDelay: '200ms' }}>
                             <h2 className="text-3xl font-heading text-brand-dark dark:text-white">Contact Details</h2>
                            <div className="w-20 h-1 bg-brand-gold my-4"></div>
                             <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                                <li><strong>Location:</strong> {BRAND_INFO.location}</li>
                                <li><strong>Email:</strong> <a href={`mailto:${BRAND_INFO.email}`} className="text-brand-gold hover:underline">{BRAND_INFO.email}</a></li>
                                <li><strong>Phone:</strong> {BRAND_INFO.phones.join(' / ')}</li>
                            </ul>
                            <div className="mt-8 h-80 bg-brand-light-gray dark:bg-brand-gray rounded-lg overflow-hidden">
                                 <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.5200989065!2d77.03956972179857!3d28.52721814238533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1672589531535!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="dark:grayscale"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <EventIdeaGenerator />
                </div>
            </section>
        </div>
    );
};

export default ContactPage;