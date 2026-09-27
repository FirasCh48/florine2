import { motion } from "motion/react";
import { Infinity, Palette, HeartHandshake, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Features() {
  const { language, dir } = useLanguage();

  const features = [
    {
      icon: <Infinity className="w-7 h-7" />,
      title: language === "tn" ? "تدوم للأبد" : language === "fr" ? "Éternelles & Inaltérables" : "Lasts Forever",
      description: language === "tn" 
        ? "كيفها كيف ذكرياتك، ما تذبل وما تموت تبقى ديما نفس الجودة."
        : language === "fr"
        ? "Comme vos meilleurs souvenirs, nos roses satinées ne se fanent jamais."
        : "Just like your cherished memories, our silk ribbon roses never wither."
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: language === "tn" ? "مخصصة ليك" : language === "fr" ? "100% Sur Mesure" : "Fully Custom",
      description: language === "tn"
        ? "إنت تختار الألوان، التدرجات، والتغليف الراقي اللي يعبر عليك."
        : language === "fr"
        ? "Choisissez vos couleurs, le nombre de tiges et le style de papier cadeau."
        : "Choose your preferred colors, stem counts, and luxury gift wrap style."
    },
    {
      icon: <HeartHandshake className="w-7 h-7" />,
      title: language === "tn" ? "فن وصنعة اليد" : language === "fr" ? "Haute Artisanat" : "Artisan Handcrafted",
      description: language === "tn"
        ? "كل وردة تطلب وقت، صبر وحب حقيقي من حراير تونس."
        : language === "fr"
        ? "Chaque pétale est pliée à la main avec passion et précision."
        : "Every petal is individual handfolded with love, skill, and patience."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-brand-gold"></span>
            <span className="text-brand-gold font-medium tracking-widest uppercase text-sm">
              {language === "tn" ? "وعد فلورين" : language === "fr" ? "La Promesse" : "The Promise"}
            </span>
            <span className="w-8 h-[1px] bg-brand-gold"></span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-brand-maroon mb-6"
          >
            {language === "tn" ? "علاش نوار الحرير والساتان؟" : language === "fr" ? "Pourquoi les Roses Satinées ?" : "Why Satin Ribbon Roses?"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-dark/70 max-w-2xl mx-auto text-lg leading-relaxed"
            dir={dir}
          >
            {language === "tn"
              ? "عمرك حسيت اللي الورد الطبيعي يذبل وذكرياته تذبل معاه؟ في فلورين، قررنا نحبسوا الوقت! نصنعولك ورد بالقماش، يشد العمر، بنفس التفاصيل، ونفس الحب."
              : language === "fr"
              ? "Les fleurs naturelles se fanent en quelques jours. Chez Florine, nous immortalisons vos émotions avec du satin haut de gamme fait main."
              : "Natural flowers fade quickly. At Florine, we freeze time with handcrafted satin ribbons that stay vibrant forever."}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16" dir={dir}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col items-center text-center p-8 rounded-3xl bg-brand-cream/30 hover:bg-white border border-brand-gold/20 hover:border-brand-gold/50 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-maroon text-brand-gold flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif text-brand-maroon mb-3 font-bold">{feature.title}</h3>
              <p className="text-brand-dark/70 leading-relaxed text-sm md:text-base">{feature.description}</p>
              
              <div className="mt-6 pt-4 border-t border-brand-gold/15 w-full flex items-center justify-center text-xs font-semibold text-brand-gold gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Sparkles size={14} />
                <span>{language === "tn" ? "جودة مضمونة" : "Craftsmanship Guaranteed"}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

