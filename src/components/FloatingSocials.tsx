import { motion } from "motion/react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const WhatsappIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export function FloatingSocials() {
  const socials = [
    { icon: <Instagram size={20} />, label: "Instagram", href: "https://instagram.com/florine.234" },
    { icon: <Facebook size={20} />, label: "Facebook", href: "https://facebook.com/hibatallh.chabouh" },
    { icon: <WhatsappIcon size={20} />, label: "WhatsApp", href: "https://wa.me/21656701902" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://linkedin.com" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4"
    >
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-brand-maroon hover:bg-brand-maroon hover:text-brand-cream transition-colors group relative border border-brand-maroon/10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {social.icon}
          
          {/* Tooltip */}
          <div className="absolute left-full ml-4 px-3 py-1.5 bg-brand-maroon text-brand-cream text-xs font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
            {social.label}
            {/* Tooltip Arrow */}
            <div className="absolute top-1/2 -left-1 -translate-y-1/2 border-[5px] border-transparent border-r-brand-maroon" />
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}
