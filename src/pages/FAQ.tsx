import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Palette, Building2, Truck, MapPin, Sparkles, HelpCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

const siteUrl = (import.meta.env.VITE_SITE_URL as string | undefined) ?? 'https://purnaa.store';

// Comprehensive FAQ data organized by category for maximum SEO
const faqCategories = [
    {
        id: 'art-commissions',
        title: 'Art Commissions & Custom Paintings',
        icon: Palette,
        faqs: [
            {
                question: "How do I commission a custom painting from Pallavi Jain?",
                answer: "Commissioning a custom painting is simple. Contact us via WhatsApp at +91 9553339663 or email. Share your vision, preferred size, color palette, and any reference images. We'll provide a quote and timeline, typically 2-4 weeks for standard sizes. A 50% advance is required to begin work, with the balance due upon completion."
            },
            {
                question: "What types of custom art can you create?",
                answer: "We specialize in spiritual art, abstract paintings, Tanjore-style gold leaf works, contemporary art, large-scale murals, portrait commissions, and deity paintings. Whether it's a Lord Ganesha for your pooja room or a modern abstract for your living room, we create bespoke pieces tailored to your space."
            },
            {
                question: "Do you create art for interior designers and architects?",
                answer: "Yes! We actively collaborate with interior designers and architects across Hyderabad, Bangalore, Mumbai, and Delhi. We offer bulk pricing, project consultations, and can create artwork to match specific color schemes, dimensions, and architectural requirements for residential and commercial projects."
            },
            {
                question: "What is the typical timeline for a commissioned artwork?",
                answer: "Standard paintings (up to 3ft x 4ft) take 2-4 weeks. Large-scale works and murals may take 4-8 weeks. Tanjore paintings with gold leaf work require 4-6 weeks due to the detailed craftsmanship. We recommend booking well in advance for festival or housewarming deadlines."
            },
            {
                question: "Can I see work-in-progress photos of my commissioned piece?",
                answer: "Absolutely! We share regular progress updates via WhatsApp including sketches, underpainting, and final stages. This ensures you're delighted with the direction and can provide feedback at key milestones before completion."
            }
        ]
    },
    {
        id: 'tanjore-spiritual',
        title: 'Tanjore & Spiritual Art',
        icon: Sparkles,
        faqs: [
            {
                question: "What makes Tanjore paintings special?",
                answer: "Tanjore paintings are a classical South Indian art form featuring rich 24-karat gold leaf work, precious stones, and vibrant colors. Originating from Thanjavur, these paintings typically depict Hindu deities and are known for their surface richness and compact composition. Our Tanjore works follow traditional methods handed down through generations."
            },
            {
                question: "Do you use real gold in your Tanjore paintings?",
                answer: "Yes, we use authentic 24-karat gold foil for our Tanjore paintings. The gold leaf is carefully applied over lime and tamarind paste base, giving the characteristic raised surface. This traditional technique ensures the gold never tarnishes and retains its brilliance for generations."
            },
            {
                question: "What spiritual art themes do you offer?",
                answer: "Our spiritual collection includes Om paintings, Lord Ganesha, Lord Krishna, Goddess Lakshmi, Lord Shiva, Radha-Krishna, Buddhist themes, and abstract spiritual expressions. We also create custom deity portraits based on family traditions or specific temple iconography."
            },
            {
                question: "Are your spiritual paintings vastu-compliant?",
                answer: "Yes, we understand vastu principles and can guide you on ideal placements. East or North-facing walls are recommended for deity paintings. We can also customize artwork with specific color energies and compositions following vastu guidelines for prosperity and positive energy."
            }
        ]
    },
    {
        id: 'corporate-gifting',
        title: 'Corporate Gifting',
        icon: Building2,
        faqs: [
            {
                question: "Do you offer corporate gift hampers in Bangalore and Hyderabad?",
                answer: "Yes! We specialize in premium corporate gifting for Bangalore and Hyderabad businesses. Our curated hampers include artistic gifts, handcrafted items, and custom artwork perfect for client appreciation, Diwali gifting, employee rewards, and corporate events. We deliver across Electronic City, Whitefield, HITEC City, Gachibowli, and all major business hubs."
            },
            {
                question: "Can you customize corporate gifts with our company branding?",
                answer: "Absolutely! We offer complete customization including branded packaging, personalized thank-you cards, custom color themes matching your corporate identity, and gift items featuring your company logo. Perfect for brand consistency in your corporate gifting program."
            },
            {
                question: "What is the minimum order for corporate gifts?",
                answer: "We offer flexible ordering with no strict minimums. However, for the best pricing on bulk corporate orders, we recommend 25+ units. We provide volume discounts starting at 10 units. Contact us for a custom quote based on your specific requirements and budget."
            },
            {
                question: "How far in advance should we order corporate gifts?",
                answer: "For standard corporate hampers, 1-2 weeks lead time is sufficient. For custom or personalized gifts, we recommend 3-4 weeks. During peak seasons (Diwali, Christmas), please order 4-6 weeks in advance to ensure timely delivery."
            },
            {
                question: "Do you provide gift wrapping and personalized messages?",
                answer: "Yes, all our corporate gifts come beautifully gift-wrapped with premium packaging. We include personalized greeting cards with your custom message. For bulk orders, we can create custom packaging designs that elevate your brand presence."
            }
        ]
    },
    {
        id: 'shipping-delivery',
        title: 'Shipping & Delivery',
        icon: Truck,
        faqs: [
            {
                question: "Do you ship paintings across India?",
                answer: "Yes, we ship original artworks pan-India with secure, gallery-quality packaging. We use acid-free materials, bubble wrap, and sturdy wooden crates for larger pieces. All shipments include photo documentation and WhatsApp tracking updates at every stage."
            },
            {
                question: "Do you offer international shipping for artworks?",
                answer: "Yes, Ashapura Art Studio (purnaa.store) ships globally to USA, UK, UAE, Australia, Canada, Singapore, and more. International shipments include professional crating, insurance, and customs documentation. Shipping costs and timelines vary by destination – contact us for a quote."
            },
            {
                question: "How do you package artworks for safe delivery?",
                answer: "Every artwork is professionally packaged with multiple layers of protection: acid-free glassine paper, foam corners, bubble wrap, rigid cardboard, and custom-sized boxes. Large or valuable pieces are shipped in wooden crates. We guarantee your artwork arrives in perfect condition."
            },
            {
                question: "What is your delivery timeline within India?",
                answer: "Metro cities (Hyderabad, Bangalore, Mumbai, Delhi, Chennai, Pune) typically receive deliveries in 3-5 business days. Tier-2 cities take 5-7 days. Remote areas may take 7-10 days. For urgent requirements, we offer express shipping options at additional cost."
            },
            {
                question: "Is there insurance on shipped artworks?",
                answer: "Yes, all high-value artworks are shipped with transit insurance. This covers any damage or loss during shipping. We recommend insured shipping for pieces valued above ₹25,000. The insurance cost is typically 1-2% of the artwork value."
            }
        ]
    },
    {
        id: 'studio-visits',
        title: 'Studio & Consultations',
        icon: MapPin,
        faqs: [
            {
                question: "Where is Ashapura Art Studio located?",
                answer: "Our studio is located in Himayat Nagar, Hyderabad, Telangana, India. It's easily accessible and we welcome visits by appointment to view our gallery, discuss commissions, or explore corporate gifting options. Contact us at +91 9553339663 to schedule your visit."
            },
            {
                question: "Can I visit the studio to see artworks before purchasing?",
                answer: "Yes, we encourage studio visits! You can view our complete collection, see works-in-progress, discuss custom projects, and experience the textures and colors of paintings in person. Visits are by appointment only – please call or WhatsApp to schedule."
            },
            {
                question: "Do you offer home or office consultations?",
                answer: "Yes, for clients in Hyderabad and Bangalore, we offer on-site consultations. Pallavi Jain can visit your space to understand lighting, wall dimensions, existing décor, and recommend artwork that perfectly complements your environment. Consultation fees apply for distant locations."
            }
        ]
    },
    {
        id: 'general',
        title: 'General Questions',
        icon: HelpCircle,
        faqs: [
            {
                question: "What is the price range for your artworks?",
                answer: "Our artworks range from ₹5,000 for small prints to ₹5,00,000+ for large commissioned Tanjore pieces with extensive gold leaf work. Standard canvas paintings typically range ₹15,000 - ₹75,000 depending on size and complexity. Contact us for a detailed quote based on your requirements."
            },
            {
                question: "Do you offer payment plans or EMI options?",
                answer: "For high-value commissions above ₹50,000, we offer flexible payment plans. Typically: 50% advance to begin work, 25% at midpoint, and 25% upon delivery. For corporate clients, we also work with NET-30 payment terms on established accounts."
            },
            {
                question: "How should I care for and maintain my artwork?",
                answer: "Keep artworks away from direct sunlight and high humidity. Dust gently with a soft, dry cloth. For Tanjore paintings, never use water or chemicals. Frame with UV-protective glass for longevity. We provide care instructions with every purchase."
            },
            {
                question: "Do you provide framing services?",
                answer: "Yes, we offer professional framing with a selection of premium frames – from classic gold and silver ornate frames for Tanjore works to minimal contemporary frames for modern pieces. Framing costs are additional and vary by size and frame selection."
            },
            {
                question: "Can I return or exchange an artwork?",
                answer: "Due to the personal nature of art, custom commissions are non-refundable. For ready artworks, we accept returns within 7 days of delivery if the piece arrives damaged or significantly different from photos. All returns must be in original condition and packaging."
            }
        ]
    }
];

