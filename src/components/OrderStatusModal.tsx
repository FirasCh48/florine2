import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X, Search, PackageCheck, Clock, CheckCircle2, Truck, Sparkles, Scissors, Gift } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface OrderStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface OrderDetails {
  code: string;
  customerName: string;
  item: string;
  image: string;
  date: string;
  eta: string;
  currentStep: number;
  statusText: Record<string, string>;
}

const PRESET_ORDERS: Record<string, OrderDetails> = {
  "FLOR-8821": {
    code: "FLOR-8821",
    customerName: "Amina K.",
    item: "Rouge Velours Satin Roses (12 Stems)",
    image: "/images/satin_red_bouquet_1785779041811.jpg",
    date: "02 Aug 2026",
    eta: "05 Aug 2026",
    currentStep: 3,
    statusText: {
      en: "Artisan is handcrafting & shaping individual red satin petals",
      fr: "L'artisan façonne et sculpte les pétales de soie rouge",
      tn: "الحرايرية قاعدة تخدم في أوراق النوار باليد باتقان"
    }
  },
  "FLOR-9042": {
    code: "FLOR-9042",
    customerName: "Youssef B.",
    item: "Royal Blue Ribbon Symphony",
    image: "/images/satin_blue_bouquet_1785779059693.jpg",
    date: "01 Aug 2026",
    eta: "04 Aug 2026",
    currentStep: 4,
    statusText: {
      en: "Final ribbon wrapping & luxury gold accent packaging",
      fr: "Emballage final au ruban de satin et accents dorés",
      tn: "التغليف النهائي بالروبون الحريري والأوراق الذهب"
    }
  },
  "FLOR-7710": {
    code: "FLOR-7710",
    customerName: "Nour M.",
    item: "Pastel Pink Velvet Box Arrangement",
    image: "/images/satin_pastel_box_1785779088402.jpg",
    date: "31 Jul 2026",
    eta: "03 Aug 2026",
    currentStep: 5,
    statusText: {
      en: "Out for express courier delivery across Tunis",
      fr: "En cours de livraison express à Tunis",
      tn: "خرجت مع الموصل السريع في طريقها لدارك"
    }
  }
};

const STEPS = [
  { id: 1, title: { en: "Confirmed", fr: "Confirmée", tn: "مأكّدة" }, icon: CheckCircle2 },
  { id: 2, title: { en: "Material Prep", fr: "Préparation", tn: "تحضير القماش" }, icon: Scissors },
  { id: 3, title: { en: "Handcrafting", fr: "Façonnage", tn: "خدمة باليد" }, icon: Sparkles },
  { id: 4, title: { en: "Luxury Wrap", fr: "Emballage", tn: "تغليف فخم" }, icon: Gift },
  { id: 5, title: { en: "Delivering", fr: "En Livraison", tn: "في الطريق" }, icon: Truck },
];

