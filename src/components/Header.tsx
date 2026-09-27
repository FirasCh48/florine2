import { motion, useScroll, useSpring } from "motion/react";
import { Menu, Globe, PackageCheck } from "lucide-react";
import { useState } from "react";
import { useLanguage, Language } from "../context/LanguageContext";
import { OrderStatusModal } from "./OrderStatusModal";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOrderStatusOpen, setIsOrderStatusOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "fr", label: "FR", flag: "🇫🇷" },
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "tn", label: "تونسية", flag: "🇹🇳" },
  ];

  return (
    <>
      {/* Slim Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold via-amber-400 to-brand-maroon origin-left z-[60] shadow-sm pointer-events-none"
      />

      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/90 backdrop-blur-md border-b border-brand-gold/20"
      >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
        {/* Mobile Menu Button */}
        <motion.button 
          whileTap={{ scale: 0.88 }}
          className="md:hidden text-brand-maroon p-2 rounded-full hover:bg-brand-maroon/5 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <Menu size={24} />
        </motion.button>

        {/* Logo */}
        <motion.a 
          href="#"
          whileTap={{ scale: 0.96 }}
          className="flex flex-col items-center justify-center h-full py-2 cursor-pointer"
        >
          <img 
            src="/logo.png" 
            alt="Florine by Hiba" 
            className="h-full object-contain max-h-[120px] transition-transform hover:scale-105 duration-300 drop-shadow-sm"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              if (target.nextElementSibling) {
                (target.nextElementSibling as HTMLElement).style.display = 'flex';
              }
            }}
          />
          {/* Fallback Text Logo */}
          <div className="hidden flex-col items-center justify-center">
            <h1 className="text-3xl font-serif text-brand-maroon leading-none">florine</h1>
            <span className="text-brand-gold text-xs tracking-widest uppercase mt-1">by Hiba</span>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <motion.a whileTap={{ scale: 0.95 }} href="#about" className="text-sm font-medium tracking-wide text-brand-dark hover:text-brand-gold transition-colors">{t.navAbout}</motion.a>
          <motion.a whileTap={{ scale: 0.95 }} href="#how-it-works" className="text-sm font-medium tracking-wide text-brand-dark hover:text-brand-gold transition-colors">{t.navHowItWorks}</motion.a>
          <motion.a whileTap={{ scale: 0.95 }} href="#categories" className="text-sm font-medium tracking-wide text-brand-dark hover:text-brand-gold transition-colors">{t.navCategories}</motion.a>
          <motion.a whileTap={{ scale: 0.95 }} href="#shop" className="text-sm font-medium tracking-wide text-brand-dark hover:text-brand-gold transition-colors">{t.navShop}</motion.a>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOrderStatusOpen(true)}
            className="text-sm font-semibold tracking-wide text-brand-maroon hover:text-brand-gold transition-colors flex items-center gap-1.5 bg-brand-gold/10 hover:bg-brand-gold/20 px-3 py-1.5 rounded-full border border-brand-gold/30"
          >
            <PackageCheck size={16} className="text-brand-maroon" />
            <span>{t.navOrderStatus}</span>
          </motion.button>
        </nav>

        {/* Actions & Language Switcher */}
        <div className="flex items-center gap-3">
          {/* Language Switcher Pill Toggle */}
          <div className="flex items-center p-1 bg-white/80 backdrop-blur-sm border border-brand-gold/30 rounded-full shadow-sm">
            <Globe className="w-3.5 h-3.5 text-brand-gold ml-2 mr-1 hidden sm:block" />
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                whileTap={{ scale: 0.92 }}
                onClick={() => setLanguage(lang.code)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  language === lang.code
                    ? "bg-brand-maroon text-brand-cream shadow-sm"
                    : "text-brand-maroon/80 hover:text-brand-maroon hover:bg-brand-maroon/5"
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </motion.button>
            ))}
          </div>

          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            href="#contact"
            className="hidden sm:inline-flex px-5 py-2 bg-brand-maroon text-brand-cream rounded-full text-xs font-medium tracking-wide hover:bg-brand-maroon/90 transition-colors shadow-md"
          >
            {t.navContact}
          </motion.a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-brand-cream border-t border-brand-gold/10 px-6 py-4"
        >
          <nav className="flex flex-col gap-4">
            <motion.a whileTap={{ scale: 0.96 }} href="#about" onClick={() => setIsMenuOpen(false)} className="text-brand-maroon hover:text-brand-gold py-1">{t.navAbout}</motion.a>
            <motion.a whileTap={{ scale: 0.96 }} href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="text-brand-maroon hover:text-brand-gold py-1">{t.navHowItWorks}</motion.a>
            <motion.a whileTap={{ scale: 0.96 }} href="#categories" onClick={() => setIsMenuOpen(false)} className="text-brand-maroon hover:text-brand-gold py-1">{t.navCategories}</motion.a>
            <motion.a whileTap={{ scale: 0.96 }} href="#shop" onClick={() => setIsMenuOpen(false)} className="text-brand-maroon hover:text-brand-gold py-1">{t.navShop}</motion.a>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsOrderStatusOpen(true);
              }}
              className="flex items-center gap-2 text-brand-maroon font-semibold hover:text-brand-gold py-1 text-left"
            >
              <PackageCheck size={18} className="text-brand-gold" />
              <span>{t.navOrderStatus}</span>
            </button>
            <motion.a whileTap={{ scale: 0.96 }} href="#contact" onClick={() => setIsMenuOpen(false)} className="text-brand-maroon hover:text-brand-gold py-1 font-semibold">{t.navContact}</motion.a>
          </nav>
        </motion.div>
      )}
    </motion.header>

    {/* Order Status Modal */}
    <OrderStatusModal
      isOpen={isOrderStatusOpen}
      onClose={() => setIsOrderStatusOpen(false)}
    />
    </>
  );
}
