import { motion } from "motion/react";
import { useState } from "react";
import { Heart, Eye, MessageCircle, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { ProductModal, Product } from "./ProductModal";

export function BestSellers() {
  const { t, language } = useLanguage();
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const products: Product[] = [
    {
      id: 1,
      name: "Rouge Velours Satin Roses",
      category: t.catBridal,
      price: 120,
      originalPrice: 150,
      badge: "Bestseller",
      image: "/src/assets/images/satin_red_bouquet_1785779041811.jpg",
      description: {
        en: "Handfolded deep crimson satin roses bouquet wrapped in layered black paper with gold accents.",
        fr: "Bouquet artisanal de roses en satin rouge velours emballé dans du papier noir mat chic.",
        tn: "ورد بالحرير الأحمر الفاخر يخدم باليد كعبة كعبة مع تغليف أسود وذهبي مزيان."
      }
    },
    {
      id: 2,
      name: "Royal Blue Ribbon Symphony",
      category: t.catCustom,
      price: 110,
      originalPrice: 140,
      badge: "Nouveau",
      image: "/src/assets/images/satin_blue_bouquet_1785779059693.jpg",
      description: {
        en: "Vibrant royal blue satin roses with gold trimming and soft satin ribbon bow.",
        fr: "Bouquet royal bleu en ruban satin brillant avec finitions dorées.",
        tn: "بوكي أزرق ملكي بالحرير اللماع مع تغليف أبيض وإكسسوارات ذهبية."
      }
    },
    {
      id: 3,
      name: "Duo Passion Red & Sapphire",
      category: t.catBoxes,
      price: 160,
      originalPrice: 190,
      badge: "Pack Luxe",
      image: "/src/assets/images/satin_black_red_bouquet_1785779074229.jpg",
      description: {
        en: "Double arrangement matching master red bouquet and companion sapphire blue mini-bouquet.",
        fr: "Duo de bouquets assortis rouge passion et bleu saphir en satin haut de gamme.",
        tn: "دليل الفخامة: زوز بوكيات مكملين لبعضهم أحمر وأزرق حرير."
      }
    },
    {
      id: 4,
      name: "Pastel Pink Velvet Box",
      category: t.catDecor,
      price: 135,
      originalPrice: 165,
      badge: "Coup de Cœur",
      image: "/src/assets/images/satin_pastel_box_1785779088402.jpg",
      description: {
        en: "Luxury round velvet box with pastel pink and champagne gold ribbon roses adorned with pearls.",
        fr: "Boîte ronde en velours garnie de roses pastel et perles nacrées faites main.",
        tn: "كفرة فخمة بالڨديفة فيها ورد وردي وذهبي بالحرير مع جوهر."
      }
    },
    {
      id: 5,
      name: "Crimson Crown Ribbon Bouquet",
      category: t.catBridal,
      price: 145,
      originalPrice: 180,
      badge: "Mariage Luxe",
      image: "/src/assets/images/satin_red_bouquet_1785779041811.jpg"
    },
    {
      id: 6,
      name: "Midnight Blue Satin Dream",
      category: t.catCustom,
      price: 125,
      originalPrice: 150,
      badge: "Sur Mesure",
      image: "/src/assets/images/satin_blue_bouquet_1785779059693.jpg"
    }
  ];

  return (
    <section id="shop" className="py-24 bg-brand-cream/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-brand-maroon mb-4 uppercase tracking-wider"
          >
            {t.bestSellersTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-dark/70 max-w-2xl mx-auto text-lg"
          >
            {t.bestSellersSubtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const isFav = favorites.includes(product.id);
            const whatsappQuickMsg = encodeURIComponent(
              `Bonjour Hiba! Je suis intéressé(e) par le bouquet "${product.name}" (${product.price} TND).`
            );

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative bg-white rounded-3xl p-5 border border-brand-gold/20 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image & Badge Area */}
                <div 
                  onClick={() => setSelectedProduct(product)}
                  className="relative w-full aspect-[4/4] mb-5 overflow-hidden rounded-2xl bg-brand-pink/10 cursor-pointer"
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-brand-maroon/90 text-brand-gold text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow border border-brand-gold/30 backdrop-blur-sm">
                      {product.badge}
                    </span>
                  )}

                  {/* Wishlist Icon */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(product.id);
                    }}
                    aria-label="Add to Wishlist"
                    className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md shadow transition-all ${
                      isFav 
                        ? "bg-red-500 text-white scale-110" 
                        : "bg-white/80 text-gray-600 hover:text-red-500 hover:bg-white"
                    }`}
                  >
                    <Heart size={18} fill={isFav ? "currentColor" : "none"} />
                  </button>

                  {/* Quick Action Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(product);
                      }}
                      className="flex-1 py-2.5 px-3 bg-white/90 hover:bg-white text-brand-maroon font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5 backdrop-blur-sm transition-colors"
                    >
                      <Eye size={14} />
                      <span>{language === "tn" ? "تفاصيل" : language === "fr" ? "Aperçu" : "Quick View"}</span>
                    </button>
                    <a
                      href={`https://wa.me/21655000000?text=${whatsappQuickMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-1 transition-colors"
                      title="Command via WhatsApp"
                    >
                      <MessageCircle size={14} />
                    </a>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-brand-gold font-bold uppercase tracking-widest">
                      {product.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                      <Sparkles size={12} />
                      {language === "tn" ? "صنع باليد" : "Handmade"}
                    </span>
                  </div>

                  <h3 
                    onClick={() => setSelectedProduct(product)}
                    className="text-xl font-serif text-brand-maroon font-bold hover:text-brand-gold transition-colors cursor-pointer line-clamp-1"
                  >
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between pt-2 border-t border-brand-gold/15">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-brand-maroon">
                        {product.price} <span className="text-xs font-semibold">TND</span>
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-400 line-through font-medium">
                          {product.originalPrice} TND
                        </span>
                      )}
                    </div>
                    
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="text-xs font-bold text-brand-maroon hover:text-brand-gold underline underline-offset-4 transition-colors"
                    >
                      {language === "tn" ? "تخصيص" : language === "fr" ? "Personnaliser" : "Customize"}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Product Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isFavorite={selectedProduct ? favorites.includes(selectedProduct.id) : false}
        onToggleFavorite={toggleFavorite}
      />
    </section>
  );
}

