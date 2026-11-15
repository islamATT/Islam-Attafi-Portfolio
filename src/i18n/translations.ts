// All visible site text lives here. Edit "en" and "ar" side by side.
// Brand/project names stay in English in both languages.

export type Lang = "en" | "ar";

export const translations = {
  en: {
    close: "Close",
    notFound: "Page not found",
    notFoundDescription: "The page you're looking for doesn't exist or has been moved.",
    goHome: "Go home",
    pageError: "This page didn't load",
    pageErrorDescription:
      "Something went wrong on our end. You can try refreshing or head back home.",
    tryAgain: "Try again",
    nav: {
      about: "About",
      work: "Work",
      services: "Services",
      contact: "Contact",
      toggle: "عربي",
      toggleLabel: "Switch to Arabic",
    },
    hero: {
      location: "Based in Doha, Qatar",
      titleLine1: "From Lens",
      titleLine2: "to Feed",
      tagline:
        "10 years behind the camera. Now managing the full social journey, from concept to campaign to results.",
      ctaWork: "View My Work",
      ctaContact: "Let's Talk",
      imageAlt: "Silhouettes of friends jumping at sunset by the sea, photographed by Islam Attafi",
    },
    about: {
      eyebrow: "About Me",
      heading: "Behind the lens, ahead of the feed",
      body: "I'm Islam Attafi, a photographer turned social media manager based in Doha. After 10 years behind the camera and running my own photography company in Algeria, I now lead social media and content for a medical aesthetics center in Qatar, from strategy and ad campaigns to shooting and editing the content myself.",
      imageAlt: "Islam Attafi holding a Canon camera up to his face",
      stats: [
        { value: "10+", label: "Years in photography" },
        { value: "2", label: "Languages: Arabic & English" },
        { value: "52K+", label: "Views on YouPic" },
      ],
    },
    services: {
      eyebrow: "Services",
      heading: "What I can do for your brand",
      items: [
        {
          title: "Social Media Management",
          body: "Strategy, content calendar, posting and community management.",
        },
        { title: "Content Creation", body: "Reels, stories and carousels built for engagement." },
        { title: "Photography", body: "Product, food, portrait and event photography." },
        {
          title: "Videography & Editing",
          body: "Shooting and editing videos from concept to final cut.",
        },
        { title: "Paid Ads", body: "Ad campaigns on Meta and TikTok, from setup to reporting." },
        { title: "Visual Design", body: "Social posts, banners and print materials." },
      ],
    },
    work: {
      eyebrow: "Selected Work",
      heading: "Reels that stop the scroll",
      intro:
        "Short-form content I shot and edited for hospitality, real estate and automotive brands.",
      filterAll: "All",
      categories: {
        hospitality: "Hospitality",
        realEstate: "Real Estate",
        automotive: "Automotive",
      },
      play: "Play reel",
      reels: {
        luxury: "Luxury Dining",
        businessLunch: "Business Lunch",
        fakhara: "Fine Dining Experience",
        cappuccino: "Coffee Moments",
        damac: "DAMAC Properties",
        zedCapital: "ZED Capital",
        prestora: "Prestora",
        sobha: "Sobha Realty",
        gclass: "Mercedes G-Class",
      },
    },
    photos: {
      eyebrow: "Photography",
      heading: "Through my lens",
      intro: "A selection from 10 years of photography: portraits, lifestyle and light.",
      more: "More on YouPic",
      items: {
        youngBoy: "Portrait of a young boy",
        jumpSilhouettes: "Friends jumping at sunset",
        aliChochena: "Portrait in an old town alley",
        sunset: "Sunset by the sea",
        candle: "A single candle in the dark",
        lifestyle: "Street lifestyle scene",
        klay: "Portrait with smoke",
      },
    },
    contact: {
      available: "Available for projects",
      titleLine1: "Start a",
      titleLine2: "Conversation",
      response: "I reply within 24 hours.",
      whatsapp: "Chat on WhatsApp",
      whatsappMessage:
        "Hi Islam, I found you through your website and I'd like to talk about a project.",
      emailLabel: "Email",
      followLabel: "Follow",
    },
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@studio.com",
      project: "Project type",
      projectPlaceholder: "Select a service",
      projectOther: "Other",
      brief: "Brief",
      briefPlaceholder: "Timeline, scope and references.",
      submit: "Send inquiry",
      errName: "Please enter your name",
      errEmail: "Please enter a valid email",
      errMessage: "Tell me a little more",
      toast: "Opening your mail app to send the inquiry.",
      sending: "Sending…",
      sent: "Thanks! Your message was sent. I'll get back to you within 24 hours.",
      sendError: "The message couldn't be sent. Opening your mail app instead.",
      subjectPrefix: "New inquiry",
      subjectProject: "Project",
      bodyName: "Name",
      bodyEmail: "Email",
      bodyProject: "Project type",
    },
    lightbox: { nowPlaying: "Now Playing" },
    footer: { rights: "© 2026 Islam Attafi Visuals. All Rights Reserved." },
  },
  ar: {
    close: "إغلاق",
    notFound: "الصفحة غير موجودة",
    notFoundDescription: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
    goHome: "العودة للرئيسية",
    pageError: "تعذّر تحميل الصفحة",
    pageErrorDescription: "حدث خطأ من جانبنا. يمكنك تحديث الصفحة أو العودة للرئيسية.",
    tryAgain: "حاول مجددًا",
    nav: {
      about: "عني",
      work: "أعمالي",
      services: "الخدمات",
      contact: "تواصل",
      toggle: "EN",
      toggleLabel: "التبديل إلى الإنجليزية",
    },
    hero: {
      location: "مقيم في الدوحة، قطر",
      titleLine1: "من العدسة",
      titleLine2: "إلى المنصّة",
      tagline:
        "10 سنوات خلف الكاميرا، والحين أدير رحلة السوشيال ميديا كاملة: من الفكرة إلى الحملة إلى النتائج.",
      ctaWork: "شاهد أعمالي",
      ctaContact: "تواصل معي",
      imageAlt: "ظلال أصدقاء يقفزون عند الغروب على شاطئ البحر، بعدسة إسلام عطافي",
    },
    about: {
      eyebrow: "عني",
      heading: "خلف العدسة، وأمام المنصّة",
      body: "أنا إسلام عطافي، مصوّر تحوّلت إلى إدارة السوشيال ميديا، ومقيم في الدوحة. بعد 10 سنوات خلف الكاميرا وإدارة شركة تصوير خاصة بي في الجزائر، أقود اليوم السوشيال ميديا وصناعة المحتوى لمركز تجميل طبي في قطر، من الاستراتيجية والحملات الإعلانية إلى تصوير المحتوى ومونتاجه بنفسي.",
      imageAlt: "إسلام عطافي يحمل كاميرا كانون أمام وجهه",
      stats: [
        { value: "+10", label: "سنوات في التصوير" },
        { value: "2", label: "لغتان: العربية والإنجليزية" },
        { value: "+52K", label: "مشاهدة على YouPic" },
      ],
    },
    services: {
      eyebrow: "الخدمات",
      heading: "ماذا يمكنني أن أقدّم لعلامتك التجارية",
      items: [
        {
          title: "إدارة السوشيال ميديا",
          body: "استراتيجية، خطة نشر، وإدارة الحسابات والتفاعل مع الجمهور.",
        },
        { title: "صناعة المحتوى", body: "ريلز وستوري وبوستات متعددة الصور مصمَّمة للتفاعل." },
        { title: "التصوير الفوتوغرافي", body: "تصوير منتجات، أكل، بورتريه، ومناسبات." },
        {
          title: "تصوير ومونتاج الفيديو",
          body: "تصوير ومونتاج الفيديو من الفكرة إلى النسخة النهائية.",
        },
        {
          title: "الإعلانات الممولة",
          body: "حملات إعلانية على ميتا وتيك توك، من الإعداد إلى التقارير.",
        },
        { title: "التصميم البصري", body: "بوستات سوشيال ميديا، بنرات، ومطبوعات." },
      ],
    },
    work: {
      eyebrow: "أعمال مختارة",
      heading: "ريلز توقف التمرير",
      intro: "محتوى قصير صوّرته ومنتجته لعلامات في الضيافة والعقارات والسيارات.",
      filterAll: "الكل",
      categories: {
        hospitality: "ضيافة",
        realEstate: "عقارات",
        automotive: "سيارات",
      },
      play: "تشغيل الريل",
      reels: {
        luxury: "تجربة طعام فاخرة",
        businessLunch: "غداء الأعمال",
        fakhara: "تجربة مطعم راقية",
        cappuccino: "لحظات القهوة",
        damac: "داماك العقارية",
        zedCapital: "زد كابيتال",
        prestora: "بريستورا",
        sobha: "شوبا العقارية",
        gclass: "مرسيدس جي كلاس",
      },
    },
    photos: {
      eyebrow: "التصوير الفوتوغرافي",
      heading: "من خلال عدستي",
      intro: "مختارات من 10 سنوات في التصوير: بورتريه، لايف ستايل، وضوء.",
      more: "المزيد على YouPic",
      items: {
        youngBoy: "بورتريه لطفل صغير",
        jumpSilhouettes: "أصدقاء يقفزون عند الغروب",
        aliChochena: "بورتريه في زقاق قديم",
        sunset: "غروب على البحر",
        candle: "شمعة وحيدة في الظلام",
        lifestyle: "مشهد لايف ستايل في الشارع",
        klay: "بورتريه مع الدخان",
      },
    },
    contact: {
      available: "متاح لمشاريع جديدة",
      titleLine1: "لنبدأ",
      titleLine2: "الحديث",
      response: "أرد خلال 24 ساعة.",
      whatsapp: "تواصل عبر واتساب",
      whatsappMessage: "مرحبًا إسلام، وصلت لك من موقعك وأحب نتكلم عن مشروع.",
      emailLabel: "البريد الإلكتروني",
      followLabel: "تابعني",
    },
    form: {
      name: "الاسم",
      namePlaceholder: "اسمك",
      email: "البريد الإلكتروني",
      emailPlaceholder: "you@studio.com",
      project: "نوع المشروع",
      projectPlaceholder: "اختر الخدمة",
      projectOther: "أخرى",
      brief: "نبذة عن المشروع",
      briefPlaceholder: "المدة الزمنية، نطاق العمل، وأمثلة مرجعية.",
      submit: "أرسل الطلب",
      errName: "من فضلك اكتب اسمك",
      errEmail: "من فضلك اكتب بريدًا إلكترونيًا صحيحًا",
      errMessage: "أخبرني بتفاصيل أكثر قليلًا",
      toast: "جارٍ فتح تطبيق البريد لإرسال طلبك.",
      sending: "جارٍ الإرسال…",
      sent: "شكرًا! وصلتني رسالتك، وسأرد عليك خلال 24 ساعة.",
      sendError: "تعذّر إرسال الرسالة. سأفتح لك تطبيق البريد بدلًا من ذلك.",
      subjectPrefix: "طلب جديد",
      subjectProject: "مشروع",
      bodyName: "الاسم",
      bodyEmail: "البريد",
      bodyProject: "نوع المشروع",
    },
    lightbox: { nowPlaying: "يُعرض الآن" },
    footer: { rights: "© 2026 Islam Attafi Visuals. جميع الحقوق محفوظة." },
  },
};

export type Dictionary = (typeof translations)["en"];

// Compile-time check: Arabic must have exactly the same keys as English.
const _arCheck: Dictionary = translations.ar;
void _arCheck;

export type Language = Lang;
export const LANGUAGE_STORAGE_KEY = "portfolio-language";

export function resolveLanguage(value: string | null): Lang {
  return value === "ar" ? "ar" : "en";
}

export function languageDirection(language: Lang): "ltr" | "rtl" {
  return language === "ar" ? "rtl" : "ltr";
}
