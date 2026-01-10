import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import { artworks, artworkCategories, type Artwork } from '../data/artworks';
import { ProductModal } from '../components/ui/ProductModal';
import { useChat } from '../context/ChatContext';
import { SEO } from '../components/SEO';

export const Portfolio: React.FC = () => {
    const [filter, setFilter] = useState('All');
    const { selectedProduct, setSelectedProduct } = useChat();

    const filteredArtworks = useMemo(() =>
        filter === 'All' ? artworks : artworks.filter(art => art.category === filter),
        [filter]);

    const openPDP = (art: Artwork) => {
        setSelectedProduct(art);
        document.body.style.overflow = 'hidden';
    };

    const closePDP = () => {
        setSelectedProduct(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="min-h-screen bg-art-cream/30 pt-32 pb-20">
            <SEO
                title="Portfolio — Original Art, Murals & Corporate Gifting"
                description="Explore Purnaa Store’s curated portfolio of spiritual, contemporary, and abstract artworks. Browse originals, commissions, and premium corporate gifting collections."
                keywords="art portfolio, original paintings, murals, corporate gifting, spiritual art, abstract art, Hyderabad artist, purnaa store"
                image="/logoweb.webp"
                type="website"
            />
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-art-gold text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase block mb-2 sm:mb-3">Portfolio</span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-art-green mb-4 sm:mb-6">
                        Art Collection
                    </h1>
                    <p className="text-art-charcoal/60 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed px-4">
                        Explore a curated selection of spiritual, contemporary, and abstract artworks. Each piece is a unique expression of consciousness and creativity.
                    </p>
                </motion.div>
            </div>

            {/* Filter Tabs */}
            <div className="sticky top-24 sm:top-28 z-30 bg-white/80 backdrop-blur-md border-b border-art-gold/10 mb-8 sm:mb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex gap-1 sm:gap-2 md:gap-8 overflow-x-auto pb-2 scrollbar-hide scroll-smooth-touch justify-start md:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
                        {artworkCategories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`
                                    relative px-3 sm:px-4 py-2 text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest whitespace-nowrap transition-colors duration-300 touch-target tap-scale flex-shrink-0
                                    ${filter === cat ? 'text-art-green font-bold' : 'text-art-charcoal/50 hover:text-art-green active:text-art-green'}
                                `}
                            >
                                {cat}
                                {filter === cat && (
                                    <motion.div
                                        layoutId="activeFilter"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-art-gold"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    layout
                    className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredArtworks.map((art) => (
                            <motion.div
                                layout
                                key={art.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="break-inside-avoid group cursor-pointer"
                                onClick={() => openPDP(art)}
                            >
                                <div className="relative overflow-hidden rounded-xl bg-white shadow-md group-hover:shadow-2xl sm:group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-1 group-active:scale-[0.98]">
                                    <img
                                        src={art.images[0]}
                                        alt={art.title}
                                        loading="lazy"
                                        className="w-full h-auto object-cover transition-transform duration-700 sm:group-hover:scale-110"
                                    />

                                    {/* Overlay - Always visible indicator on mobile, hover on desktop */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-art-green/80 via-transparent to-transparent sm:bg-art-green/80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end sm:justify-center text-white p-4 sm:p-6 text-center">
                                        <span className="text-art-gold text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-1 sm:mb-2 sm:transform sm:translate-y-4 sm:group-hover:translate-y-0 sm:transition-transform sm:duration-500 sm:delay-100">
                                            {art.category}
                                        </span>
                                        <h3 className="text-base sm:text-2xl font-serif sm:mb-4 sm:transform sm:translate-y-4 sm:group-hover:translate-y-0 sm:transition-transform sm:duration-500 sm:delay-150">
                                            {art.title}
                                        </h3>
                                        <div className="hidden sm:flex w-12 h-12 rounded-full bg-white text-art-green items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-200">
                                            <ZoomIn size={20} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Shared Product Modal */}
            <ProductModal artwork={selectedProduct} onClose={closePDP} />
        </div>
    );
};
