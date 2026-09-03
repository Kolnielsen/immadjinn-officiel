import { ServiceItem, StatItem, Testimonial } from '../types';

export const COMPANY_INFO = {
  name: 'ImmaDjinn SA',
  tagline: 'Développeur de Projets Immobiliers de Prestige',
  location: 'Genève & Vaud, Suisse',
  cantons: 'Cantons de Genève et Vaud',
  address: 'Cours des Bastions 13, 1205 Genève',
  addressNote: 'Siège social & adresse postale',
  phone: '+41 22 512 01 20',
  email: 'hello@immadjinn.ch',
  openingHours: 'Lun - Ven : 08h30 - 18h30 (Permanence)',
  meetingInfo: 'Rendez-vous et audit directement sur votre parcelle ou bien immobilier (Genève & canton de Vaud)',
  description: "Développement de projet immobilier depuis un terrain vierge ou d'un bâti existant, réalisation de plan avec des partenaires, accompagnement dans le montage du dossier et le financement, recherche d'entreprises de construction adaptées au projet, finalisation jusqu'à la commercialisation.",
  orchestrationSummary: "ImmaDjinn SA intervient comme chef d'orchestre sur l'ensemble du cycle de développement sur les cantons de Genève et Vaud. Nous faisons le lien entre propriétaires fonciers, investisseurs, architectes et entreprises de construction."
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'valorisation-fonciere',
    number: '01',
    title: 'Valorisation Foncière & Requalification',
    shortDesc: 'Analyse de potentiel sur terrains vierges ou restructuration d’ensembles existants (conversion, rénovation lourde).',
    fullDesc: 'Nous identifions et révélons le potentiel inexploité de chaque parcelle ou bâtiment. De l’audit urbanistique et environnemental à la densification raisonnée, notre approche maximise la rentabilité et la durabilité de votre patrimoine foncier.',
    benefits: [
      'Audit juridique, réglementaire et foncier approfondi (normes suisses)',
      'Étude de faisabilité et potentiel de densification',
      'Reconversion de bâtiments tertiaires en résidentiel haut de gamme',
      'Optimisation de l’indice de constructibilité et respect du patrimoine'
    ],
    iconName: 'Landmark',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    category: 'core'
  },
  {
    id: 'conception-architecture',
    number: '02',
    title: 'Conception & Partenariats d’Architecture',
    shortDesc: 'Élaboration des plans et concepts architecturaux en collaboration avec des partenaires de premier ordre.',
    fullDesc: 'Nous fédérons les meilleurs bureaux d’architecture et d’ingénierie suisses. Chaque ligne dessinée allie élégance intemporelle, fonctionnalité optimale des espaces et exemplarité environnementale (standards Minergie-P / SNBS).',
    benefits: [
      'Coordination avec des cabinets d’architectes renommés',
      'Modélisation BIM et plans d’avant-projet 3D haute définition',
      'Design intérieur d’exception et sélection de matériaux nobles',
      'Intégration bioclimatique et transition énergétique'
    ],
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    category: 'core'
  },
  {
    id: 'ingenierie-financiere',
    number: '03',
    title: 'Ingénierie Financière & Montage',
    shortDesc: 'Structuration complète du dossier de promotion, obtention des autorisations et recherche de financements sur mesure.',
    fullDesc: 'Un projet d’envergure requiert une assise financière infaillible. ImmaDjinn structure le plan financier, négocie les meilleures conditions de crédit de construction auprès des banques suisses et sécurise les autorisations administratives.',
    benefits: [
      'Élaboration du business plan de promotion et stress-testing',
      'Négociation des crédits de construction et fonds propres',
      'Constitution et défense des dossiers de permis de construire (APA / DD)',
      'Sécurisation fiscale, notariale et contractuelle'
    ],
    iconName: 'LineChart',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    category: 'core'
  },
  {
    id: 'pilotage-construction',
    number: '04',
    title: 'Pilotage de la Construction',
    shortDesc: 'Sélection des entreprises générales ou techniciens adaptés à la typologie du projet, et suivi d’exécution.',
    fullDesc: 'Maître d’ouvrage délégué, ImmaDjinn assure le respect absolu des délais, des budgets et des standards d’exécution suisses. Nous sélectionnons rigoureusement les corps d’état pour une mise en œuvre sans compromis.',
    benefits: [
      'Appels d’offres et sélection des entreprises générales certifiées',
      'Contrôle continu des coûts et respect strict du calendrier',
      'Coordination des ingénieurs spécialisés (statique, thermique, acoustique)',
      'Réception d’ouvrage et levée méthodique des réserves'
    ],
    iconName: 'HardHat',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    category: 'core'
  },
  {
    id: 'commercialisation',
    number: '05',
    title: 'Mise en Marché & Commercialisation',
    shortDesc: 'Stratégie de vente ou de location pour concrétiser la valeur de l’actif.',
    fullDesc: 'De la création de l’identité de marque du programme à la remise des clés aux acquéreurs ou locataires, nous déployons une stratégie marketing ciblée auprès d’une clientèle qualifiée suisse et internationale.',
    benefits: [
      'Positionnement marketing haut de gamme et supports immersifs (3D, VR)',
      'Gestion des ventes sur plans (VEFA) et contrats de réservation',
      'Réseau d’acheteurs privés et investisseurs institutionnels',
      'Accompagnement personnalisé des acquéreurs jusqu’à la signature notariée'
    ],
    iconName: 'KeyRound',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    category: 'core'
  }
];