// Flatten all FAQs for schema markup
const allFaqs = faqCategories.flatMap(cat => cat.faqs);

// FAQPage Schema for Google Rich Results (node-only; context is provided globally)
const faqSchemaNode = {
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
};

// LocalBusiness Schema (node-only; context is provided globally)
const localBusinessSchemaNode = {
    "@type": "LocalBusiness",
    "name": "Ashapura Art Studio",
    "image": new URL('/pallavi-jain.webp', siteUrl).toString(),
    "url": siteUrl,
    "telephone": "+919553339663",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Himayat Nagar",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500029",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 17.4065,
        "longitude": 78.4772
    },
    "priceRange": "₹₹₹",
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "10:00",
            "closes": "19:00"
        }
    ],
    "sameAs": [
        "https://instagram.com/ashapura_art_studio",
        "https://www.linkedin.com/in/pallavi-jain-303b3923/",
        "https://www.facebook.com/pallaviartlove/",
        "https://pin.it/5Exhvu4he"
    ]
};

// BreadcrumbList Schema (node-only; context is provided globally)
const breadcrumbSchemaNode = {
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteUrl
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "FAQ",
            "item": new URL('/faq', siteUrl).toString()
        }
    ]
};

const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
    const [isOpen, setIsOpen] = React.useState(index === 0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="border-b border-art-charcoal/10 last:border-0"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-5 sm:py-6 flex items-start sm:items-center justify-between text-left focus:outline-none group"
                aria-expanded={isOpen}
            >
                <span className="text-base sm:text-lg md:text-xl font-serif text-art-charcoal group-hover:text-art-green transition-colors pr-4">
                    {question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-art-gold text-white rotate-180' : 'bg-art-cream text-art-gold'}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
            </button>
            <motion.div
                initial={false}
                animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <p className="pb-6 text-art-charcoal/70 leading-relaxed font-light text-sm sm:text-base">
                    {answer}
                </p>
            </motion.div>
        </motion.div>
    );
};

