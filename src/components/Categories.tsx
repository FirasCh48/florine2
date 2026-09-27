import { motion } from "motion/react";
import { Baby, Cake, Heart, Sparkles, Gem, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export function Categories() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const categories = [
    { id: 1, icon: <Baby size={28} />, name: t.catBridal, count: language === "tn" ? "15 تشكيلة" : "15 Modèles" },
    { id: 2, icon: <Heart size={28} />, name: t.catBoxes, count: language === "tn" ? "12 كفرة" : "12 Coffrets" },
    { id: 3, icon: <Cake size={28} />, name: t.catDecor, count: language === "tn" ? "20 ديكور" : "20 Pièces" },
    { id: 4, icon: <Sparkles size={28} />, name: t.catCustom, count: language === "tn" ? "على ذوقك" : "Sur Mesure" },
    { id: 5, icon: <Gem size={28} />, name: t.categoriesTitle, count: language === "tn" ? "الكل" : "Collection Complete" },
  ];

  const handleCategoryClick = (id: number) => {
    setActiveCategory(id);
    const shopEl = document.getElementById("shop");
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="categories" className="py-24 bg-white border-t border-brand-cream/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-brand-maroon mb-4 uppercase tracking-wider"
          >
            {t.categoriesTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-dark/70 max-w-2xl mx-auto text-lg"
          >
            {t.categoriesSubtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
          {categories.map((category, index) => {
            const isActive = activeCategory === category.id;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => handleCategoryClick(category.id)}
                className={`relative group bg-brand-cream/20 hover:bg-white border rounded-3xl p-6 flex flex-col items-center text-center cursor-pointer transition-all duration-300 select-none shadow-sm hover:shadow-xl ${
                  isActive
                    ? "border-brand-gold bg-brand-gold/10 ring-2 ring-brand-gold/40"
                    : "border-brand-gold/20 hover:border-brand-gold/50"
                }`}
              >
                {/* Arrow hint */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-gold">
                  <ArrowUpRight size={16} />
                </div>

                <div className={`w-20 h-20 rounded-2xl mb-4 flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? "bg-brand-maroon text-brand-gold shadow-md"
                    : "bg-white text-brand-maroon border border-brand-gold/30 group-hover:bg-brand-maroon group-hover:text-brand-gold group-hover:scale-105"
                }`}>
                  {category.icon}
                </div>

                <h3 className="font-serif font-bold text-brand-maroon text-base mb-1">
                  {category.name}
                </h3>
                <span className="text-xs text-brand-dark/60 font-medium">
                  {category.count}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