export const ADVISORY_SERVICES: ServiceItem[] = [
  {
    id: 'estimation-immobiliere',
    number: '06',
    title: 'Estimation de votre bien immobilier',
    shortDesc: 'Évaluation précise et confidentielle de votre terrain ou bien bâti selon les dynamiques des marchés genevois et vaudois.',
    fullDesc: 'Nos experts analysent la valeur vénale immédiate et le potentiel de développement futur de votre propriété foncière pour vous offrir une vision stratégique claire à Genève et dans le canton de Vaud.',
    benefits: [
      'Méthode comparative et valeur hédoniste (Genève & Vaud)',
      'Analyse du potentiel constructible résiduel & droit à bâtir',
      'Rapport d’expertise complet sous 48 heures',
      'Confidentialité absolue garantie'
    ],
    iconName: 'Calculator',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    category: 'advisory'
  },
  {
    id: 'etude-pret-immobilier',
    number: '07',
    title: 'Étude pour votre prêt immobilier',
    shortDesc: 'Accompagnement personnalisé et mise en relation avec des acteurs bancaires reconnus de la place suisse.',
    fullDesc: 'Bénéficiez d’une analyse financière sur-mesure pour structurer votre financement hypothécaire ou crédit de promotion avec les meilleures conditions du marché.',
    benefits: [
      'Comparatif des taux auprès des institutions bancaires suisses partenaires',
      'Optimisation des ratios de fonds propres et amortissement',
      'Montages financiers complexes (investisseurs, SARL, copropriété)',
      'Étude préliminaire sans engagement'
    ],
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    category: 'advisory'
  }
];

export const STATS: StatItem[] = [
  {
    value: '100%',
    label: 'Maîtrise du cycle',
    detail: 'Du terrain vierge à la commercialisation finale'
  },
  {
    value: 'GE & VD',
    label: 'Genève & Vaud',
    detail: 'Expertise pointue des marchés et des règlements cantonaux'
  },
  {
    value: '4 Pôles',
    label: 'Écosystème unifié',
    detail: 'Propriétaires, Investisseurs, Architectes, Constructeurs'
  },
  {
    value: 'Sur-Mesure',
    label: 'Ingénierie & Rigueur',
    detail: 'Accompagnement d’excellence à chaque étape clé'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "ImmaDjinn SA a su transformer notre terrain familial à Cologny en un projet résidentiel d'exception. Leur capacité à orchestrer le permis de construire et le financement nous a apporté une sérénité totale.",
    author: "Marc-Antoine D.",
    role: "Propriétaire foncier",
    project: "Projet Résidentiel Privé, Cologny (Genève)"
  },
  {
    quote: "La rigueur financière et le suivi de chantier d'ImmaDjinn sont remarquables. Sur notre opération sur La Côte vaudoise, la transparence et le respect scrupuleux du calendrier ont garanti le rendement prévu.",
    author: "Éléonore de V.",
    role: "Investisseuse institutionnelle",
    project: "Ensemble Résidentiel, Nyon / La Côte (Vaud)"
  },
  {
    quote: "Collaborer avec ImmaDjinn est une expérience fluide : ils maîtrisent les spécificités des règlements d'urbanisme à Genève comme dans le canton de Vaud, tout en respectant l'audace architecturale.",
    author: "Benoît K.",
    role: "Architecte Partenaire SIA",
    project: "Promotion Contemporaine, Lausanne / Champel"
  }
];

export const PILLARS_ORCHESTRATION = [
  {
    title: 'Propriétaires Fonciers',
    description: 'Révéler la pleine valeur de votre terrain ou bien existant sans supporter les aléas techniques et administratifs.',
    badge: 'Valorisation Patrimoniale'
  },
  {
    title: 'Investisseurs',
    description: 'Bénéficier de projets sécurisés, montés avec rigueur financière et dotés d’un potentiel de rentabilité optimisé.',
    badge: 'Rentabilité & Sérénité'
  },
  {
    title: 'Architectes d’Élite',
    description: 'Exprimer une vision architecturale forte dans un cadre budgétaire clair et rigoureusement coordonné.',
    badge: 'Excellence Spatiale'
  },
  {
    title: 'Entreprises de Construction',
    description: 'Intervenir sur des chantiers préparés avec précision, avec un interlocuteur unique garantissant la fluidité opérationnelle.',
    badge: 'Efficacité d’Exécution'
  }
];
