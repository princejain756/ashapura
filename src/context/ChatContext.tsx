import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { Artwork } from '../data/artworks';

interface ChatContextType {
    selectedProduct: Artwork | null;
    setSelectedProduct: (product: Artwork | null) => void;
    isChatOpen: boolean;
    setIsChatOpen: (isOpen: boolean) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState<Artwork | null>(null);
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <ChatContext.Provider value={{ selectedProduct, setSelectedProduct, isChatOpen, setIsChatOpen }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => {
    const context = useContext(ChatContext);
    if (context === undefined) {
        throw new Error('useChat must be used within a ChatProvider');
    }
    return context;
};
