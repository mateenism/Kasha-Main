import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_DATA } from '../constants';
import { CalendarIcon, UserIcon } from '../components/Icons';

const BlogDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = BLOG_DATA.find(p => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="bg-brand-light dark:bg-brand-dark">
            {/* Hero Section */}
            <div className="relative h-[50vh] flex items-end justify-center text-center bg-brand-dark">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${post.imageUrl})` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent"></div>
                <div className="relative z-10 p-8 container mx-auto text-white">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-wider leading-tight">
                        {post.title}
                    </h1>
                </div>
            </div>

            {/* Post Meta */}
            <div className="bg-brand-light-gray dark:bg-brand-gray py-4">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                        <UserIcon className="mr-2 text-brand-gold"/>
                        <span>By {post.author}</span>
                    </div>
                    <div className="flex items-center">
                        <CalendarIcon className="mr-2 text-brand-gold"/>
                        <span>{post.date}</span>
                    </div>
                </div>
            </div>
            
            {/* Article Content */}
            <article className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl scroll-target">
                     <div 
                        className="prose-styles text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                        <h3 className="text-lg font-semibold text-brand-gold mb-4">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 text-sm bg-brand-light-gray dark:bg-brand-gray text-gray-600 dark:text-gray-300 rounded-full">{tag}</span>
                            ))}
                        </div>
                    </div>
                     <div className="mt-12 text-center">
                        <Link to="/blog" className="text-brand-gold font-semibold hover:text-brand-gold-light transition-colors">
                            &larr; Back to All Articles
                        </Link>
                    </div>
                </div>
            </article>
            <style>{`
                .prose-styles {
                    overflow-wrap: break-word;
                }
                .prose-styles h3 {
                    font-size: 1.5rem;
                    line-height: 2rem;
                    font-family: 'Cinzel', serif;
                    color: #D4AF37;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                }
                 .prose-styles p {
                    margin-bottom: 1.5rem;
                }
                 .prose-styles ul {
                    list-style-type: disc;
                    padding-left: 1.5rem;
                    margin-bottom: 1.5rem;
                }
                 .prose-styles li {
                    margin-bottom: 0.5rem;
                }
                 .prose-styles blockquote {
                    border-left: 4px solid #D4AF37;
                    padding: 0.5rem 1rem;
                    margin: 1.5rem 0;
                    font-style: italic;
                 }
                 .dark .prose-styles blockquote {
                     color: #9ca3af;
                 }
                 .light .prose-styles blockquote {
                     color: #6b7280;
                 }
                 .prose-styles img,
                 .prose-styles video,
                 .prose-styles iframe {
                    max-width: 100%;
                    height: auto;
                    border-radius: 0.75rem;
                    margin-top: 1.5rem;
                    margin-bottom: 1.5rem;
                 }
            `}</style>
        </div>
    );
};

export default BlogDetailPage;