import { createI18n } from "vue-i18n";

const messages = {
  ro: {
    nav: {
      home: "Acasă",
      privacy: "Politica de confidențialitate",
      terms: "Termeni și condiții",
      guide: "Ghid utilizare",
    },
    home: {
      title: "Cermate — Automatizare pentru practicieni în insolvență",
      heroTitle: "CERMATE — economisește timp, câștigă mai multe dosare",
      heroText:
        "Aplicația Cermate ajută practicienii în insolvență să identifice automat dosarele relevante, să genereze rapid oferte PDF personalizate și să le trimită prin e-mail către tribunalel din țară.",
      disclaimer:
        "Datele utilizatorilor sunt folosite strict pentru a furniza aceste funcționalități. Nu colectăm informații personale în alte scopuri și nu partajăm date cu terți fără consimțământ.",
      features: "Funcționalități",
      howItWorks: "Cum funcționează",
    },
  },
  en: {
    nav: {
      home: "Home",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      guide: "User Guide",
    },
    home: {
      title: "Cermate — Automation for insolvency practitioners",
      heroTitle: "CERMATE — save time, win more cases",
      heroText:
        "Cermate helps insolvency practitioners automatically identify relevant cases, quickly generate personalized PDF offers, and send them by email to courts nationwide.",
      disclaimer:
        "User data is used strictly to provide these functionalities. We do not collect personal information for other purposes and do not share data with third parties without consent.",
      features: "Features",
      howItWorks: "How it works",
    },
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "ro", // default language
  fallbackLocale: "en",
  messages,
});

export default i18n;
