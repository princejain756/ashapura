import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    background?: 'default' | 'alt' | 'dark';
}

export const Section: React.FC<SectionProps> = ({
    children,
    className = '',
    id,
    background = 'default'
}) => {
    const backgrounds = {
        default: "bg-art-cream",
        alt: "bg-white",
        dark: "bg-art-green text-art-cream"
    };

    return (
        <section
            id={id}
            className={`py-20 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden ${backgrounds[background]} ${className}`}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-7xl mx-auto"
            >
                {children}
            </motion.div>
        </section>
    );
};
