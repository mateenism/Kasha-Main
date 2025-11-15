import React from 'react';
import { Link } from 'react-router-dom';
import { TEAM_DATA, WHY_CHOOSE_US_DATA } from '../constants';
import { TeamMember } from '../types';

const PageHeader: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => (
    <div className="relative bg-brand-light-gray dark:bg-brand-gray py-24 sm:py-32">
        <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=1920&q=80" alt="background" className="w-full h-full object-cover"/>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-heading font-bold text-brand-dark dark:text-white tracking-wider">{title}</h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="text-center">
        <img src={member.imageUrl} alt={member.name} className="w-40 h-40 rounded-full mx-auto mb-4 shadow-lg border-4 border-brand-gold/50"/>
        <h3 className="text-xl font-heading text-brand-dark dark:text-white">{member.name}</h3>
        <p className="text-brand-gold">{member.role}</p>
    </div>
);

const AboutPage: React.FC = () => {
    return (
        <div className="bg-brand-light dark:bg-brand-dark">
            <PageHeader title="About KaSha" subtitle="Crafting Experiences, Creating Memories" />

            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="scroll-target">
                             <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80" alt="KaSha Event" className="rounded-lg shadow-2xl"/>
                        </div>
                        <div className="scroll-target" style={{ transitionDelay: '200ms' }}>
                            <h2 className="text-3xl font-heading text-brand-dark dark:text-white">Our Brand Story</h2>
                            <div className="w-20 h-1 bg-brand-gold my-4"></div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Founded with a passion for creating extraordinary events, KaSha has grown into a leading Pan-India luxury event management company. Based in Delhi, our journey is built on creativity, precision, and an unwavering commitment to excellence. We believe every event is a unique story waiting to be told.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                                Our team of seasoned professionals brings together a wealth of experience in design, planning, and production to deliver seamless and memorable experiences, from grand weddings to high-profile corporate gatherings.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-brand-light-gray dark:bg-brand-gray">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12 scroll-target">
                        <h2 className="text-4xl font-heading text-brand-dark dark:text-white">Our Commitments</h2>
                        <div className="w-20 h-1 bg-brand-gold my-4 mx-auto"></div>
                         <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">The pillars of our promise to every client.</p>
                    </div>
                     <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-8 scroll-target">
                            <h3 className="text-xl font-heading text-brand-gold mb-2">Excellence</h3>
                            <p className="text-gray-600 dark:text-gray-400">We uphold the highest standards, ensuring every detail is executed with precision and care.</p>
                        </div>
                        <div className="p-8 scroll-target" style={{ transitionDelay: '150ms' }}>
                            <h3 className="text-xl font-heading text-brand-gold mb-2">Creativity</h3>
                            <p className="text-gray-600 dark:text-gray-400">We push creative boundaries to design unique and unforgettable event experiences.</p>
                        </div>
                        <div className="p-8 scroll-target" style={{ transitionDelay: '300ms' }}>
                            <h3 className="text-xl font-heading text-brand-gold mb-2">Partnership</h3>
                            <p className="text-gray-600 dark:text-gray-400">We work collaboratively with our clients, treating their vision as our own to ensure success.</p>
                        </div>
                    </div>
                </div>
            </section>

             <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12 scroll-target">
                        <h2 className="text-4xl font-heading text-brand-dark dark:text-white">Meet the Leadership</h2>
                         <div className="w-20 h-1 bg-brand-gold my-4 mx-auto"></div>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">The visionary minds behind KaSha's success.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TEAM_DATA.map((member, index) => 
                            <div className="scroll-target" key={member.id} style={{ transitionDelay: `${index * 150}ms` }}>
                                <TeamCard member={member}/>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-brand-light-gray dark:bg-brand-gray">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12 scroll-target">
                        <h2 className="text-4xl font-heading text-brand-dark dark:text-white">Why Choose Us</h2>
                        <div className="w-20 h-1 bg-brand-gold my-4 mx-auto"></div>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">What sets us apart in the world of luxury event management.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {WHY_CHOOSE_US_DATA.map((item, index) => (
                            <div key={item.title} className="scroll-target p-8 bg-brand-light dark:bg-brand-dark rounded-lg text-center" style={{ transitionDelay: `${index * 150}ms` }}>
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

             <section className="py-20 text-center scroll-target">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-heading text-brand-dark dark:text-white">Ready to Create Something Extraordinary?</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">Let's discuss how we can bring your vision to life. Our team is ready to craft an unforgettable experience for you and your guests.</p>
                    <Link
                        to="/contact"
                        className="mt-8 inline-block bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-sm hover:bg-brand-gold-light transition-colors duration-300"
                    >
                        Get In Touch
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;