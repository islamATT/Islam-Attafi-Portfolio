// All visible site text lives here. Edit "en" and "ar" side by side.
// Brand/project names stay in English in both languages.

export type Lang = "en" | "ar";

export const translations = {
  en: {
    nav: {
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
      imageAlt: "Cinematic desert landscape at dusk",
    },
    work: {
      heading: "Selected Works",
      filterAll: "All Projects",
      filterFilms: "Films",
      filterEditorial: "Editorial",
      viewFilm: "View Film",
      play: "Play",
      film: "film",
      shadowForm: {
        meta: "Architectural Cinematography / 2024",
        alt: "Minimalist concrete architecture against a black sky",
      },
      noir: {
        meta: "Photography / Branding",
        alt: "High contrast black and white fashion portrait",
      },
      tourer: {
        meta: "Social Media Campaign / Videography",
        alt: "Luxury car driving through a misty mountain pass",
      },
    },
    social: {
      titleLine1: "Social",
      titleLine2: "Curation",
      description:
        "Tailored content for high-performance social media channels, focusing on aesthetic consistency and engagement.",
      reel: "Reel",
      reelAlt: "Social media reel frame",
    },
    contact: {
      available: "Available for projects",
      titleLine1: "Start a",
      titleLine2: "Conversation",
    },
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@studio.com",
      project: "Project type",
      projectPlaceholder: "Film / Editorial / Social campaign",
      brief: "Brief",
      briefPlaceholder: "Timeline, scope and references.",
      submit: "Send inquiry",
      errName: "Please enter your name",
      errEmail: "Please enter a valid email",
      errMessage: "Tell me a little more",
      toast: "Opening your mail app to send the inquiry.",
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
    nav: {
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
      imageAlt: "منظر صحراوي سينمائي عند الغروب",
    },
    work: {
      heading: "أعمال مختارة",
      filterAll: "كل المشاريع",
      filterFilms: "أفلام",
      filterEditorial: "تحريري",
      viewFilm: "شاهد الفيلم",
      play: "تشغيل فيلم",
      film: "",
      shadowForm: {
        meta: "تصوير سينمائي معماري / 2024",
        alt: "عمارة خرسانية بسيطة أمام سماء سوداء",
      },
      noir: {
        meta: "تصوير فوتوغرافي / هوية بصرية",
        alt: "بورتريه أزياء بالأبيض والأسود بتباين عالٍ",
      },
      tourer: {
        meta: "حملة سوشيال ميديا / تصوير فيديو",
        alt: "سيارة فاخرة تعبر ممرًا جبليًا ضبابيًا",
      },
    },
    social: {
      titleLine1: "صناعة",
      titleLine2: "المحتوى",
      description:
        "محتوى مصمَّم خصيصًا لحسابات السوشيال ميديا عالية الأداء، يركّز على الهوية البصرية المتناسقة والتفاعل.",
      reel: "ريل",
      reelAlt: "لقطة من ريل على السوشيال ميديا",
    },
    contact: {
      available: "متاح لمشاريع جديدة",
      titleLine1: "لنبدأ",
      titleLine2: "الحديث",
    },
    form: {
      name: "الاسم",
      namePlaceholder: "اسمك",
      email: "البريد الإلكتروني",
      emailPlaceholder: "you@studio.com",
      project: "نوع المشروع",
      projectPlaceholder: "فيلم / تحريري / حملة سوشيال ميديا",
      brief: "نبذة عن المشروع",
      briefPlaceholder: "المدة الزمنية، نطاق العمل، وأمثلة مرجعية.",
      submit: "أرسل الطلب",
      errName: "من فضلك اكتب اسمك",
      errEmail: "من فضلك اكتب بريدًا إلكترونيًا صحيحًا",
      errMessage: "أخبرني بتفاصيل أكثر قليلًا",
      toast: "جارٍ فتح تطبيق البريد لإرسال طلبك.",
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
