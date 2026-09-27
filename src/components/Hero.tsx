import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transform values for background images and decorative elements
  const bgImageY1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgImageY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const floatY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [-6, 10]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [6, -12]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Parallax Background Glows & Images Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Soft Radial Ambient Lights */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ y: bgImageY1 }}
          className="absolute -top-[10%] -left-[10%] w-[50%] aspect-square rounded-full bg-brand-pink blur-[120px]"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          style={{ y: bgImageY2 }}
          className="absolute top-[30%] -right-[10%] w-[45%] aspect-square rounded-full bg-brand-maroon blur-[150px]"
        />

        {/* Left Floating Floral Background Image with Parallax */}
        <motion.div 
          style={{ y: bgImageY1, rotate: rotate1, opacity: opacityFade }}
          className="hidden lg:block absolute left-[3%] top-[15%] w-64 h-80 rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-gold/40 backdrop-blur-sm p-2 bg-white/30 transform -rotate-6"
        >
          <div className="w-full h-full rounded-2xl overflow-hidden relative group">
            <img 
              src="/src/assets/images/satin_red_bouquet_1785779041811.jpg" 
              alt="Handcrafted Satin Ribbon Red Roses Bouquet" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center opacity-95 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/40 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Right Floating Floral Background Image with Parallax */}
        <motion.div 
          style={{ y: bgImageY2, rotate: rotate2, opacity: opacityFade }}
          className="hidden lg:block absolute right-[3%] top-[22%] w-72 h-96 rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-gold/40 backdrop-blur-sm p-2 bg-white/30 transform rotate-6"
        >
          <div className="w-full h-full rounded-2xl overflow-hidden relative group">
            <img 
              src="/src/assets/images/satin_blue_bouquet_1785779059693.jpg" 
              alt="Handcrafted Royal Blue Satin Ribbon Roses Bouquet" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center opacity-95 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/40 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Small Subtle Parallax Gold Accent Badge */}
        <motion.div
          style={{ y: floatY }}
          className="hidden md:block absolute left-[12%] bottom-[12%] z-10"
        >
          <div className="p-3 bg-white/80 backdrop-blur-md border border-brand-gold/30 rounded-2xl shadow-xl flex items-center gap-3 text-brand-maroon text-xs font-medium">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-ping" />
            <span>{t.heroArtisanBadge}</span>
          </div>
        </motion.div>
      </div>

      {/* Main Hero Foreground Content */}
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-brand-gold font-medium tracking-[0.25em] uppercase text-xs md:text-sm mb-6 inline-block border-b border-brand-gold/30 pb-1">
            {t.heroSubheading}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-maroon mb-6 leading-tight drop-shadow-sm">
            {t.heroTitlePart1} <br />
            <span className="italic font-normal bg-gradient-to-r from-brand-maroon via-[#8a1c32] to-brand-gold bg-clip-text text-transparent">
              {t.heroTitlePart2}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-brand-dark/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            {t.heroDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#shop"
              className="px-8 py-4 bg-brand-maroon text-brand-cream rounded-full font-medium tracking-wide shadow-xl hover:bg-brand-maroon/90 transition-all duration-300 w-full sm:w-auto border border-amber-100/20"
            >
              {t.heroBtnDiscover}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#how-it-works"
              className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-brand-maroon/80 text-brand-maroon rounded-full font-medium tracking-wide hover:bg-brand-maroon hover:text-brand-cream transition-all duration-300 w-full sm:w-auto shadow-md"
            >
              {t.heroBtnCustom}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
