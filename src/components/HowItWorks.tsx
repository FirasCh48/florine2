import { motion } from "motion/react";
import { MessageCircle, Gift, Camera } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function HowItWorks() {
  const { t, language, dir } = useLanguage();

  const stepsByLang = {
    en: [
      {
        icon: <MessageCircle className="w-6 h-6" />,
        number: "1",
        title: "Send a Message",
        text: "Contact us directly via WhatsApp, Instagram or Messenger to discuss your ideas."
      },
      {
        icon: <Gift className="w-6 h-6" />,
        number: "2",
        title: "Choose the Occasion",
        text: "Tell us about your event (wedding, birthday, graduation) and we'll suggest our best designs."
      },
      {
        icon: <Camera className="w-6 h-6" />,
        number: "3",
        title: "Custom Inspiration",
        text: "Have a photo or vision in mind? Share it with us and we'll craft it to perfection!"
      }
    ],
    fr: [
      {
        icon: <MessageCircle className="w-6 h-6" />,
        number: "1",
        title: "Envoyez un message",
        text: "Contactez-nous directement sur WhatsApp, Instagram ou Messenger."
      },
      {
        icon: <Gift className="w-6 h-6" />,
        number: "2",
        title: "Précisez l'occasion",
        text: "Indiquez l'événement (mariage, anniversaire, diplôme) et nous vous conseillerons."
      },
      {
        icon: <Camera className="w-6 h-6" />,
        number: "3",
        title: "Inspiration sur-mesure",
        text: "Vous avez une photo en tête ? Partagez-la et nous la réaliserons avec précision !"
      }
    ],
    tn: [
      {
        icon: <MessageCircle className="w-6 h-6" />,
        number: "1",
        title: "ابعثلي ميساج",
        text: "تواصل معايا على Instagram أو Messenger أو WhatsApp"
      },
      {
        icon: <Gift className="w-6 h-6" />,
        number: "2",
        title: "قولي شنوة المناسبة",
        text: "قولي شنوة المناسبة (تخرج، عيد ميلاد، خطبة..) وأنا نقترح عليك أحلى موديلات."
      },
      {
        icon: <Camera className="w-6 h-6" />,
        number: "3",
        title: "عندك تصويرة ف مخك؟",
        text: "وريها لي، وتوا نطبقهالك كيف ما تحب وأحلى!"
      }
    ]
  };

  const currentSteps = stepsByLang[language] || stepsByLang.fr;

  return (
    <section id="how-it-works" className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink rounded-full blur-[100px] opacity-40 -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-brand-maroon mb-4"
          >
            {t.howItWorksTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-dark/70 text-lg max-w-xl mx-auto"
          >
            {t.howItWorksSubtitle}
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-8" dir={dir}>
            {currentSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-start gap-6 bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md active:shadow-inner transition-all duration-200 select-none cursor-pointer border border-brand-gold/10"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-brand-maroon text-brand-cream rounded-full flex items-center justify-center text-xl font-serif shadow-md">
                  {step.number}
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-2 text-brand-gold mb-1">
                    {step.icon}
                    <h3 className="font-serif text-xl text-brand-maroon font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-base md:text-lg text-brand-dark/80 font-normal leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-14 text-center"
            dir={dir}
          >
            <p className="text-xl md:text-2xl font-serif text-brand-maroon flex items-center justify-center gap-3">
              <span>{language === "tn" ? "تواصلوا معايا توة، ونبداو نخدموا أحلى هدية! 💝" : language === "fr" ? "Contactez-nous pour réaliser le plus beau des cadeaux ! 💝" : "Get in touch today and let's craft the perfect gift! 💝"}</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
