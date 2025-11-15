import React from 'react';
import { Link } from 'react-router-dom';
import { TEAM_DATA } from '../constants';
import { TeamMember } from '../types';
import { GoldStarIcon } from '../components/Icons';

const PageHeader: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => (
    <div className="relative bg-brand-light-gray dark:bg-brand-gray py-24 sm:py-32">
        <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80" alt="background" className="w-full h-full object-cover"/>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-heading font-bold text-brand-dark dark:text-white tracking-wider">{title}</h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="group flex flex-col h-full bg-brand-light dark:bg-brand-gray rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-brand-gold/20 hover:border-brand-gold/50 transform hover:-translate-y-2 p-8 text-center">
        <div className="relative inline-block mb-6">
            <img src={member.imageUrl} alt={member.name} className="w-48 h-48 rounded-full mx-auto shadow-xl object-cover"/>
            <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-brand-gold transition-all duration-300 scale-105 group-hover:scale-110"></div>
        </div>
        <h3 className="text-2xl font-heading text-brand-dark dark:text-white">{member.name}</h3>
        <p className="text-brand-gold font-semibold mb-4">{member.role}</p>
        
        {member.expertise && (
            <div className="my-4 border-t border-b border-gray-200 dark:border-gray-700 py-3">
                <div className="flex items-center justify-center gap-2">
                    <GoldStarIcon className="text-brand-gold flex-shrink-0" />
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 italic">{member.expertise}</p>
                </div>
            </div>
        )}

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow">{member.bio}</p>
    </div>
);

const TeamPage: React.FC = () => {
    return (
        <div className="bg-brand-light dark:bg-brand-dark">
            <PageHeader title="Our Leadership" subtitle="The Visionary Minds Driving KaSha's Success" />

            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {TEAM_DATA.map((member, index) => 
                            <div className="scroll-target" key={member.id} style={{ transitionDelay: `${index * 100}ms` }}>
                                <TeamCard member={member}/>
                            </div>
                        )}
                    </div>
                </div>
            </section>

             <section className="py-20 bg-brand-light-gray dark:bg-brand-gray text-center scroll-target">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-heading text-brand-dark dark:text-white">Join Our Visionary Team</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">We are always looking for passionate and talented individuals to join our family. If you share our commitment to excellence and creativity, we would love to hear from you.</p>
                    <Link
                        to="/careers"
                        className="mt-8 inline-block bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-sm hover:bg-brand-gold-light transition-colors duration-300 transform hover:scale-105"
                    >
                        Explore Open Roles
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default TeamPage;