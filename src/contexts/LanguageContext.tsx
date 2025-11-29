import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ne';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.products': 'Products',
    'nav.pricing': 'Pricing',
    'nav.howItWorks': 'How It Works',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'SAFASAHAR',
    'hero.tagline': 'Clean City, Green Future',
    'hero.subtitle': "Turning Kathmandu's waste into high-quality compost, plastic granules, recycled paper & upcycled crafts.",
    'hero.cta.pricing': 'View Pricing',
    'hero.cta.contact': 'Contact Us',
    
    // Stats
    'stats.waste': '1,200+ tons waste daily in Valley',
    'stats.organic': '62% organic → premium compost',
    'stats.profit': '71–95% profit margins',
    'stats.target': 'Year 3 target: 50 tons/day processed',
    
    // Products
    'products.compost': 'Organic Compost',
    'products.plastic': 'Recycled Plastic Granules',
    'products.paper': 'Recycled Paper',
    'products.crafts': 'Upcycled Crafts',
    
    // Footer
    'footer.copyright': '© 2025 SAFASAHAR. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
  },
  ne: {
    // Navigation
    'nav.home': 'गृहपृष्ठ',
    'nav.about': 'हाम्रो बारेमा',
    'nav.products': 'उत्पादनहरू',
    'nav.pricing': 'मूल्य',
    'nav.howItWorks': 'यो कसरी काम गर्छ',
    'nav.contact': 'सम्पर्क',
    
    // Hero
    'hero.title': 'सफा सहर',
    'hero.tagline': 'सफा शहर, हरियो भविष्य',
    'hero.subtitle': 'काठमाडौंको फोहोरलाई उच्च गुणस्तरको कम्पोस्ट, प्लास्टिक ग्रानुल, पुनर्चक्रित कागज र पुनर्निर्मित शिल्पमा परिणत गर्दै।',
    'hero.cta.pricing': 'मूल्य हेर्नुहोस्',
    'hero.cta.contact': 'सम्पर्क गर्नुहोस्',
    
    // Stats
    'stats.waste': 'उपत्यकामा दैनिक १,२००+ टन फोहोर',
    'stats.organic': '६२% जैविक → प्रिमियम कम्पोस्ट',
    'stats.profit': '७१–९५% नाफा मार्जिन',
    'stats.target': 'वर्ष ३ लक्ष्य: दैनिक ५० टन प्रशोधन',
    
    // Products
    'products.compost': 'जैविक कम्पोस्ट',
    'products.plastic': 'पुनर्चक्रित प्लास्टिक ग्रानुल',
    'products.paper': 'पुनर्चक्रित कागज',
    'products.crafts': 'पुनर्निर्मित शिल्प',
    
    // Footer
    'footer.copyright': '© २०२५ सफा सहर। सर्वाधिकार सुरक्षित।',
    'footer.privacy': 'गोपनीयता नीति',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