const FAQCategory = ({ category, categoryIndex }: { category: typeof faqCategories[0]; categoryIndex: number }) => {
    const Icon = category.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="mb-8 sm:mb-12"
            id={category.id}
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-art-gold to-art-gold/70 flex items-center justify-center shadow-lg">
                    <Icon className="text-white" size={20} />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-art-green">
                    {category.title}
                </h2>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-art-gold/10 p-4 sm:p-6 md:p-8">
                {category.faqs.map((faq, index) => (
                    <FAQItem key={index} {...faq} index={index} />
                ))}
            </div>
        </motion.div>
    );
};

export const FAQ = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-art-cream via-art-cream to-art-cream/50 pt-32 pb-20">
            <SEO
                title="FAQ — Ashapura Art Studio | Corporate Gifting, Custom Art & Tanjore Paintings"
                description="Find answers about custom art commissions, Tanjore paintings with 24k gold, corporate gifting in Bangalore & Hyderabad, shipping, pricing, and more (purnaa.store)."
                keywords="ashapura art studio faq, corporate gifts bangalore, corporate gifts hyderabad, tanjore paintings, custom art commission india, spiritual art, gold leaf artwork, hyderabad art studio, purnaa.store"
                image="/logoweb.webp"
                type="website"
                jsonLd={[faqSchemaNode, localBusinessSchemaNode, breadcrumbSchemaNode]}
            />

            {/* Decorative Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-art-gold/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-art-green/5 rounded-full blur-3xl" />
            </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <span className="text-art-gold text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase block mb-3">
                            Help Center
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-art-green mb-4 sm:mb-6">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-art-charcoal/60 max-w-2xl mx-auto text-base sm:text-lg font-light">
                            Everything you need to know about custom art commissions, Tanjore paintings, corporate gifting, and our services
                        </p>

                        {/* Quick Links */}
                        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mt-8">
                            {faqCategories.map((cat) => (
                                <a
                                    key={cat.id}
                                    href={`#${cat.id}`}
                                    className="px-3 sm:px-4 py-2 bg-white rounded-full text-xs sm:text-sm text-art-charcoal/70 hover:text-art-green hover:shadow-md transition-all border border-art-gold/20"
                                >
                                    {cat.title}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* FAQ Categories */}
                    {faqCategories.map((category, index) => (
                        <FAQCategory key={category.id} category={category} categoryIndex={index} />
                    ))}

                    {/* Contact CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 text-center bg-gradient-to-br from-art-green to-art-green/90 rounded-3xl p-8 sm:p-12 shadow-2xl"
                    >
                        <h2 className="text-2xl sm:text-3xl font-serif text-white mb-4">
                            Still Have Questions?
                        </h2>
                        <p className="text-white/80 mb-6 max-w-lg mx-auto">
                            Can't find what you're looking for? Reach out to us directly and we'll be happy to help.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/919553339663"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-white text-art-green px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                WhatsApp Us
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-art-green transition-all"
                            >
                                Contact Form
                            </a>
                        </div>
                    </motion.div>
                </div>
        </div>
    );
};