export function OrderStatusModal({ isOpen, onClose }: OrderStatusModalProps) {
  const { language, dir } = useLanguage();
  const [searchCode, setSearchCode] = useState("FLOR-8821");
  const [searchedOrder, setSearchedOrder] = useState<OrderDetails | null>(PRESET_ORDERS["FLOR-8821"]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (codeToSearch?: string) => {
    const query = (codeToSearch || searchCode).trim().toUpperCase();
    if (!query) return;

    if (PRESET_ORDERS[query]) {
      setSearchedOrder(PRESET_ORDERS[query]);
    } else {
      // Dynamic generated simulated order for custom code
      setSearchedOrder({
        code: query,
        customerName: "Valued Customer",
        item: "Custom Handcrafted Bouquet",
        image: "/images/satin_black_red_bouquet_1785779074229.jpg",
        date: "Today",
        eta: "2-3 Days",
        currentStep: 2,
        statusText: {
          en: "Materials selected. Artisan currently preparing silk ribbons.",
          fr: "Matériaux sélectionnés. L'artisan prépare les rubans de soie.",
          tn: "تم اختيار القماش والحرير، قاعدة تحضر الخدمة اليدوية."
        }
      });
    }
    setHasSearched(true);
  };

  const getLangText = (obj: Record<string, string>) => {
    return obj[language] || obj["fr"] || obj["en"];
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-dark/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-brand-gold/30 overflow-hidden z-10 my-8"
            dir={dir}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-maroon via-[#541220] to-brand-maroon text-white p-6 relative">
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-brand-gold transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold">
                  <PackageCheck size={22} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brand-gold">
                    {language === "en" ? "Track Custom Order" : language === "fr" ? "Suivi de Commande" : "متابعة الطلبية الخاصة"}
                  </h3>
                  <p className="text-xs text-brand-cream/70">
                    {language === "en" ? "Real-time artisan arrangement status" : language === "fr" ? "Statut en temps réel de votre création" : "متابعة لحظية لخدمة النوار متاعك"}
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              {/* Search Bar */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark/60 mb-2">
                  {language === "en" ? "Enter Order Number" : language === "fr" ? "Numéro de Commande" : "رمز الطلبية"}
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={searchCode}
                      onChange={(e) => setSearchCode(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                      placeholder="e.g. FLOR-8821"
                      className="w-full px-4 py-3 pl-10 rounded-xl bg-brand-cream/30 border border-brand-gold/30 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-brand-dark font-mono text-sm uppercase"
                    />
                    <Search className="w-4 h-4 text-brand-dark/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                  <button
                    onClick={() => handleSearch()}
                    className="px-6 py-3 bg-brand-maroon hover:bg-brand-maroon/90 text-brand-gold font-medium rounded-xl shadow-md transition-colors text-sm flex items-center gap-2"
                  >
                    {language === "en" ? "Track" : language === "fr" ? "Rechercher" : "بحث"}
                  </button>
                </div>

                {/* Sample Preset Chips */}
                <div className="mt-3 flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-brand-dark/50 font-medium">
                    {language === "en" ? "Try sample codes:" : language === "fr" ? "Exemples de codes :" : "جرب الأكواد هاذي:"}
                  </span>
                  {Object.keys(PRESET_ORDERS).map((code) => (
                    <button
                      key={code}
                      onClick={() => {
                        setSearchCode(code);
                        handleSearch(code);
                      }}
                      className={`text-xs px-2.5 py-1 rounded-full border transition-all ${
                        searchCode === code
                          ? "bg-brand-gold/20 border-brand-gold text-brand-maroon font-bold"
                          : "bg-gray-100 border-gray-200 text-brand-dark/70 hover:border-brand-gold/50"
                      }`}
                    >
                      {code}
                    </button>
                  ))}
                </div>
              </div>

              {/* Order Result Details */}
              {searchedOrder && (
                <div className="bg-brand-cream/20 rounded-2xl p-5 border border-brand-gold/20 space-y-5">
                  <div className="flex gap-4 items-center border-b border-brand-gold/15 pb-4">
                    <img
                      src={searchedOrder.image}
                      alt={searchedOrder.item}
                      className="w-16 h-16 rounded-xl object-cover border border-brand-gold/30 shadow-sm"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-mono font-bold bg-brand-gold/20 text-brand-maroon px-2 py-0.5 rounded">
                          {searchedOrder.code}
                        </span>
                        <span className="text-xs text-brand-dark/60 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-brand-gold" /> ETA: {searchedOrder.eta}
                        </span>
                      </div>
                      <h4 className="font-serif font-bold text-brand-dark text-base truncate mt-1">
                        {searchedOrder.item}
                      </h4>
                      <p className="text-xs text-brand-dark/70">
                        {language === "en" ? "Customer:" : language === "fr" ? "Client :" : "الحريف:"} <span className="font-semibold text-brand-dark">{searchedOrder.customerName}</span> • {searchedOrder.date}
                      </p>
                    </div>
                  </div>

                  {/* Status Banner */}
                  <div className="bg-brand-maroon/5 border border-brand-maroon/10 rounded-xl p-3.5 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-brand-gold shrink-0 mt-0.5 animate-pulse" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wide text-brand-maroon block mb-0.5">
                        {language === "en" ? "Current Stage" : language === "fr" ? "Étape Actuelle" : "المرحلة الحالية"}
                      </span>
                      <p className="text-xs md:text-sm text-brand-dark font-medium">
                        {getLangText(searchedOrder.statusText)}
                      </p>
                    </div>
                  </div>

                  {/* Progress Step Bar */}
                  <div>
                    <div className="flex items-center justify-between relative mb-2">
                      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gray-200 z-0 rounded-full" />
                      <div
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-brand-gold to-brand-maroon z-0 rounded-full transition-all duration-500"
                        style={{
                          width: `${((searchedOrder.currentStep - 1) / (STEPS.length - 1)) * 100}%`
                        }}
                      />

                      {STEPS.map((step) => {
                        const Icon = step.icon;
                        const isCompleted = step.id < searchedOrder.currentStep;
                        const isCurrent = step.id === searchedOrder.currentStep;

                        return (
                          <div key={step.id} className="relative z-10 flex flex-col items-center">
                            <div
                              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                                isCompleted
                                  ? "bg-brand-maroon text-brand-gold shadow"
                                  : isCurrent
                                  ? "bg-brand-gold text-brand-maroon ring-4 ring-brand-gold/30 shadow-lg scale-110"
                                  : "bg-white text-gray-400 border border-gray-200"
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <span
                              className={`text-[10px] md:text-xs mt-2 font-medium text-center max-w-[65px] leading-tight ${
                                isCurrent
                                  ? "text-brand-maroon font-bold"
                                  : isCompleted
                                  ? "text-brand-dark"
                                  : "text-gray-400"
                              }`}
                            >
                              {getLangText(step.title)}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer note */}
            <div className="bg-brand-cream/50 px-6 py-4 border-t border-brand-gold/10 text-center text-xs text-brand-dark/60">
              {language === "en" ? (
                <span>Need help with your custom bouquet? <a href="https://wa.me/21655000000" target="_blank" rel="noopener noreferrer" className="text-brand-maroon font-bold underline">Contact Hiba on WhatsApp</a></span>
              ) : language === "fr" ? (
                <span>Une question sur votre commande ? <a href="https://wa.me/21655000000" target="_blank" rel="noopener noreferrer" className="text-brand-maroon font-bold underline">Contactez Hiba sur WhatsApp</a></span>
              ) : (
                <span>استفسار عل الطلبية متاعك؟ <a href="https://wa.me/21655000000" target="_blank" rel="noopener noreferrer" className="text-brand-maroon font-bold underline">تواصل مع هبة عل الواتساب</a></span>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
