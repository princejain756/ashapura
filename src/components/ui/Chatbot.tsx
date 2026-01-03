import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Mail, Send, ChevronRight, MapPin, Palette, Image as ImageIcon } from 'lucide-react';
import { useChat } from '../../context/ChatContext';
import { NavLink } from 'react-router-dom';

export const Chatbot: React.FC = () => {
    const { isChatOpen, setIsChatOpen, selectedProduct } = useChat();
    const [message, setMessage] = useState('');

    // Auto-open chat slightly after page load for engagement (optional, disabled for now to not be annoying)
    // useEffect(() => { setTimeout(() => setIsChatOpen(true), 5000) }, []);

    const phoneNumber = "919553339663";
    const email = "artist.pallavibhandari@gmail.com";

    const handleSendMessage = () => {
        let text = message;
        if (selectedProduct) {
            text = `Hi, I'm interested in the artwork "${selectedProduct.title}". ${message}`.trim();
        } else if (!message) {
            text = "Hi, I'd like to inquire about your art.";
        }

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
        setMessage('');
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end pointer-events-none">
            <div className="pointer-events-auto">
                <AnimatePresence>
                    {isChatOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white w-[350px] md:w-[380px] rounded-2xl shadow-2xl border border-art-cream overflow-hidden mb-4 flex flex-col max-h-[600px]"
                        >
                            {/* Header */}
                            <div className="bg-art-green text-white p-4 flex justify-between items-center">
                                <div>
                                    <h3 className="font-serif font-medium text-lg">
                                        {selectedProduct ? 'Art Assistant' : 'Quick Help'}
                                    </h3>
                                    <p className="text-xs text-white/70">
                                        {selectedProduct ? 'Ask about this artwork' : 'How can we help you?'}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsChatOpen(false)}
                                    className="p-1 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Content Body */}
                            <div className="flex-1 overflow-y-auto bg-art-cream/30 p-4">
                                {selectedProduct ? (
                                    // PRODUCT MODE
                                    <div className="space-y-4">
                                        <div className="bg-white p-3 rounded-xl border border-art-gold/20 shadow-sm flex gap-3 items-center">
                                            <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                                <img
                                                    src={selectedProduct.images[0]}
                                                    alt={selectedProduct.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-serif text-art-green font-medium leading-tight">{selectedProduct.title}</h4>
                                                <p className="text-xs text-art-charcoal/50 uppercase tracking-wider mt-1">{selectedProduct.category}</p>
                                            </div>
                                        </div>

                                        <p className="text-sm text-art-charcoal/70 text-center px-4">
                                            Interested in this piece? Chat with us directly to check availability or request more details.
                                        </p>

                                        <button
                                            onClick={handleSendMessage}
                                            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-medium transition-colors shadow-sm"
                                        >
                                            <MessageCircle size={20} />
                                            Enquire on WhatsApp
                                        </button>
                                    </div>
                                ) : (
                                    // GENERAL MODE
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <p className="text-xs font-bold text-art-charcoal/40 uppercase tracking-widest mb-3">Popular Topics</p>

                                            <NavLink to="/portfolio" onClick={() => setIsChatOpen(false)}>
                                                <button className="w-full bg-white hover:bg-art-gold/5 p-3 rounded-lg border border-art-green/5 flex items-center justify-between group transition-colors text-left mb-2">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 bg-art-cream rounded-full text-art-green">
                                                            <Palette size={16} />
                                                        </div>
                                                        <span className="text-sm text-art-charcoal/80 font-medium">Commission Artwork</span>
                                                    </div>
                                                    <ChevronRight size={16} className="text-art-charcoal/30 group-hover:text-art-gold" />
                                                </button>
                                            </NavLink>

                                            <NavLink to="/contact" onClick={() => setIsChatOpen(false)}>
                                                <button className="w-full bg-white hover:bg-art-gold/5 p-3 rounded-lg border border-art-green/5 flex items-center justify-between group transition-colors text-left mb-2">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 bg-art-cream rounded-full text-art-green">
                                                            <MapPin size={16} />
                                                        </div>
                                                        <span className="text-sm text-art-charcoal/80 font-medium">Visit Studio</span>
                                                    </div>
                                                    <ChevronRight size={16} className="text-art-charcoal/30 group-hover:text-art-gold" />
                                                </button>
                                            </NavLink>

                                            <NavLink to="/portfolio" onClick={() => setIsChatOpen(false)}>
                                                <button className="w-full bg-white hover:bg-art-gold/5 p-3 rounded-lg border border-art-green/5 flex items-center justify-between group transition-colors text-left">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 bg-art-cream rounded-full text-art-green">
                                                            <ImageIcon size={16} />
                                                        </div>
                                                        <span className="text-sm text-art-charcoal/80 font-medium">Browse Gallery</span>
                                                    </div>
                                                    <ChevronRight size={16} className="text-art-charcoal/30 group-hover:text-art-gold" />
                                                </button>
                                            </NavLink>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Footer Area */}
                            <div className="p-4 bg-white border-t border-art-cream">
                                {selectedProduct ? (
                                    // Product Mode Footer - Input Field
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder={`Ask about ${selectedProduct.title.substring(0, 15)}...`}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            onKeyDown={handleKeyPress}
                                            className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-art-gold/50 focus:ring-1 focus:ring-art-gold/50 transition-all"
                                        />
                                        <button
                                            onClick={handleSendMessage}
                                            disabled={!message.trim()}
                                            className="absolute right-1 top-1 bottom-1 w-10 h-10 bg-art-green text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-art-green/90 transition-all"
                                        >
                                            {message.trim() ? <Send size={16} /> : <MessageCircle size={18} />}
                                        </button>
                                    </div>
                                ) : (
                                    // General Mode Footer - Contact Buttons
                                    <div className="grid grid-cols-3 gap-3">
                                        <button
                                            onClick={() => window.open(`https://wa.me/${phoneNumber}`, '_blank')}
                                            className="flex flex-col items-center justify-center gap-1 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                                <MessageCircle size={18} />
                                            </div>
                                            <span className="text-[10px] font-medium text-gray-600">WhatsApp</span>
                                        </button>
                                        <button
                                            onClick={() => window.open(`tel:+${phoneNumber}`, '_self')}
                                            className="flex flex-col items-center justify-center gap-1 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                                <Phone size={18} />
                                            </div>
                                            <span className="text-[10px] font-medium text-gray-600">Call</span>
                                        </button>
                                        <button
                                            onClick={() => window.open(`mailto:${email}`, '_self')}
                                            className="flex flex-col items-center justify-center gap-1 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                                                <Mail size={18} />
                                            </div>
                                            <span className="text-[10px] font-medium text-gray-600">Email</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Toggle Button */}
                <motion.button
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                        w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-colors relative
                        ${isChatOpen ? 'bg-white text-art-charcoal' : 'bg-art-gold text-white'}
                        ${selectedProduct && !isChatOpen ? 'ring-4 ring-art-green/20' : ''}
                    `}
                >
                    {isChatOpen ? <X size={24} /> : (
                        selectedProduct ? <MessageCircle size={28} /> : <MessageCircle size={28} />
                    )}

                    {/* Notification dot if closed and product selected */}
                    {!isChatOpen && selectedProduct && (
                        <span className="absolute -top-1 -right-1 flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-art-green opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-art-green"></span>
                        </span>
                    )}
                </motion.button>
            </div>
        </div>
    );
};
