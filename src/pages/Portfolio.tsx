import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import { artworks, artworkCategories, type Artwork } from '../data/artworks';
import { ProductModal } from '../components/ui/ProductModal';
import { useChat } from '../context/ChatContext';

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
        <div className="min-h-screen bg-art-cream/30 pt-24 pb-20">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-art-gold text-sm font-medium tracking-[0.3em] uppercase block mb-3">Portfolio</span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-art-green mb-6">
                        Art Collection
                    </h1>
                    <p className="text-art-charcoal/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        Explore a curated selection of spiritual, contemporary, and abstract artworks. Each piece is a unique expression of consciousness and creativity.
                    </p>
                </motion.div>
            </div>

            {/* Filter Tabs */}
            <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-art-gold/10 mb-12">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex gap-2 md:gap-8 overflow-x-auto pb-2 scrollbar-hide justify-start md:justify-center">
                        {artworkCategories.map((cat, idx) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`
                                    relative px-3 py-2 text-sm uppercase tracking-widest whitespace-nowrap transition-colors duration-300
                                    ${filter === cat ? 'text-art-green font-bold' : 'text-art-charcoal/50 hover:text-art-green'}
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
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    layout
                    className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredArtworks.map((art, index) => (
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
                                <div className="relative overflow-hidden rounded-xl bg-white shadow-md group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-1">
                                    <img
                                        src={art.images[0]}
                                        alt={art.title}
                                        loading="lazy"
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-art-green/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6 text-center">
                                        <span className="text-art-gold text-xs tracking-[0.2em] uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                            {art.category}
                                        </span>
                                        <h3 className="text-2xl font-serif mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                                            {art.title}
                                        </h3>
                                        <div className="w-12 h-12 rounded-full bg-white text-art-green flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-200">
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
