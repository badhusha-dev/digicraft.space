// Internationalization (i18n) Configuration
// This is a basic setup for future multilingual support

import React, { useState, useEffect } from 'react';

export interface Translation {
  [key: string]: string | Translation;
}

export interface LanguageConfig {
  code: string;
  name: string;
  flag: string;
  direction: 'ltr' | 'rtl';
}

export const supportedLanguages: LanguageConfig[] = [
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    direction: 'ltr'
  },
  {
    code: 'ar',
    name: 'العربية',
    flag: '🇸🇦',
    direction: 'rtl'
  },
  {
    code: 'ms',
    name: 'Bahasa Malaysia',
    flag: '🇲🇾',
    direction: 'ltr'
  }
];

// Sample translations structure
export const translations: Record<string, Translation> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      solutions: 'Solutions',
      work: 'Work',
      pricing: 'Pricing',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      title: 'We craft software that ships and scales.',
      subtitle: 'Product-minded engineers building reliable, beautiful software—fast.',
      cta: 'Get Started',
      ctaSecondary: 'See Our Work'
    },
    services: {
      title: 'Our Expertise',
      subtitle: 'End-to-end software solutions for modern businesses'
    },
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: "Don't just take our word for it - hear from the businesses we've helped transform"
    },
    caseStudies: {
      title: 'Success Stories',
      subtitle: 'Real projects, real results. See how we\'ve helped businesses transform their digital presence.'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Ready to start your project? We\'d love to hear from you.',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Company',
        projectType: 'Project Type',
        message: 'Message',
        submit: 'Send Message'
      }
    },
    footer: {
      services: 'Services',
      solutions: 'Solutions',
      company: 'Company',
      support: 'Support',
      copyright: 'All rights reserved.'
    },
    about: {
      title: 'About DigiCraft.space',
      subtitle: 'Building software that ships and scales for the digital future',
      mission: {
        title: 'Our Mission',
        description: 'We believe great software should be accessible to every business, regardless of size. Our mission is to democratize high-quality software development by providing transparent pricing, predictable timelines, and exceptional results.',
        description2: 'Founded on principles of craftsmanship and reliability, we combine cutting-edge technology with proven methodologies to deliver software that not only works but thrives in production.'
      },
      founder: {
        title: 'Meet Our Founder',
        role: 'CEO & Founder',
        description: 'Former senior engineer at top tech companies with 8+ years building scalable software. Passionate about creating technology that makes a real difference.'
      },
      values: {
        title: 'Our Values',
        transparency: {
          title: 'Transparency',
          description: 'Clear communication, honest timelines, and upfront pricing. No surprises, ever.'
        },
        quality: {
          title: 'Quality',
          description: 'We write code like our reputation depends on it—because it does.'
        },
        speed: {
          title: 'Speed',
          description: 'Fast iterations, quick feedback, and rapid deployment without cutting corners.'
        }
      },
      whyChooseUs: {
        title: 'Why Choose Us?',
        fast: {
          title: 'Fast Delivery',
          description: 'Quick turnaround times without compromising on quality'
        },
        affordable: {
          title: 'Affordable Pricing',
          description: 'Transparent pricing that fits your budget'
        },
        reliable: {
          title: 'Reliable Support',
          description: '24/7 support and maintenance for your peace of mind'
        },
        support: {
          title: 'Expert Team',
          description: 'Experienced developers with proven track records'
        }
      }
    },
    work: {
      title: 'Our Capabilities',
      subtitle: 'While we\'re a new company, our team brings years of expertise from leading tech companies',
      capabilities: {
        mvp: {
          title: 'Startup MVPs',
          description: 'Fast-track your startup idea from concept to market with lean, scalable MVPs that validate your vision.'
        },
        enterprise: {
          title: 'Enterprise Solutions',
          description: 'Robust, scalable platforms that handle enterprise complexity while maintaining performance and security.'
        },
        ecommerce: {
          title: 'E-commerce Platforms',
          description: 'Full-featured online stores with payment processing, inventory management, and growth optimization.'
        }
      },
      techStack: {
        title: 'Our Technology Stack'
      },
      approach: {
        title: 'Our Development Approach',
        collaboration: {
          title: 'Collaborative Process',
          description: 'We work closely with your team to understand your vision and deliver exactly what you need.'
        },
        iteration: {
          title: 'Iterative Development',
          description: 'Rapid prototyping and continuous feedback ensure we build the right solution efficiently.'
        },
        security: {
          title: 'Security First',
          description: 'Every line of code is written with security and scalability in mind from day one.'
        }
      }
    },
    pricing: {
      title: 'Transparent Pricing',
      subtitle: 'Choose the right engagement model for your project'
    },
    solutions: {
      title: 'Solutions & Packages',
      subtitle: 'Pre-designed solutions to accelerate your development'
    },
    testimonials: {
      marcus: {
        role: 'CTO',
        content: 'DigiCraft delivered our MVP in just 6 weeks. Their technical expertise and communication was outstanding. The team understood our vision and brought it to life perfectly.',
        projectType: 'MVP Development',
        results: 'Launched 2 weeks ahead of schedule'
      },
      sarah: {
        role: 'Founder',
        content: 'They built our e-commerce platform with perfect attention to UX. Sales increased 300% after launch. The user experience they created is simply exceptional.',
        projectType: 'Web Application',
        results: '300% increase in sales'
      },
      david: {
        role: 'CEO',
        content: 'Their AI automation solution saved us 40 hours per week. ROI was immediate and substantial. The team\'s expertise in AI and machine learning is remarkable.',
        projectType: 'AI Automation',
        results: '40 hours saved per week'
      },
      emily: {
        role: 'Product Manager',
        content: 'Working with DigiCraft was a game-changer. They transformed our complex healthcare platform into an intuitive, scalable solution that our users love.',
        projectType: 'Platform Development',
        results: '95% user satisfaction rate'
      },
      jennifer: {
        role: 'CPA',
        content: 'This accounting platform transformed our workflow completely. The automation features saved us countless hours and eliminated errors. Highly recommend DigiCraft\'s expertise.',
        projectType: 'Platform Development',
        results: '70% reduction in manual work'
      }
    },
    caseStudies: {
      ecocommerce: {
        title: 'E-commerce Platform Transformation',
        challenge: 'Legacy platform couldn\'t handle increased traffic and lacked modern UX features. Sales were declining due to poor user experience.',
        solution: 'Built a modern React-based e-commerce platform with advanced search, personalized recommendations, and mobile-first design.',
        results: {
          sales: '300% increase in sales within 3 months',
          bounce: '50% reduction in bounce rate',
          speed: '95% improvement in page load speed',
          satisfaction: '4.8/5 customer satisfaction rating'
        },
        duration: '12 weeks',
        testimonial: 'DigiCraft transformed our business. The new platform exceeded all our expectations.',
        testimonialAuthor: 'Sarah Williams, Founder'
      },
      datainsights: {
        title: 'AI-Powered Analytics Dashboard',
        challenge: 'Manual data processing was consuming 40+ hours weekly. Needed real-time insights and automated reporting.',
        solution: 'Developed an AI-powered analytics platform with machine learning algorithms for predictive insights and automated reporting.',
        results: {
          time: '40 hours saved per week on data processing',
          accuracy: 'Real-time insights with 99.9% accuracy',
          decision: '60% faster decision-making process',
          roi: 'ROI achieved within 2 months'
        },
        duration: '16 weeks',
        testimonial: 'The AI solution revolutionized how we analyze data. Incredible results!',
        testimonialAuthor: 'David Rodriguez, CEO'
      },
      healthtech: {
        title: 'Healthcare Management System',
        challenge: 'Complex patient management system was outdated and causing workflow inefficiencies. Needed HIPAA-compliant solution.',
        solution: 'Created a comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine capabilities.',
        results: {
          satisfaction: '95% user satisfaction rate',
          time: '30% reduction in administrative time',
          compliance: '100% HIPAA compliance',
          integration: 'Seamless telemedicine integration'
        },
        duration: '20 weeks',
        testimonial: 'Working with DigiCraft was a game-changer for our healthcare platform.',
        testimonialAuthor: 'Emily Johnson, Product Manager'
      },
      accounting: {
        title: 'Accounting Management Platform',
        challenge: 'Manual accounting processes were error-prone and time-consuming. Needed an automated platform for invoice management, expense tracking, and financial reporting.',
        solution: 'Developed a comprehensive accounting platform with automated invoice processing, expense categorization, real-time financial reporting, and tax preparation features.',
        results: {
          reduction: '70% reduction in manual data entry',
          accuracy: '95% accuracy in financial reporting',
          speed: '50% faster month-end closing',
          rating: '4.9/5 user satisfaction rating'
        },
        duration: '16 weeks',
        testimonial: 'This platform transformed our accounting workflow. Highly recommend DigiCraft\'s expertise.',
        testimonialAuthor: 'Jennifer Martinez, CPA'
      },
      techflow: {
        title: 'SaaS MVP Development',
        challenge: 'Startup needed to quickly validate their idea with a functional MVP to secure funding and early customers.',
        solution: 'Delivered a feature-complete MVP in record time with core functionality, user authentication, and basic analytics.',
        results: {
          schedule: 'Launched 2 weeks ahead of schedule',
          funding: 'Secured $2M in Series A funding',
          users: '500+ beta users in first month',
          rating: '4.5/5 user rating'
        },
        duration: '6 weeks',
        testimonial: 'DigiCraft delivered our MVP in just 6 weeks. Outstanding technical expertise.',
        testimonialAuthor: 'Marcus Chen, CTO'
      }
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      solutions: 'الحلول',
      work: 'أعمالنا',
      pricing: 'الأسعار',
      about: 'من نحن',
      contact: 'اتصل بنا'
    },
    hero: {
      title: 'نحن نصنع برمجيات تُشحن وتتوسع.',
      subtitle: 'مهندسون ذوو عقلية منتج يبنون برمجيات موثوقة وجميلة - بسرعة.',
      cta: 'ابدأ الآن',
      ctaSecondary: 'شاهد أعمالنا'
    },
    services: {
      title: 'خبرتنا',
      subtitle: 'حلول برمجية شاملة للشركات الحديثة'
    },
    testimonials: {
      title: 'ماذا يقول عملاؤنا',
      subtitle: 'لا تأخذ كلمتنا فقط - استمع من الشركات التي ساعدناها على التحول'
    },
    caseStudies: {
      title: 'قصص النجاح',
      subtitle: 'مشاريع حقيقية، نتائج حقيقية. شاهد كيف ساعدنا الشركات على تحويل حضورها الرقمي.'
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'مستعد لبدء مشروعك؟ نحب أن نسمع منك.',
      form: {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        company: 'الشركة',
        projectType: 'نوع المشروع',
        message: 'الرسالة',
        submit: 'إرسال الرسالة'
      }
    },
    footer: {
      services: 'الخدمات',
      solutions: 'الحلول',
      company: 'الشركة',
      support: 'الدعم',
      copyright: 'جميع الحقوق محفوظة.'
    },
    about: {
      title: 'حول DigiCraft.space',
      subtitle: 'بناء برمجيات تُشحن وتتوسع للمستقبل الرقمي',
      mission: {
        title: 'مهمتنا',
        description: 'نؤمن أن البرمجيات الرائعة يجب أن تكون متاحة لكل شركة، بغض النظر عن الحجم. مهمتنا هي ديمقراطية تطوير البرمجيات عالية الجودة من خلال تقديم أسعار شفافة وجداول زمنية قابلة للتنبؤ ونتائج استثنائية.',
        description2: 'تأسست على مبادئ الحرفية والموثوقية، نجمع بين التكنولوجيا المتطورة والمنهجيات المجربة لتقديم برمجيات لا تعمل فحسب، بل تزدهر في الإنتاج.'
      },
      founder: {
        title: 'تعرف على مؤسسنا',
        role: 'الرئيس التنفيذي والمؤسس',
        description: 'مهندس سابق في الشركات التقنية الرائدة مع أكثر من 8 سنوات في بناء برمجيات قابلة للتوسع. شغوف بإنشاء تقنيات تحدث فرقاً حقيقياً.'
      },
      values: {
        title: 'قيمنا',
        transparency: {
          title: 'الشفافية',
          description: 'تواصل واضح وجداول زمنية صادقة وأسعار مقدمة. لا مفاجآت أبداً.'
        },
        quality: {
          title: 'الجودة',
          description: 'نكتب الكود كما لو أن سمعتنا تعتمد عليه—لأنها كذلك.'
        },
        speed: {
          title: 'السرعة',
          description: 'تكرارات سريعة وملاحظات سريعة ونشر سريع دون تقطيع الزوايا.'
        }
      },
      whyChooseUs: {
        title: 'لماذا تختارنا؟',
        fast: {
          title: 'تسليم سريع',
          description: 'أوقات تسليم سريعة دون المساس بالجودة'
        },
        affordable: {
          title: 'أسعار معقولة',
          description: 'أسعار شفافة تناسب ميزانيتك'
        },
        reliable: {
          title: 'دعم موثوق',
          description: 'دعم وصيانة على مدار الساعة لراحة بالك'
        },
        support: {
          title: 'فريق خبراء',
          description: 'مطورون ذوو خبرة مع سجلات مثبتة'
        }
      }
    },
    work: {
      title: 'قدراتنا',
      subtitle: 'رغم أننا شركة جديدة، إلا أن فريقنا يجلب سنوات من الخبرة من الشركات التقنية الرائدة',
      capabilities: {
        mvp: {
          title: 'نماذج أولية للشركات الناشئة',
          description: 'أسرع فكرة شركتك الناشئة من المفهوم إلى السوق مع نماذج أولية رشيقة وقابلة للتوسع تتحقق من رؤيتك.'
        },
        enterprise: {
          title: 'حلول المؤسسات',
          description: 'منصات قوية وقابلة للتوسع تتعامل مع تعقيد المؤسسات مع الحفاظ على الأداء والأمان.'
        },
        ecommerce: {
          title: 'منصات التجارة الإلكترونية',
          description: 'متاجر إلكترونية كاملة الميزات مع معالجة المدفوعات وإدارة المخزون وتحسين النمو.'
        }
      },
      techStack: {
        title: 'مجموعة التقنيات الخاصة بنا'
      },
      approach: {
        title: 'نهج التطوير الخاص بنا',
        collaboration: {
          title: 'عملية تعاونية',
          description: 'نعمل عن كثب مع فريقك لفهم رؤيتك وتقديم ما تحتاجه بالضبط.'
        },
        iteration: {
          title: 'تطوير متكرر',
          description: 'النماذج الأولية السريعة والملاحظات المستمرة تضمن بناء الحل الصحيح بكفاءة.'
        },
        security: {
          title: 'الأمان أولاً',
          description: 'كل سطر من الكود مكتوب مع الأمان والقابلية للتوسع في الاعتبار من اليوم الأول.'
        }
      }
    },
    pricing: {
      title: 'أسعار شفافة',
      subtitle: 'اختر نموذج المشاركة المناسب لمشروعك'
    },
    solutions: {
      title: 'الحلول والحزم',
      subtitle: 'حلول مصممة مسبقاً لتسريع التطوير'
    },
    testimonials: {
      marcus: {
        role: 'مدير التقنية',
        content: 'قدمت DigiCraft نموذجنا الأولي في 6 أسابيع فقط. كانت خبرتهم التقنية وتواصلهم متميزين. فهم الفريق رؤيتنا وحققها بشكل مثالي.',
        projectType: 'تطوير النموذج الأولي',
        results: 'إطلاق قبل أسبوعين من الموعد المحدد'
      },
      sarah: {
        role: 'مؤسسة',
        content: 'بنوا منصة التجارة الإلكترونية الخاصة بنا مع اهتمام مثالي بتجربة المستخدم. زادت المبيعات 300% بعد الإطلاق. تجربة المستخدم التي أنشأوها استثنائية ببساطة.',
        projectType: 'تطبيق ويب',
        results: 'زيادة 300% في المبيعات'
      },
      david: {
        role: 'الرئيس التنفيذي',
        content: 'حل الذكاء الاصطناعي الخاص بهم وفر لنا 40 ساعة في الأسبوع. كان العائد على الاستثمار فورياً وملموساً. خبرة الفريق في الذكاء الاصطناعي والتعلم الآلي ملحوظة.',
        projectType: 'أتمتة الذكاء الاصطناعي',
        results: '40 ساعة موفرة في الأسبوع'
      },
      emily: {
        role: 'مديرة المنتج',
        content: 'العمل مع DigiCraft كان نقطة تحول. حولوا منصة الرعاية الصحية المعقدة الخاصة بنا إلى حل بديهي وقابل للتوسع يحبه مستخدمونا.',
        projectType: 'تطوير المنصة',
        results: 'معدل رضا المستخدمين 95%'
      },
      jennifer: {
        role: 'محاسبة معتمدة',
        content: 'هذه المنصة المحاسبية غيرت سير عملنا بالكامل. ميزات الأتمتة وفرت لنا ساعات لا حصر لها وألغت الأخطاء. أنصح بشدة بخبرة DigiCraft.',
        projectType: 'تطوير المنصة',
        results: '70% تقليل في العمل اليدوي'
      }
    },
    caseStudies: {
      ecocommerce: {
        title: 'تحويل منصة التجارة الإلكترونية',
        challenge: 'المنصة القديمة لم تستطع التعامل مع الزيادة في حركة المرور وافتقرت لميزات تجربة المستخدم الحديثة. كانت المبيعات تتراجع بسبب تجربة المستخدم السيئة.',
        solution: 'بناء منصة تجارة إلكترونية حديثة مبنية على React مع بحث متقدم وتوصيات مخصصة وتصميم محمول أولاً.',
        results: {
          sales: 'زيادة 300% في المبيعات خلال 3 أشهر',
          bounce: 'تقليل 50% في معدل الارتداد',
          speed: 'تحسن 95% في سرعة تحميل الصفحة',
          satisfaction: 'تقييم رضا العملاء 4.8/5'
        },
        duration: '12 أسبوع',
        testimonial: 'غيرت DigiCraft أعمالنا. تجاوزت المنصة الجديدة جميع توقعاتنا.',
        testimonialAuthor: 'سارة ويليامز، مؤسسة'
      },
      datainsights: {
        title: 'لوحة تحليلات مدعومة بالذكاء الاصطناعي',
        challenge: 'معالجة البيانات اليدوية كانت تستهلك أكثر من 40 ساعة أسبوعياً. احتجنا لرؤى فورية وتقارير آلية.',
        solution: 'تطوير منصة تحليلات مدعومة بالذكاء الاصطناعي مع خوارزميات التعلم الآلي للرؤى التنبؤية والتقارير الآلية.',
        results: {
          time: '40 ساعة موفرة أسبوعياً في معالجة البيانات',
          accuracy: 'رؤى فورية بدقة 99.9%',
          decision: '60% أسرع في عملية اتخاذ القرار',
          roi: 'تحقيق العائد على الاستثمار خلال شهرين'
        },
        duration: '16 أسبوع',
        testimonial: 'حل الذكاء الاصطناعي أحدث ثورة في كيفية تحليلنا للبيانات. نتائج مذهلة!',
        testimonialAuthor: 'ديفيد رودريغيز، الرئيس التنفيذي'
      },
      healthtech: {
        title: 'نظام إدارة الرعاية الصحية',
        challenge: 'نظام إدارة المرضى المعقد كان قديماً ويسبب عدم كفاءة في سير العمل. احتجنا لحل متوافق مع HIPAA.',
        solution: 'إنشاء نظام شامل لإدارة الرعاية الصحية مع سجلات المرضى وجدولة المواعيد وقدرات الطب عن بُعد.',
        results: {
          satisfaction: 'معدل رضا المستخدمين 95%',
          time: 'تقليل 30% في الوقت الإداري',
          compliance: '100% توافق مع HIPAA',
          integration: 'تكامل سلس للطب عن بُعد'
        },
        duration: '20 أسبوع',
        testimonial: 'العمل مع DigiCraft كان نقطة تحول لمنصة الرعاية الصحية الخاصة بنا.',
        testimonialAuthor: 'إيميلي جونسون، مديرة المنتج'
      },
      accounting: {
        title: 'منصة إدارة المحاسبة',
        challenge: 'العمليات المحاسبية اليدوية كانت عرضة للأخطاء وتستغرق وقتاً طويلاً. احتجنا لمنصة آلية لإدارة الفواتير وتتبع المصروفات والتقارير المالية.',
        solution: 'تطوير منصة محاسبية شاملة مع معالجة آلية للفواتير وتصنيف المصروفات والتقارير المالية الفورية وميزات إعداد الضرائب.',
        results: {
          reduction: 'تقليل 70% في إدخال البيانات اليدوي',
          accuracy: 'دقة 95% في التقارير المالية',
          speed: '50% أسرع في إقفال نهاية الشهر',
          rating: 'تقييم رضا المستخدمين 4.9/5'
        },
        duration: '16 أسبوع',
        testimonial: 'هذه المنصة غيرت سير عملنا المحاسبي. أنصح بشدة بخبرة DigiCraft.',
        testimonialAuthor: 'جينيفر مارتينيز، محاسبة معتمدة'
      },
      techflow: {
        title: 'تطوير نموذج أولي لبرنامج كخدمة',
        challenge: 'الشركة الناشئة احتاجت للتحقق بسرعة من فكرتها بنموذج أولي وظيفي لتأمين التمويل والعملاء الأوائل.',
        solution: 'تسليم نموذج أولي مكتمل الميزات في وقت قياسي مع الوظائف الأساسية ومصادقة المستخدم والتحليلات الأساسية.',
        results: {
          schedule: 'إطلاق قبل أسبوعين من الموعد المحدد',
          funding: 'تأمين 2 مليون دولار في التمويل السلسي أ',
          users: '500+ مستخدم تجريبي في الشهر الأول',
          rating: 'تقييم المستخدمين 4.5/5'
        },
        duration: '6 أسابيع',
        testimonial: 'قدمت DigiCraft نموذجنا الأولي في 6 أسابيع فقط. خبرة تقنية متميزة.',
        testimonialAuthor: 'ماركوس تشين، مدير التقنية'
      }
    }
  },
  ms: {
    nav: {
      home: 'Utama',
      services: 'Perkhidmatan',
      solutions: 'Penyelesaian',
      work: 'Kerja Kami',
      pricing: 'Harga',
      about: 'Tentang Kami',
      contact: 'Hubungi Kami'
    },
    hero: {
      title: 'Kami mencipta perisian yang dihantar dan berkembang.',
      subtitle: 'Jurutera berfikiran produk membina perisian yang boleh dipercayai dan cantik—dengan pantas.',
      cta: 'Mula Sekarang',
      ctaSecondary: 'Lihat Kerja Kami'
    },
    services: {
      title: 'Kepakaran Kami',
      subtitle: 'Penyelesaian perisian dari hujung ke hujung untuk perniagaan moden'
    },
    testimonials: {
      title: 'Apa Kata Pelanggan Kami',
      subtitle: 'Jangan ambil kata-kata kami sahaja - dengar dari perniagaan yang telah kami bantu transformasi'
    },
    caseStudies: {
      title: 'Kisah Kejayaan',
      subtitle: 'Projek sebenar, hasil sebenar. Lihat bagaimana kami membantu perniagaan mengubah kehadiran digital mereka.'
    },
    contact: {
      title: 'Hubungi Kami',
      subtitle: 'Bersedia untuk memulakan projek anda? Kami ingin mendengar daripada anda.',
      form: {
        name: 'Nama',
        email: 'E-mel',
        company: 'Syarikat',
        projectType: 'Jenis Projek',
        message: 'Mesej',
        submit: 'Hantar Mesej'
      }
    },
    footer: {
      services: 'Perkhidmatan',
      solutions: 'Penyelesaian',
      company: 'Syarikat',
      support: 'Sokongan',
      copyright: 'Hak cipta terpelihara.'
    },
    about: {
      title: 'Tentang DigiCraft.space',
      subtitle: 'Membina perisian yang dihantar dan berkembang untuk masa depan digital',
      mission: {
        title: 'Misi Kami',
        description: 'Kami percaya perisian yang hebat harus dapat diakses oleh setiap perniagaan, tanpa mengira saiz. Misi kami adalah untuk mendemokrasikan pembangunan perisian berkualiti tinggi dengan menyediakan harga yang telus, jadual masa yang boleh diramal, dan hasil yang luar biasa.',
        description2: 'Ditubuhkan berdasarkan prinsip kerajinan dan kebolehpercayaan, kami menggabungkan teknologi canggih dengan metodologi yang terbukti untuk menyampaikan perisian yang bukan sahaja berfungsi tetapi berkembang dalam pengeluaran.'
      },
      founder: {
        title: 'Temu Pengasas Kami',
        role: 'Ketua Pegawai Eksekutif & Pengasas',
        description: 'Bekas jurutera kanan di syarikat teknologi terkemuka dengan lebih 8 tahun membina perisian yang boleh ditingkatkan. Berminat untuk mencipta teknologi yang membuat perbezaan yang nyata.'
      },
      values: {
        title: 'Nilai Kami',
        transparency: {
          title: 'Ketelusan',
          description: 'Komunikasi yang jelas, jadual masa yang jujur, dan harga yang terang. Tiada kejutan, pernah.'
        },
        quality: {
          title: 'Kualiti',
          description: 'Kami menulis kod seperti reputasi kami bergantung padanya—kerana ia memang begitu.'
        },
        speed: {
          title: 'Kelajuan',
          description: 'Iterasi pantas, maklum balas cepat, dan penyebaran pantas tanpa memotong sudut.'
        }
      },
      whyChooseUs: {
        title: 'Mengapa Pilih Kami?',
        fast: {
          title: 'Penghantaran Pantas',
          description: 'Masa penghantaran pantas tanpa mengorbankan kualiti'
        },
        affordable: {
          title: 'Harga Berpatutan',
          description: 'Harga telus yang sesuai dengan bajet anda'
        },
        reliable: {
          title: 'Sokongan Boleh Dipercayai',
          description: 'Sokongan dan penyelenggaraan 24/7 untuk ketenangan fikiran anda'
        },
        support: {
          title: 'Pasukan Pakar',
          description: 'Pembangun berpengalaman dengan rekod prestasi yang terbukti'
        }
      }
    },
    work: {
      title: 'Keupayaan Kami',
      subtitle: 'Walaupun kami syarikat baru, pasukan kami membawa tahun-tahun pengalaman dari syarikat teknologi terkemuka',
      capabilities: {
        mvp: {
          title: 'MVP Permulaan',
          description: 'Percepatkan idea permulaan anda dari konsep ke pasaran dengan MVP yang ramping dan boleh ditingkatkan yang mengesahkan visi anda.'
        },
        enterprise: {
          title: 'Penyelesaian Perusahaan',
          description: 'Platform yang kuat dan boleh ditingkatkan yang mengendalikan kerumitan perusahaan sambil mengekalkan prestasi dan keselamatan.'
        },
        ecommerce: {
          title: 'Platform E-dagang',
          description: 'Kedai dalam talian yang lengkap dengan pemprosesan pembayaran, pengurusan inventori, dan pengoptimuman pertumbuhan.'
        }
      },
      techStack: {
        title: 'Stack Teknologi Kami'
      },
      approach: {
        title: 'Pendekatan Pembangunan Kami',
        collaboration: {
          title: 'Proses Kolaboratif',
          description: 'Kami bekerja rapat dengan pasukan anda untuk memahami visi anda dan menyampaikan apa yang anda perlukan.'
        },
        iteration: {
          title: 'Pembangunan Berulang',
          description: 'Prototaip pantas dan maklum balas berterusan memastikan kami membina penyelesaian yang betul dengan cekap.'
        },
        security: {
          title: 'Keselamatan Pertama',
          description: 'Setiap baris kod ditulis dengan keselamatan dan kebolehskalaan dalam fikiran dari hari pertama.'
        }
      }
    },
    pricing: {
      title: 'Harga Telus',
      subtitle: 'Pilih model penglibatan yang sesuai untuk projek anda'
    },
    solutions: {
      title: 'Penyelesaian & Pakej',
      subtitle: 'Penyelesaian yang direka terlebih dahulu untuk mempercepatkan pembangunan'
    },
    testimonials: {
      marcus: {
        role: 'CTO',
        content: 'DigiCraft menyampaikan MVP kami dalam masa 6 minggu sahaja. Kepakaran teknikal dan komunikasi mereka luar biasa. Pasukan memahami visi kami dan menghidupkannya dengan sempurna.',
        projectType: 'Pembangunan MVP',
        results: 'Dilancarkan 2 minggu lebih awal dari jadual'
      },
      sarah: {
        role: 'Pengasas',
        content: 'Mereka membina platform e-dagang kami dengan perhatian sempurna kepada UX. Jualan meningkat 300% selepas pelancaran. Pengalaman pengguna yang mereka cipta semata-mata luar biasa.',
        projectType: 'Aplikasi Web',
        results: 'Peningkatan 300% dalam jualan'
      },
      david: {
        role: 'CEO',
        content: 'Penyelesaian automasi AI mereka menjimatkan kami 40 jam seminggu. ROI adalah serta-merta dan ketara. Kepakaran pasukan dalam AI dan pembelajaran mesin adalah luar biasa.',
        projectType: 'Automasi AI',
        results: '40 jam dijimatkan seminggu'
      },
      emily: {
        role: 'Pengurus Produk',
        content: 'Bekerja dengan DigiCraft adalah pengubah permainan. Mereka mengubah platform penjagaan kesihatan kompleks kami menjadi penyelesaian intuitif dan boleh ditingkatkan yang disukai pengguna kami.',
        projectType: 'Pembangunan Platform',
        results: 'Kadar kepuasan pengguna 95%'
      },
      jennifer: {
        role: 'CPA',
        content: 'Platform perakaunan ini mengubah alur kerja kami sepenuhnya. Ciri-ciri automasi menjimatkan kami berjam-jam tanpa henti dan menghapuskan kesilapan. Sangat mengesyorkan kepakaran DigiCraft.',
        projectType: 'Pembangunan Platform',
        results: '70% pengurangan dalam kerja manual'
      }
    },
    caseStudies: {
      ecocommerce: {
        title: 'Transformasi Platform E-dagang',
        challenge: 'Platform lama tidak dapat menangani peningkatan trafik dan kekurangan ciri-ciri UX moden. Jualan menurun disebabkan pengalaman pengguna yang lemah.',
        solution: 'Membina platform e-dagang moden berasaskan React dengan carian lanjutan, cadangan peribadi, dan reka bentuk mobile-first.',
        results: {
          sales: 'Peningkatan 300% dalam jualan dalam 3 bulan',
          bounce: 'Pengurangan 50% dalam kadar bounce',
          speed: 'Peningkatan 95% dalam kelajuan muat halaman',
          satisfaction: 'Penilaian kepuasan pelanggan 4.8/5'
        },
        duration: '12 minggu',
        testimonial: 'DigiCraft mengubah perniagaan kami. Platform baru melebihi semua jangkaan kami.',
        testimonialAuthor: 'Sarah Williams, Pengasas'
      },
      datainsights: {
        title: 'Dashboard Analitik Berkuasa AI',
        challenge: 'Pemprosesan data manual menggunakan lebih 40 jam seminggu. Memerlukan pandangan masa nyata dan pelaporan automatik.',
        solution: 'Membangunkan platform analitik berkuasa AI dengan algoritma pembelajaran mesin untuk pandangan ramalan dan pelaporan automatik.',
        results: {
          time: '40 jam dijimatkan seminggu dalam pemprosesan data',
          accuracy: 'Pandangan masa nyata dengan ketepatan 99.9%',
          decision: '60% lebih pantas dalam proses membuat keputusan',
          roi: 'ROI dicapai dalam 2 bulan'
        },
        duration: '16 minggu',
        testimonial: 'Penyelesaian AI merevolusikan cara kami menganalisis data. Hasil yang luar biasa!',
        testimonialAuthor: 'David Rodriguez, CEO'
      },
      healthtech: {
        title: 'Sistem Pengurusan Penjagaan Kesihatan',
        challenge: 'Sistem pengurusan pesakit yang kompleks sudah lapuk dan menyebabkan ketidakcekapan alur kerja. Memerlukan penyelesaian yang mematuhi HIPAA.',
        solution: 'Mencipta sistem pengurusan penjagaan kesihatan yang komprehensif dengan rekod pesakit, penjadualan temujanji, dan keupayaan telemedicine.',
        results: {
          satisfaction: 'Kadar kepuasan pengguna 95%',
          time: 'Pengurangan 30% dalam masa pentadbiran',
          compliance: '100% pematuhan HIPAA',
          integration: 'Integrasi telemedicine yang lancar'
        },
        duration: '20 minggu',
        testimonial: 'Bekerja dengan DigiCraft adalah pengubah permainan untuk platform penjagaan kesihatan kami.',
        testimonialAuthor: 'Emily Johnson, Pengurus Produk'
      },
      accounting: {
        title: 'Platform Pengurusan Perakaunan',
        challenge: 'Proses perakaunan manual mudah tersilap dan memakan masa. Memerlukan platform automatik untuk pengurusan invois, penjejakan perbelanjaan, dan pelaporan kewangan.',
        solution: 'Membangunkan platform perakaunan komprehensif dengan pemprosesan invois automatik, kategorisasi perbelanjaan, pelaporan kewangan masa nyata, dan ciri-ciri penyediaan cukai.',
        results: {
          reduction: 'Pengurangan 70% dalam kemasukan data manual',
          accuracy: 'Ketepatan 95% dalam pelaporan kewangan',
          speed: '50% lebih pantas dalam penutupan akhir bulan',
          rating: 'Penilaian kepuasan pengguna 4.9/5'
        },
        duration: '16 minggu',
        testimonial: 'Platform ini mengubah alur kerja perakaunan kami. Sangat mengesyorkan kepakaran DigiCraft.',
        testimonialAuthor: 'Jennifer Martinez, CPA'
      },
      techflow: {
        title: 'Pembangunan MVP SaaS',
        challenge: 'Startup perlu mengesahkan idea mereka dengan cepat dengan MVP yang berfungsi untuk mendapatkan pembiayaan dan pelanggan awal.',
        solution: 'Menghantar MVP yang lengkap dengan ciri-ciri dalam masa rekod dengan fungsi teras, pengesahan pengguna, dan analitik asas.',
        results: {
          schedule: 'Dilancarkan 2 minggu lebih awal dari jadual',
          funding: 'Mendapatkan $2M dalam pembiayaan Siri A',
          users: '500+ pengguna beta dalam bulan pertama',
          rating: 'Penilaian pengguna 4.5/5'
        },
        duration: '6 minggu',
        testimonial: 'DigiCraft menyampaikan MVP kami dalam masa 6 minggu sahaja. Kepakaran teknikal yang cemerlang.',
        testimonialAuthor: 'Marcus Chen, CTO'
      }
    }
  }
};

