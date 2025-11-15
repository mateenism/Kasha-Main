import React, { useState } from 'react';
import { BRAND_INFO } from '../constants';
import { WhatsAppIcon, PhoneIcon, ChatIcon, PlusIcon } from './Icons';

interface FloatingActionsProps {
  toggleChatbot: () => void;
}

const FloatingActions: React.FC<FloatingActionsProps> = ({ toggleChatbot }) => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      label: 'KaSha AI Planner',
      icon: <ChatIcon />,
      onClick: toggleChatbot,
      bgColor: 'bg-brand-gold',
    },
    {
      label: 'Chat on WhatsApp',
      icon: <WhatsAppIcon />,
      href: `https://wa.me/${BRAND_INFO.phones[0].replace(/\s/g, '')}`,
      bgColor: 'bg-green-500',
    },
    {
      label: 'Call Us',
      icon: <PhoneIcon />,
      href: `tel:${BRAND_INFO.phones[0]}`,
      bgColor: 'bg-blue-500',
    },
  ];

  const ActionButton: React.FC<{
    action: typeof actions[0];
    onClick?: () => void;
    sizeClass: string;
  }> = ({ action, onClick, sizeClass }) => {
    const commonProps = {
      'aria-label': action.label,
      className: `flex items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 ${action.bgColor} ${sizeClass}`,
    };
    if (action.href) {
      return <a href={action.href} target="_blank" rel="noopener noreferrer" {...commonProps}>{action.icon}</a>;
    }
    return <button onClick={onClick} {...commonProps}>{action.icon}</button>;
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Mobile Speed Dial View */}
      <div className="md:hidden">
        <div className="flex flex-col items-end gap-4">
          {/* Collapsed menu items */}
          <div
            aria-hidden={!isOpen}
            className={`flex flex-col items-end gap-4 transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-100' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
          >
            {actions.map((action) => (
              <div key={action.label} className="flex items-center gap-3">
                <span className="bg-brand-dark text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-md">
                  {action.label}
                </span>
                <ActionButton
                  action={action}
                  onClick={() => { action.onClick?.(); setIsOpen(false); }}
                  sizeClass="w-12 h-12"
                />
              </div>
            ))}
          </div>

          {/* Main toggle button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle action menu"
            className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-dark text-brand-gold shadow-lg transform transition-transform duration-300 hover:scale-110 active:scale-95"
          >
            <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
              <PlusIcon className="w-8 h-8" />
            </div>
          </button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex flex-col items-end gap-3">
        {actions.map((action, index) => (
          <div key={action.label} style={{ animation: `bob 4s ease-in-out infinite`, animationDelay: `${index * 0.2 + 1}s` }} className="relative group flex items-center">
            <span className="absolute right-20 w-max bg-brand-dark text-white text-xs font-bold px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {action.label}
            </span>
            <div className="transform group-hover:scale-110 transition-transform duration-300">
              <ActionButton
                action={action}
                onClick={action.onClick}
                sizeClass="w-14 h-14"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingActions;