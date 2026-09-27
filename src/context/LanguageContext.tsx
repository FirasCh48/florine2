import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "fr" | "tn";

export interface Translations {
  // Navigation
  navAbout: string;
  navHowItWorks: string;
  navCategories: string;
  navShop: string;
  navContact: string;
  navOrderStatus: string;

  // Hero
  heroSubheading: string;
  heroTitlePart1: string;
  heroTitlePart2: string;
  heroDescription: string;
  heroBtnDiscover: string;
  heroBtnCustom: string;
  heroArtisanBadge: string;

  // Best Sellers
  bestSellersTitle: string;
  bestSellersSubtitle: string;
  orderOnWhatsapp: string;

  // Categories
  categoriesTitle: string;
  categoriesSubtitle: string;
  catBridal: string;
  catBoxes: string;
  catDecor: string;
  catCustom: string;

  // How It Works
  howItWorksTitle: string;
  howItWorksSubtitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;

  // Contact
  contactTitle: string;
  contactSubtitle: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  sendBtn: string;
  sending: string;
  successMsg: string;

  // FAQ
  faqTitle: string;
  faqSubtitle: string;

  // Loading Screen
  openPalaceDoors: string;
  palaceTagline: string;
  clickToEnter: string;

  // Footer & Misc
  backToTop: string;
  footerTagline: string;
  allRightsReserved: string;
}

