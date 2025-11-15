import React, { useState } from 'react';
import { BRAND_INFO, CAREERS_DATA } from '../constants';
import { JobOpening } from '../types';
import { XIcon, LocationMarkerIcon, BriefcaseIcon } from '../components/Icons';

const PageHeader: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => (
    <div className="relative bg-brand-light-gray dark:bg-brand-gray py-24 sm:py-32">
        <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1920&q=80" alt="background" className="w-full h-full object-cover"/>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-heading font-bold text-brand-dark dark:text-white tracking-wider">{title}</h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

const ApplicationModal: React.FC<{ job: JobOpening; onClose: () => void }> = ({ job, onClose }) => {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
        } else {
            setFileName('');
        }
    };
    
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert(`Thank you for applying for the ${job.title} position!`);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-brand-light dark:bg-brand-dark rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
                <header className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
                    <div>
                        <h2 className="text-xl font-heading text-brand-dark dark:text-white">Apply for</h2>
                        <h3 className="text-brand-gold">{job.title}</h3>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                        <XIcon />
                    </button>
                </header>
                <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Full Name" required className="w-full bg-brand-light-gray dark:bg-brand-gray p-3 rounded-md focus:ring-brand-gold focus:border-brand-gold" />
                        <input type="email" placeholder="Email Address" required className="w-full bg-brand-light-gray dark:bg-brand-gray p-3 rounded-md focus:ring-brand-gold focus:border-brand-gold" />
                    </div>
                    <input type="tel" placeholder="Phone Number" required className="w-full bg-brand-light-gray dark:bg-brand-gray p-3 rounded-md focus:ring-brand-gold focus:border-brand-gold" />
                    <textarea placeholder="Cover Letter" rows={5} required className="w-full bg-brand-light-gray dark:bg-brand-gray p-3 rounded-md focus:ring-brand-gold focus:border-brand-gold"></textarea>
                    <div>
                        <label htmlFor="resume-upload" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Upload Resume/CV
                        </label>
                         <label className="w-full flex items-center px-4 py-3 bg-brand-light-gray dark:bg-brand-gray text-brand-dark dark:text-gray-300 rounded-md shadow-sm tracking-wide uppercase border border-gray-300 dark:border-gray-700 cursor-pointer hover:bg-brand-gold hover:text-brand-dark">
                            <svg className="w-6 h-6 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4 4-4-4h3V9h2v2z" />
                            </svg>
                            <span className="text-sm truncate">{fileName || 'Select a file'}</span>
                            <input id="resume-upload" type='file' className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
                        </label>
                    </div>
                    <div className="pt-4 flex justify-end">
                         <button type="submit" className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-sm hover:bg-brand-gold-light transition-colors duration-300">
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const JobCard: React.FC<{ job: JobOpening; onApply: (job: JobOpening) => void }> = ({ job, onApply }) => (
    <div className="bg-brand-light-gray dark:bg-brand-gray p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 hover:border-brand-gold/50 transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex flex-col h-full">
            <div>
                <h3 className="text-2xl font-heading text-brand-gold">{job.title}</h3>
                <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
                    <span className="flex items-center gap-2">
                        <LocationMarkerIcon className="text-gray-400" />
                        {job.location}
                    </span>
                    <span className="flex items-center gap-2">
                        <BriefcaseIcon className="text-gray-400" />
                        {job.type}
                    </span>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300 flex-grow text-sm">{job.description}</p>
            </div>
            <div className="mt-6 text-right">
                <button 
                    onClick={() => onApply(job)}
                    className="bg-brand-dark dark:bg-brand-light text-brand-light dark:text-brand-dark font-bold py-2 px-6 rounded-sm hover:bg-brand-gold hover:text-brand-dark dark:hover:bg-brand-gold transition-colors duration-300"
                >
                    Apply
                </button>
            </div>
        </div>
    </div>
);


