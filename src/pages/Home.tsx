import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { artworks, type Artwork } from '../data/artworks';
import { ProductModal } from '../components/ui/ProductModal';
import { useChat } from '../context/ChatContext';
import { PhoneMockup } from '../components/ui/PhoneMockup';
import { Instagram } from 'lucide-react';

export const Home: React.FC = () => {
    const { selectedProduct, setSelectedProduct } = useChat();

    const openPDP = (art: Artwork) => {
        setSelectedProduct(art);
        document.body.style.overflow = 'hidden';
    };

    const closePDP = () => {
        setSelectedProduct(null);
        document.body.style.overflow = 'auto';
    };

    // Helper to find artwork by title/id for the highlights section
    // We can just use the first few from the array or find specific ones. 
    // The previous code hardcoded image paths which might not match the artworks.ts perfectly if filenames changed.
    // I will try to find them by title or fallback to the first few.
    const highlightArtworks = [
        artworks.find(a => a.title === 'Divine Om') || artworks[44], // Divine Om
        artworks.find(a => a.title === 'Mystic Aghori') || artworks[2], // Mystic Aghori
        artworks.find(a => a.title === 'Golden Abstract') || artworks[1] // Golden Abstract
    ].filter(Boolean) as Artwork[];

    return (
        <div>
            {/* Hero Section - Premium Immersive Design */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-art-cream via-art-cream to-art-gold/10">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Large floating orbs */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            x: [0, 30, 0],
                            y: [0, -20, 0],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-art-gold/20 to-art-gold/5 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            x: [0, -40, 0],
                            y: [0, 30, 0],
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-48 -right-48 w-[500px] h-[500px] bg-gradient-to-tl from-art-green/15 to-art-green/5 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 10, 0],
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-art-gold/10 to-transparent rounded-full blur-2xl"
                    />

                    {/* Decorative grid pattern */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, #1a4a3a 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }} />

                    {/* Floating particles */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-art-gold/40 rounded-full"
                            style={{
                                left: `${15 + i * 15}%`,
                                top: `${20 + (i % 3) * 25}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.3, 0.7, 0.3],
                            }}
                            transition={{
                                duration: 4 + i,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.5,
                            }}
                        />
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 pt-24 sm:pt-32">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-8 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="order-2 lg:order-1"
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-art-gold/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-8 shadow-lg"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-art-gold opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-art-gold"></span>
                                </span>
                                <span className="text-art-charcoal/80 text-xs sm:text-sm font-medium tracking-wide">Spiritual Art Studio • Est. 2019</span>
                            </motion.div>

                            {/* Main Heading */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-art-green mb-1 sm:mb-2 leading-[1.1]">
                                    Where Art
                                </h1>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-art-green mb-1 sm:mb-2 leading-[1.1]">
                                    Meets
                                </h1>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-[1.1] mb-4 sm:mb-6">
                                    <span className="relative inline-block">
                                        <span className="bg-gradient-to-r from-art-gold via-yellow-600 to-art-gold bg-clip-text text-transparent italic">
                                            Consciousness
                                        </span>
                                        <motion.span
                                            className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-art-gold to-art-gold/30 rounded-full"
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ delay: 0.8, duration: 0.6 }}
                                        />
                                    </span>
                                </h1>
                            </motion.div>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-base sm:text-lg md:text-xl text-art-charcoal/70 max-w-lg mb-6 sm:mb-10 leading-relaxed font-light"
                            >
                                Transforming spaces into sanctuaries of color, consciousness, and calm. Discover soul-guided spiritual art by <span className="text-art-green font-medium">Pallavi Jain</span>.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.8 }}
                                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
                            >
                                <NavLink to="/portfolio" className="w-full sm:w-auto">
                                    <Button size="lg" className="w-full sm:w-auto group shadow-xl shadow-art-green/20 hover:shadow-2xl hover:shadow-art-green/30 transition-all duration-300">
                                        <span>Explore Collection</span>
                                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                                    </Button>
                                </NavLink>
                                <NavLink to="/about">
                                    <button className="group flex items-center gap-3 px-6 py-3 text-art-green font-medium hover:text-art-gold transition-colors">
                                        <span className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Play size={18} fill="currentColor" />
                                        </span>
                                        <span>Meet the Artist</span>
                                    </button>
                                </NavLink>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9, duration: 0.8 }}
                                className="flex gap-4 sm:gap-8 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-art-green/10"
                            >
                                <div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-art-green">800+</h3>
                                    <p className="text-xs sm:text-sm text-art-charcoal/60 mt-1">Artworks Sold</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-art-green">6+</h3>
                                    <p className="text-xs sm:text-sm text-art-charcoal/60 mt-1">Years of Art</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-art-green">50+</h3>
                                    <p className="text-xs sm:text-sm text-art-charcoal/60 mt-1">Corporate Clients</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right - Artist Image with Creative Frame */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="order-1 lg:order-2 relative mb-6 lg:mb-0"
                        >
                            <div className="relative max-w-xs sm:max-w-md mx-auto lg:max-w-none">
                                {/* Decorative elements behind */}
                                <motion.div
                                    animate={{ rotate: [0, 5, 0] }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -inset-4 bg-gradient-to-br from-art-gold/30 via-art-gold/10 to-transparent rounded-[2rem] blur-sm"
                                />
                                <div className="absolute -inset-1 bg-gradient-to-br from-art-gold/40 to-art-green/20 rounded-[2rem]" />

                                {/* Main image container */}
                                <div className="relative bg-white p-3 rounded-[1.5rem] shadow-2xl">
                                    <div className="relative overflow-hidden rounded-[1.2rem]">
                                        <img
                                            src="/pallavi-jain.webp"
                                            alt="Pallavi Jain - Spiritual Artist"
                                            className="w-full h-auto aspect-[3/4] object-cover"
                                        />
                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-art-green/30 via-transparent to-transparent" />
                                    </div>

                                    {/* Floating card on image */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1, duration: 0.6 }}
                                        className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-6 bg-white/90 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-xl border border-art-gold/20"
                                    >
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-art-gold to-yellow-600 rounded-full flex items-center justify-center">
                                                <Sparkles className="text-white" size={16} />
                                            </div>
                                            <div>
                                                <p className="text-xs sm:text-sm text-art-charcoal/60">Featured Artist</p>
                                                <p className="font-serif text-art-green font-medium text-sm sm:text-base">Pallavi Jain</p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Award badge */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
                                        className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-art-green text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg text-xs sm:text-sm font-medium"
                                    >
                                        🏆 Award Winner
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom decorative wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-art-cream/50" />
                    </svg>
                </div>
            </section>

            {/* Featured Artwork Preview */}
            <Section background="alt">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-art-gold text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase">Portfolio Highlights</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mt-3 sm:mt-4 mb-3 sm:mb-4 text-art-green">Curated Masterpieces</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-art-gold to-transparent mx-auto" />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {highlightArtworks.length > 0 ? highlightArtworks.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[3/4] bg-art-green/5 cursor-pointer"
                            onClick={() => openPDP(item)}
                        >
                            <img
                                src={item.images[0]}
                                alt={item.title}
                                className="w-full h-full object-contain bg-art-cream/50 transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-art-charcoal/90 via-art-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                <span className="text-art-gold text-xs tracking-widest uppercase mb-2">{item.category}</span>
                                <span className="text-white text-xl font-serif mb-4">{item.title}</span>
                                <span className="text-white/80 text-sm border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-art-charcoal transition-colors">
                                    View Artwork
                                </span>
                            </div>
                        </motion.div>
                    )) : (
                        <div className="col-span-3 text-center text-art-charcoal/50 py-10">No art highlights loaded.</div>
                    )}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <NavLink to="/portfolio">
                        <Button variant="outline" size="lg" className="group">
                            View Full Collection
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                        </Button>
                    </NavLink>
                </motion.div>
            </Section>

            {/* Services Section with Cards */}
            <Section background="default">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-art-gold text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase">What We Create</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mt-3 sm:mt-4 mb-4 sm:mb-6 text-art-green">
                            Art That Transforms Spaces
                        </h2>
                        <p className="text-base sm:text-lg text-art-charcoal/70 leading-relaxed mb-6 sm:mb-8">
                            From luxurious Tanjore paintings with 24k gold to modern abstract expressions, each piece is crafted with devotion and designed to elevate your environment.
                        </p>

                        <div className="space-y-4">
                            {[
                                'Large-scale Canvas Paintings',
                                '24k Gold Tanjore Deities',
                                'Custom Murals & Wall Art',
                                'Personalized Portraits'
                            ].map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-2 h-2 bg-art-gold rounded-full" />
                                    <span className="text-art-charcoal/80">{service}</span>
                                </motion.div>
                            ))}
                        </div>

                        <NavLink to="/contact" className="inline-block mt-8">
                            <Button className="group">
                                Commission Your Artwork
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                            </Button>
                        </NavLink>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-2 gap-3 sm:gap-4"
                    >
                        {[
                            { title: 'Original Paintings', desc: 'One-of-a-kind creations', icon: '/icons/Original Paintings.png' },
                            { title: 'Tanjore Art', desc: '24k gold masterpieces', icon: '/icons/TanjoreArt.png' },
                            { title: 'Custom Murals', desc: 'Transform your walls', icon: '/icons/CustomMurals.png' },
                            { title: 'Corporate Art', desc: 'For hotels & offices', icon: '/icons/Corporate art.png' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-art-cream"
                            >
                                <img src={item.icon} alt={item.title} className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-3 sm:mb-4" />
                                <h4 className="font-serif text-art-green text-base sm:text-lg mb-1">{item.title}</h4>
                                <p className="text-xs sm:text-sm text-art-charcoal/60">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Section>

            {/* Instagram / Journey Section */}
            <Section background="alt">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-3 sm:mb-4 text-art-green">Follow Our Journey</h2>
                        <a
                            href="https://www.instagram.com/ashapura_art_studio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-art-gold font-medium hover:text-art-green transition-colors"
                        >
                            <Instagram size={20} />
                            <span>@ashapura_art_studio</span>
                        </a>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 justify-items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                    >
                        <PhoneMockup videoSrc="/videos/makingart.mp4" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <PhoneMockup videoSrc="/videos/makingart2.mp4" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="hidden lg:block"
                    >
                        <PhoneMockup videoSrc="/videos/makingart3.mp4" />
                    </motion.div>
                </div>
            </Section>

            {/* Testimonial / Quote Section */}
            <Section background="alt">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center py-8 sm:py-12 px-4"
                >
                    <div className="text-5xl sm:text-6xl text-art-gold/30 font-serif mb-4 sm:mb-6">"</div>
                    <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-art-green leading-relaxed mb-6 sm:mb-8">
                        Colors are the language of the soul — they speak when words fall short.
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                        <img src="/pallavi-jain.webp" alt="Pallavi Jain" className="w-14 h-14 rounded-full object-cover border-2 border-art-gold" />
                        <div className="text-left">
                            <p className="font-serif text-art-green font-medium">Pallavi Jain</p>
                            <p className="text-sm text-art-charcoal/60">Founder, AshaPura Art Studio</p>
                        </div>
                    </div>
                </motion.div>
            </Section>

            {/* CTA Section */}
            <section className="relative py-16 sm:py-24 bg-art-green overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)',
                        backgroundSize: '32px 32px'
                    }} />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4 sm:mb-6">
                            Ready to Transform Your Space?
                        </h2>
                        <p className="text-lg sm:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto">
                            Let's create something beautiful together. Commission a custom artwork or explore the collection.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
                            <NavLink to="/contact" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto bg-white text-art-green hover:bg-art-cream shadow-xl">
                                    Get in Touch
                                </Button>
                            </NavLink>
                            <NavLink to="/portfolio">
                                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-art-green">
                                    Browse Gallery
                                </Button>
                            </NavLink>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Include Product Modal */}
            <ProductModal artwork={selectedProduct} onClose={closePDP} />
        </div>
    );
};
