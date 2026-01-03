export type Category = 'All' | 'Abstract' | 'Nature' | 'Portraits' | 'Spiritual' | 'Contemporary' | 'Traditional';

export interface Artwork {
    id: number;
    title: string;
    category: Category;
    price: string;
    images: string[];
}

export const artworkCategories: Category[] = ['All', 'Abstract', 'Nature', 'Portraits', 'Spiritual', 'Contemporary', 'Traditional'];

export const artworks: Artwork[] = [
    { id: 1, title: 'Abstract Red Mens', category: 'Abstract', price: '₹18,000', images: ['/artworks/abstract-art-in-red-men’s-1.webp'] },
    { id: 2, title: 'Golden Abstract', category: 'Abstract', price: '₹25,000', images: ['/artworks/abstract,-black-and-gold-foil-1.webp'] },
    { id: 3, title: 'Mystic Aghori', category: 'Traditional', price: '₹22,000', images: ['/artworks/aghori-1.webp', '/artworks/aghori-2.webp', '/artworks/aghori-3.webp', '/artworks/aghori-4.webp'] },
    { id: 4, title: 'Alcohol Rhythm', category: 'Abstract', price: '₹14,000', images: ['/artworks/alcohol-rhythm-1.webp'] },
    { id: 5, title: 'Alcohol Flowers', category: 'Abstract', price: '₹15,000', images: ['/artworks/alcohol,-flowers,-1.webp'] },
    { id: 6, title: 'Beach Texture', category: 'Nature', price: '₹16,000', images: ['/artworks/beach-in-texture-1.webp'] },
    { id: 7, title: 'Black Buddha', category: 'Spiritual', price: '₹19,000', images: ['/artworks/black-buddha-1.webp'] },
    { id: 8, title: 'Blue Abstract', category: 'Abstract', price: '₹18,500', images: ['/artworks/blue-abstract-1.webp', '/artworks/blue-abstract-2.webp', '/artworks/blue-abstract-3.webp', '/artworks/blue-abstract-4.webp'] },
    { id: 9, title: 'Blue Mandala', category: 'Spiritual', price: '₹17,000', images: ['/artworks/blue-abstract-mandala-p46-1.webp'] },
    { id: 10, title: 'Blue Flowers', category: 'Nature', price: '₹13,000', images: ['/artworks/blue-flower-1.webp'] },
    { id: 11, title: 'Ethereal Blue Lady', category: 'Portraits', price: '₹12,000', images: ['/artworks/blue-lady-1.webp', '/artworks/blue-lady-2.webp', '/artworks/blue-lady-3.webp', '/artworks/blue-lady-4.webp', '/artworks/blue-lady-5.webp'] },
    { id: 12, title: 'Cosmic Spiral', category: 'Abstract', price: '₹21,000', images: ['/artworks/blue-spiral-1.webp', '/artworks/blue-spiral-2.webp', '/artworks/blue-spiral-3.webp', '/artworks/blue-spiral-4.webp'] },
    { id: 13, title: 'Brain Guitar', category: 'Contemporary', price: '₹15,000', images: ['/artworks/brain-guitar-1.webp'] },
    { id: 14, title: 'Enlightened Buddha', category: 'Spiritual', price: '₹8,500', images: ['/artworks/buddha-a3-size-1.webp'] },
    { id: 15, title: 'Chakra in Red', category: 'Spiritual', price: '₹20,000', images: ['/artworks/chakra-in-red-1.webp'] },
    { id: 16, title: 'Checks & Flowers', category: 'Nature', price: '₹11,000', images: ['/artworks/checks-and-flower-1.webp'] },
    { id: 17, title: 'Colorful National', category: 'Traditional', price: '₹24,000', images: ['/artworks/colourful-national-1.webp'] },
    { id: 18, title: 'Pink Computer', category: 'Contemporary', price: '₹13,500', images: ['/artworks/computer-pink-1.webp'] },
    { id: 19, title: 'Computer Face', category: 'Contemporary', price: '₹14,500', images: ['/artworks/computer-with-face-1.webp'] },
    { id: 20, title: 'Delhi Ki Bawdi', category: 'Traditional', price: '₹28,000', images: ['/artworks/delhi-ki-bawdi-1.webp'] },
    { id: 21, title: 'Fruit Salad', category: 'Contemporary', price: '₹9,500', images: ['/artworks/fruit-salad-and-a-fork,-1.webp'] },
    { id: 22, title: 'Primal Gorilla', category: 'Portraits', price: '₹14,000', images: ['/artworks/gorilla-1.webp'] },
    { id: 23, title: 'Great Gold', category: 'Abstract', price: '₹22,000', images: ['/artworks/great-and-gold-1.webp'] },
    { id: 24, title: 'Green Gold Leaf', category: 'Abstract', price: '₹26,000', images: ['/artworks/green-abstract-painting-with-gold-leaf-1.webp'] },
    { id: 25, title: 'Green Bamboo', category: 'Nature', price: '₹10,500', images: ['/artworks/green-bamboo-1.webp'] },
    { id: 26, title: 'Green Bird', category: 'Nature', price: '₹12,000', images: ['/artworks/green-bird-painting-p9-1.webp'] },
    { id: 27, title: 'Deep Flow', category: 'Abstract', price: '₹18,000', images: ['/artworks/green-deep-flow-colour-p10-1.webp'] },
    { id: 28, title: 'Emerald Fluidity', category: 'Abstract', price: '₹17,000', images: ['/artworks/green-fluid-art-1.webp'] },
    { id: 29, title: 'Green Red Gold', category: 'Abstract', price: '₹20,000', images: ['/artworks/green-red-gold-1.webp', '/artworks/green-red-gold-2.webp', '/artworks/green-red-gold-3.webp', '/artworks/green-red-gold-4.webp'] },
    { id: 30, title: 'Green Sea', category: 'Nature', price: '₹15,000', images: ['/artworks/green-sea-1.webp'] },
    { id: 31, title: 'Green Square', category: 'Abstract', price: '₹11,500', images: ['/artworks/green-square-1.webp'] },
    { id: 32, title: 'Holy Cow', category: 'Spiritual', price: '₹18,000', images: ['/artworks/holy-cow-p42-1.webp'] },
    { id: 33, title: 'Blue City Jodhpur', category: 'Traditional', price: '₹24,000', images: ['/artworks/jodhpur-1.webp', '/artworks/jodhpur-2.webp', '/artworks/jodhpur-3.webp', '/artworks/jodhpur-4.webp', '/artworks/jodhpur-5.webp'] },
    { id: 34, title: 'Kids Room Art', category: 'Contemporary', price: '₹9,000', images: ['/artworks/kids-room-1.webp', '/artworks/kids-room-2.webp', '/artworks/kids-room-3.webp', '/artworks/kids-room-4.webp', '/artworks/kids-room-5.webp'] },
    { id: 35, title: 'Lady with Hat', category: 'Portraits', price: '₹13,500', images: ['/artworks/lady-with-hat-1.webp', '/artworks/lady-with-hat-2.webp'] },
    { id: 36, title: 'Green Gold Leaf', category: 'Nature', price: '₹16,000', images: ['/artworks/leaf-in-green-and-gold-1.webp'] },
    { id: 37, title: 'Pink Lotus', category: 'Nature', price: '₹16,500', images: ['/artworks/lotus-in-pink-1.webp'] },
    { id: 38, title: 'Madonna', category: 'Portraits', price: '₹16,000', images: ['/artworks/madonna-1.webp', '/artworks/madonna-2.webp'] },
    { id: 39, title: 'MDF Cut Work', category: 'Contemporary', price: '₹25,000', images: ['/artworks/mdf-cut-out-work-1.webp'] },
    { id: 40, title: 'Minimal Theme', category: 'Contemporary', price: '₹8,000', images: ['/artworks/minimal-theme-p20-1.webp'] },
    { id: 41, title: 'Monkey Art', category: 'Portraits', price: '₹15,500', images: ['/artworks/monkey-1.webp'] },
    { id: 42, title: 'Monkey Cigar', category: 'Contemporary', price: '₹17,000', images: ['/artworks/monkey-with-cigar-1.webp'] },
    { id: 43, title: 'Music Lotus', category: 'Spiritual', price: '₹19,500', images: ['/artworks/music-lotus-1.webp'] },
    { id: 44, title: 'Music Wolf', category: 'Contemporary', price: '₹21,000', images: ['/artworks/music-wolf-1.webp'] },
    { id: 45, title: 'Divine Om', category: 'Spiritual', price: '₹18,000', images: ['/artworks/om-painting-1.webp', '/artworks/om-painting-2.webp', '/artworks/om-painting-3.webp', '/artworks/om-painting-4.webp'] },
    { id: 46, title: 'Blooming Lotus', category: 'Nature', price: '₹15,000', images: ['/artworks/pink-lotus-1.webp', '/artworks/pink-lotus-2.webp', '/artworks/pink-lotus-3.webp', '/artworks/pink-lotus-4.webp'] },
    { id: 47, title: 'Playboy Yellow', category: 'Contemporary', price: '₹12,000', images: ['/artworks/play-boy-yellow-1.webp'] },
    { id: 48, title: 'Rajasthani Heritage', category: 'Traditional', price: '₹28,000', images: ['/artworks/rajasthan-painting-1.webp'] },
    { id: 49, title: 'Red Ink', category: 'Abstract', price: '₹14,000', images: ['/artworks/red-ink-1.webp'] },
    { id: 50, title: 'Round Landscape', category: 'Nature', price: '₹11,000', images: ['/artworks/round-landscape-1.webp', '/artworks/round-landscape-2.webp', '/artworks/round-landscape-3.webp', '/artworks/round-landscape-4.webp', '/artworks/round-landscape-5.webp', '/artworks/round-landscape-6.webp'] },
    { id: 51, title: 'Round Set of 4', category: 'Abstract', price: '₹32,000', images: ['/artworks/round-set-of-4-1.webp'] },
    { id: 52, title: 'Seven Chakras', category: 'Spiritual', price: '₹22,500', images: ['/artworks/seven-chakras-1.webp'] },
    { id: 53, title: 'Sunrise Glory', category: 'Nature', price: '₹19,000', images: ['/artworks/sun-rise-p33-1.webp'] },
    { id: 54, title: 'Fluid Sunrise', category: 'Abstract', price: '₹20,000', images: ['/artworks/sun-rise-with-fluid-art-1.webp'] },
    { id: 55, title: 'Teal Texture', category: 'Abstract', price: '₹16,500', images: ['/artworks/teal-and-texture-1.webp'] },
    { id: 56, title: 'Twin Green Leaf', category: 'Nature', price: '₹18,000', images: ['/artworks/twin-leaf-green-set-of-two-1.webp'] },
    { id: 57, title: 'White Texture', category: 'Abstract', price: '₹13,000', images: ['/artworks/white-texture-1.webp'] },
    { id: 58, title: 'Wooden Surati', category: 'Traditional', price: '₹26,000', images: ['/artworks/wooden-surati-1.webp'] },
];
