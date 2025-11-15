import React, { useState, useEffect } from 'react';
import { generateImage } from '../services/geminiService';
import { DownloadIcon, SparklesIcon } from '../components/Icons';

const PageHeader: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => (
    <div className="relative bg-brand-light-gray dark:bg-brand-gray py-24 sm:py-32">
        <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1664447972488-b99b0c53e020?w=1920&q=80" alt="background" className="w-full h-full object-cover"/>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-heading font-bold text-brand-dark dark:text-white tracking-wider">{title}</h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

const ALL_EXAMPLE_PROMPTS = [
    "A luxurious Indian wedding mandap decorated with thousands of white roses and gold accents, at sunset on a beach in Goa.",
    "A futuristic corporate event stage design with holographic displays and sleek, minimalist furniture, in a grand ballroom.",
    "An elegant table setting for a royal-themed gala dinner, with gold cutlery, crystal glasses, and elaborate floral centerpieces.",
    "A vibrant outdoor concert setup for a music festival in the hills of Lonavala, with a massive stage and colorful lighting.",
    "An immersive brand activation for a new perfume, with a walk-through garden of exotic flowers and scent diffusers.",
    "A high-energy marathon finish line in the heart of Mumbai, with cheering crowds and branded gantries.",
    "A serene destination wedding ceremony on a houseboat in the Kerala backwaters, surrounded by lush greenery.",
    "A chic and modern product launch for a tech gadget, with interactive demo stations and neon lighting."
];

const getRandomPrompts = (arr: string[], num: number): string[] => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

const ImageGeneratorPage: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [submittedPrompt, setSubmittedPrompt] = useState('');
    const [examplePrompts, setExamplePrompts] = useState<string[]>([]);

    useEffect(() => {
        setExamplePrompts(getRandomPrompts(ALL_EXAMPLE_PROMPTS, 4));
    }, []);

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt.trim()) {
            setError('Please enter a prompt to generate an image.');
            return;
        }
        setError('');
        setIsLoading(true);
        setGeneratedImage(null);
        setSubmittedPrompt(prompt);

        try {
            const imageUrl = await generateImage(prompt);
            setGeneratedImage(imageUrl);
        } catch (e) {
            console.error(e);
            setError('Sorry, we couldn\'t generate the image at this moment. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const downloadImage = () => {
        if (!generatedImage) return;
        const link = document.createElement('a');
        link.href = generatedImage;
        link.download = `${submittedPrompt.slice(0, 30).replace(/\s+/g, '_')}_kasha_ai.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
    const handleExampleClick = (example: string) => {
        setPrompt(example);
    }

    return (
        <div className="bg-brand-light dark:bg-brand-dark">
            <PageHeader title="KaSha Vision Engine" subtitle="Where Your Event Dreams Take Visual Form" />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left: Input */}
                    <div className="scroll-target">
                        <h2 className="text-3xl font-heading text-brand-dark dark:text-white">Describe Your Vision</h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-2 mb-6">Enter a detailed description of the image you want to create. The more specific you are, the better the result.</p>
                        <form onSubmit={handleGenerate} className="space-y-4">
                            <textarea
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="e.g., A grand, opulent wedding reception in a Rajasthan palace ballroom..."
                                rows={5}
                                className="w-full bg-brand-light-gray dark:bg-brand-gray border-gray-300 dark:border-gray-700 p-3 rounded-md focus:ring-brand-gold focus:border-brand-gold text-brand-dark dark:text-white"
                            />
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex items-center justify-center gap-2 bg-brand-gold text-brand-dark font-bold py-3 px-6 rounded-sm hover:bg-brand-gold-light transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-wait"
                            >
                                <SparklesIcon className="w-5 h-5" />
                                {isLoading ? 'Generating...' : 'Generate Image'}
                            </button>
                        </form>
                        
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-4 text-center">
                            The Vision Engine is an AI tool for inspiration. Results may sometimes be unpredictable. For detailed creative designs, our expert team is always here to help.
                        </p>

                        <div className="mt-8">
                            <h3 className="text-xl font-heading text-brand-dark dark:text-white">Or try an example:</h3>
                             <div className="grid sm:grid-cols-2 gap-3 mt-4">
                                {examplePrompts.map((p, i) => (
                                    <button 
                                        key={i} 
                                        onClick={() => handleExampleClick(p)}
                                        className="text-left text-sm p-3 bg-brand-light-gray dark:bg-brand-gray rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-brand-gold transition-colors text-gray-600 dark:text-gray-300"
                                    >
                                        {p.substring(0, 80)}...
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Right: Output */}
                    <div className="scroll-target" style={{ transitionDelay: '200ms' }}>
                         <h2 className="text-3xl font-heading text-brand-dark dark:text-white">Your Generated Image</h2>
                         <div className="mt-6 aspect-square w-full bg-brand-light-gray dark:bg-brand-gray rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center overflow-hidden">
                            {isLoading && (
                                <div className="text-center text-gray-500 dark:text-gray-400">
                                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-brand-gold mx-auto"></div>
                                    <p className="mt-4">Generating your vision...</p>
                                    <p className="text-xs mt-2">This may take a moment.</p>
                                </div>
                            )}
                            {error && !isLoading && (
                                <div className="p-8 text-center text-red-500">
                                    <p className="font-semibold">Generation Failed</p>
                                    <p className="text-sm">{error}</p>
                                </div>
                            )}
                            {!isLoading && !error && generatedImage && (
                                <div className="relative w-full h-full group">
                                    <img src={generatedImage} alt={submittedPrompt} className="w-full h-full object-contain" />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <button onClick={downloadImage} className="flex items-center gap-2 bg-brand-gold text-brand-dark font-bold py-3 px-6 rounded-sm hover:bg-brand-gold-light transition-colors duration-300">
                                            <DownloadIcon />
                                            Download
                                        </button>
                                    </div>
                                </div>
                            )}
                             {!isLoading && !error && !generatedImage && (
                                 <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                                    <SparklesIcon className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600" />
                                    <p className="mt-4">Your image will appear here once generated.</p>
                                </div>
                             )}
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageGeneratorPage;