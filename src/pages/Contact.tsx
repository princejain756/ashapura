import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook, Send } from 'lucide-react';
import { SEO } from '../components/SEO';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleWhatsApp = (e: React.FormEvent) => {
        e.preventDefault();

        // Draft WhatsApp message
        const whatsappMessage = `Hello! I'm ${formData.name}.

${formData.message}

Contact Details:
📧 Email: ${formData.email}
${formData.phone ? `📞 Phone: ${formData.phone}` : ''}

Looking forward to hearing from you!`;

        const url = `https://wa.me/919553339663?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(url, '_blank');
    };

    const handleEmail = (e: React.FormEvent) => {
        e.preventDefault();

        // Draft email with beautiful formatting
        const subject = `Art Inquiry from ${formData.name}`;
        const body = `Dear Pallavi Jain,

I hope this message finds you well. I am reaching out to inquire about your beautiful artwork.

${formData.message}

---
Contact Information:
Name: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}` : ''}

I look forward to connecting with you and exploring how your art can enhance my space.

Warm regards,
${formData.name}`;

        const mailtoUrl = `mailto:artist.pallavibhandari@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
    };

    return (
        <div className="pt-20 bg-art-cream min-h-screen">
            <SEO
                title="Contact — Ashapura Art Studio"
                description="Contact Ashapura Art Studio (purnaa.store) for premium corporate gifting, custom bundles, commissions, and artwork inquiries. Reach us on WhatsApp, email, or visit in Hyderabad."
                keywords="contact ashapura art studio, corporate gifting, custom bundles, art commissions, hyderabad, whatsapp, email, purnaa.store"
                image="/logoweb.webp"
                type="website"
            />
            <Section>
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-art-green mb-3 sm:mb-4"
                    >
                        Get in Touch
                    </motion.h1>
                    <p className="text-art-charcoal/70 max-w-xl mx-auto text-base sm:text-lg px-4">
                        I would love to explore how my artwork can enhance the interiors of your spaces. Whether you're interested in a commission, a purchase, or just want to say hello — let's connect!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-24 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-art-green/5">
                            <h3 className="text-xl sm:text-2xl font-serif text-art-green mb-6 sm:mb-8">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-art-green/10 p-3 rounded-full text-art-green">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg mb-1">Studio Location</h4>
                                        <p className="text-art-charcoal/70">3-6-429/1/2, Himayat Nagar,<br />Hyderabad, Telangana – 500029</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-art-green/10 p-3 rounded-full text-art-green">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg mb-1">Phone</h4>
                                        <p className="text-art-charcoal/70">+91 9553339663</p>
                                        <p className="text-art-charcoal/70">+91 9949455505</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-art-green/10 p-3 rounded-full text-art-green">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg mb-1">Email</h4>
                                        <a href="mailto:artist.pallavibhandari@gmail.com" className="text-art-charcoal/70 hover:text-art-green transition-colors">
                                            artist.pallavibhandari@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-art-green/5">
                            <h3 className="text-lg sm:text-xl font-serif text-art-green mb-4 sm:mb-6">Follow on Social</h3>
                            <div className="flex flex-wrap gap-3 sm:gap-4">
                                <a
                                    href="https://instagram.com/ashapura_art_studio"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-art-cream px-3 sm:px-4 py-2 rounded-lg hover:bg-art-gold/20 transition-colors tap-scale"
                                >
                                    <Instagram size={18} className="text-art-green" />
                                    <span className="text-xs sm:text-sm">@ashapura_art_studio</span>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/pallavi-jain-303b3923/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-art-cream px-3 sm:px-4 py-2 rounded-lg hover:bg-art-gold/20 transition-colors tap-scale"
                                >
                                    <Linkedin size={18} className="text-art-green" />
                                    <span className="text-xs sm:text-sm">Pallavi Bhandari Jain</span>
                                </a>
                                <a
                                    href="https://www.facebook.com/pallaviartlove/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-art-cream px-3 sm:px-4 py-2 rounded-lg hover:bg-art-gold/20 transition-colors tap-scale"
                                >
                                    <Facebook size={18} className="text-art-green" />
                                    <span className="text-xs sm:text-sm">Ashapura Art Studio</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <form className="bg-white p-6 sm:p-8 rounded-lg shadow-xl border-t-4 border-art-gold">
                            <h3 className="text-xl sm:text-2xl font-serif text-art-green mb-4 sm:mb-6">Send a Message</h3>
                            <div className="space-y-4 sm:space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-art-charcoal/70 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 sm:py-4 rounded-md bg-art-cream/20 border-b-2 border-art-green/10 focus:border-art-gold outline-none transition-colors text-base"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-art-charcoal/70 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 sm:py-4 rounded-md bg-art-cream/20 border-b-2 border-art-green/10 focus:border-art-gold outline-none transition-colors text-base"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-art-charcoal/70 mb-2">Phone (Optional)</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 sm:py-4 rounded-md bg-art-cream/20 border-b-2 border-art-green/10 focus:border-art-gold outline-none transition-colors text-base"
                                        placeholder="+91 XXXXXXXXXX"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-art-charcoal/70 mb-2">Message</label>
                                    <textarea
                                        rows={4}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 sm:py-4 rounded-md bg-art-cream/20 border-b-2 border-art-green/10 focus:border-art-gold outline-none transition-colors resize-none text-base"
                                        placeholder="I'm interested in..."
                                        required
                                    />
                                </div>

                                {/* Two Submit Buttons */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    <Button
                                        type="button"
                                        onClick={handleWhatsApp}
                                        className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center gap-2"
                                        title="Send via WhatsApp"
                                    >
                                        <img src="/icons/whatsapp.png" alt="" className="w-5 h-5" />
                                        <span>WhatsApp</span>
                                    </Button>
                                    <Button
                                        type="button"
                                        onClick={handleEmail}
                                        className="w-full py-4 flex items-center justify-center gap-2"
                                    >
                                        <Send size={18} />
                                        <span>Email</span>
                                    </Button>
                                </div>
                            </div>
                        </form>

                        <p className="mt-6 text-center text-art-charcoal/60 text-sm italic">
                            Looking forward to connecting with you. — Pallavi Jain
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Map Section */}
            <Section background="alt">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl font-serif text-art-green mb-2">Visit Our Studio</h2>
                        <p className="text-art-charcoal/60">3-6-429/1/2, Himayat Nagar, Hyderabad, Telangana – 500029</p>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0674893366!2d78.4744!3d17.3950!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c8f6c3d4b9%3A0x8e6c7f4e9888d8e!2sHimayat%20Nagar%2C%20Hyderabad%2C%20Telangana%20500029!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ashapura Art Studio Location - Himayat Nagar, Hyderabad"
                            className="w-full"
                        />
                    </div>
                    <div className="mt-6 text-center">
                        <a
                            href="https://www.google.com/maps/search/3-6-429/1/2+Himayat+Nagar+Hyderabad+500029"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-art-green hover:text-art-gold transition-colors font-medium"
                        >
                            <MapPin size={18} />
                            Open in Google Maps
                        </a>
                    </div>
                </motion.div>
            </Section>
        </div>
    );
};
