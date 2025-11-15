import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_DATA } from '../constants';
import { BlogPost } from '../types';
import { CalendarIcon, UserIcon } from '../components/Icons';

const PageHeader: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => (
    <div className="relative bg-brand-light-gray dark:bg-brand-gray py-24 sm:py-32">
        <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&q=80" alt="background" className="w-full h-full object-cover"/>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-heading font-bold text-brand-dark dark:text-white tracking-wider">{title}</h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

const FeaturedPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <Link to={`/blog/${post.slug}`} className="scroll-target group block md:grid md:grid-cols-2 gap-8 items-center bg-brand-light-gray dark:bg-brand-gray p-8 rounded-lg shadow-lg hover:shadow-brand-gold/20 transition-all duration-300 mb-16">
        <div className="overflow-hidden rounded-md mb-6 md:mb-0">
            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
        </div>
        <div>
            <span className="text-sm text-brand-gold font-semibold uppercase">Featured Article</span>
            <h2 className="font-heading text-3xl text-brand-dark dark:text-white my-3 group-hover:text-brand-gold transition-colors">{post.title}</h2>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4 mb-4">
                <span className="flex items-center"><UserIcon className="mr-2" /> {post.author}</span>
                <span className="flex items-center"><CalendarIcon className="mr-2" /> {post.date}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{post.excerpt}</p>
            <span className="font-semibold text-brand-gold">Read More &rarr;</span>
        </div>
    </Link>
);


const PostCard: React.FC<{ post: BlogPost; delay: number }> = ({ post, delay }) => (
    <Link to={`/blog/${post.slug}`} className="scroll-target group block bg-brand-light-gray dark:bg-brand-gray rounded-lg overflow-hidden shadow-lg hover:shadow-brand-gold/20 transform hover:-translate-y-2 transition-all duration-300" style={{ transitionDelay: `${delay}ms`}}>
        <div className="h-56 overflow-hidden">
            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
        </div>
        <div className="p-6">
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                <CalendarIcon className="mr-2" />
                <span>{post.date}</span>
            </div>
            <h3 className="font-heading text-xl text-brand-dark dark:text-white mb-3 group-hover:text-brand-gold transition-colors duration-300 h-20 overflow-hidden">{post.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 h-16 overflow-hidden">{post.excerpt}</p>
             <span className="inline-block mt-4 text-brand-gold font-semibold text-sm">Read More &rarr;</span>
        </div>
    </Link>
);

const BlogPage: React.FC = () => {
    const [latestPost, ...otherPosts] = BLOG_DATA;

    return (
        <div className="bg-brand-light dark:bg-brand-dark">
            <PageHeader title="KaSha Blog" subtitle="Insights, Trends, and Stories from the World of Luxury Events" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {latestPost && <FeaturedPostCard post={latestPost} />}
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherPosts.map((post, index) => (
                        <PostCard key={post.id} post={post} delay={index * 100} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;