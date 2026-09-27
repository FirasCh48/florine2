import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Sparkles, Gem, Flower2, KeyRound } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface LoadingScreenProps {
  key?: string;
  onComplete?: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const handleOpenDoors = () => {
    if (isOpen) return;
    setIsOpen(true);
    setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 1500); // 1.5s smooth transition
  };

  // Sparkles & floating diamond particles
  const particles = Array.from({ length: 18 });

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#120508] flex items-center justify-center overflow-hidden select-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
      style={{ perspective: "1800px" }}
    >
      {/* Radiant Golden Sunlight & Diamond Flare behind doors when opening */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#fff2d1] via-[#e5c184] to-transparent pointer-events-none"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{
          opacity: isOpen ? 0.95 : 0.15,
          scale: isOpen ? 2.5 : 1,
        }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />

      {/* Dynamic Floating Gold Petals and Diamond Dust */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute flex items-center justify-center"
            style={{
              top: `${(i * 13) % 95}%`,
              left: `${(i * 19) % 95}%`,
            }}
            animate={{
              y: [-15, 20, -15],
              x: [-10, 10, -10],
              rotate: [0, 360],
              opacity: [0.3, 0.9, 0.3],
              scale: [0.7, 1.2, 0.7],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.25,
            }}
          >
            {i % 2 === 0 ? (
              <Gem className="w-3 h-3 md:w-4 md:h-4 text-amber-200 drop-shadow-[0_0_8px_rgba(255,235,180,0.9)]" />
            ) : (
              <Flower2 className="w-3 h-3 md:w-5 md:h-5 text-brand-gold drop-shadow-[0_0_10px_rgba(195,157,94,0.8)]" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Royal Arch Outer Frame - Solid Gold & Diamond Trim */}
      <div className="absolute inset-2 md:inset-5 border-[4px] border-[#f3d399] rounded-t-[140px] md:rounded-t-[240px] pointer-events-none z-20 shadow-[0_0_40px_rgba(243,211,153,0.3),inset_0_0_60px_rgba(0,0,0,0.8)]">
        {/* Diamond Gem Rivets along the Arch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <Gem className="w-5 h-5 text-amber-100 drop-shadow-[0_0_12px_#ffffff]" />
          <span className="w-12 h-[2px] bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
          <Gem className="w-7 h-7 text-white drop-shadow-[0_0_16px_#ffffff] animate-pulse" />
          <span className="w-12 h-[2px] bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
          <Gem className="w-5 h-5 text-amber-100 drop-shadow-[0_0_12px_#ffffff]" />
        </div>
      </div>

      {/* 3D DOUBLE GOLDEN PALACE DOORS */}
      <div className="relative w-full h-full flex items-center justify-center max-w-6xl mx-auto px-2 md:px-10">
        
        {/* LEFT DOOR - GOLD, DIAMONDS, FLOWERS */}
        <motion.div
          onClick={handleOpenDoors}
          className="w-1/2 h-[92vh] bg-gradient-to-r from-[#2b070f] via-[#4a0d1b] to-[#631427] border-r-4 border-amber-200/90 rounded-tl-[120px] md:rounded-tl-[220px] shadow-[20px_0_50px_rgba(0,0,0,0.9)] relative cursor-pointer overflow-hidden flex flex-col justify-between p-4 md:p-10 group"
          style={{ transformOrigin: "left center" }}
          animate={
            isOpen
              ? {
                  rotateY: -110,
                  x: "-12%",
                  opacity: 0.05,
                }
              : { rotateY: 0, x: "0%", opacity: 1 }
          }
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Gold Damask & Floral Pattern Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#f2d399_1.5px,transparent_1.5px)] [background-size:20px_20px]" />
          
          {/* Shimmering Golden Light Wash */}
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-brand-gold/20 to-transparent pointer-events-none" />

          {/* Intricate Golden Frame & Floral Carvings */}
          <div className="absolute inset-4 md:inset-8 border-2 border-brand-gold/70 rounded-tl-[90px] md:rounded-tl-[180px] pointer-events-none flex flex-col justify-between p-4 md:p-8 shadow-[inset_0_0_30px_rgba(195,157,94,0.3)]">
            {/* Top Floral Corner Ornament */}
            <div className="flex items-center gap-2 text-brand-gold">
              <Flower2 className="w-8 h-8 md:w-12 md:h-12 drop-shadow-[0_0_10px_#f2d399]" />
              <div className="h-[2px] flex-1 bg-gradient-to-r from-brand-gold via-amber-200 to-transparent" />
            </div>

            {/* Middle Diamond Cluster Frame */}
            <div className="my-auto flex flex-col items-center justify-center relative py-8">
              <div className="w-24 h-24 md:w-40 md:h-40 border-2 border-dashed border-amber-200/60 rounded-full flex items-center justify-center relative rotate-45 shadow-[0_0_20px_rgba(242,211,153,0.3)]">
                <Flower2 className="w-12 h-12 md:w-20 md:h-20 text-amber-200 -rotate-45 drop-shadow-[0_0_12px_#ffffff]" />
                <Gem className="absolute -top-3 -left-3 w-5 h-5 text-white drop-shadow-[0_0_10px_#ffffff]" />
                <Gem className="absolute -bottom-3 -right-3 w-5 h-5 text-white drop-shadow-[0_0_10px_#ffffff]" />
              </div>
            </div>

            {/* Bottom Floral Corner Ornament */}
            <div className="flex items-center gap-2 text-brand-gold">
              <Flower2 className="w-8 h-8 md:w-12 md:h-12 drop-shadow-[0_0_10px_#f2d399]" />
              <div className="h-[2px] flex-1 bg-gradient-to-r from-brand-gold via-amber-200 to-transparent" />
            </div>
          </div>

          {/* Golden Handle & Diamond Lock (Left Half) */}
          <div className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 flex items-center">
            <div className="w-10 h-28 md:w-16 md:h-44 bg-gradient-to-b from-[#fff2d1] via-[#c39d5e] to-[#735222] rounded-l-full shadow-[0_0_25px_rgba(242,211,153,0.8)] border-l-2 border-y-2 border-amber-100 flex items-center justify-center pr-1.5 md:pr-3">
              <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-white to-amber-100 border-2 border-brand-maroon shadow-[0_0_10px_#ffffff] flex items-center justify-center">
                <Gem className="w-3 h-3 md:w-5 md:h-5 text-brand-maroon" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT DOOR - GOLD, DIAMONDS, FLOWERS */}
        <motion.div
          onClick={handleOpenDoors}
          className="w-1/2 h-[92vh] bg-gradient-to-l from-[#2b070f] via-[#4a0d1b] to-[#631427] border-l-4 border-amber-200/90 rounded-tr-[120px] md:rounded-tr-[220px] shadow-[-20px_0_50px_rgba(0,0,0,0.9)] relative cursor-pointer overflow-hidden flex flex-col justify-between p-4 md:p-10 group"
          style={{ transformOrigin: "right center" }}
          animate={
            isOpen
              ? {
                  rotateY: 110,
                  x: "12%",
                  opacity: 0.05,
                }
              : { rotateY: 0, x: "0%", opacity: 1 }
          }
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Gold Damask & Floral Pattern Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#f2d399_1.5px,transparent_1.5px)] [background-size:20px_20px]" />
          
          {/* Shimmering Golden Light Wash */}
          <div className="absolute inset-0 bg-gradient-to-tl from-amber-500/10 via-brand-gold/20 to-transparent pointer-events-none" />

          {/* Intricate Golden Frame & Floral Carvings */}
          <div className="absolute inset-4 md:inset-8 border-2 border-brand-gold/70 rounded-tr-[90px] md:rounded-tr-[180px] pointer-events-none flex flex-col justify-between p-4 md:p-8 shadow-[inset_0_0_30px_rgba(195,157,94,0.3)]">
            {/* Top Floral Corner Ornament */}
            <div className="flex items-center gap-2 text-brand-gold justify-end">
              <div className="h-[2px] flex-1 bg-gradient-to-l from-brand-gold via-amber-200 to-transparent" />
              <Flower2 className="w-8 h-8 md:w-12 md:h-12 drop-shadow-[0_0_10px_#f2d399]" />
            </div>

            {/* Middle Diamond Cluster Frame */}
            <div className="my-auto flex flex-col items-center justify-center relative py-8">
              <div className="w-24 h-24 md:w-40 md:h-40 border-2 border-dashed border-amber-200/60 rounded-full flex items-center justify-center relative rotate-45 shadow-[0_0_20px_rgba(242,211,153,0.3)]">
                <Flower2 className="w-12 h-12 md:w-20 md:h-20 text-amber-200 -rotate-45 drop-shadow-[0_0_12px_#ffffff]" />
                <Gem className="absolute -top-3 -right-3 w-5 h-5 text-white drop-shadow-[0_0_10px_#ffffff]" />
                <Gem className="absolute -bottom-3 -left-3 w-5 h-5 text-white drop-shadow-[0_0_10px_#ffffff]" />
              </div>
            </div>

            {/* Bottom Floral Corner Ornament */}
            <div className="flex items-center gap-2 text-brand-gold justify-end">
              <div className="h-[2px] flex-1 bg-gradient-to-l from-brand-gold via-amber-200 to-transparent" />
              <Flower2 className="w-8 h-8 md:w-12 md:h-12 drop-shadow-[0_0_10px_#f2d399]" />
            </div>
          </div>

          {/* Golden Handle & Diamond Lock (Right Half) */}
          <div className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 flex items-center">
            <div className="w-10 h-28 md:w-16 md:h-44 bg-gradient-to-b from-[#fff2d1] via-[#c39d5e] to-[#735222] rounded-r-full shadow-[0_0_25px_rgba(242,211,153,0.8)] border-r-2 border-y-2 border-amber-100 flex items-center justify-center pl-1.5 md:pl-3">
              <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-white to-amber-100 border-2 border-brand-maroon shadow-[0_0_10px_#ffffff] flex items-center justify-center">
                <Gem className="w-3 h-3 md:w-5 md:h-5 text-brand-maroon" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* CENTER ROYAL EMBLEM & "CLICK TO ENTER" BUTTON */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              onClick={handleOpenDoors}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.4, opacity: 0, transition: { duration: 0.5 } }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="absolute z-50 flex flex-col items-center justify-center cursor-pointer group px-4 text-center"
            >
              {/* Outer Golden & Diamond Crest Halo */}
              <motion.div
                className="relative w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-b from-[#fff5da] via-[#d4af37] to-[#735222] p-[4px] shadow-[0_0_50px_rgba(242,211,153,0.7)] flex items-center justify-center"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Diamond Rivets around Logo Halo */}
                <Gem className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 text-white drop-shadow-[0_0_14px_#ffffff]" />
                <Gem className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 text-white drop-shadow-[0_0_14px_#ffffff]" />
                <Gem className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-white drop-shadow-[0_0_14px_#ffffff]" />
                <Gem className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-white drop-shadow-[0_0_14px_#ffffff]" />

                <div className="w-full h-full rounded-full bg-[#24050c] flex flex-col items-center justify-center p-4 border-2 border-amber-200/40 relative overflow-hidden shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]">
                  {/* Subtle Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/30 via-amber-300/10 to-transparent pointer-events-none" />
                  
                  {/* Logo Image */}
                  <img
                    src="/logo.png"
                    alt="Florine by Hiba"
                    className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] z-10 transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      if (target.nextElementSibling) {
                        (target.nextElementSibling as HTMLElement).style.display = "flex";
                      }
                    }}
                  />

                  {/* Fallback Text Logo */}
                  <div className="hidden flex-col items-center z-10">
                    <span className="text-2xl md:text-3xl font-serif text-brand-gold font-bold tracking-wide">
                      florine
                    </span>
                    <span className="text-xs text-amber-100/90 uppercase tracking-[0.2em] mt-1">
                      by Hiba
                    </span>
                  </div>
                </div>

                {/* Rotating Gold & Diamond Outer Ring */}
                <motion.div
                  className="absolute inset-[-12px] border-2 border-dashed border-amber-200/70 rounded-full pointer-events-none"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              {/* Call to Action Button */}
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-6 md:mt-8 px-8 py-3.5 bg-gradient-to-r from-[#fff2d1] via-[#d4af37] to-[#fff2d1] text-brand-maroon font-serif font-bold text-base md:text-lg rounded-full shadow-[0_0_30px_rgba(242,211,153,0.8)] flex items-center gap-3 border-2 border-white group-hover:shadow-[0_0_45px_rgba(255,255,255,0.9)] group-hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 text-brand-maroon animate-spin" style={{ animationDuration: "3s" }} />
                <span>{t.openPalaceDoors}</span>
                <KeyRound className="w-5 h-5 text-brand-maroon" />
              </motion.div>

              <div className="mt-3 flex items-center gap-2 text-xs md:text-sm text-amber-200/90 font-sans tracking-widest uppercase font-medium">
                <Flower2 className="w-3.5 h-3.5 text-brand-gold" />
                <span>{t.palaceTagline}</span>
                <Flower2 className="w-3.5 h-3.5 text-brand-gold" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