const translations: Record<Language, Translations> = {
  en: {
    navAbout: "About",
    navHowItWorks: "How it Works",
    navCategories: "Categories",
    navShop: "Shop",
    navContact: "Contact",
    navOrderStatus: "Order Status",

    heroSubheading: "Handcrafted with love & luxury",
    heroTitlePart1: "Flowers that",
    heroTitlePart2: "last forever",
    heroDescription:
      "Beautiful, custom-made fabric & silk flowers meticulously designed to capture your special memories and never wither.",
    heroBtnDiscover: "Discover Collection",
    heroBtnCustom: "Custom Orders",
    heroArtisanBadge: "100% Handcrafted Artisan Silk",

    bestSellersTitle: "Our Best Sellers",
    bestSellersSubtitle:
      "Discover our most cherished handcrafted floral arrangements",
    orderOnWhatsapp: "Order on WhatsApp",

    categoriesTitle: "Browse by Category",
    categoriesSubtitle: "Find the perfect everlasting flowers for every occasion",
    catBridal: "Bridal Bouquets",
    catBoxes: "Flower Boxes",
    catDecor: "Home Decor",
    catCustom: "Custom Creations",

    howItWorksTitle: "How It Works",
    howItWorksSubtitle: "Your custom bouquet in 3 simple steps",
    step1Title: "Choose or Customise",
    step1Desc:
      "Select from our gallery or request a tailored design matching your vision.",
    step2Title: "Handcrafted Creation",
    step2Desc:
      "We meticulously craft each petal using premium silk and durable fabrics.",
    step3Title: "Worldwide Delivery",
    step3Desc:
      "Your everlasting flowers arrive safely wrapped, ready to brighten your space.",

    contactTitle: "Get in Touch",
    contactSubtitle: "Let's bring your floral dreams to life",
    nameLabel: "Full Name",
    emailLabel: "Email Address",
    messageLabel: "Your Message",
    sendBtn: "Send Message",
    sending: "Sending...",
    successMsg: "Message sent! We will contact you soon.",

    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Everything you need to know about our everlasting silk flowers",

    openPalaceDoors: "Open the Palace Doors",
    palaceTagline: "Enter the Palace of Flowers & Diamonds",
    clickToEnter: "Click to enter the world of Florine",

    backToTop: "Back to top",
    footerTagline: "Everlasting handcrafted silk & fabric floral arrangements.",
    allRightsReserved: "All rights reserved.",
  },
  fr: {
    navAbout: "À Propos",
    navHowItWorks: "Comment ça Marche",
    navCategories: "Catégories",
    navShop: "Boutique",
    navContact: "Contact",
    navOrderStatus: "Suivi Commande",

    heroSubheading: "Fait main avec amour et luxe",
    heroTitlePart1: "Des fleurs qui",
    heroTitlePart2: "durent pour toujours",
    heroDescription:
      "De magnifiques fleurs en tissu et soie réalisées sur mesure pour immortaliser vos précieux souvenirs sans jamais se faner.",
    heroBtnDiscover: "Découvrir la Collection",
    heroBtnCustom: "Commandes Sur Mesure",
    heroArtisanBadge: "Soie Artisanale 100% Fait Main",

    bestSellersTitle: "Nos Meilleures Ventes",
    bestSellersSubtitle:
      "Découvrez nos arrangements floraux faits main les plus appréciés",
    orderOnWhatsapp: "Commander sur WhatsApp",

    categoriesTitle: "Parcourir par Catégorie",
    categoriesSubtitle:
      "Trouvez les fleurs éternelles parfaites pour chaque occasion",
    catBridal: "Bouquets de Mariée",
    catBoxes: "Coffrets Floraux",
    catDecor: "Décoration d'Intérieur",
    catCustom: "Créations Sur Mesure",

    howItWorksTitle: "Comment Ça Marche",
    howItWorksSubtitle: "Votre bouquet sur mesure en 3 étapes simples",
    step1Title: "Choisissez ou Personnalisez",
    step1Desc:
      "Sélectionnez dans notre galerie ou demandez un design sur mesure.",
    step2Title: "Création Artisanale",
    step2Desc:
      "Nous façonnons chaque pétale avec de la soie et des tissus d'exception.",
    step3Title: "Livraison Soignée",
    step3Desc:
      "Vos fleurs éternelles arrivent emballées avec soin, prêtes à sublimer votre espace.",

    contactTitle: "Contactez-nous",
    contactSubtitle: "Donnons vie à vos projets floraux",
    nameLabel: "Nom Complet",
    emailLabel: "Adresse Email",
    messageLabel: "Votre Message",
    sendBtn: "Envoyer le Message",
    sending: "Envoi en cours...",
    successMsg: "Message envoyé ! Nous vous contacterons rapidement.",

    faqTitle: "Foire Aux Questions",
    faqSubtitle: "Tout ce que vous devez savoir sur nos fleurs en soie",

    openPalaceDoors: "Ouvrir les Portes du Palais",
    palaceTagline: "Entrez dans le Palais de Fleurs & Diamants",
    clickToEnter: "Cliquez pour entrer dans l'univers Florine",

    backToTop: "Retour en haut",
    footerTagline: "Arrangements floraux éternels en soie et tissu faits main.",
    allRightsReserved: "Tous droits réservés.",
  },
  tn: {
    navAbout: "علينا",
    navHowItWorks: "كيفاش نخدمو",
    navCategories: "الأصناف",
    navShop: "المتجر",
    navContact: "اتصل بنا",
    navOrderStatus: "تبّع طلبيتك",

    heroSubheading: "خدمة يد بحب وفخامة",
    heroTitlePart1: "نوّار يسيّح العقل",
    heroTitlePart2: "ويدوم عل طول",
    heroDescription:
      "نوار قماش وحرير مزيان ومخدوم بالذوق باش يخلّد ذكرياتك العزيزة وما يذبلش جملة.",
    heroBtnDiscover: "اكتشف المجموعة",
    heroBtnCustom: "طلب خاص",
    heroArtisanBadge: "حرير صناعة يدويّة 100%",

    bestSellersTitle: "أحلى ما عنّا",
    bestSellersSubtitle:
      "اكتشف أحسن تشكيلات النوار اليدوية اللي يحبوها الناس",
    orderOnWhatsapp: "اطلب عل الواتساب",

    categoriesTitle: "تصفّح حسب الصنف",
    categoriesSubtitle: "تلقى النوار اللي يواتي كل مناسبة عزيزة عليك",
    catBridal: "نوّار العروسة",
    catBoxes: "صناديق النوار",
    catDecor: "ديكور الدار",
    catCustom: "تشكيلات خاصة",

    howItWorksTitle: "كيفاش نطلب",
    howItWorksSubtitle: "بوكي النوار متاعك في 3 خطوات ساهلة",
    step1Title: "اختار ولا صمّم",
    step1Desc: "اختار من الكاتالوج ولا اطلب موديل خاص يواتي ذوقك بالضبط.",
    step2Title: "صناعة باليد",
    step2Desc: "نخدمو كل ورقة نوار بحرير وقماش عالي الجودة وباتقان.",
    step3Title: "توصيل حتى لدارك",
    step3Desc: "توصلك تشكيلة النوار ملفوفة بالباهي ومغلفة جاهزة باش تزين دارك.",

    contactTitle: "تواصل معانا",
    contactSubtitle: "خلينا نعملولك بوكي الورد اللي تحلم بيه",
    nameLabel: "الاسم واللقب",
    emailLabel: "البريد الإلكتروني",
    messageLabel: "الميساج متاعك",
    sendBtn: "ابعث الميساج",
    sending: "جاري الإرسال...",
    successMsg: "وصل الميساج! نرجعولك في أقرب وقت.",

    faqTitle: "أسئلة متكررة",
    faqSubtitle: "كل ما تحب تعرفو على النوار اليدوي متاعنا",

    openPalaceDoors: "احل أبواب القصر",
    palaceTagline: "ادخل لقصر الورد والألماس",
    clickToEnter: "انقر للدخول لعالم فلورين",

    backToTop: "طلع للفوق",
    footerTagline: "تشكيلات نوار حرير وقماش يدوية تدوم للديدوم.",
    allRightsReserved: "جميع الحقوق محفوظة.",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("florine_lang") as Language;
    return saved && (saved === "en" || saved === "fr" || saved === "tn") ? saved : "fr";
  });

  const dir = language === "tn" ? "rtl" : "ltr";

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("florine_lang", lang);
  };

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language, dir]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language], dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
