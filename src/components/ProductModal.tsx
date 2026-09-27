import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X, Heart, ShoppingBag, Sparkles, Check, MessageCircle, ShieldCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number | null;
  image: string;
  badge?: string;
  description?: {
    en: string;
    fr: string;
    tn: string;
  };
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export function ProductModal({ product, onClose, isFavorite, onToggleFavorite }: ProductModalProps) {
  const { language, dir } = useLanguage();
  const [selectedStems, setSelectedStems] = useState(12);
  const [customColor, setCustomColor] = useState("Red / Rouge");

  if (!product) return null;

  const colorOptions = [
    { label: "Crimson Red / rouge", value: "Red", color: "bg-red-700" },
    { label: "Royal Blue / bleu", value: "Blue", color: "bg-blue-700" },
    { label: "Pastel Pink / rose", value: "Pink", color: "bg-pink-400" },
    { label: "Champagne Gold / dore", value: "Gold", color: "bg-amber-400" },
    { label: "Mix Custom", value: "Custom Mix", color: "bg-gradient-to-r from-red-600 via-blue-600 to-pink-400" },
  ];

  const whatsappMessage = encodeURIComponent(
    `Bonjour Hiba! Je souhaite commander le bouquet "${product.name}" (${selectedStems} tiges, Couleur: ${customColor}) au prix de ${product.price} TND. Pouvons-nous valider la commande?`
  );

  const whatsappUrl = `https://wa.me/21655000000?text=${whatsappMessage}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-brand-dark/75 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-brand-gold/30 overflow-hidden z-10 my-8"
          dir={dir}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-brand-maroon flex items-center justify-center shadow-md border border-gray-200 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="grid md:grid-cols-2">
            {/* Image section */}
            <div className="relative bg-brand-cream/40 p-6 flex items-center justify-center min-h-[300px] md:min-h-[420px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full max-h-[380px] object-cover rounded-2xl shadow-lg border border-brand-gold/20"
              />
              {product.badge && (
                <span className="absolute top-8 left-8 bg-brand-maroon text-brand-gold text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md border border-brand-gold/30">
                  {product.badge}
                </span>
              )}
              <button
                onClick={() => onToggleFavorite(product.id)}
                aria-label="Toggle Wishlist"
                className={`absolute bottom-8 right-8 w-11 h-11 rounded-full flex items-center justify-center shadow-md transition-all ${
                  isFavorite
                    ? "bg-red-500 text-white shadow-red-200"
                    : "bg-white/90 text-gray-500 hover:text-red-500"
                }`}
              >
                <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
              </button>
            </div>

            {/* Product Info & Direct Action */}
            <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold block mb-1">
                  {product.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-brand-maroon font-bold mb-3">
                  {product.name}
                </h3>

                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-2xl md:text-3xl font-bold text-brand-maroon">
                    {product.price} <span className="text-sm font-semibold">TND</span>
                  </span>
                  {product.originalPrice && (
                    <span className="text-base text-gray-400 line-through font-medium">
                      {product.originalPrice} TND
                    </span>
                  )}
                  <span className="text-xs font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-200">
                    {language === "tn" ? "توصيل سريع" : language === "fr" ? "En Stock" : "Available"}
                  </span>
                </div>

                <p className="text-sm text-brand-dark/70 leading-relaxed mb-6">
                  {product.description
                    ? product.description[language as "en" | "fr" | "tn"] || product.description.fr
                    : language === "tn"
                    ? "ورد مصنوع باليد بالحرير الرفيع، يدوم للأبد ما يذبلش، مغلف بأوراق وتغليف فخم ومطرز باليد."
                    : language === "fr"
                    ? "Bouquet de roses faites à la main en ruban satiné de haute qualité. Ne se fane jamais, emballage de luxe personnalisé."
                    : "Handcrafted satin ribbon roses made with premium silk. Never fades, wrapped in luxury customizable packaging."}
                </p>

                {/* Custom Options */}
                <div className="space-y-4 border-t border-brand-gold/15 pt-4">
                  {/* Stem Count Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark/70 mb-2">
                      {language === "tn" ? "عدد الورود:" : language === "fr" ? "Nombre de roses :" : "Stem Count:"}
                    </label>
                    <div className="flex gap-2">
                      {[6, 12, 24, 50].map((stems) => (
                        <button
                          key={stems}
                          onClick={() => setSelectedStems(stems)}
                          className={`flex-1 py-2 text-xs font-bold rounded-xl border transition-all ${
                            selectedStems === stems
                              ? "bg-brand-maroon text-brand-gold border-brand-maroon shadow-sm"
                              : "bg-gray-50 border-gray-200 text-brand-dark/70 hover:border-brand-gold"
                          }`}
                        >
                          {stems} {language === "tn" ? "وردات" : "Roses"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Ribbon Color Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark/70 mb-2">
                      {language === "tn" ? "لون الحرير المفضّل:" : language === "fr" ? "Couleur du ruban :" : "Ribbon Color:"}
                    </label>
                    <div className="flex gap-2.5 items-center">
                      {colorOptions.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => setCustomColor(opt.label)}
                          title={opt.label}
                          className={`w-8 h-8 rounded-full ${opt.color} flex items-center justify-center transition-all ${
                            customColor === opt.label
                              ? "ring-4 ring-brand-gold/40 scale-110 shadow"
                              : "opacity-80 hover:opacity-100"
                          }`}
                        >
                          {customColor === opt.label && <Check size={14} className="text-white drop-shadow" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Action Buttons */}
              <div className="space-y-3 border-t border-brand-gold/15 pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm md:text-base cursor-pointer"
                >
                  <MessageCircle size={20} />
                  <span>
                    {language === "tn"
                      ? "اطلب توا عل الواتساب"
                      : language === "fr"
                      ? "Commander via WhatsApp"
                      : "Order on WhatsApp"}
                  </span>
                </a>

                <div className="flex items-center justify-center gap-4 text-[11px] text-brand-dark/60 font-medium pt-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck size={14} className="text-brand-gold" />
                    {language === "tn" ? "ضمان الفخامة" : "Quality Guaranteed"}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Sparkles size={14} className="text-brand-gold" />
                    {language === "tn" ? "تغليف هدايا مجاني" : "Free Luxury Packaging"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
