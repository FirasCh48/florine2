import { motion } from "motion/react";
import { Facebook, Instagram, Phone, MapPin, QrCode } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const PinterestIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z"/>
  </svg>
);

export function Footer() {
  const { t, dir } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <footer className="bg-brand-maroon text-brand-cream py-16 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12"
        dir={dir}
      >
        {/* Brand */}
        <motion.div variants={itemVariants} className="flex flex-col items-start">
          <div className="w-32 mb-6">
            <img 
              src="/logo.png" 
              alt="Florine by Hiba" 
              className="w-full h-auto object-contain brightness-0 invert drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                if (target.nextElementSibling) {
                  (target.nextElementSibling as HTMLElement).style.display = 'flex';
                }
              }}
            />
            {/* Fallback Text Logo */}
            <div className="hidden flex-col items-start">
              <h2 className="text-4xl font-serif mb-2 text-white">florine</h2>
              <span className="text-brand-gold text-xs tracking-widest uppercase">by Hiba</span>
            </div>
          </div>
          <p className="text-brand-cream/70 leading-relaxed mb-8 max-w-xs">
            {t.footerTagline}
          </p>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-maroon transition-colors text-brand-gold">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com/florine.234" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-maroon transition-colors text-brand-gold">
              <Instagram size={20} />
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-serif mb-6 text-brand-gold font-semibold">{t.navAbout}</h3>
          <ul className="flex flex-col gap-4">
            <li><a href="#about" className="hover:text-brand-gold transition-colors">{t.navAbout}</a></li>
            <li><a href="#how-it-works" className="hover:text-brand-gold transition-colors">{t.navHowItWorks}</a></li>
            <li><a href="#shop" className="hover:text-brand-gold transition-colors">{t.bestSellersTitle}</a></li>
            <li><a href="#categories" className="hover:text-brand-gold transition-colors">{t.navCategories}</a></li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-serif mb-6 text-brand-gold font-semibold">{t.contactTitle}</h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-gold" />
              <span dir="ltr">+216 56 701 902</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-gold flex-shrink-0 mt-1" />
              <span>Nabeul - Somaa<br />Tunisia</span>
            </li>
            <li className="flex items-center gap-3">
              <Facebook size={18} className="text-brand-gold" />
              <span>Hibatallh chabouh</span>
            </li>
            <li className="flex items-center gap-3">
              <Instagram size={18} className="text-brand-gold" />
              <span>florine.234</span>
            </li>
          </ul>
        </motion.div>

        {/* QR Code */}
        <motion.div variants={itemVariants} className="flex flex-col items-start lg:items-center">
          <h3 className="text-lg font-serif mb-6 text-brand-gold font-semibold">Instagram @florine.234</h3>
          <div className="p-5 bg-white rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
            <QrCode className="w-24 h-24 text-brand-dark" strokeWidth={1.5} />
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-brand-cream/50"
      >
        <p>&copy; {new Date().getFullYear()} Florine by Hiba. {t.allRightsReserved}</p>
        
        <div className="flex items-center gap-6">
          <a 
            href="https://instagram.com/florine.234" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-brand-cream/70 hover:text-brand-gold transition-all duration-300 hover:scale-110"
          >
            <Instagram size={20} />
            <span className="sr-only">Instagram</span>
          </a>
          <a 
            href="https://pinterest.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-brand-cream/70 hover:text-brand-gold transition-all duration-300 hover:scale-110"
          >
            <PinterestIcon size={20} />
            <span className="sr-only">Pinterest</span>
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
