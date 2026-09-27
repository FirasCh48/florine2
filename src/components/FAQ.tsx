import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function FAQ() {
  const { t, language, dir } = useLanguage();

  const faqsByLang = {
    en: [
      {
        question: "What materials do you use for the flowers?",
        answer: "We use high-quality, premium fabrics such as silk, satin, and organza. Each petal is hand-cut and shaped to resemble natural flowers."
      },
      {
        question: "Can I request a custom bouquet design?",
        answer: "Absolutely! We specialize in custom designs matching your exact color scheme, event theme, and flower preferences."
      },
      {
        question: "How long does custom creation take?",
        answer: "Custom orders typically take 1-2 weeks depending on complexity. Contact us on WhatsApp for express requests."
      },
      {
        question: "Do you deliver across Tunisia?",
        answer: "Yes, we deliver across all Tunisian regions safely wrapped to ensure your flowers arrive in perfect condition."
      }
    ],
    fr: [
      {
        question: "Quels matériaux utilisez-vous pour vos fleurs ?",
        answer: "Nous utilisons des tissus haut de gamme comme la soie, le satin et l'organza. Chaque pétale est découpé et façonné à la main."
      },
      {
        question: "Puis-je commander un bouquet entièrement personnalisé ?",
        answer: "Absolument ! Nous créons des compositions sur mesure selon vos couleurs, votre thème et vos envies."
      },
      {
        question: "Combien de temps prend la confection ?",
        answer: "Les commandes sur mesure prennent généralement 1 à 2 semaines. Contactez-nous sur WhatsApp pour les urgences."
      },
      {
        question: "Livrez-vous dans toute la Tunisie ?",
        answer: "Oui, nous livrons dans toute la Tunisie dans un emballage sécurisé pour garantir un état parfait."
      }
    ],
    tn: [
      {
        question: "شنوة القماش اللي تخدم بيه النوار؟",
        answer: "نخدموا بأجود أنواع الحرير، الساتان والاورغانزا الممتازة. كل ورقة نوار مقصوصة ومخدومة باليد باتقان."
      },
      {
        question: "نجم نطلب موديل خاص بالالوان اللي نحب عليها؟",
        answer: "أكيد جداً! نخدموا موديلات sur mesure حسب الألوان والمناسبة متاعك بالضبط."
      },
      {
        question: "قداش ياخذ وقت باش يحضر البوكي؟",
        answer: "الخدمة تاخذ بين جمعة وجمعتين حسب كبر البوكي. وإذا مزروب نجموا نتفاهموا عل الواتساب."
      },
      {
        question: "توصلوا للولايات الكل في تونس؟",
        answer: "نعم نوصلوا لجميع ولايات تونس في تغليف باهي ومحمّي باش يوصلك البوكي لاباس عليه."
      }
    ]
  };

  const currentFaqs = faqsByLang[language] || faqsByLang.fr;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-3xl mx-auto px-6" dir={dir}>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-brand-gold"></span>
            <span className="text-brand-gold font-medium tracking-widest uppercase text-sm">FAQ</span>
            <span className="w-8 h-[1px] bg-brand-gold"></span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-brand-maroon mb-4"
          >
            {t.faqTitle}
          </motion.h2>
          <p className="text-brand-dark/70 text-lg">
            {t.faqSubtitle}
          </p>
        </div>

        <div className="space-y-4">
          {currentFaqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-brand-maroon/10 rounded-2xl overflow-hidden bg-brand-cream/30"
            >
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group select-none cursor-pointer"
              >
                <span className="font-medium text-brand-dark pr-4 group-hover:text-brand-maroon transition-colors text-lg">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-brand-gold flex-shrink-0"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-brand-dark/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
