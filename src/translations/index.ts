export interface TranslationData {
  nav: {
    features: string;
    benefits: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  features: {
    title: string;
    subtitle: string;
    aiPose: {
      title: string;
      description: string;
    };
    social: {
      title: string;
      description: string;
    };
    monetization: {
      title: string;
      description: string;
    };
  };
  benefits: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      name: string;
      role: string;
      content: string;
    }[];
    stats: {
      users: string;
      workouts: string;
      trainers: string;
      accuracy: string;
    };
  };
  footer: {
    description: string;
    links: {
      product: string;
      company: string;
      support: string;
      legal: string;
    };
    copyright: string;
  };
}

export const translations: Record<string, TranslationData> = {
  en: {
    nav: {
      features: "Features",
      benefits: "Benefits", 
      testimonials: "Reviews",
      contact: "Contact"
    },
    hero: {
      title: "Perfect Your Fitness Form",
      subtitle: "with AI-Powered Pose Correction",
      description: "Transform your workouts with real-time AI feedback, connect with fitness enthusiasts worldwide, and help trainers monetize their expertise.",
      ctaPrimary: "Start Free Trial",
      ctaSecondary: "Watch Demo"
    },
    features: {
      title: "Revolutionary Fitness Technology",
      subtitle: "Experience the future of personal training with cutting-edge AI",
      aiPose: {
        title: "AI Pose Correction",
        description: "Real-time analysis and feedback on your exercise form using advanced computer vision technology."
      },
      social: {
        title: "Fitness Social Network",
        description: "Connect with like-minded fitness enthusiasts, share progress, and motivate each other."
      },
      monetization: {
        title: "Trainer Platform",
        description: "Certified trainers can create premium content, host sessions, and build their fitness business."
      }
    },
    benefits: {
      title: "Why Choose Fitsphere?",
      subtitle: "Join thousands of fitness enthusiasts who've transformed their workouts",
      items: [
        {
          title: "Prevent Injuries",
          description: "AI-powered form analysis helps you exercise safely and effectively"
        },
        {
          title: "Faster Results",
          description: "Perfect technique means better muscle activation and quicker progress"
        },
        {
          title: "Stay Motivated",
          description: "Join a supportive community that celebrates your fitness journey"
        },
        {
          title: "Expert Guidance",
          description: "Access certified trainers and premium workout programs"
        }
      ]
    },
    testimonials: {
      title: "Loved by Fitness Enthusiasts",
      subtitle: "See what our community has to say about Fitsphere",
      items: [
        {
          name: "Sarah Johnson",
          role: "Marathon Runner",
          content: "Fitsphere's pose correction helped me fix my running form and prevent injuries. I've improved my personal best by 15 minutes!"
        },
        {
          name: "Mike Chen",
          role: "Personal Trainer",
          content: "As a trainer, Fitsphere has revolutionized how I work with clients. The monetization platform is game-changing."
        },
        {
          name: "Emma Rodriguez",
          role: "Yoga Instructor",
          content: "The AI feedback is incredibly accurate. My students love the instant corrections during virtual sessions."
        }
      ],
      stats: {
        users: "50,000+ Active Users",
        workouts: "2M+ Workouts Analyzed",
        trainers: "1,000+ Certified Trainers",
        accuracy: "98% AI Accuracy Rate"
      }
    },
    footer: {
      description: "Revolutionizing fitness through AI-powered technology and community connection.",
      links: {
        product: "Product",
        company: "Company", 
        support: "Support",
        legal: "Legal"
      },
      copyright: "© 2025 Fitsphere. All rights reserved."
    }
  },
  de: {
    nav: {
      features: "Features",
      benefits: "Vorteile",
      testimonials: "Bewertungen", 
      contact: "Kontakt"
    },
    hero: {
      title: "Perfektioniere Deine Fitness-Form",
      subtitle: "mit KI-gestützter Haltungskorrektur",
      description: "Verwandle Deine Workouts mit Echtzeit-KI-Feedback, verbinde Dich mit Fitness-Enthusiasten weltweit und hilf Trainern, ihr Fachwissen zu monetarisieren.",
      ctaPrimary: "Kostenlos Testen",
      ctaSecondary: "Demo Ansehen"
    },
    features: {
      title: "Revolutionäre Fitness-Technologie",
      subtitle: "Erlebe die Zukunft des Personal Trainings mit modernster KI",
      aiPose: {
        title: "KI-Haltungskorrektur",
        description: "Echtzeit-Analyse und Feedback zu Deiner Übungsform mit fortschrittlicher Computer-Vision-Technologie."
      },
      social: {
        title: "Fitness Social Network",
        description: "Verbinde Dich mit gleichgesinnten Fitness-Enthusiasten, teile Fortschritte und motiviere einander."
      },
      monetization: {
        title: "Trainer-Plattform", 
        description: "Zertifizierte Trainer können Premium-Inhalte erstellen, Sessions hosten und ihr Fitness-Business aufbauen."
      }
    },
    benefits: {
      title: "Warum Fitsphere wählen?",
      subtitle: "Schließe Dich Tausenden von Fitness-Enthusiasten an, die ihre Workouts transformiert haben",
      items: [
        {
          title: "Verletzungen Vorbeugen",
          description: "KI-gestützte Formanalyse hilft Dir, sicher und effektiv zu trainieren"
        },
        {
          title: "Schnellere Ergebnisse",
          description: "Perfekte Technik bedeutet bessere Muskelaktivierung und schnelleren Fortschritt"
        },
        {
          title: "Motiviert Bleiben",
          description: "Tritt einer unterstützenden Gemeinschaft bei, die Deine Fitness-Reise feiert"
        },
        {
          title: "Expertenführung",
          description: "Zugang zu zertifizierten Trainern und Premium-Workout-Programmen"
        }
      ]
    },
    testimonials: {
      title: "Geliebt von Fitness-Enthusiasten",
      subtitle: "Sieh, was unsere Gemeinschaft über Fitsphere sagt",
      items: [
        {
          name: "Sarah Johnson",
          role: "Marathon-Läuferin",
          content: "Fitsheres Haltungskorrektur half mir, meine Lauftechnik zu verbessern und Verletzungen zu vermeiden. Ich habe meine Bestzeit um 15 Minuten verbessert!"
        },
        {
          name: "Mike Chen", 
          role: "Personal Trainer",
          content: "Als Trainer hat Fitsphere revolutioniert, wie ich mit Kunden arbeite. Die Monetarisierungsplattform ist bahnbrechend."
        },
        {
          name: "Emma Rodriguez",
          role: "Yoga-Lehrerin",
          content: "Das KI-Feedback ist unglaublich genau. Meine Schüler lieben die sofortigen Korrekturen während virtueller Sessions."
        }
      ],
      stats: {
        users: "50.000+ Aktive Nutzer",
        workouts: "2M+ Analysierte Workouts", 
        trainers: "1.000+ Zertifizierte Trainer",
        accuracy: "98% KI-Genauigkeit"
      }
    },
    footer: {
      description: "Revolutionierung des Fitness durch KI-gestützte Technologie und Community-Verbindung.",
      links: {
        product: "Produkt",
        company: "Unternehmen",
        support: "Support", 
        legal: "Rechtliches"
      },
      copyright: "© 2025 Fitsphere. Alle Rechte vorbehalten."
    }
  }
};