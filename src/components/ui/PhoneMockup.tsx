import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Instagram, HelpCircle, X } from 'lucide-react';

interface PhoneMockupProps {
    videoSrc: string;
    instagramLink?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
    videoSrc,
    instagramLink = "https://www.instagram.com/ashapura_art_studio"
}) => {
    const [isLocked, setIsLocked] = useState(false);
    const [volume, setVolume] = useState(0); // Start muted
    const [showVolumeIndicator, setShowVolumeIndicator] = useState(false);
    const [showHelp, setShowHelp] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const volumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleVolumeChange = (change: number) => {
        if (isLocked) return;

        let newVol = volume + change;
        if (newVol > 1) newVol = 1;
        if (newVol < 0) newVol = 0;

        setVolume(newVol);
        if (videoRef.current) {
            videoRef.current.volume = newVol;
            videoRef.current.muted = newVol === 0;
        }

        // Show indicator
        setShowVolumeIndicator(true);
        if (volumeTimeoutRef.current) clearTimeout(volumeTimeoutRef.current);
        volumeTimeoutRef.current = setTimeout(() => setShowVolumeIndicator(false), 2000);
    };

    const togglePower = () => {
        setIsLocked(!isLocked);
    };

    const toggleAudio = () => {
        if (volume === 0) {
            // Unmute - set volume to 0.5
            setVolume(0.5);
            if (videoRef.current) {
                videoRef.current.volume = 0.5;
                videoRef.current.muted = false;
            }
        } else {
            // Mute
            setVolume(0);
            if (videoRef.current) {
                videoRef.current.volume = 0;
                videoRef.current.muted = true;
            }
        }
        // Show indicator
        setShowVolumeIndicator(true);
        if (volumeTimeoutRef.current) clearTimeout(volumeTimeoutRef.current);
        volumeTimeoutRef.current = setTimeout(() => setShowVolumeIndicator(false), 2000);
    };

    return (
        <div className="relative mx-auto w-[200px] h-[400px] sm:w-[240px] sm:h-[480px] lg:w-[280px] lg:h-[560px] select-none">
            {/* Help Button - Top */}
            <button
                onClick={() => setShowHelp(!showHelp)}
                className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 p-1 text-art-charcoal/40 hover:text-art-gold transition-colors z-50"
                aria-label="Help"
            >
                <HelpCircle size={16} />
            </button>

            {/* Help Tooltip */}
            <AnimatePresence>
                {showHelp && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -top-20 sm:-top-24 left-1/2 -translate-x-1/2 bg-art-charcoal text-white text-[10px] sm:text-xs p-2 sm:p-3 rounded-lg shadow-xl z-50 w-40 sm:w-48 text-center"
                    >
                        <button onClick={() => setShowHelp(false)} className="absolute top-1 right-1 p-0.5">
                            <X size={12} />
                        </button>
                        <p className="mb-1"><strong>Volume:</strong> Use side buttons</p>
                        <p className="mb-1"><strong>Audio:</strong> Tap screen</p>
                        <p><strong>Lock:</strong> Press power (right)</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* External Physical Buttons */}

            {/* Volume Up - Top Left */}
            <button
                onClick={() => handleVolumeChange(0.1)}
                className="absolute left-[-3px] top-[70px] sm:top-[85px] lg:top-[100px] w-[3px] h-[25px] sm:h-[30px] lg:h-[35px] bg-art-charcoal/70 rounded-l-sm active:bg-art-gold transition-colors z-0"
                aria-label="Volume Up"
            />
            {/* Volume Down - Below Up */}
            <button
                onClick={() => handleVolumeChange(-0.1)}
                className="absolute left-[-3px] top-[100px] sm:top-[120px] lg:top-[145px] w-[3px] h-[25px] sm:h-[30px] lg:h-[35px] bg-art-charcoal/70 rounded-l-sm active:bg-art-gold transition-colors z-0"
                aria-label="Volume Down"
            />

            {/* Power Button - Right Side */}
            <button
                onClick={togglePower}
                className="absolute right-[-3px] top-[80px] sm:top-[95px] lg:top-[110px] w-[3px] h-[30px] sm:h-[35px] lg:h-[40px] bg-art-charcoal/70 rounded-r-sm active:bg-red-500 transition-colors z-0"
                aria-label="Power Button"
            />

            {/* Phone Frame */}
            <div className="relative z-10 w-full h-full bg-[#1a1a1a] rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl border-[4px] sm:border-[5px] lg:border-[6px] border-[#2a2a2a] overflow-hidden ring-1 ring-white/10">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70px] sm:w-[85px] lg:w-[100px] h-[16px] sm:h-[19px] lg:h-[22px] bg-[#1a1a1a] rounded-b-xl z-30 flex justify-center items-center">
                    <div className="w-[28px] sm:w-[34px] lg:w-[40px] h-[2px] sm:h-[2.5px] lg:h-[3px] bg-[#111] rounded-full opacity-50" />
                </div>

                {/* Screen Content */}
                <div className="relative w-full h-full bg-black overflow-hidden rounded-[1.2rem] sm:rounded-[1.5rem] lg:rounded-[2rem]">

                    <AnimatePresence mode='wait'>
                        {isLocked ? (
                            // LOCK SCREEN (Pallavi's Profile)
                            <motion.div
                                key="locked"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 z-20"
                            >
                                {/* Wallpaper Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src="/pallavi-jain.webp"
                                        alt="Wallpaper"
                                        className="w-full h-full object-cover filter brightness-75 blur-sm scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40" />
                                </div>

                                {/* Lock Screen Content */}
                                <div className="relative z-30 h-full flex flex-col items-center justify-center p-6 text-center text-white">
                                    <div className="w-20 h-20 rounded-full border-4 border-white/20 overflow-hidden mb-3 shadow-xl">
                                        <img src="/pallavi-jain.webp" alt="Profile" className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-xl font-serif mb-1">Pallavi Bhandari</h3>
                                    <p className="text-white/60 text-sm mb-5">@ashapura_art_studio</p>

                                    <a
                                        href={instagramLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2.5 rounded-full text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                                    >
                                        <Instagram size={16} />
                                        <span>Visit Instagram</span>
                                    </a>

                                    <p className="absolute bottom-10 text-xs text-white/40">
                                        Press power to unlock
                                    </p>
                                </div>
                            </motion.div>
                        ) : (
                            // UNLOCKED (Video Feed)
                            <motion.div
                                key="unlocked"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="relative w-full h-full cursor-pointer"
                                onClick={toggleAudio}
                            >
                                <video
                                    ref={videoRef}
                                    src={videoSrc}
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted={volume === 0}
                                    playsInline
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none" />

                                {/* Top UI */}
                                <div className="absolute top-7 left-4 right-4 flex justify-between items-center pointer-events-none">
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 rounded-full border border-white/40 overflow-hidden">
                                            <img src="/pallavi-jain.webp" alt="Avatar" className="w-full h-full object-cover" />
                                        </div>
                                        <span className="text-white text-xs font-medium drop-shadow-md">@ashapura_art_studio</span>
                                    </div>

                                    <AnimatePresence>
                                        {showVolumeIndicator && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1.5 text-white"
                                            >
                                                {volume === 0 ? <VolumeX size={12} /> : <Volume2 size={12} />}
                                                <div className="w-10 h-1 bg-white/30 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-white transition-all duration-100"
                                                        style={{ width: `${volume * 100}%` }}
                                                    />
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Tap to unmute hint (only when muted) */}
                                {volume === 0 && (
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 text-white text-xs">
                                            <VolumeX size={14} />
                                            <span>Tap to unmute</span>
                                        </div>
                                    </div>
                                )}

                                {/* Bottom UI - Instagram Link */}
                                <div className="absolute bottom-6 left-4 right-4 pointer-events-auto">
                                    <a
                                        href={instagramLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-xs"
                                    >
                                        <Instagram size={14} />
                                        <span>View on Instagram</span>
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
