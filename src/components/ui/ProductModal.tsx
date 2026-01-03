import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './Button';
import { type Artwork } from '../../data/artworks';

interface ProductModalProps {
    artwork: Artwork | null;
    onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ artwork, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Reset image index when artwork changes
    React.useEffect(() => {
        if (artwork) {
            setCurrentImageIndex(0);
        }
    }, [artwork]);

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (!artwork) return;
        setCurrentImageIndex((prev) => (prev + 1) % artwork.images.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (!artwork) return;
        setCurrentImageIndex((prev) => (prev - 1 + artwork.images.length) % artwork.images.length);
    };

    return (
        <AnimatePresence>
            {artwork && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-art-green/90 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 p-2 bg-white/20 hover:bg-white/40 rounded-full text-art-charcoal transition-colors md:text-white md:mix-blend-difference"
                        >
                            <X size={24} />
                        </button>

                        {/* Image Section */}
                        <div className="w-full md:w-2/3 bg-art-cream/20 relative flex items-center justify-center p-4 md:p-8 overflow-hidden min-h-[40vh] md:min-h-full">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentImageIndex}
                                    src={artwork.images[currentImageIndex]}
                                    alt={artwork.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="max-h-full max-w-full object-contain shadow-lg rounded-lg"
                                />
                            </AnimatePresence>

                            {/* Navigation Arrows */}
                            {artwork.images.length > 1 && (
                                <>
                                    <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md hover:bg-white text-art-green transition-all">
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md hover:bg-white text-art-green transition-all">
                                        <ChevronRight size={24} />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Details Section */}
                        <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col overflow-y-auto bg-white">
                            <div>
                                <span className="text-art-gold text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                                    {artwork.category}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-serif text-art-green mb-6 leading-tight">
                                    {artwork.title}
                                </h2>

                                <div className="prose prose-sm text-art-charcoal/70 mb-8 leading-relaxed">
                                    <p>
                                        Original artwork by Pallavi Jain. This piece is a unique creation, handcrafted with attention to detail and artistic vision. Perfect for adding a touch of elegance and {artwork.category.toLowerCase()} energy to your space.
                                    </p>
                                    <ul className="list-disc pl-4 mt-4 space-y-1 text-xs">
                                        <li>Authentic Hand-painted Art</li>
                                        <li>Premium Quality Materials</li>
                                        <li>Certificate of Authenticity</li>
                                        <li>Secure & Insured Shipping</li>
                                    </ul>
                                </div>

                                {/* Thumbnails */}
                                {artwork.images.length > 1 && (
                                    <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
                                        {artwork.images.map((img, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentImageIndex(idx)}
                                                className={`
                                                    w-16 h-16 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all
                                                    ${currentImageIndex === idx ? 'border-art-gold opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}
                                                `}
                                            >
                                                <img src={img} alt="" className="w-full h-full object-cover" />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="mt-auto pt-6 border-t border-art-cream">
                                <a href={`https://wa.me/919553339663?text=Hi, I'm interested in the artwork "${artwork.title}". Please share the details.`} target="_blank" rel="noopener noreferrer" className="block">
                                    <Button className="w-full py-4 text-lg shadow-xl shadow-art-green/20">
                                        Inquire / Purchase
                                    </Button>
                                </a>
                                <p className="text-center text-xs text-art-charcoal/40 mt-4">
                                    *Worldwide shipping available.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