// Language detection and management
export class I18nManager {
  private currentLanguage: string = 'en';
  private fallbackLanguage: string = 'en';

  constructor() {
    this.detectLanguage();
  }

  private detectLanguage(): void {
    // Try to get language from localStorage first
    const savedLanguage = localStorage.getItem('digicraft-language');
    if (savedLanguage && supportedLanguages.find(lang => lang.code === savedLanguage)) {
      this.currentLanguage = savedLanguage;
      return;
    }

    // Fallback to browser language
    const browserLanguage = navigator.language.split('-')[0];
    if (supportedLanguages.find(lang => lang.code === browserLanguage)) {
      this.currentLanguage = browserLanguage;
    }
  }

  public getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  public setLanguage(languageCode: string): void {
    if (supportedLanguages.find(lang => lang.code === languageCode)) {
      this.currentLanguage = languageCode;
      localStorage.setItem('digicraft-language', languageCode);
      
      // Update document direction for RTL languages
      const language = supportedLanguages.find(lang => lang.code === languageCode);
      if (language) {
        document.documentElement.dir = language.direction;
        document.documentElement.lang = languageCode;
      }
    }
  }

  public translate(key: string): string {
    const keys = key.split('.');
    let translation: any = translations[this.currentLanguage] || translations[this.fallbackLanguage];
    
    for (const k of keys) {
      if (translation && typeof translation === 'object' && k in translation) {
        translation = translation[k];
      } else {
        // Fallback to English
        translation = translations[this.fallbackLanguage];
        for (const fallbackKey of keys) {
          if (translation && typeof translation === 'object' && fallbackKey in translation) {
            translation = translation[fallbackKey];
          } else {
            return key; // Return key if translation not found
          }
        }
        break;
      }
    }
    
    return typeof translation === 'string' ? translation : key;
  }

  public getSupportedLanguages(): LanguageConfig[] {
    return supportedLanguages;
  }
}

// Export singleton instance
export const i18n = new I18nManager();

// React hook for translations
export function useTranslation() {
  const [currentLang, setCurrentLang] = useState(i18n.getCurrentLanguage());
  
  const t = (key: string) => i18n.translate(key);
  
  const changeLanguage = (languageCode: string) => {
    console.log('useTranslation: Changing language to', languageCode);
    i18n.setLanguage(languageCode);
    setCurrentLang(languageCode);
    // Force re-render of all components using this hook
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: languageCode }));
    console.log('useTranslation: Language changed, current language is now', i18n.getCurrentLanguage());
  };
  
  // Listen for language changes from other components
  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      console.log('useTranslation: Received language change event', event.detail);
      setCurrentLang(event.detail);
    };
    
    window.addEventListener('languageChanged', handleLanguageChange as EventListener);
    
    return () => {
      window.removeEventListener('languageChanged', handleLanguageChange as EventListener);
    };
  }, []);
  
  return {
    t,
    currentLanguage: currentLang,
    changeLanguage,
    supportedLanguages: i18n.getSupportedLanguages()
  };
}
