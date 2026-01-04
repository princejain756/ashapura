import React from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-art-green text-art-cream py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 text-center sm:text-left">

                    {/* Brand */}
                    <div className="flex flex-col items-center sm:items-start space-y-3 sm:space-y-4 sm:col-span-2 md:col-span-1">
                        <img src="/logoweb.webp" alt="Ashapura Art Studios" className="h-16 w-auto brightness-0 invert opacity-80" />
                        <p className="text-art-cream/80 text-sm max-w-xs leading-relaxed">
                            Spiritual & Contemporary Art by Pallavi Jain. Transforming spaces into sanctuaries of color, consciousness, and calm.
                        </p>
                        <p className="text-art-gold text-xs italic">"Making Art in Common Man's Reach"</p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col space-y-3 sm:space-y-4">
                        <h4 className="font-serif text-base sm:text-lg tracking-widest text-art-gold">Explore</h4>
                        <div className="flex flex-col space-y-2 sm:space-y-3">
                            <NavLink to="/" className="text-sm py-1 hover:text-art-gold transition-colors tap-scale">Home</NavLink>
                            <NavLink to="/portfolio" className="text-sm py-1 hover:text-art-gold transition-colors tap-scale">Portfolio</NavLink>
                            <NavLink to="/about" className="text-sm py-1 hover:text-art-gold transition-colors tap-scale">About Artist</NavLink>
                            <NavLink to="/blog" className="text-sm py-1 hover:text-art-gold transition-colors tap-scale">Blog</NavLink>
                            <NavLink to="/faq" className="text-sm py-1 hover:text-art-gold transition-colors tap-scale">FAQ</NavLink>
                            <NavLink to="/contact" className="text-sm py-1 hover:text-art-gold transition-colors tap-scale">Contact</NavLink>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col space-y-3 sm:space-y-4">
                        <h4 className="font-serif text-base sm:text-lg tracking-widest text-art-gold">Contact</h4>
                        <div className="flex flex-col space-y-2 sm:space-y-3 text-sm">
                            <a href="mailto:artist.pallavibhandari@gmail.com" className="flex items-center gap-2 py-1 hover:text-art-gold transition-colors justify-center sm:justify-start tap-scale">
                                <Mail size={16} />
                                <span>artist.pallavibhandari@gmail.com</span>
                            </a>
                            <a href="tel:+919553339663" className="flex items-center gap-2 py-1 hover:text-art-gold transition-colors justify-center sm:justify-start tap-scale">
                                <Phone size={16} />
                                <span>+91 9553339663 / 9949455505</span>
                            </a>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Himayat+Nagar+Hyderabad"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 py-1 hover:text-art-gold transition-colors justify-center sm:justify-start tap-scale"
                            >
                                <MapPin size={16} />
                                <span>Himayat Nagar, Hyderabad</span>
                            </a>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="flex flex-col space-y-3 sm:space-y-4">
                        <h4 className="font-serif text-base sm:text-lg tracking-widest text-art-gold">Connect</h4>
                        <div className="flex justify-center sm:justify-start space-x-5 sm:space-x-4">
                            <a href="https://instagram.com/ashapura_art_studio" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-art-gold transition-colors tap-scale" title="Instagram">
                                <Instagram size={24} />
                            </a>
                            <a href="https://linkedin.com/in/pallavi-bhandari-jain" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-art-gold transition-colors tap-scale" title="LinkedIn">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://www.facebook.com/pallaviartlove/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-art-gold transition-colors tap-scale" title="Facebook">
                                <Facebook size={24} />
                            </a>
                        </div>
                        <p className="text-xs text-art-cream/60">
                            GSTIN: 36AMJPB6145N1ZS
                        </p>
                    </div>

                </div>

                <div className="border-t border-art-cream/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
                    <p className="text-sm text-art-cream/60">© 2025 AshaPura Art Studio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