const ApplyNowForm: React.FC = () => {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
        } else {
            setFileName('');
        }
    };
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert('Thank you for your application! We will be in touch if a suitable role opens up.');
        (event.target as HTMLFormElement).reset();
        setFileName('');
    };

    return (
        <section className="relative py-20 bg-brand-light-gray dark:bg-brand-dark text-brand-dark dark:text-white">
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-10" 
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80')"}}
            ></div>
             <div className="absolute inset-0 bg-gradient-to-t from-brand-light-gray via-brand-light-gray to-brand-light-gray/80 dark:from-brand-dark dark:via-brand-dark dark:to-brand-dark/80"></div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto scroll-target">
                    <div className="text-center mb-12">
                         <h2 className="text-4xl font-heading">Apply Now</h2>
                         <div className="w-20 h-1 bg-brand-gold my-4 mx-auto"></div>
                         <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Ready to join the KaSha family? Fill out the form below. If you're applying for a specific role, please select it from the dropdown.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="p-8 bg-white/50 dark:bg-black/30 backdrop-blur-sm border border-gray-300 dark:border-gray-800 rounded-lg space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Full Name" required className="w-full bg-brand-light dark:bg-white/10 border border-gray-300 dark:border-gray-700 p-3 rounded-md focus:ring-brand-gold focus:border-brand-gold text-brand-dark dark:text-white placeholder-gray-500 dark:placeholder-gray-400" />
                            <input type="email" placeholder="Email Address" required className="w-full bg-brand-light dark:bg-white/10 border border-gray-300 dark:border-gray-700 p-3 rounded-md focus:ring-brand-gold focus:border-brand-gold text-brand-dark dark:text-white placeholder-gray-500 dark:placeholder-gray-400" />
                        </div>
                        <input type="tel" placeholder="Phone Number" required className="w-full bg-brand-light dark:bg-white/10 border border-gray-300 dark:border-gray-700 p-3 rounded-md focus:ring-brand-gold focus:border-brand-gold text-brand-dark dark:text-white placeholder-gray-500 dark:placeholder-gray-400" />
                        
                        <div>
                            <label htmlFor="role-select" className="sr-only">Position Applying For</label>
                            <select 
                                id="role-select" 
                                required 
                                defaultValue=""
                                className="w-full bg-brand-light dark:bg-white/10 border border-gray-300 dark:border-gray-700 p-3 rounded-md focus:ring-brand-gold focus:border-brand-gold text-brand-dark dark:text-white"
                            >
                                <option value="" disabled className="bg-brand-light dark:bg-brand-dark">Select a position...</option>
                                {CAREERS_DATA.map(job => (
                                    <option key={job.id} value={job.title} className="bg-brand-light dark:bg-brand-dark">{job.title}</option>
                                ))}
                                <option value="other" className="bg-brand-light dark:bg-brand-dark">Other (General Application)</option>
                            </select>
                        </div>
                        
                        <textarea placeholder="Tell us about yourself and why you'd be a great fit for KaSha." rows={5} required className="w-full bg-brand-light dark:bg-white/10 border border-gray-300 dark:border-gray-700 p-3 rounded-md focus:ring-brand-gold focus:border-brand-gold text-brand-dark dark:text-white placeholder-gray-500 dark:placeholder-gray-400"></textarea>
                        <div>
                            <label className="w-full flex items-center px-4 py-3 bg-brand-light dark:bg-white/10 text-gray-600 dark:text-gray-300 rounded-md tracking-wide uppercase border border-gray-300 dark:border-gray-700 cursor-pointer hover:bg-brand-gold hover:text-brand-dark transition-all duration-300">
                                <svg className="w-6 h-6 mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4 4-4-4h3V9h2v2z" />
                                </svg>
                                <span className="text-sm truncate">{fileName || 'Upload Resume (.pdf, .doc)'}</span>
                                <input id="general-resume-upload" type='file' className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
                            </label>
                        </div>
                        <div className="pt-4 flex justify-end">
                            <button type="submit" className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-sm hover:bg-brand-gold-light transition-colors duration-300">
                                Submit Application
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};


const CareersPage: React.FC = () => {
    const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

    return (
        <div className="bg-brand-light dark:bg-brand-dark">
            <PageHeader title="Join Our Team" subtitle="Be a part of creating unforgettable experiences. Explore our open positions." />
            
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16 scroll-target">
                        <h2 className="text-4xl font-heading text-brand-dark dark:text-white">Current Openings</h2>
                        <div className="w-20 h-1 bg-brand-gold my-4 mx-auto"></div>
                    </div>
                    {CAREERS_DATA.length > 0 ? (
                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                           {CAREERS_DATA.map((job, index) => (
                                <div className="scroll-target" key={job.id} style={{ transitionDelay: `${index * 150}ms`}}>
                                    <JobCard job={job} onApply={() => setSelectedJob(job)} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-brand-light-gray dark:bg-brand-gray rounded-lg scroll-target">
                            <h3 className="text-2xl font-heading text-brand-dark dark:text-white">No Openings Currently</h3>
                            <p className="text-gray-500 dark:text-gray-400 mt-2">Please check back later or send us your resume at <a href={`mailto:${BRAND_INFO.email}`} className="text-brand-gold hover:underline">{BRAND_INFO.email}</a>.</p>
                        </div>
                    )}
                </div>
            </section>
            
            <ApplyNowForm />

            {selectedJob && <ApplicationModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
        </div>
    );
};

export default CareersPage;