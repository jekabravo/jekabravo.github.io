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
        approach: "The Approach",
        meet_therapist: "Your Therapist",
        services: "Services",
        rates: "Rates & Insurance",
        book: "Book Consultation"
      },
      hero: {
        badge: "More than just talk therapy",
        title_start: "Healing from Past Experiences and Reclaiming your Life",
        title_accent: "Begins Here.",
        subheadline: "Discomfort yields growth. Growth Requires support. You do not have to do it alone. Together, we can create a path forward and begin your self-discovery journey.<br />Psychotherapy is about building a deeper relationship with self and all parts. Rooted in Safety. Empowered for Transformation.<br />Life transitions, grief, and generational trauma can leave you feeling disconnected.<br />Through trauma-informed, bilingual teletherapy, Jessica Bravo, LCSW, helps you find your footing, process past struggles, and step into your personal rebirth.",
        cta_primary: "Call for Free Consultation",
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
        val3_desc: "Bilingual (EN/ES), culturally attuned care honoring heritage, generational resilience, and lived experience.",
        read_story: "Read Jessica's Full Story"
      },
      approach_page: {
        meta_title: "My Therapeutic Approach | Jessica Bravo, LCSW",
        meta_desc: "More than talk therapy: Jessica Bravo, LCSW combines Internal Family Systems (IFS), Somatic Experiencing, and Attachment Theory to support mind, body, and soul healing.",
        hero_badge: "My Approach",
        hero_title: "More than just talk therapy",
        hero_lead: "Healing from past experiences, connecting to your feelings, and creating a compassionate relationship with all your parts begins here.",
        mbs_heading: "True healing requires a deeper, multi-level approach that incorporates the Mind, Body, & Soul",
        mbs_p1: "Creating awareness and gaining insight about yourself is only the first step. Learning your patterns and coping mechanisms yields understanding, <strong>NOT</strong> healing. Feelings are processed through an integrated approach with our bodies, <strong>NOT</strong> our minds alone.",
        mbs_p2: "Here, your feelings, thoughts, and behaviors are not pathologized. Our work involves connecting with your parts and creating a compassionate relationship with self that leads to inner peace and lasting change.",
        mind_title: "Mind",
        mind_desc: "Awareness and insight into your patterns are the first step.",
        body_title: "Body",
        body_desc: "Feelings are processed through the body, not the mind alone.",
        soul_title: "Soul",
        soul_desc: "Your Self energy leads the way to inner peace and lasting change.",
        awaits_heading: "What Awaits You",
        await1: "A safe space grounded in compassion and curiosity",
        await2: "A judgement-free approach for all your parts",
        await3: "Radical acceptance of what was, what is, and what is not",
        await4: "A Mind, Body, & Soul integrated healing approach",
        await5: "A place to gain clarity and be intentional with yourself",
        await6: "A supportive environment to connect with your pain, sit in discomfort, access your Self energy, and begin your personal metamorphosis",
        modal_tag: "My therapeutic approach",
        modal_intro: "I use a combination of Internal Family Systems (IFS), Somatic Experiencing, and Attachment Theory to support your healing.",
        ifs_heading: "What is IFS?",
        ifs_p1: "IFS is an evidence-based therapeutic modality used to identify the root causes behind emotional and behavioral patterns. One of the core concepts of IFS is the Self, which refers to the core compassionate center of every person. Self is equipped to lead and heal. The term Self energy can be used interchangeably with Soul energy.",
        parts_tag: "Understanding Your Parts",
        ifs_p2: "IFS understands that we are made up of various parts. All parts have a role within our internal system and carry their own history. Through IFS we develop compassionate relationships with all of our parts. The focus of IFS is to access our Self energy and help our parts heal the burdens they carry.",
        closing_quote: "IFS is a transformative, trauma-informed, evidence-based, holistic approach.",
        closing_body: "Let me support you as you learn to access your Self energy and begin your personal metamorphosis."
      },
      about_page: {
        meta_title: "About Jessica Bravo, LCSW",
        meta_desc: "Read the story of Jessica Bravo, LCSW: An unconventional journey from teen mom to psychotherapist, grounded in resilience, self energy, and social services.",
        hero_badge: "Her Story & Roots",
        hero_title: "From Teen Mom to Psychotherapist",
        hero_subtitle: "My unconventional journey to becoming a helping professional.",
        owner_caption_name: "Jessica Bravo, LCSW",
        owner_caption_title: "NC License #C017999",
        milestone_header: "Credentials & Roots",
        ms1_text: "BSW & MSW Graduate",
        ms2_text: "10+ Years Helping Experience",
        ms3_text: "Bilingual Care (EN / ES)",
        lead_p1: "Statistically speaking, I wasn’t supposed to attain a college degree. Let alone a Master’s degree.",
        lead_p2: "There are capable and enlightening human beings behind any statistic. Despite all staggering odds against us, we are light at our core. This powerful source of self energy lives within us all and can guide us out of storms life can throw at us. I know it did for me.",
        chapter2_tag: "Roots in Social Services",
        social_services_p: "My career started in social services. Through my years of service, I encountered diverse individuals facing complex barriers to well-being. Their environment played a significant factor. However, time after time, I witnessed people’s ability to overcome adversity and create the life they imagined possible. I believe in our ability to create, change, and grow beyond the limiting beliefs set forth by our social, cultural, and familial conditioning.",
        highlight_quote: "The power of therapy and commitment to self:",
        vulnerability_p: "Therapy has provided me with the wisdom of self-discovery, and it has allowed me to sit with my pain. True strength lies in our ability to feel and be vulnerable.",
        pillar1_title: "Inherent Inner Light",
        pillar1_desc: "Every person possesses indestructible self energy capable of guiding them through adversity.",
        pillar2_title: "Systemic Resilience",
        pillar2_desc: "Recognizing environmental challenges while reclaiming the power to rewrite limiting scripts.",
        pillar3_title: "Courage in Vulnerability",
        pillar3_desc: "Learning to sit with discomfort and pain as the true foundation for lasting healing.",
        cta_heading: "Ready to Reclaim Your Story?",
        cta_sub: "Schedule a complimentary 15-minute consultation to see how we can work together.",
        cta_btn: "Book a Free Consultation",
        cta_services_btn: "Explore Therapy Services",
        approach_btn: "Explore My Therapeutic Approach",
        nav_home: "Home"
      },
      services: {
        title: "Services",
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
        mod4_desc: "HIPAA-compliant virtual appointments across NC.",
        leg_tag: "Legal Firms & Clients",
        leg_title: "Psychological Evaluations",
        leg_audience: "For attorneys and their clients who need a thorough, trauma-informed evaluation for immigration cases",
        leg_f1: "Trauma-Informed, Culturally Sensitive Interviews",
        leg_f2: "Bilingual Evaluations in English & Spanish",
        leg_f3: "Clear, Clinically Grounded Written Documentation",
        leg_f4: "Respectful Pacing That Protects Client Well-Being",
        leg_focus_heading: "Our Approach:",
        leg_cta: "Request an Evaluation",
        eval_title: "Evaluations We Provide",
        eval1_title: "Immigration Asylum (I-589)",
        eval1_desc: "Documenting past persecution, trauma, and fear of return in support of asylum claims.",
        eval2_title: "VAWA & U/T Visas",
        eval2_desc: "Evaluations for survivors of abuse, violence, and trafficking seeking humanitarian protection.",
        eval3_title: "Extreme Hardship Waivers (I-601 / I-601A)",
        eval3_desc: "Assessing the psychological impact of separation or relocation on qualifying relatives."
      },
      rates: {
        badge: "Transparent Investment",
        title: "Rates, Insurance & Payment Options",
        subtitle: "Clear, upfront fee structure with seamless in-network insurance verification via Headway.",
        ind_service: "Individual Therapy Session",
        ind_price: "$150",
        duration: "/ 50-minute session after an initial $180 assessment",
        couple_duration: "/ 50-minute session after an initial $230 assessment",
        ind_desc: "Focused one-on-one virtual teletherapy customized to your healing journey.",
        cpl_service: "Couples Therapy Session",
        cpl_price: "$200",
        cpl_desc: "Collaborative 50-minute virtual session centered on relational repair and intimacy.",
        eval_service: "Immigration Mental Health Evaluations",
        eval_price: "$1,500",
        eval_duration: "/ 2 to 5 hour interview",
        eval_desc: "Offered in person in Charlotte, NC, or online for clients based in NC.",
        superbill: "Out-of-Network Superbills provided upon request for potential direct insurance reimbursement.",
        ins_title: "In-Network Insurance Accepted via Headway",
        ins_sub: "Jessica Bravo accepts the following major insurance plans through Headway for seamless verification and claims:",
        pay_label: "Private-Pay & Direct Payment Methods:"
      },
      cta: {
        badge: "Take the Next Step",
        headline: "Your Story Isn’t Over. Take the First Step Today.",
        subtext: "Booking a free 15-minute phone consultation gives us an opportunity to connect, discuss your goals, and ensure we are the right therapeutic match.",
        primary_btn: "Call for a Free Consultation",
        email_prefix: "Or email"
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
        about: "Acerca de",
        approach: "Método",
        meet_therapist: "Tu Terapeuta",
        services: "Servicios",
        rates: "Tarifas y Seguro",
        book: "Reservar Consulta"
      },
      hero: {
        badge: "Es muchisimo mas que simple terapia de conversación",
        title_start: "Sanar de experiencias pasadas y comenzar a reclamar tu vida",
        title_accent: "comienza aquí.",
        subheadline: "El malestar produce crecimiento. El crecimiento requiere apoyo. No tienes que hacerlo solo. Juntos, podemos crear un camino hacia adelante y comenzar tu viaje de autodescubrimiento.<br/>La psicoterapia se trata de construir una relación más profunda contigo mismo y con todas tus partes. Enraizada en la seguridad. Empoderada para la transformación.<br />Las transiciones de vida, el duelo y el trauma generacional pueden dejarte sintiendo desconexión. A través de teleterapia bilingüe e informada sobre el trauma, Jessica Bravo, LCSW, te ayuda a encontrar tu estabilidad, procesar las luchas del pasado y dar paso a tu renacimiento personal.",
        cta_primary: "Marque Para Consulta Gratuita",
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
        val3_desc: "Atención bilingüe (ES/EN) y culturalmente sensible que honra las raíces, la resiliencia familiar y las vivencias personales.",
        read_story: "Conozca la Historia Completa de Jessica"
      },
      approach_page: {
        meta_title: "Mi Enfoque Terapéutico | Jessica Bravo, LCSW",
        meta_desc: "Más que terapia de conversación: Jessica Bravo, LCSW combina Sistemas Familiares Internos (IFS), Experiencia Somática y Teoría del Apego para apoyar la sanación de mente, cuerpo y alma.",
        hero_badge: "Mi Enfoque",
        hero_title: "Más que terapia de conversación",
        hero_lead: "Sanar experiencias pasadas, conectar con tus sentimientos y crear una relación compasiva con todas tus partes comienza aquí.",
        mbs_heading: "La verdadera sanación requiere un enfoque más profundo y multinivel que incorpore la Mente, el Cuerpo y el Alma",
        mbs_p1: "Crear conciencia y obtener perspectiva sobre ti es solo el primer paso. Conocer tus patrones y mecanismos de afrontamiento produce comprensión, <strong>NO</strong> sanación. Los sentimientos se procesan mediante un enfoque integrado con nuestro cuerpo, <strong>NO</strong> solo con la mente.",
        mbs_p2: "Aquí, tus sentimientos, pensamientos y conductas no se patologizan. Nuestro trabajo consiste en conectar con tus partes y crear una relación compasiva contigo que conduzca a la paz interior y a un cambio duradero.",
        mind_title: "Mente",
        mind_desc: "La conciencia y la perspectiva sobre tus patrones son el primer paso.",
        body_title: "Cuerpo",
        body_desc: "Los sentimientos se procesan a través del cuerpo, no solo de la mente.",
        soul_title: "Alma",
        soul_desc: "Tu energía del Ser guía el camino hacia la paz interior y el cambio duradero.",
        awaits_heading: "Lo Que Te Espera",
        await1: "Un espacio seguro basado en la compasión y la curiosidad",
        await2: "Un enfoque sin juicios para todas tus partes",
        await3: "Aceptación radical de lo que fue, lo que es y lo que no es",
        await4: "Un enfoque de sanación integrado de Mente, Cuerpo y Alma",
        await5: "Un lugar para ganar claridad y ser intencional contigo",
        await6: "Un entorno de apoyo para conectar con tu dolor, permanecer en la incomodidad, acceder a tu energía del Ser y comenzar tu metamorfosis personal",
        modal_tag: "Mi enfoque terapéutico",
        modal_intro: "Combino Sistemas Familiares Internos (IFS), Experiencia Somática y Teoría del Apego para apoyar tu sanación.",
        ifs_heading: "¿Qué es IFS?",
        ifs_p1: "IFS es una modalidad terapéutica basada en evidencia que se usa para identificar las causas profundas de los patrones emocionales y conductuales. Uno de sus conceptos centrales es el Ser, el centro compasivo de toda persona. El Ser está capacitado para guiar y sanar. El término energía del Ser puede usarse indistintamente con energía del Alma.",
        parts_tag: "Entendiendo Tus Partes",
        ifs_p2: "IFS entiende que estamos formados por diversas partes. Todas tienen un papel en nuestro sistema interno y cargan su propia historia. A través de IFS desarrollamos relaciones compasivas con todas nuestras partes. El enfoque de IFS es acceder a nuestra energía del Ser y ayudar a nuestras partes a sanar las cargas que llevan.",
        closing_quote: "IFS es un enfoque transformador, informado en trauma, basado en evidencia y holístico.",
        closing_body: "Permíteme apoyarte mientras aprendes a acceder a tu energía del Ser y comienzas tu metamorfosis personal."
      },
      about_page: {
        meta_title: "Sobre Jessica Bravo, LCSW",
        meta_desc: "Conozca la historia de Jessica Bravo, LCSW: Un viaje no convencional de madre adolescente a psicoterapeuta, arraigado en la resiliencia y la vocación de servicio.",
        hero_badge: "Su Historia y Raíces",
        hero_title: "De Madre Adolescente a Psicoterapeuta",
        hero_subtitle: "Mi viaje poco convencional hacia convertirme en una profesional de ayuda.",
        owner_caption_name: "Jessica Bravo, LCSW",
        owner_caption_title: "Licencia de NC #C017999",
        milestone_header: "Credenciales y Raíces",
        ms1_text: "Graduada de BSW y MSW",
        ms2_text: "Más de 10 Años de Experiencia en Ayuda",
        ms3_text: "Atención Bilingüe (Español e Inglés)",
        lead_p1: "Estadísticamente hablando, no se suponía que obtuviera un título universitario. Mucho menos una maestría.",
        lead_p2: "Detrás de cualquier estadística hay seres humanos capaces e iluminadores. A pesar de todas las abrumadoras probabilidades en nuestra contra, somos luz en nuestro núcleo. Esta poderosa fuente de energía propia vive dentro de todos nosotros y puede guiarnos a salir de las tormentas que la vida nos presente. Sé que lo hizo por mí.",
        chapter2_tag: "Raíces en los Servicios Sociales",
        social_services_p: "Mi carrera comenzó en los servicios sociales. A lo largo de mis años de servicio, conocí a diversas personas que enfrentaban complejas barreras para su bienestar. Su entorno jugó un papel fundamental. Sin embargo, una y otra vez, presencié la capacidad de las personas para superar la adversidad y crear la vida que soñaban posible. Creo en nuestra capacidad de crear, cambiar y crecer más allá de las creencias limitantes impuestas por nuestro condicionamiento social, cultural y familiar.",
        highlight_quote: "El poder de la terapia y el compromiso con uno mismo:",
        vulnerability_p: "La terapia me ha brindado la sabiduría del autodescubrimiento y me ha permitido sentarme con mi dolor. La verdadera fortaleza reside en nuestra capacidad de sentir y ser vulnerables.",
        pillar1_title: "Luz Interior Inherente",
        pillar1_desc: "Cada persona posee una energía propia indestructible capaz de guiarla a través de la adversidad.",
        pillar2_title: "Resiliencia Sistémica",
        pillar2_desc: "Reconocer las barreras del entorno mientras se recupera el poder de reescribir creencias limitantes.",
        pillar3_title: "Valentía en la Vulnerabilidad",
        pillar3_desc: "Aprender a sostener el dolor y las emociones como el verdadero pilar para sanar profundamente.",
        cta_heading: "¿Listo para Reclamar Tu Historia?",
        cta_sub: "Programa una consulta gratuita de 15 minutos para ver cómo podemos trabajar juntos.",
        cta_btn: "Marque Para Consulta Gratuita",
        cta_services_btn: "Explorar Servicios de Terapia",
        approach_btn: "Conozca Mi Enfoque Terapéutico",
        nav_home: "Inicio"
      },
      services: {
        title: "Servicios",
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
        mod4_desc: "Citas virtuales conformes con HIPAA en toda Carolina del Norte.",
        leg_tag: "Bufetes y Clientes Legales",
        leg_title: "Evaluaciones Psicológicas",
        leg_audience: "Para abogados y sus clientes que necesitan una evaluación exhaustiva y informada sobre el trauma para casos de inmigración",
        leg_f1: "Entrevistas Informadas sobre el Trauma y Culturalmente Sensibles",
        leg_f2: "Evaluaciones Bilingües en Inglés y Español",
        leg_f3: "Documentación Escrita Clara y Fundamentada Clínicamente",
        leg_f4: "Ritmo Respetuoso que Protege el Bienestar del Cliente",
        leg_focus_heading: "Nuestro Enfoque:",
        leg_cta: "Solicitar una Evaluación",
        eval_title: "Evaluaciones que Ofrecemos",
        eval1_title: "Asilo de Inmigración (I-589)",
        eval1_desc: "Documentación de persecución pasada, trauma y temor de regresar en apoyo de solicitudes de asilo.",
        eval2_title: "VAWA y Visas U/T",
        eval2_desc: "Evaluaciones para sobrevivientes de abuso, violencia y trata que buscan protección humanitaria.",
        eval3_title: "Exenciones por Dificultad Extrema (I-601 / I-601A)",
        eval3_desc: "Evaluación del impacto psicológico de la separación o reubicación en familiares calificados."
      },
      rates: {
        badge: "Inversión Transparente",
        title: "Tarifas, Seguro y Formas de Pago",
        subtitle: "Estructura de precios transparente con verificación de seguro directa a través de Headway.",
        ind_service: "Sesión de Terapia Individual",
        ind_price: "$150",
        duration: "/ sesión de 50 minutos tras evaluación inicial de $180",
        couple_duration: "/ sesión de 50 minutos tras evaluación inicial de $230",
        ind_desc: "Sesión virtual personalizada 1 a 1 enfocada en tus metas individuales de sanación.",
        cpl_service: "Sesión de Terapia de Pareja",
        cpl_price: "$200",
        cpl_desc: "Sesión virtual colaborativa de 50 minutos enfocada en la reparación del vínculo e intimidad.",
        eval_service: "Evaluaciones Psicológicas para Casos de Inmigración",
        eval_price: "$1,500",
        eval_duration: "/ entrevista de 2 a 5 horas",
        eval_desc: "Disponible en persona en Charlotte, NC, o en línea para clientes residentes en NC.",
        superbill: "Se proporcionan recibos Superbill previa solicitud para posible reembolso directo de seguro.",
        ins_title: "Seguros Médicos Aceptados (En Red) vía Headway",
        ins_sub: "Jessica Bravo acepta los siguientes seguros principales a través de Headway para verificación ágil y cobertura:",
        pay_label: "Métodos de Pago Directo y Privado:"
      },
      cta: {
        badge: "Da el Siguiente Paso",
        headline: "Tu Historia No Ha Terminado. Da el Primer Paso Hoy.",
        subtext: "Reservar una consulta telefónica gratuita de 15 minutos nos permite conectar, hablar sobre tus metas y confirmar si somos el equipo ideal para tu proceso.",
        primary_btn: "Marca Para Reservar una Consulta Gratuita",
        email_prefix: "O envia un mansaje a"
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
    const pageKey = { about: 'about_page', approach: 'approach_page' }[document.body.dataset.page];
    if (pageKey && t[pageKey]) {
      document.title = t[pageKey].meta_title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', t[pageKey].meta_desc);
    } else if (t.meta) {
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
          el.innerHTML = String(val).replace(/\n/g, '<br />');
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
    navMenu.querySelectorAll('.nav-link:not(.nav-dropdown-toggle), .nav-dropdown-link, .btn').forEach(link => {
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
  // 3b. About Dropdown (hover/focus on desktop, tap/click everywhere)
  // --------------------------------------------------------------------------
  const dropdown = document.querySelector('.nav-dropdown');
  const dropdownToggle = document.querySelector('.nav-dropdown-toggle');

  if (dropdown && dropdownToggle) {
    const setDropdown = (open) => {
      dropdown.classList.toggle('open', open);
      dropdownToggle.setAttribute('aria-expanded', String(open));
    };

    dropdownToggle.addEventListener('click', () => {
      setDropdown(!dropdown.classList.contains('open'));
    });

    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) setDropdown(false);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dropdown.classList.contains('open')) {
        setDropdown(false);
        dropdownToggle.focus();
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
  const navLinks = document.querySelectorAll('.nav-link[href^="#"], .nav-dropdown-toggle[data-section]');

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
            if ((link.getAttribute('href') || `#${link.dataset.section}`) === `#${activeId}`) {
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
