import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_INFO } from '../constants';
import { InstagramIcon, LinkedinIcon, FacebookIcon, YouTubeIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-light-gray dark:bg-brand-gray border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-2">
            <h2 className="text-3xl font-heading font-bold text-brand-dark dark:text-white tracking-widest">Ka<span className="text-brand-gold">Sha</span></h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm">{BRAND_INFO.tagline}</p>
            <div className="flex space-x-4 pt-2">
              <a href={BRAND_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-brand-gold transition-colors">
                <InstagramIcon />
              </a>
              <a href={BRAND_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-brand-gold transition-colors">
                <LinkedinIcon />
              </a>
               <a href={BRAND_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-brand-gold transition-colors">
                <FacebookIcon />
              </a>
               <a href={BRAND_INFO.social.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-brand-gold transition-colors">
                <YouTubeIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-brand-dark dark:text-white tracking-wider font-heading">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-brand-gold text-sm transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-brand-gold text-sm transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-600 dark:text-gray-400 hover:text-brand-gold text-sm transition-colors">Portfolio</Link></li>
              <li><Link to="/team" className="text-gray-600 dark:text-gray-400 hover:text-brand-gold text-sm transition-colors">Our Team</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-brand-gold text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-brand-dark dark:text-white tracking-wider font-heading">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-brand-gold text-sm transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="text-gray-600 dark:text-gray-400 hover:text-brand-gold text-sm transition-colors">Careers</Link></li>
              <li><Link to="/image-generator" className="text-gray-600 dark:text-gray-400 hover:text-brand-gold text-sm transition-colors">Vision Engine</Link></li>
              <li><Link to="/cost-calculator" className="text-gray-600 dark:text-gray-400 hover:text-brand-gold text-sm transition-colors">Cost Calculator</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-brand-dark dark:text-white tracking-wider font-heading">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Get in Touch</Link></li>
                <li className="pt-2">{BRAND_INFO.location}</li>
                <li><a href={`mailto:${BRAND_INFO.email}`} className="hover:text-brand-gold transition-colors">{BRAND_INFO.email}</a></li>
                {BRAND_INFO.phones.map(phone => <li key={phone}><a href={`tel:${phone}`} className="hover:text-brand-gold transition-colors">{phone}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {BRAND_INFO.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;