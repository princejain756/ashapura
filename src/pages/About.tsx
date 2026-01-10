import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin, Award, Building2 } from 'lucide-react';
import { SEO } from '../components/SEO';

export const About: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <div className="pt-20 bg-art-cream min-h-screen">
            <SEO
                title="About — Purnaa Store"
                description="Learn about Purnaa Store and the artist behind the collections. Discover our story, values, awards, and how we create premium art and corporate gifting experiences."
                keywords="about purnaa store, pallavi jain, hyderabad artist, corporate gifting, spiritual art, awards, ashapura studio"
                image="/logoweb.webp"
                type="website"
            />
            {/* Hero Section - About Me */}
            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-art-gold/20 transform translate-x-4 translate-y-4 rounded-sm" />
                        <img
                            src="/pallavi-jain.webp"
                            alt="Pallavi Jain - Spiritual Artist"
                            className="relative z-10 w-full h-auto rounded-sm shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h4 className="text-art-gold font-serif text-base sm:text-lg tracking-widest mb-2">🌿 ABOUT ME</h4>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-art-green mb-4">A Journey Through Colors and Consciousness</h1>

                        <div className="space-y-4 sm:space-y-5 text-art-charcoal/80 text-base sm:text-lg leading-relaxed font-light">
                            <p>
                                Pallavi is a <strong className="text-art-green font-medium">Hyderabad-based spiritual and contemporary artist</strong> whose work bridges inner meditation with vibrant expressions on canvas. With a background in jewelry design and a deep-rooted love for art passed down by her mother, Pallavi creates paintings that celebrate harmony, balance, and the unseen energies that connect us all.
                            </p>
                            <p>
                                Her intuitive, soul-guided process transforms spaces into sanctuaries — from private homes to luxury hotels — infusing them with color, consciousness, and calm. She believes that <em className="text-art-gold">art should be accessible to everyone</em>.
                            </p>
                            <p>
                                Through <strong className="text-art-green font-medium">Ashapura Studio</strong> (GST registered) and <strong className="text-art-green font-medium">Purnaa Store</strong> — the official online storefront — Pallavi offers original paintings, murals, hand-painted décor, and custom artworks that touch hearts and elevate everyday spaces.
                            </p>
                        </div>

                        <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-4 sm:gap-8">
                            <div>
                                <h3 className="text-3xl sm:text-4xl font-serif text-art-green mb-1 sm:mb-2">800+</h3>
                                <p className="text-xs sm:text-sm uppercase tracking-widest text-art-gold">Artworks Sold</p>
                            </div>
                            <div>
                                <h3 className="text-3xl sm:text-4xl font-serif text-art-green mb-1 sm:mb-2">6+</h3>
                                <p className="text-xs sm:text-sm uppercase tracking-widest text-art-gold">Years Journey</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* My Story Section */}
            <Section background="alt">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-art-gold font-serif text-base sm:text-lg tracking-widest mb-2 text-center">🌿 MY STORY</h2>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-art-green mb-6 sm:mb-8 text-center">Colors, Courage, and a Mother's Journey</h3>
                    <p className="text-center text-art-charcoal/60 italic mb-12">— Pallavi Jain</p>

                    <div className="space-y-5 sm:space-y-6 text-art-charcoal/80 text-base sm:text-lg leading-relaxed font-light">
                        <p>
                            I was born in Mumbai, the vibrant City of Lights, and raised in Sirsa, Haryana. My mother — my first guru — painted my world with creativity and faith. I grew up watching her lose herself in her art, and it awakened something beautiful in me.
                        </p>
                        <p>
                            In 2002, I moved to Mumbai to study <strong className="text-art-green font-medium">Jewelry Designing and Manufacturing at S.N.D.T. Women's University, Juhu</strong>. I worked as a senior jewelry designer at Asian Star Corporation (Jewel Art), which gave me the discipline and eye for detail that I still carry into my art today.
                        </p>
                        <p>
                            Life took me to Hyderabad in 2006, where I balanced my role as a jewelry designer and a wife. Over time, my inner voice called me to paint, to explore my true self beyond roles and routines. I pursued an art foundation course at <strong className="text-art-green font-medium">JNTU University, Masab Tank, Hyderabad</strong>, and stepped fully into the world of painting — turning blank canvases into spaces for meditation and healing.
                        </p>
                        <p>
                            Today, a devoted mother of two wonderful children, I bring resilience, dedication, and heart into every piece of art I create. I stand tall in my truth — an artist, an entrepreneur, and above all, a believer in the power of colors to heal and connect us. Every stroke I paint is a reflection of my journey — of resilience, faith, and the timeless dance between dreams and reality.
                        </p>

                        <blockquote className="border-l-4 border-art-gold pl-6 py-4 my-8 bg-art-gold/5 rounded-r-lg">
                            <p className="italic text-art-green font-serif text-xl">
                                "I believe colors are the language of the soul — they speak when words fall short."
                            </p>
                        </blockquote>

                        <p>
                            Through my art, I seek to create harmony, evoke introspection, and invite others into a space of serenity and self-discovery. My creative process is intuitive, guided by inner visions and emotions, translating the unseen into vibrant forms.
                        </p>
                        <p className="text-art-green font-medium text-center text-xl mt-8">
                            For me, every canvas is a celebration of life's infinite colors and the sacred energy that connects us all. Let's meditate, create, and celebrate this life together — one canvas at a time.
                        </p>
                    </div>
                </motion.div>
            </Section>

            {/* Company Profile Section */}
            <Section>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-art-gold font-serif text-base sm:text-lg tracking-widest mb-2">🏛️ COMPANY PROFILE</h2>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-art-green">Purnaa Store (Ashapura Studio)</h3>
                        <p className="text-art-charcoal/60 mt-4 italic">"Making Art in Common Man's Reach"</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div className="space-y-5 sm:space-y-6 text-art-charcoal/80 text-base sm:text-lg leading-relaxed font-light">
                            <p>
                                Established in <strong className="text-art-green font-medium">April 2019</strong>, Ashapura Studio powers Purnaa Store — a registered and trusted name in the Indian art scene, known for transforming walls and spaces with powerful creativity and elegant precision.
                            </p>
                            <p>
                                Founded by Pallavi, a passionate artist with over six years of professional experience, the studio has sold more than <strong className="text-art-green font-medium">800 original artworks</strong> to clients across India and globally.
                            </p>
                            <p>
                                Pallavi specializes in <strong className="text-art-green font-medium">large-scale canvas paintings, abstract art, personalized portraits, wall art, and luxurious 24k gold Tanjore paintings</strong> of deities. Her work reflects a harmonious blend of tradition and contemporary design, ideal for homes, hotels, and commercial spaces.
                            </p>

                            <div className="flex items-center gap-3 bg-art-gold/10 p-4 rounded-lg">
                                <Award className="text-art-gold" size={32} />
                                <p className="text-art-green font-medium">
                                    Awarded "Most Creative Stall" at the prestigious IIID Exhibition in Hyderabad
                                </p>
                            </div>

                            <p>
                                Top clientele includes <span className="italic text-art-green">Santosh Dhaba</span>, <span className="italic text-art-green">SVM Grand Hotels</span>, and the <span className="italic text-art-green">Mercure-Novotel Group</span>, a testament to her reputation for quality and professionalism.
                            </p>
                        </div>

                        {/* Business Details Card */}
                        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl border-t-4 border-art-gold">
                            <div className="flex items-center gap-3 mb-6">
                                <Building2 className="text-art-green" size={28} />
                                <h4 className="text-2xl font-serif text-art-green">Business Details</h4>
                            </div>

                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between border-b border-art-cream pb-2">
                                    <span className="text-art-charcoal/60">Business Name</span>
                                    <span className="font-medium text-art-green">ASHAPURA STUDIO</span>
                                </div>
                                <div className="flex justify-between border-b border-art-cream pb-2">
                                    <span className="text-art-charcoal/60">GSTIN</span>
                                    <span className="font-medium">36AMJPB6145N1ZS</span>
                                </div>
                                <div className="flex justify-between border-b border-art-cream pb-2">
                                    <span className="text-art-charcoal/60">Entity Type</span>
                                    <span className="font-medium">Sole Proprietorship</span>
                                </div>
                                <div className="flex justify-between border-b border-art-cream pb-2">
                                    <span className="text-art-charcoal/60">Nature of Business</span>
                                    <span className="font-medium">Retail Business</span>
                                </div>
                                <div className="flex justify-between border-b border-art-cream pb-2">
                                    <span className="text-art-charcoal/60">Registration Date</span>
                                    <span className="font-medium">07 August 2020</span>
                                </div>
                                <div className="pt-2">
                                    <span className="text-art-charcoal/60 block mb-1">Address</span>
                                    <span className="font-medium text-art-green">3-6-429/1/2, Himayat Nagar, Hyderabad, Telangana – 500029</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Section>

            {/* Recognition & Awards Section */}
            <Section background="alt" id="awards">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-art-gold font-serif text-base sm:text-lg tracking-widest mb-2">🏆 RECOGNITION</h2>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-art-green">Awards & Achievements</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-lg shadow-xl overflow-hidden"
                        >
                            <img
                                src="/stall-design-award.webp"
                                alt="Receiving Most Creative Stall Award at IIID Exhibition"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h4 className="text-xl font-serif text-art-green mb-2">Most Creative Stall Award</h4>
                                <p className="text-art-charcoal/70">
                                    Recognized for innovative visual storytelling and exceptional stall design at the prestigious IIID Exhibition in Hyderabad.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-lg shadow-xl overflow-hidden"
                        >
                            <img
                                src="/award-hicc-novotel.webp"
                                alt="Award Night at HICC, Novotel"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h4 className="text-xl font-serif text-art-green mb-2">Award Night at HICC, Novotel</h4>
                                <p className="text-art-charcoal/70">
                                    Honored among top artists and designers at the prestigious award ceremony held at HICC, Novotel Hyderabad.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </Section>

            {/* Connect Section */}
            <Section background="default">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl sm:text-4xl font-serif text-art-green mb-6 sm:mb-8">Connect with Pallavi</h2>

                    <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8 sm:mb-10">
                        <a
                            href="https://instagram.com/ashapura_art_studio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow hover:bg-art-gold/10 tap-scale"
                        >
                            <Instagram className="text-art-green" size={20} />
                            <span className="text-art-charcoal text-sm sm:text-base">@ashapura_art_studio</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/pallavi-jain-303b3923/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow hover:bg-art-gold/10 tap-scale"
                        >
                            <Linkedin className="text-art-green" size={20} />
                            <span className="text-art-charcoal text-sm sm:text-base">Pallavi Bhandari Jain</span>
                        </a>
                        <a
                            href="https://www.facebook.com/pallaviartlove/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow hover:bg-art-gold/10 tap-scale"
                        >
                            <Facebook className="text-art-green" size={20} />
                            <span className="text-art-charcoal text-sm sm:text-base">Purnaa Store</span>
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 text-art-charcoal/80 text-sm sm:text-base">
                        <div className="flex items-center gap-2">
                            <Mail className="text-art-gold" size={20} />
                            <a href="mailto:artist.pallavibhandari@gmail.com" className="hover:text-art-green transition-colors">
                                artist.pallavibhandari@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="text-art-gold" size={20} />
                            <span>+91 9553339663 / 9949455505</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="text-art-gold" size={20} />
                            <span>Himayat Nagar, Hyderabad</span>
                        </div>
                    </div>

                    <p className="mt-12 text-art-green font-serif text-xl italic">
                        "I would love to explore how my artwork can enhance your spaces. Looking forward to connecting with you."
                    </p>
                    <p className="mt-4 text-art-charcoal/80">
                        Best regards,<br />
                        <strong className="text-art-green">Pallavi Jain</strong><br />
                        Purnaa Store (Ashapura Studio)
                    </p>
                </motion.div>
            </Section>
        </div>
    );
};
