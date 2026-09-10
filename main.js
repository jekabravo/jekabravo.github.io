/**
 * Bravo Counseling & Consulting Services - Main JavaScript File
 * Client: Jessica Bravo, LCSW (NC License #C017999)
 * Features: Bilingual i18n switcher, mobile navigation, smooth scrolling, scrollspy, interactive UI
 * Author: @roggmatz (https://roggmatz.com)
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. Translations Dictionary (EN / ES)
  // --------------------------------------------------------------------------
  const translations = {
    en: {
      meta: {
        title: "Bravo Counseling & Consulting Services | Jessica Bravo, LCSW | North Carolina Teletherapy",
        description: "Trauma-informed, bilingual teletherapy across North Carolina with Jessica Bravo, LCSW (License #C017999). Specialized in individual, couples, IFS, and somatic therapy."
      },
      nav: {
        about: "About",
        services: "Services",
        rates: "Rates & Insurance",
        book: "Book Consultation"
      },
      hero: {
        badge: "More thank just talk therapy",
        title_start: "Healing from Past Experiences and Reclaiming your Life",
        title_accent: "Begins Here.",
        subheadline: "Discomfort yiels growth. Growth requires support. You don't have to do it alone. Together, we can create a path forward and begin your self-discovery journey.  Let me support you through the healing process and start leading a more aligned life with your true north.",
        cta_primary: "Schedule Free 15-Min Consultation",
        cta_secondary: "Explore Therapy Services",
        trust_confidential: "100% Confidential Telehealth",
        trust_license: "NC License #C017999",
        trust_bilingual: "Bilingual (English / Español)",
        floating_title: "Virtual Sanctuary",
        floating_desc: "Evidence-based, compassionate care from the comfort of home"
      },
      about: {
        badge: "Meet Your Therapist",
        title: "A Grounded, Compassionate Space for Your Metamorphosis",
        quote: "“Healing is not about becoming someone new—it is about unburdening who you are and returning to your grounded center.”",
        bio_p1: "Jessica Bravo is a Licensed Clinical Social Worker providing dedicated, trauma-informed teletherapy across all of North Carolina. Bravo Counseling & Consulting is built on creating a secure, culturally affirming sanctuary where patients can explore their thoughts without prejudice.",
        bio_p2: "As a bilingual clinician, she specializes in helping individuals and couples untangle generational patterns, heal attachment wounds, and navigate monumental life transitions for both English and Spanish speakers. Her therapeutic work thoughtfully blends Internal Family Systems (IFS), Somatic Experiencing, and Relational Psychodynamics to facilitate lasting, rooted transformation.",
        license_badge_title: "North Carolina Licensed Clinical Social Worker",
        license_badge_sub: "Psychology Today Verified Provider",
        val1_title: "Grounded Healing",
        val1_desc: "Somatic body awareness to restore emotional safety and nervous system regulation.",
        val2_title: "Transformational Care",
        val2_desc: "Internal Family Systems (IFS) to harmonize inner parts, release trauma, and step into self-energy.",
        val3_title: "Culturally Inclusive",
        val3_desc: "Bilingual (EN/ES), culturally attuned care honoring heritage, generational resilience, and lived experience."
      },
      services: {
        badge: "Specialized Therapy Services",
        title: "Our Therapeutic Pathways",
        subtitle: "100% confidential teletherapy from the comfort of your own space, accessible anywhere in North Carolina.",
        ind_tag: "Adults (18+)",
        ind_title: "Individual Therapy",
        ind_audience: "For adults seeking healing, self-discovery, and emotional grounding",
        focus_heading: "Key Focus Areas:",
        ind_f1: "Complex & Generational Trauma",
        ind_f2: "Grief, Loss & Unspoken Pain",
        ind_f3: "Life Transitions & Identity Shift",
        ind_f4: "Anxiety, Grounding & Burnout",
        ind_cta: "Schedule Individual Session",
        cpl_tag: "Partners & Couples",
        cpl_title: "Couples Therapy",
        cpl_audience: "For partners desiring renewed intimacy, connection, and conflict resolution",
        cpl_f1: "Relational Dynamics & Intimacy",
        cpl_f2: "Communication Breakdown & Repair",
        cpl_f3: "Navigating Shared Life Transitions",
        cpl_f4: "Attachment & Emotional Safety",
        cpl_cta: "Schedule Couples Session",
        mod_title: "Integrative Modalities We Blend",
        mod1_title: "Internal Family Systems (IFS)",
        mod1_desc: "Healing burdened inner parts, resolving internal conflicts, and cultivating Self-compassion.",
        mod2_title: "Somatic Experiencing",
        mod2_desc: "Releasing stored tension, trauma responses, and calming nervous system dysregulation.",
        mod3_title: "Relational & Psychodynamic",
        mod3_desc: "Understanding attachment blueprints, family dynamics, and creating secure bonds.",
        mod4_title: "Teletherapy Convenience",
        mod4_desc: "HIPAA-compliant virtual appointments across NC."
      },
      rates: {
        badge: "Transparent Investment",
        title: "Rates, Insurance & Payment Options",
        subtitle: "Clear, upfront fee structure with seamless in-network insurance verification via Headway.",
        ind_service: "Individual Therapy Session",
        ind_price: "$150",
        duration: "per 50-minute session",
        ind_desc: "Focused one-on-one virtual teletherapy customized to your healing journey.",
        cpl_service: "Couples Therapy Session",
        cpl_price: "$200",
        cpl_desc: "Collaborative 50-minute virtual session centered on relational repair and intimacy.",
        superbill: "Out-of-Network Superbills provided upon request for potential direct insurance reimbursement.",
        ins_title: "In-Network Insurance Accepted via Headway",
        ins_sub: "Jessica Bravo accepts the following major insurance plans through Headway for seamless verification and claims:",
        pay_label: "Private-Pay & Direct Payment Methods:"
      },
      cta: {
        badge: "Take the Next Step",
        headline: "Your Story Isn’t Over. Take the First Step Today.",
        subtext: "Booking a free 15-minute phone consultation gives us an opportunity to connect, discuss your goals, and ensure we are the right therapeutic match.",
        primary_btn: "Book Free 15-Min Consultation via Headway",
        email_prefix: "Or email directly at:"
      },
      footer: {
        brand_sub: "Jessica Bravo, LCSW",
        brand_desc: "Trauma-informed, culturally grounded teletherapy practice guiding your emotional transformation and rebirth across North Carolina.",
        links_title: "Quick Navigation",
        hours_title: "Practice Hours & Telehealth",
        hours_time: "Monday – Friday: 11:00 AM – 5:00 PM EST",
        telehealth_loc: "Virtual Teletherapy across all of North Carolina",
        crisis_note: "Crisis Disclaimer: If you are experiencing a life-threatening mental health emergency, please call/text 988 (Suicide & Crisis Lifeline) or call 911 immediately.",
        copyright: "© 2026 Jessica Bravo, LCSW. All rights reserved.",
        author_label: "Created by"
      }
    },
    es: {
      meta: {
        title: "Bravo Consulting & Consulting Services | Jessica Bravo, LCSW | Teleterapia en Carolina del Norte",
        description: "Teleterapia bilingüe informada en trauma en toda Carolina del Norte con Jessica Bravo, LCSW (Licencia #C017999). Especializada en terapia individual, de pareja, IFS y sanación somática."
      },
      nav: {
        about: "Sobre Mí",
        services: "Servicios",
        rates: "Tarifas y Seguro",
        book: "Reservar Consulta"
      },
      hero: {
        badge: "Teleterapia en Línea en Carolina del Norte",
        title_start: "Arraigada en la Seguridad.",
        title_accent: "Empoderada para la Transformación.",
        subheadline: "Las transiciones de la vida, el duelo y el trauma generacional pueden dejarte sintiéndote desconectado/a. A través de la teleterapia bilingüe, Jessica Bravo, LCSW, te ayuda a encontrar estabilidad, procesar cargas pasadas y dar el paso hacia tu renacer personal.",
        cta_primary: "Programar Consulta Gratuita de 15 Min",
        cta_secondary: "Explorar Servicios de Terapia",
        trust_confidential: "Teleterapia 100% Confidencial",
        trust_license: "Licencia de NC #C017999",
        trust_bilingual: "Bilingüe (Español / Inglés)",
        floating_title: "Santuario Virtual",
        floating_desc: "Atención compasiva basada en evidencia desde la comodidad de tu hogar"
      },
      about: {
        badge: "Conozca a su Terapeuta",
        title: "Un Espacio Seguro y Compasivo para su Metamorfosis",
        quote: "“Sanar no se trata de convertirte en alguien nuevo, sino de liberar las cargas y regresar a tu centro de estabilidad.”",
        bio_p1: "Jessica Bravo es una Trabajadora Social Clínica Licenciada dedicada a ofrecer teleterapia informada en trauma en todo el estado de Carolina del Norte. Su practica se fundamenta en crear un santuario seguro y culturalmente afirmativo donde pacientes se puedan expresar sin prejuicios.",
        bio_p2: "Como terapeuta bilingüe (inglés y español), se especializa en ayudar a adultos y parejas a desenredar patrones generacionales, sanar heridas de apego y transitar cambios de vida significativos. Integro Sistemas de la Familia Interna (IFS), Experiencia Somática y Psicodinámica Relacional para facilitar una transformación profunda y arraigada.",
        license_badge_title: "Trabajadora Social Clínica Licenciada de NC",
        license_badge_sub: "Proveedora Verificada por Psychology Today",
        val1_title: "Sanación Arraigada",
        val1_desc: "Conciencia corporal somática para restaurar la seguridad y regular el sistema nervioso.",
        val2_title: "Cuidado Transformador",
        val2_desc: "Sistemas de Familia Interna (IFS) para armonizar partes internas, liberar traumas y liderar desde el Ser.",
        val3_title: "Inclusión Cultural",
        val3_desc: "Atención bilingüe (ES/EN) y culturalmente sensible que honra las raíces, la resiliencia familiar y las vivencias personales."
      },
      services: {
        badge: "Servicios Terapéuticos Especializados",
        title: "Nuestras Vías Terapéuticas",
        subtitle: "Teleterapia 100% confidencial desde la comodidad de su propio espacio, accesible en toda Carolina del Norte.",
        ind_tag: "Adultos (18+)",
        ind_title: "Terapia Individual",
        ind_audience: "Para adultos que buscan sanación, autoconocimiento y estabilidad emocional",
        focus_heading: "Áreas Principales de Enfoque:",
        ind_f1: "Trauma Complejo y Generacional",
        ind_f2: "Duelo, Pérdida y Dolor Silencioso",
        ind_f3: "Transiciones de Vida y Cambio de Identidad",
        ind_f4: "Ansiedad, Enraizamiento y Agotamiento",
        ind_cta: "Programar Sesión Individual",
        cpl_tag: "Parejas y Relaciones",
        cpl_title: "Terapia de Pareja",
        cpl_audience: "Para parejas que desean renovar la intimidad, comunicación y resolución de conflictos",
        cpl_f1: "Dinámicas Relacionales e Intimidad",
        cpl_f2: "Ruptura y Reparación de la Comunicación",
        cpl_f3: "Navegar Transiciones de Vida Compartidas",
        cpl_f4: "Apego y Seguridad Emocional",
        cpl_cta: "Programar Sesión de Pareja",
        mod_title: "Modalidades Integrativas que Aplicamos",
        mod1_title: "Sistemas de Familia Interna (IFS)",
        mod1_desc: "Sanación de partes internas sobrecargadas, resolución de conflictos internos y autocompasión.",
        mod2_title: "Experiencia Somática",
        mod2_desc: "Liberación de tensión retenida, respuestas traumáticas y calma del sistema nervioso.",
        mod3_title: "Relacional y Psicodinámica",
        mod3_desc: "Comprensión de esquemas de apego, dinámicas familiares y creación de vínculos seguros.",
        mod4_title: "Comodidad de Teleterapia",
        mod4_desc: "Citas virtuales conformes con HIPAA en toda Carolina del Norte."
      },
      rates: {
        badge: "Inversión Transparente",
        title: "Tarifas, Seguro y Formas de Pago",
        subtitle: "Estructura de precios transparente con verificación de seguro directa a través de Headway.",
        ind_service: "Sesión de Terapia Individual",
        ind_price: "$150",
        duration: "por sesión de 50 minutos",
        ind_desc: "Sesión virtual personalizada 1 a 1 enfocada en tus metas individuales de sanación.",
        cpl_service: "Sesión de Terapia de Pareja",
        cpl_price: "$200",
        cpl_desc: "Sesión virtual colaborativa de 50 minutos enfocada en la reparación del vínculo e intimidad.",
        superbill: "Se proporcionan recibos Superbill previa solicitud para posible reembolso directo de seguro.",
        ins_title: "Seguros Médicos Aceptados (En Red) vía Headway",
        ins_sub: "Jessica Bravo acepta los siguientes seguros principales a través de Headway para verificación ágil y cobertura:",
        pay_label: "Métodos de Pago Directo y Privado:"
      },
      cta: {
        badge: "Da el Siguiente Paso",
        headline: "Tu Historia No Ha Terminado. Da el Primer Paso Hoy.",
        subtext: "Reservar una consulta telefónica gratuita de 15 minutos nos permite conectar, hablar sobre tus metas y confirmar si somos el equipo ideal para tu proceso.",
        primary_btn: "Reservar Consulta Gratuita de 15 Min vía Headway",
        email_prefix: "O envía un correo directamente a:"
      },
      footer: {
        brand_sub: "Jessica Bravo, LCSW",
        brand_desc: "Práctica de teleterapia bilingüe e informada en trauma dedicada a guiar tu renacer y transformación emocional en toda Carolina del Norte.",
        links_title: "Navegación Rápida",
        hours_title: "Horarios de Atención y Teleterapia",
        hours_time: "Lunes – Viernes: 11:00 AM – 5:00 PM EST",
        telehealth_loc: "Teleterapia Virtual en toda Carolina del Norte",
        crisis_note: "Aviso de Emergencia: Si estás pasando por una emergencia de salud mental, llama o envía mensaje al 988 (Línea de Crisis) o llama al 911 de inmediato.",
        copyright: "© 2026 Jessica Bravo, LCSW. Todos los derechos reservados.",
        author_label: "Creado por"
      }
    }
  };

  // --------------------------------------------------------------------------
  // 2. Language Switcher Logic
  // --------------------------------------------------------------------------
  function getInitialLanguage() {
    // 1. Check URL query param ?lang=es or ?lang=en
    const urlParams = new URLSearchParams(window.location.search);
    const paramLang = urlParams.get('lang');
    if (paramLang && (paramLang === 'es' || paramLang === 'en')) {
      return paramLang;
    }

    // 2. Check hostname for subdomain (es.bravoconsultingservices.com)
    if (window.location.hostname.startsWith('es.')) {
      return 'es';
    }

    // 3. Check localStorage
    const storedLang = localStorage.getItem('bcs_lang');
    if (storedLang && (storedLang === 'es' || storedLang === 'en')) {
      return storedLang;
    }

    // 4. Check browser language
    const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    if (browserLang.startsWith('es')) {
      return 'es';
    }

    return 'en';
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;

    const t = translations[lang];
    document.documentElement.lang = lang;

    // Update Meta Title & Description
    if (t.meta) {
      document.title = t.meta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', t.meta.description);
    }

    // Update all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const keyPath = el.getAttribute('data-i18n');
      const keys = keyPath.split('.');
      let val = t;
      for (const k of keys) {
        if (val && val[k] !== undefined) {
          val = val[k];
        } else {
          val = null;
          break;
        }
      }

      if (val !== null) {
        // Handle input placeholders or standard text
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.setAttribute('placeholder', val);
        } else {
          el.textContent = val;
        }
      }
    });

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // Update active footer domain links
    document.querySelectorAll('.footer-domain-switch a').forEach(link => {
      const linkLang = link.getAttribute('data-lang');
      if (linkLang === lang) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Store in localStorage
    localStorage.setItem('bcs_lang', lang);

    // Update URL param without page reload
    const currentUrl = new URL(window.location);
    currentUrl.searchParams.set('lang', lang);
    window.history.replaceState({}, '', currentUrl);
  }

  // Attach language switcher listeners (Header Pill & Footer Domain Links)
  document.querySelectorAll('.lang-btn, .footer-lang-link').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang');
      setLanguage(targetLang);
    });
  });

  // Initialize language on startup
  const initialLang = getInitialLanguage();
  setLanguage(initialLang);

  // --------------------------------------------------------------------------
  // 3. Mobile Navigation Menu Toggle
  // --------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking navigation link
    navMenu.querySelectorAll('.nav-link, .btn').forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          mobileToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close menu on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.focus();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 4. Header Scroll Shadow & Scrollspy Active Navigation
  // --------------------------------------------------------------------------
  const siteHeader = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }, { passive: true });

  // IntersectionObserver for active navigation highlight
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${activeId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(sec => sectionObserver.observe(sec));
  }
});
