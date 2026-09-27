import { motion } from "motion/react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Testimonials() {
  const { language, dir } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      location: "La Marsa, Tunis",
      text: language === "tn" 
        ? "البوكي اللي طلبته لعراسي طلع يطير عقل! صحباتي كينهم ما صدقوش اللي هو حرير.. وشدلي ذكرى أحلى ليلة."
        : language === "fr"
        ? "Le bouquet fait main pour mon mariage est tout simplement splendide. Il a l'air vrai et je le garderai toute ma vie !"
        : "The fabric bouquet I ordered for my wedding is breathtaking. It looks incredibly real and I get to keep it forever!",
      rating: 5,
    },
    {
      id: 2,
      name: "Amira T.",
      location: "Ennasr, Ariana",
      text: language === "tn"
        ? "خدمة هبة تحفون برشة وسريعة! عاونتني باش نختار الألوان اللي توالم تغليف هدية أختي."
        : language === "fr"
        ? "Superbe travail artisanal. Hiba est très patiente et m'a guidée dans le choix des couleurs idéales."
        : "Beautiful craftsmanship and excellent customer service. Hiba was so patient and helped me choose the perfect colors.",
      rating: 5,
    },
    {
      id: 3,
      name: "Leyla B.",
      location: "Sousse",
      text: language === "tn"
        ? "شريت كفرة ورد وردي لعيد ميلاد أمي ودبّرت أحلى تفاجئة.. تخدم بالدقة و الحب."
        : language === "fr"
        ? "J'ai offert un coffret en satin pour l'anniversaire de ma mère, elle en a eu les larmes aux yeux. Une qualité rare !"
        : "I bought a custom ribbon box for my mother's birthday and she cried when she saw it. Matchless detail.",
      rating: 5,
    }
  ];

  return (
    <section className="py-24 bg-brand-pink/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-maroon rounded-full blur-[120px] opacity-10 translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10" dir={dir}>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-brand-gold"></span>
            <span className="text-brand-gold font-medium tracking-widest uppercase text-sm">
              {language === "tn" ? "آراء الحرفاء" : language === "fr" ? "Témoignages Client" : "Customer Stories"}
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
            {language === "tn" ? "محبة حرفاء فلورين" : language === "fr" ? "Mots d'Amour" : "Words of Love"}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ delay: index * 0.15 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 relative border border-brand-gold/20 flex flex-col justify-between select-none cursor-default group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-gold/15 group-hover:text-brand-gold/30 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[11px] bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-semibold border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 size={12} />
                    {language === "tn" ? "حريف مأكد" : "Verified Client"}
                  </span>
                </div>

                <p className="text-brand-dark/80 text-base italic leading-relaxed mb-8">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-brand-gold/15">
                <div className="w-12 h-12 bg-brand-maroon text-brand-gold rounded-full flex items-center justify-center font-serif font-bold text-xl shadow">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-brand-maroon text-base leading-tight">
                    {testimonial.name}
                  </h4>
                  <span className="text-xs text-brand-dark/60 font-medium">
                    {testimonial.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

