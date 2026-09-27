import { motion } from "motion/react";
import { useState, FormEvent, ChangeEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Contact() {
  const { t, language, dir } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occasion: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const placeholders = {
    tn: {
      name: "مريم الطرابلسي",
      email: "name@gmail.com",
      phone: "+216 55 123 456",
      message: "قولي شنوة المناسبة، الألوان، وعدد الوراق اللي تحب عليهم..."
    },
    fr: {
      name: "مريم الطرابلسي",
      email: "name@gmail.com",
      phone: "+216 55 123 456",
      message: "Décrivez votre projet (couleurs, événement, style de ruban...)"
    },
    en: {
      name: "Name",
      email: "name@gmail.com",
      phone: "+216 55 123 456",
      message: "Tell us about the colors, occasion, or ribbon arrangement..."
    }
  };

  const currentPlaceholders = placeholders[language] || placeholders.fr;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t.nameLabel;
    if (!formData.email.trim()) {
      newErrors.email = t.emailLabel;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = t.messageLabel;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", occasion: "", message: "" });
      }, 1500);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center" dir={dir}>
          {/* Left Column: Text & Handmade Flower Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <span className="text-brand-gold font-medium tracking-widest uppercase text-sm mb-3">
              {language === "tn" ? "تواصل معانا" : language === "fr" ? "Contactez-nous" : "Get in Touch"}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-maroon mb-6 leading-tight">
              {language === "tn" ? (
                <>خلينا نعملولك <br /><span className="italic">أحلى بوكي نوار باليد</span></>
              ) : language === "fr" ? (
                <>Créons ensemble <br /><span className="italic">votre bouquet d'exception.</span></>
              ) : (
                <>Let's create your <br /><span className="italic">handmade arrangement.</span></>
              )}
            </h2>
            <p className="text-lg text-brand-dark/70 leading-relaxed mb-6">
              {t.contactSubtitle}
            </p>
            
            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden mt-4 shadow-xl border border-brand-gold/20 relative group">
              <img 
                src="/images/satin_black_red_bouquet_1785779074229.jpg" 
                alt="Handmade Satin Ribbon Flower Bouquet" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/30 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-cream p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-brand-gold/10"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-16"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-serif text-brand-maroon mb-4">
                  {language === "tn" ? "يعطيك الصحة!" : language === "fr" ? "Merci !" : "Thank You!"}
                </h3>
                <p className="text-brand-dark/70 text-lg">{t.successMsg}</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-brand-gold font-medium hover:text-brand-maroon transition-colors"
                >
                  {language === "tn" ? "ابعث ميساج آخر" : language === "fr" ? "Envoyer un autre message" : "Send another message"}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-brand-dark/80">{t.nameLabel} *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all ${errors.name ? 'border-red-400' : 'border-brand-maroon/10'}`}
                      placeholder={currentPlaceholders.name}
                    />
                    {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
                  </div>
                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-brand-dark/80">{t.emailLabel} *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all ${errors.email ? 'border-red-400' : 'border-brand-maroon/10'}`}
                      placeholder={currentPlaceholders.email}
                    />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-medium text-brand-dark/80">
                      {language === "tn" ? "رقم الهاتف" : language === "fr" ? "Téléphone" : "Phone Number"}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-brand-maroon/10 bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all"
                      placeholder={currentPlaceholders.phone}
                    />
                  </div>
                  {/* Occasion */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="occasion" className="text-sm font-medium text-brand-dark/80">
                      {language === "tn" ? "المناسبة" : language === "fr" ? "Occasion" : "Occasion"}
                    </label>
                    <select
                      id="occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-brand-maroon/10 bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all text-brand-dark/80"
                    >
                      <option value="">{language === "tn" ? "اختار المناسبة..." : language === "fr" ? "Sélectionnez une occasion..." : "Select an occasion..."}</option>
                      <option value="wedding">{language === "tn" ? "عرس / خطبة" : language === "fr" ? "Mariage / Fiançailles" : "Wedding / Engagement"}</option>
                      <option value="graduation">{language === "tn" ? "تخرج / نجاح" : language === "fr" ? "Diplôme / Réussite" : "Graduation"}</option>
                      <option value="birthday">{language === "tn" ? "عيد ميلاد" : language === "fr" ? "Anniversaire" : "Birthday"}</option>
                      <option value="other">{language === "tn" ? "مناسبة أخرى" : language === "fr" ? "Autre événement" : "Other"}</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-brand-dark/80">{t.messageLabel} *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all resize-none ${errors.message ? 'border-red-400' : 'border-brand-maroon/10'}`}
                    placeholder={currentPlaceholders.message}
                  />
                  {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 bg-brand-maroon text-brand-cream py-4 rounded-xl font-medium tracking-wide hover:bg-brand-maroon/90 active:bg-brand-maroon transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">{t.sending}</span>
                  ) : (
                    <>
                      <span>{t.sendBtn}</span>
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

