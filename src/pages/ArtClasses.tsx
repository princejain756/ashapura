import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Palette, Calendar, MapPin, Phone, Star, Sparkles, Brush, CheckCircle, Clock } from 'lucide-react';
import { SEO } from '../components/SEO';

export const ArtClasses: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20">
            <SEO
                title="Art Classes | Ashapura Art Studio"
                description="Ignite your child's creativity with Art Classes by Pallavi Jain. For ages 7-14. Join our fun, creative sessions in Banjara Hills."
            />

            {/* Hero Section */}
            <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-art-cream via-[#faeedb] to-art-gold/10 py-16">
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            rotate: 360,
                            scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-1/2 -right-1/2 w-[80rem] h-[80rem] bg-gradient-to-tr from-art-gold/5 to-transparent rounded-full blur-3xl"
                    />
                    <div className="absolute top-0 left-0 w-full h-full opacity-30"
                        style={{ backgroundImage: 'radial-gradient(#C5A065 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-art-gold/10 text-art-gold font-medium mb-6 backdrop-blur-sm border border-art-gold/20"
                        >
                            <Sparkles size={16} />
                            <span>Admissions Open Now</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-serif text-art-green mb-2">
                            Art Classes
                        </h1>
                        <h2 className="text-3xl md:text-4xl font-serif text-art-gold italic mb-6">
                            by Pallavi Jain
                        </h2>

                        <p className="text-xl md:text-2xl text-art-charcoal/80 font-light mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Ignite Your Child's Creativity.<br />
                            <span className="text-base md:text-lg mt-2 block opacity-80">A nurturing environment to explore imagination and artistic expression.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                            <div className="flex items-center gap-3 bg-white/60 p-4 rounded-xl shadow-sm border border-art-cream">
                                <div className="p-2 bg-art-green/10 rounded-full text-art-green">
                                    <Clock size={24} />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-art-charcoal/60 uppercase tracking-wide">Age Group</p>
                                    <p className="font-serif text-lg text-art-green font-medium">7—14 Years</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-white/60 p-4 rounded-xl shadow-sm border border-art-cream">
                                <div className="p-2 bg-art-green/10 rounded-full text-art-green">
                                    <Calendar size={24} />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-art-charcoal/60 uppercase tracking-wide">Frequency</p>
                                    <p className="font-serif text-lg text-art-green font-medium">3 Sessions / Week</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="https://wa.me/919553339663" target="_blank" rel="noreferrer">
                                <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">
                                    Register Now
                                </Button>
                            </a>
                            <a href="#details">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                    Class Details
                                </Button>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Image/Graphic */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10">
                            <img src="/createplaylearn.webp" alt="Create. Play. Learn." className="w-full max-w-md rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" />
                        </div>
                        {/* Decorative floating elements */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-8 -right-8 w-24 h-24 bg-yellow-200 rounded-full blur-xl opacity-60 z-0"
                        />
                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-200 rounded-full blur-xl opacity-60 z-0"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <Section background="default" id="details">
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-art-cream/30 p-8 rounded-2xl border border-art-cream hover:shadow-lg transition-all"
                    >
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-art-gold shadow-sm mb-6">
                            <Brush size={28} />
                        </div>
                        <h3 className="text-2xl font-serif text-art-green mb-3">All Materials Provided</h3>
                        <p className="text-art-charcoal/70 leading-relaxed">
                            No need to worry about supplies! We provide high-quality paints, brushes, canvases, and crafting materials for every session.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-art-cream/30 p-8 rounded-2xl border border-art-cream hover:shadow-lg transition-all"
                    >
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-art-gold shadow-sm mb-6">
                            <Star size={28} />
                        </div>
                        <h3 className="text-2xl font-serif text-art-green mb-3">Small Batch Size</h3>
                        <p className="text-art-charcoal/70 leading-relaxed">
                            We ensure personalized attention for every child, helping them develop their unique style and confidence in a focused environment.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-art-cream/30 p-8 rounded-2xl border border-art-cream hover:shadow-lg transition-all"
                    >
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-art-gold shadow-sm mb-6">
                            <Palette size={28} />
                        </div>
                        <h3 className="text-2xl font-serif text-art-green mb-3">Creative Freedom</h3>
                        <p className="text-art-charcoal/70 leading-relaxed">
                            Structured lessons meet creative freedom. Children learn techniques while being encouraged to experiment and express themselves.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Location & Contact */}
            <Section background="alt" className="relative overflow-hidden">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-art-gold/10">
                    <div className="grid md:grid-cols-2">
                        <div className="p-8 md:p-12 flex flex-col justify-center bg-art-green text-white">
                            <h2 className="text-3xl font-serif mb-6 text-white">Join Us Today!</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-art-gold shrink-0 mt-1" size={24} />
                                    <div>
                                        <h4 className="font-medium text-lg text-art-gold mb-1">Location</h4>
                                        <p className="opacity-90 leading-relaxed">Banjara Hills,<br />MLA Colony Rd 12,<br />Hyderabad</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Phone className="text-art-gold shrink-0 mt-1" size={24} />
                                    <div>
                                        <h4 className="font-medium text-lg text-art-gold mb-1">Call to Register</h4>
                                        <a href="tel:+919553339663" className="text-2xl font-serif hover:text-art-gold transition-colors block">
                                            +91 9553339663
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 md:p-12 bg-art-cream flex flex-col justify-center items-center text-center">
                            <div className="w-20 h-20 rounded-full bg-white mb-6 flex items-center justify-center shadow-md">
                                <img src="/icons/paint.png" alt="Art" className="w-12 h-12 object-contain" />
                            </div>
                            <h3 className="text-2xl font-serif text-art-green mb-4">Limited Spots Available</h3>
                            <p className="text-art-charcoal/70 mb-8">
                                Give your child the gift of creativity. Secure a spot in our upcoming batch.
                            </p>
                            <a href="https://wa.me/919553339663?text=Hi,%20I'm%20interested%20in%20the%20Art%20Classes%20for%20kids." target="_blank" rel="noreferrer" className="w-full">
                                <Button className="w-full">Message on WhatsApp</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};
