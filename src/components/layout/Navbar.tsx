import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Palette, Image, Sparkles, User, Phone, MapPin, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
    }, [location]);

    const portfolioItems = [
        { name: 'Abstract', icon: Sparkles, desc: 'Modern fluid art', image: '/artworks/blue-spiral-1.webp' },
        { name: 'Spiritual', icon: Palette, desc: 'Divine & sacred art', image: '/artworks/om-painting-1.webp' },
        { name: 'Traditional', icon: Image, desc: 'Tanjore & heritage', image: '/artworks/rajasthan-painting-1.webp' },
    ];

    const aboutItems = [
        { name: 'Meet the Artist', icon: User, path: '/about', desc: 'Pallavi Jain\'s journey', image: null },
        { name: 'Awards & Recognition', icon: null, path: '/about#awards', desc: 'Achievements & press', image: '/icons/award.webp' },
    ];

    const contactItems = [
        { name: 'Visit Studio', icon: MapPin, href: 'https://www.google.com/maps/search/?api=1&query=Himayat+Nagar+Hyderabad', desc: 'Himayat Nagar, Hyderabad', external: true },
        { name: 'Get in Touch', icon: Mail, href: 'https://wa.me/919553339663', desc: 'Inquiries & commissions', external: true },
    ];

    const dropdownVariants = {
        hidden: { opacity: 0, y: 10, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.2 }
        },
        exit: {
            opacity: 0,
            y: 10,
            scale: 0.95,
            transition: { duration: 0.15 }
        }
    };

    return (
        <>
            {/* Creative Floating Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4 sm:py-6'}`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className={`
                        relative flex justify-between items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 
                        rounded-full transition-all duration-500 ease-out
                        ${scrolled
                            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-art-green/10 border border-art-gold/20 scale-[0.98]'
                            : 'bg-transparent backdrop-blur-none shadow-none border border-transparent'
                        }
                    `}>
                        {/* Logo Area */}
                        <NavLink to="/" className="flex items-center gap-3 group">
                            <motion.img
                                src="/logoweb.webp"
                                alt="Asha Pura Studio"
                                className="w-10 h-10 object-contain"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            />
                        </NavLink>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-1">
                            {/* Home */}
                            <NavLink
                                to="/"
                                className={({ isActive }) => `
                                    relative px-5 py-2 rounded-full text-sm uppercase tracking-widest font-medium transition-all duration-300
                                    ${isActive ? 'text-white' : 'text-art-green hover:bg-art-green/5'}
                                `}
                            >
                                {({ isActive }) => (
                                    <>
                                        <span className="relative z-10">Home</span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 bg-art-green rounded-full shadow-md"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>

                            {/* Portfolio with Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setActiveDropdown('portfolio')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <NavLink
                                    to="/portfolio"
                                    className={({ isActive }) => `
                                        relative px-5 py-2 rounded-full text-sm uppercase tracking-widest font-medium transition-all duration-300 flex items-center gap-1
                                        ${isActive ? 'text-white' : 'text-art-green hover:bg-art-green/5'}
                                    `}
                                >
                                    {({ isActive }) => (
                                        <>
                                            <span className="relative z-10">Portfolio</span>
                                            <ChevronDown size={14} className={`relative z-10 transition-transform ${activeDropdown === 'portfolio' ? 'rotate-180' : ''}`} />
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute inset-0 bg-art-green rounded-full shadow-md"
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                        </>
                                    )}
                                </NavLink>

                                <AnimatePresence>
                                    {activeDropdown === 'portfolio' && (
                                        <motion.div
                                            variants={dropdownVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[400px]"
                                        >
                                            <div className="bg-white rounded-2xl shadow-2xl border border-art-gold/10 overflow-hidden">
                                                {/* Decorative header */}
                                                <div className="bg-gradient-to-r from-art-green to-art-green/80 px-6 py-4">
                                                    <h3 className="text-white font-serif text-lg">Explore Art Categories</h3>
                                                    <p className="text-white/70 text-xs mt-1">Discover unique handcrafted pieces</p>
                                                </div>
                                                <div className="p-4 grid gap-2">
                                                    {portfolioItems.map((item, idx) => (
                                                        <NavLink
                                                            key={idx}
                                                            to={`/portfolio?category=${item.name}`}
                                                            className="flex items-center gap-4 p-3 rounded-xl hover:bg-art-cream/50 transition-all group"
                                                        >
                                                            <div className="w-14 h-14 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="flex items-center gap-2">
                                                                    <item.icon size={14} className="text-art-gold" />
                                                                    <span className="font-medium text-art-green">{item.name}</span>
                                                                </div>
                                                                <p className="text-xs text-art-charcoal/60 mt-0.5">{item.desc}</p>
                                                            </div>
                                                        </NavLink>
                                                    ))}
                                                    <div className="border-t border-art-cream pt-3 mt-2">
                                                        <NavLink to="/portfolio" className="flex items-center justify-center gap-2 text-sm text-art-green hover:text-art-gold transition-colors font-medium">
                                                            <span>View All Artworks</span>
                                                            <Sparkles size={14} />
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* About with Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setActiveDropdown('about')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) => `
                                        relative px-5 py-2 rounded-full text-sm uppercase tracking-widest font-medium transition-all duration-300 flex items-center gap-1
                                        ${isActive ? 'text-white' : 'text-art-green hover:bg-art-green/5'}
                                    `}
                                >
                                    {({ isActive }) => (
                                        <>
                                            <span className="relative z-10">About</span>
                                            <ChevronDown size={14} className={`relative z-10 transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute inset-0 bg-art-green rounded-full shadow-md"
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                        </>
                                    )}
                                </NavLink>

                                <AnimatePresence>
                                    {activeDropdown === 'about' && (
                                        <motion.div
                                            variants={dropdownVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[320px]"
                                        >
                                            <div className="bg-white rounded-2xl shadow-2xl border border-art-gold/10 overflow-hidden p-4">
                                                {/* Artist Preview */}
                                                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-art-cream">
                                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-art-gold/30">
                                                        <img src="/pallavi-jain.webp" alt="Pallavi Jain" className="w-full h-full object-cover" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-serif text-art-green font-medium">Pallavi Bhandari Jain</h4>
                                                        <p className="text-xs text-art-charcoal/60">Spiritual & Contemporary Artist</p>
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    {aboutItems.map((item, idx) => (
                                                        <NavLink
                                                            key={idx}
                                                            to={item.path}
                                                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-art-cream/50 transition-all"
                                                        >
                                                            <div className="w-10 h-10 bg-art-green/10 rounded-full flex items-center justify-center text-art-green overflow-hidden">
                                                                {item.image ? (
                                                                    <img src={item.image} alt="" className="w-6 h-6 object-contain" />
                                                                ) : item.icon ? (
                                                                    <item.icon size={18} />
                                                                ) : null}
                                                            </div>
                                                            <div>
                                                                <span className="font-medium text-art-charcoal text-sm">{item.name}</span>
                                                                <p className="text-xs text-art-charcoal/50">{item.desc}</p>
                                                            </div>
                                                        </NavLink>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>



                            {/* Contact with Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setActiveDropdown('contact')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) => `
                                        relative px-5 py-2 rounded-full text-sm uppercase tracking-widest font-medium transition-all duration-300 flex items-center gap-1
                                        ${isActive ? 'text-white' : 'text-art-green hover:bg-art-green/5'}
                                    `}
                                >
                                    {({ isActive }) => (
                                        <>
                                            <span className="relative z-10">Contact</span>
                                            <ChevronDown size={14} className={`relative z-10 transition-transform ${activeDropdown === 'contact' ? 'rotate-180' : ''}`} />
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute inset-0 bg-art-green rounded-full shadow-md"
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                        </>
                                    )}
                                </NavLink>

                                <AnimatePresence>
                                    {activeDropdown === 'contact' && (
                                        <motion.div
                                            variants={dropdownVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="absolute top-full right-0 pt-4 w-[280px]"
                                        >
                                            <div className="bg-white rounded-2xl shadow-2xl border border-art-gold/10 overflow-hidden p-4">
                                                <div className="space-y-2">
                                                    {contactItems.map((item, idx) => (
                                                        <a
                                                            key={idx}
                                                            href={item.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-art-cream/50 transition-all"
                                                        >
                                                            <div className="w-10 h-10 bg-art-green/10 rounded-full flex items-center justify-center text-art-green">
                                                                <item.icon size={18} />
                                                            </div>
                                                            <div>
                                                                <span className="font-medium text-art-charcoal text-sm">{item.name}</span>
                                                                <p className="text-xs text-art-charcoal/50">{item.desc}</p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                                {/* Quick Call Button */}
                                                <a
                                                    href="tel:+919553339663"
                                                    className="mt-4 flex items-center justify-center gap-2 bg-art-green text-white py-3 rounded-xl hover:bg-art-green/90 transition-colors font-medium text-sm"
                                                >
                                                    <Phone size={16} />
                                                    <span>Call Now</span>
                                                </a>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Mobile Menu Button - Dynamic positioning to fix scroll issues */}
                        <div className="md:hidden relative z-50">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`w-11 h-11 flex items-center justify-center rounded-full transition-all touch-target tap-scale ${isOpen ? 'bg-white/10 text-white shadow-lg' : 'bg-art-green/10 text-art-green'}`}
                                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                            >
                                {isOpen ? <X size={24} /> : <Menu size={22} />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Full Screen Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
                        animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
                        exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-art-green flex flex-col items-center justify-center"
                    >
                        {/* Decorative Background */}
                        <div className="absolute inset-0 overflow-hidden opacity-10">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute rounded-full border border-white/30"
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: `${(i + 1) * 200}px`,
                                        height: `${(i + 1) * 200}px`,
                                    }}
                                />
                            ))}
                        </div>

                        <div className="relative z-10 flex flex-col space-y-6 sm:space-y-8 text-center px-6">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Portfolio', path: '/portfolio' },
                                { name: 'About', path: '/about' },
                                { name: 'Contact', path: '/contact' },
                            ].map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + idx * 0.08 }}
                                >
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `text-3xl sm:text-4xl md:text-5xl font-serif tracking-wide transition-all tap-scale inline-block py-2 ${isActive ? 'text-art-gold italic' : 'text-white hover:text-art-gold active:text-art-gold'}`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Quick Actions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-8 sm:bottom-12 left-0 right-0 flex justify-center gap-4 sm:gap-6 px-6 safe-area-bottom"
                        >
                            <a
                                href="tel:+919553339663"
                                className="flex flex-col items-center gap-1.5 text-white/70 hover:text-art-gold transition-colors tap-scale"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                    <Phone size={20} />
                                </div>
                                <span className="text-xs">Call</span>
                            </a>
                            <a
                                href="https://wa.me/919553339663"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center gap-1.5 text-white/70 hover:text-art-gold transition-colors tap-scale"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                    <Mail size={20} />
                                </div>
                                <span className="text-xs">WhatsApp</span>
                            </a>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Himayat+Nagar+Hyderabad"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center gap-1.5 text-white/70 hover:text-art-gold transition-colors tap-scale"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                    <MapPin size={20} />
                                </div>
                                <span className="text-xs">Directions</span>
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
