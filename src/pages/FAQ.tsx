import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { SEO } from '../components/SEO';
import { Plus, Minus } from 'lucide-react';

const FAQs = [
    {
        question: "Do you deliver corporate gifts in Bangalore and Hyderabad?",
        answer: "Yes, we specialize in corporate gifting for Bangalore and Hyderabad. We have a robust delivery network ensuring your custom hampers and artistic gifts reach your clients or employees on time, whether they are in Electronic City, Whitefield, or HITEC City."
    },
    {
        question: "Can I commission a custom painting for my home or office?",
        answer: "Absolutely! Pallavi Jain specializes in commissioned artworks tailored to your specific architectural and interior design needs. We work closely with architects and homeowners to create bespoke pieces."
    },
    {
        question: "What makes your corporate gifts unique?",
        answer: "Our gifts are not mass-produced generic items. They are curated, artistic, and often handcrafted. We combine utility with aesthetic beauty, making them perfect for premium business gifting."
    },
    {
        question: "Do you ship internationally?",
        answer: "Yes, Ashapura Art Studio ships original artworks globally. We ensure secure packaging and insurance for all international shipments."
    },
    {
        question: "Where is your studio located?",
        answer: "Our studio is located in Himayat Nagar, Hyderabad. We welcome visits by appointment to view our gallery and discuss commissions."
    }
];

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="border-b border-art-charcoal/10 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
            >
                <span className="text-xl font-serif text-art-charcoal">{question}</span>
                {isOpen ? <Minus className="text-art-gold" /> : <Plus className="text-art-gold" />}
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <p className="pb-6 text-art-charcoal/70 leading-relaxed font-light">
                    {answer}
                </p>
            </motion.div>
        </div>
    );
};

export const FAQ = () => {
    return (
        <div className="pt-20 bg-art-cream min-h-screen">
            <SEO
                title="Frequently Asked Questions - Corporate Gifting & Art"
                description="Find answers about our corporate gifting services in Bangalore & Hyderabad, custom art commissions, and shipping policies."
                keywords="faq, corporate gifting faq, art commission questions, shipping policy"
            />
            <Section>
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl lg:text-5xl font-serif text-art-green mb-4">Frequently Asked Questions</h1>
                        <p className="text-art-charcoal/60">Everything you need to know about our services</p>
                    </motion.div>

                    <div className="bg-white rounded-lg shadow-xl p-8 lg:p-12">
                        {FAQs.map((faq, index) => (
                            <FAQItem key={index} {...faq} />
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
};
