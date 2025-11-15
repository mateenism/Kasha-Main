import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CALCULATOR_DATA, BRAND_INFO } from '../constants';
import { DownloadIcon, RefreshIcon } from '../components/Icons';

const PageHeader: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => (
    <div className="relative bg-brand-light-gray dark:bg-brand-gray py-24 sm:py-32">
        <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&q=80" alt="background" className="w-full h-full object-cover"/>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-heading font-bold text-brand-dark dark:text-white tracking-wider">{title}</h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

const CostCalculatorPage: React.FC = () => {
    const initialEventTypeId = CALCULATOR_DATA.eventTypes[0].id;
    const [eventType, setEventType] = useState<string>(initialEventTypeId);
    const [guestCount, setGuestCount] = useState(100);
    const [selectedAddons, setSelectedAddons] = useState<Record<string, boolean>>({});
    const [isDownloading, setIsDownloading] = useState(false);

    const summaryRef = useRef<HTMLDivElement>(null);
    
    // Reset addons when event type changes
    useEffect(() => {
        setSelectedAddons({});
    }, [eventType]);


    const handleReset = () => {
        setEventType(initialEventTypeId);
        setGuestCount(100);
        setSelectedAddons({});
    };

    const handleAddonToggle = (addonId: string) => {
        setSelectedAddons(prev => ({ ...prev, [addonId]: !prev[addonId] }));
    };

    const selectedEventTypeData = useMemo(() => 
        CALCULATOR_DATA.eventTypes.find(e => e.id === eventType)
    , [eventType]);

    const calculation = useMemo(() => {
        if (!selectedEventTypeData) return { baseCost: 0, guestCost: 0, addonsCost: 0, subtotal: 0, estimatedMin: 0, estimatedMax: 0 };

        const baseCost = selectedEventTypeData.baseCost;
        const perGuestCost = selectedEventTypeData.perGuestCost;
        const guestCost = guestCount * perGuestCost;

        let addonsCost = 0;
        const applicableAddonKeys = selectedEventTypeData.applicableAddons || [];
        
        applicableAddonKeys.forEach(key => {
            const category = CALCULATOR_DATA.addonCategories[key];
            if (category) {
                category.items.forEach(item => {
                    if (selectedAddons[item.id]) {
                        if (item.perGuest) {
                            addonsCost += item.cost * guestCount;
                        } else {
                            addonsCost += item.cost;
                        }
                    }
                });
            }
        });

        const subtotal = baseCost + guestCost + addonsCost;
        const estimatedMin = subtotal * 0.9;
        const estimatedMax = subtotal * 1.1;

        return { baseCost, guestCost, addonsCost, subtotal, estimatedMin, estimatedMax };
    }, [eventType, guestCount, selectedAddons, selectedEventTypeData]);

    const handleDownloadPdf = async () => {
        if (!summaryRef.current) return;
        setIsDownloading(true);

        const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        
        const canvas = await html2canvas(summaryRef.current, {
            scale: 2,
            backgroundColor: currentTheme === 'dark' ? '#1a1a1a' : '#f3f4f6',
        });
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.setFillColor(currentTheme === 'dark' ? '#111111' : '#ffffff');
        pdf.rect(0, 0, pdfWidth, pdf.internal.pageSize.getHeight(), 'F');
        
        pdf.setFont('Cinzel', 'bold');
        pdf.setFontSize(24);
        pdf.setTextColor('#D4AF37');
        pdf.text('KaSha', pdfWidth / 2, 20, { align: 'center' });
        
        pdf.setFont('Montserrat', 'normal');
        pdf.setFontSize(10);
        pdf.setTextColor(currentTheme === 'dark' ? '#cccccc' : '#333333');
        pdf.text('Event Cost Estimate', pdfWidth / 2, 28, { align: 'center' });
        
        pdf.addImage(imgData, 'PNG', 10, 40, pdfWidth - 20, pdfHeight > 240 ? 240 : pdfHeight);

        const finalY = pdfHeight + 30 > 280 ? 280 : pdfHeight + 40;
        pdf.setFontSize(8);
        pdf.setTextColor('#888888');
        pdf.text(`${BRAND_INFO.email} | ${BRAND_INFO.phones.join(' / ')} | ${BRAND_INFO.website}`, pdfWidth / 2, finalY, { align: 'center' });
        pdf.text('This is a preliminary estimate. Please contact us for a detailed quote.', pdfWidth / 2, finalY + 5, { align: 'center' });

        pdf.save('KaSha_Event_Estimate.pdf');
        setIsDownloading(false);
    };

    const applicableAddonKeys = selectedEventTypeData?.applicableAddons || [];
    const displayedAddons = Object.values(CALCULATOR_DATA.addonCategories)
        .flatMap(c => c.items)
        .filter(item => selectedAddons[item.id]);

    return (
        <div className="bg-brand-light dark:bg-brand-dark">
            <PageHeader title="Event Cost Calculator" subtitle="Get a preliminary estimate for your next grand event." />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Side: Configuration */}
                    <div className="scroll-target lg:col-span-2 bg-brand-light-gray dark:bg-brand-gray p-8 rounded-lg border border-gray-200 dark:border-gray-800">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-3xl font-heading text-brand-dark dark:text-white">Configure Your Event</h2>
                            <button onClick={handleReset} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-brand-gold transition-colors">
                                <RefreshIcon className="w-4 h-4" />
                                Reset
                            </button>
                        </div>

                        {/* Event Type & Guests */}
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <label htmlFor="event-type" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Event Type</label>
                                <select id="event-type" value={eventType} onChange={e => setEventType(e.target.value)} className="w-full bg-white dark:bg-brand-dark border border-gray-300 dark:border-gray-700 rounded-md p-3 focus:ring-brand-gold focus:border-brand-gold">
                                    {CALCULATOR_DATA.eventTypes.map(type => (
                                        <option key={type.id} value={type.id} className="bg-white dark:bg-brand-dark">{type.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="guest-count" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Number of Guests</label>
                                <div className="text-center font-bold text-xl text-brand-gold mb-3">{guestCount}</div>
                                <input
                                    id="guest-count"
                                    type="range" min="10" max="2000" step="10" value={guestCount}
                                    onChange={e => setGuestCount(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer range-slider"
                                />
                            </div>
                        </div>

                        {/* Event Description */}
                        {selectedEventTypeData && (
                             <div className="mb-8 p-4 bg-white dark:bg-brand-dark rounded-md border border-gray-200 dark:border-gray-700">
                                <p className="text-gray-600 dark:text-gray-300 text-sm">{selectedEventTypeData.description}</p>
                            </div>
                        )}

                        {/* Add-ons */}
                        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
                            <h3 className="text-xl font-heading text-brand-dark dark:text-white mb-4">Add-On Services</h3>
                            <div className="space-y-6">
                                {applicableAddonKeys.map(key => {
                                    const category = CALCULATOR_DATA.addonCategories[key];
                                    if (!category) return null;
                                    return (
                                        <div key={key}>
                                            <h4 className="font-bold text-brand-gold mb-3">{category.category}</h4>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                {category.items.map(item => (
                                                    <label key={item.id} className={`flex items-start p-4 rounded-md border transition-colors cursor-pointer ${selectedAddons[item.id] ? 'bg-brand-gold/10 border-brand-gold' : 'border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600'}`}>
                                                        <input type="checkbox" checked={!!selectedAddons[item.id]} onChange={() => handleAddonToggle(item.id)} className="mt-1 h-4 w-4 rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-brand-gold focus:ring-brand-gold" />
                                                        <div className="ml-3 text-sm">
                                                            <span className="font-medium text-gray-800 dark:text-gray-200">{item.name}</span>
                                                            <p className="text-gray-500 dark:text-gray-400">Starts from ₹{item.cost.toLocaleString('en-IN')} {item.perGuest ? 'per guest' : ''}</p>
                                                        </div>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Summary */}
                    <div className="lg:col-span-1 scroll-target" style={{ transitionDelay: '200ms' }}>
                        <div className="sticky top-28">
                            <div ref={summaryRef} className="bg-brand-light-gray dark:bg-brand-gray p-8 rounded-lg border border-gray-200 dark:border-gray-800">
                                <h2 className="text-3xl font-heading text-brand-dark dark:text-white mb-6 text-center">Your Estimate</h2>
                                <div className="text-center mb-6">
                                    <p className="text-gray-500 dark:text-gray-400 uppercase tracking-widest text-sm">Estimated Cost</p>
                                    <p className="text-4xl font-bold font-heading text-brand-gold my-2">
                                        ₹{calculation.estimatedMin.toLocaleString('en-IN', {maximumFractionDigits: 0})} - ₹{calculation.estimatedMax.toLocaleString('en-IN', {maximumFractionDigits: 0})}
                                    </p>
                                </div>
                                <Link to="/contact" className="w-full block text-center bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-sm hover:bg-brand-gold-light transition-colors duration-300 mb-6">
                                    Request a Detailed Quote
                                </Link>
                                <div className="space-y-3 border-t border-gray-200 dark:border-gray-700 pt-4">
                                    <h4 className="font-bold text-lg text-brand-dark dark:text-white mb-2">Breakdown:</h4>
                                     <div className="flex justify-between text-sm"><span className="text-gray-500 dark:text-gray-400">Base Cost ({selectedEventTypeData?.name})</span> <span>₹{calculation.baseCost.toLocaleString('en-IN')}</span></div>
                                     <div className="flex justify-between text-sm"><span className="text-gray-500 dark:text-gray-400">Guest Cost ({guestCount} x ₹{selectedEventTypeData?.perGuestCost.toLocaleString('en-IN')})</span> <span>₹{calculation.guestCost.toLocaleString('en-IN')}</span></div>
                                     <div className="flex justify-between text-sm"><span className="text-gray-500 dark:text-gray-400">Add-ons Cost</span> <span>₹{calculation.addonsCost.toLocaleString('en-IN')}</span></div>
                                     <div className="flex justify-between font-bold border-t border-gray-200 dark:border-gray-700 pt-2 mt-2"><span className="text-gray-800 dark:text-gray-200">Subtotal</span> <span className="text-brand-gold-light">₹{calculation.subtotal.toLocaleString('en-IN')}</span></div>
                                </div>
                                <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                                    <h4 className="font-bold text-lg text-brand-dark dark:text-white mb-2">Selected Add-ons:</h4>
                                    <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400 space-y-1">
                                        {displayedAddons.length > 0 ? (
                                            displayedAddons.map(item => <li key={item.id}>{item.name}</li>)
                                        ) : (
                                            <li>None</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                             <div className="mt-6 flex flex-col gap-4">
                                <button onClick={handleDownloadPdf} disabled={isDownloading} className="w-full flex items-center justify-center gap-2 bg-transparent border border-brand-gold text-brand-gold font-bold py-3 px-8 rounded-sm hover:bg-brand-gold/10 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                                    <DownloadIcon />
                                    {isDownloading ? 'Downloading...' : 'Download PDF'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .range-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 25px; height: 25px; background: #D4AF37; cursor: pointer; border-radius: 50%; }
                .range-slider::-moz-range-thumb { width: 25px; height: 25px; background: #D4AF37; cursor: pointer; border-radius: 50%; }
            `}</style>
        </div>
    );
};

export default CostCalculatorPage;