import { Dict } from './dict';

export const EN: Dict = {
  langName: 'English',
  nav: {
    home: 'Home',
    services: 'Services',
    prices: 'Prices',
    gallery: 'Gallery',
    faq: 'FAQ',
    contacts: 'Contact',
    book: 'Book now',
    menu: 'Open menu',
    close: 'Close menu',
  },
  common: {
    currency: 'MDL',
    from: 'from',
    call: 'Call',
    bookNow: 'Book now',
    learnMore: 'Details',
    calcPrice: 'Get a price',
    allServices: 'All services',
    duration: 'Duration',
    skipToContent: 'Skip to content',
    language: 'Language',
    writeUs: 'Message us',
    backToTop: 'Back to top',
    breadcrumb: 'Breadcrumb',
    home: 'Home',
  },
  days: { Mo: 'Mon', Tu: 'Tue', We: 'Wed', Th: 'Thu', Fr: 'Fri', Sa: 'Sat', Su: 'Sun' },
  seo: {
    home: {
      title: 'Car Window Tinting in Chișinău — Premium Film | Tonirovka.md',
      description:
        'Car window tinting, heat-rejection film and headlight tinting in Chișinău. Premium carbon and ceramic films, bubble-free install, up to 10-year warranty.',
    },
    services: {
      title: 'Car Tinting Services in Chișinău | Tonirovka.md',
      description:
        'Window tinting, windshield heat-rejection film, headlight and taillight tint, sun strips and tint removal. See all Tonirovka.md services and prices.',
    },
    prices: {
      title: 'Car Tinting Prices — Online Calculator | Tonirovka.md',
      description:
        'Estimate your car tint price online: body type, standard, carbon or ceramic film. Transparent pricing with no hidden fees.',
    },
    gallery: {
      title: 'Gallery & Window Tint Levels | Tonirovka.md',
      description:
        'See what 5%, 15%, 20%, 35%, 50% and 70% window tint looks like, plus our recent car tinting work in Chișinău.',
    },
    faq: {
      title: 'Car Window Tinting FAQ | Tonirovka.md',
      description:
        'How long tinting takes, when you can roll your windows down, which film to choose and how to care for it. Answers from Tonirovka.md experts.',
    },
    contacts: {
      title: 'Contact & Booking — Car Tinting Chișinău | Tonirovka.md',
      description:
        'Address, phone and opening hours of the Tonirovka.md studio in Chișinău. Book online via WhatsApp or Telegram in seconds.',
    },
    notFound: {
      title: 'Page not found | Tonirovka.md',
      description: 'This page does not exist. Return to the Tonirovka.md home page.',
    },
  },
  home: {
    badge: 'Car tinting studio in Chișinău',
    title: 'Car window tinting',
    titleAccent: 'without compromise',
    text: 'Premium carbon and ceramic films installed in a dust-free bay — no bubbles, no specks. Protection from heat, UV and prying eyes, backed by a written warranty.',
    ctaPrimary: 'Book now',
    ctaSecondary: 'Get a price',
    stats: { years: 'years of experience', cars: 'cars tinted', warranty: 'year warranty' },
    tintTitle: 'Choose your tint level',
    tintText:
      'Move the slider to see how the car looks. The percentage is how much light passes through the glass: the lower it is, the darker the window.',
    servicesTitle: 'What we do',
    servicesText: 'Everything for your glass and lights in one place, with certified materials.',
    whyTitle: 'Why Tonirovka.md',
    whyText: 'We tint every car as if it were our own. Every detail matters.',
    why: [
      {
        icon: 'sparkles',
        title: 'Clean bay',
        text: 'We install in a closed, dust-free bay. The result: film with no bubbles, hairs or particles.',
      },
      {
        icon: 'layers',
        title: 'Premium films',
        text: 'Only certified carbon and ceramic films that never fade or turn purple.',
      },
      {
        icon: 'scissors',
        title: 'Precise cut',
        text: 'Exact patterns for every model. The film reaches the very edge of the glass with no visible gaps.',
      },
      {
        icon: 'shield',
        title: 'Written warranty',
        text: 'Up to 10 years of warranty on film and installation. Any defect is fixed free of charge.',
      },
      {
        icon: 'clock',
        title: 'Same day',
        text: 'A full tint takes 2–4 hours. Drop the car off in the morning, pick it up in the afternoon.',
      },
      {
        icon: 'chat',
        title: 'Honest advice',
        text: 'We tell you which tint levels are legal and which film is actually worth the money for you.',
      },
    ],
    processTitle: 'How it works',
    process: [
      { title: 'Booking', text: 'Message us on WhatsApp or Telegram and pick a day and time.' },
      {
        title: 'Consultation',
        text: 'We choose the film and tint level together and show samples on the glass.',
      },
      {
        title: 'Installation',
        text: 'We clean the glass, cut the film to pattern and apply it in a clean bay.',
      },
      {
        title: 'Handover',
        text: 'We inspect every window and give you the warranty and care tips.',
      },
    ],
    filmsTitle: 'Which film to choose',
    filmsText:
      'Every film blocks 99% of UV rays. The difference is heat rejection, durability and clarity.',
    faqTitle: 'Frequently asked questions',
    ctaTitle: 'Ready to transform your car?',
    ctaText: 'Message us now for a free consultation and the nearest available slot.',
  },
  tint: {
    label: 'Visible light transmission (VLT)',
    hint: 'Drag or tap a percentage',
    levels: {
      5: 'Limo — maximum privacy, nothing visible from outside.',
      15: 'Very dark — sporty look, cabin barely visible.',
      20: 'Dark — the most popular choice for rear windows.',
      35: 'Medium — elegant look, good night visibility.',
      50: 'Light — cuts heat and glare with a subtle look.',
      70: 'Almost clear — heat protection without changing the look.',
    },
  },
  films: {
    names: { standard: 'Standard', carbon: 'Carbon', ceramic: 'Ceramic' },
    texts: {
      standard: 'Entry-level dyed film for a small budget. Good looks and UV protection.',
      carbon: 'Deep matte black that never fades. The best value for money.',
      ceramic:
        'Nano-ceramic: maximum heat rejection and perfect clarity, zero signal interference.',
    },
    rows: [
      { label: 'UV blocking', values: ['99%', '99%', '99%'] },
      { label: 'Heat rejection', values: ['up to 30%', 'up to 50%', 'up to 70%'] },
      { label: 'Fade-proof', values: ['—', '✓', '✓'] },
      { label: 'No GPS/GSM interference', values: ['✓', '✓', '✓'] },
      { label: 'Warranty', values: ['3 years', '5 years', '10 years'] },
    ],
    popular: 'Popular',
  },
  services: {
    tinting: {
      name: 'Window tinting',
      short: 'Full or partial tint with carbon or ceramic film at the darkness you want.',
      seo: {
        title: 'Car Window Tinting in Chișinău — from 1000 MDL | Tonirovka.md',
        description:
          'Car window tinting with carbon and ceramic film from 5% to 70%. Dust-free install, no bubbles, up to 10-year warranty. Quick booking.',
      },
      h1: 'Car window tinting',
      intro:
        'Window tint shields your interior from the sun, cuts cabin heat and gives you privacy. We install premium films that look flawless for years.',
      body: [
        'Every film is cut to the exact pattern of your car and heat-shrunk to follow the curve of the glass. Rear windows get a single piece with no seams.',
        'Choose any light transmission level — from 5% (limo effect) to 70% (almost clear). For the front side windows and windshield we advise on the legal limits.',
        'We use carbon and ceramic films that never fade, never turn purple and do not interfere with GPS or mobile signal.',
      ],
      benefits: [
        'Blocks 99% of UV radiation — protects skin and interior',
        'Reduces cabin heat and A/C load',
        'Hides your belongings from prying eyes',
        'Holds shattered glass in place',
        'Cuts glare from the sun and headlights behind',
      ],
      duration: '2–4 hours',
      priceFrom: 1000,
      faq: [
        {
          q: 'Can I roll my windows down right after tinting?',
          a: 'We recommend keeping them up for 3–5 days until the adhesive has fully cured.',
        },
        {
          q: 'Will there be bubbles?',
          a: 'Small hazy spots may appear for a few days — that is moisture evaporating on its own. Air or dust bubbles do not happen thanks to our clean bay.',
        },
      ],
    },
    athermal: {
      name: 'Heat-rejection film',
      short: 'Nearly clear film for windshield and side windows — stops heat, not light.',
      seo: {
        title: 'Heat-Rejection Windshield Film in Chișinău | Tonirovka.md',
        description:
          'Ceramic heat-rejection film for windshield and windows: up to 70% less heat, 99% UV protection, nearly clear. Professional install with warranty.',
      },
      h1: 'Heat-rejection film for windshield and windows',
      intro:
        'Heat-rejection film is almost invisible, yet it blocks most of the infrared radiation that heats your car in summer. Ideal for the windshield and front windows.',
      body: [
        'Nano-ceramic heat-rejection film lets through 70–80% of visible light, so visibility stays the same, while rejecting up to 70% of solar heat. The cabin is noticeably cooler and the A/C works less.',
        'On the windshield we apply the film from the inside, in a single heat-formed piece. It does not interfere with rain sensors, cameras or GPS.',
        'Combine heat-rejection film with classic rear window tint for complete cabin protection.',
      ],
      benefits: [
        'Rejects up to 70% of solar heat',
        'Practically clear — perfect visibility at night too',
        'Blocks 99% of UV rays',
        'No interference with sensors, cameras or GPS/GSM',
        'Reduces glare and eye strain',
      ],
      duration: '2–3 hours',
      priceFrom: 1600,
      faq: [
        {
          q: 'Is heat-rejection film visible on the windshield?',
          a: 'Barely. Some films have a slight blue or green hue visible only at certain angles.',
        },
      ],
    },
    lights: {
      name: 'Headlight & taillight tint',
      short:
        'Smoked film for headlights and taillights — aggressive look and stone-chip protection.',
      seo: {
        title: 'Headlight & Taillight Tinting in Chișinău | Tonirovka.md',
        description:
          'Headlight and taillight tinting with smoked or clear protective film. Sporty look, protection from stone chips and scratches. Same-day install.',
      },
      h1: 'Headlight and taillight tinting',
      intro:
        'Light film transforms the look of your car and protects headlight plastic from stone chips, scratches and yellowing.',
      body: [
        'For taillights we offer smoked films of various shades — from a subtle tint to a fully blacked-out look. For headlights we recommend clear or very light smoke films that do not reduce light output.',
        'The film is made of flexible polyurethane, applied with heat and removable at any time without damaging the lights.',
      ],
      benefits: [
        'Sporty, unique look',
        'Protection from stone chips and scratches',
        'Prevents headlight yellowing',
        'Removes without residue',
      ],
      duration: '1–2 hours',
      priceFrom: 700,
      faq: [],
    },
    strip: {
      name: 'Windshield sun strip',
      short: 'Tinted strip across the top of the windshield — protects your eyes from low sun.',
      seo: {
        title: 'Windshield Sun Strip — from 300 MDL | Tonirovka.md',
        description:
          'Tinted sun strip across the top of the windshield. Protection from sunrise and sunset glare, sporty look. Installed in 30 minutes.',
      },
      h1: 'Windshield sun strip',
      intro:
        'A tinted strip across the top of the windshield cuts glare from the low morning and evening sun and gives your car a sporty look.',
      body: [
        'We install the strip at the width you want, within the legally allowed zone, with a perfectly straight edge. Choose black, grey or gradient.',
        'Installation takes about 30 minutes and can be done together with window tinting.',
      ],
      benefits: ['Less sun glare', 'Sporty look', 'Quick install', 'Affordable'],
      duration: '30 minutes',
      priceFrom: 300,
      faq: [],
    },
    removal: {
      name: 'Tint removal',
      short: 'We remove old film without damaging the glass or the defroster lines.',
      seo: {
        title: 'Car Window Tint Removal in Chișinău | Tonirovka.md',
        description:
          'We remove old, faded or bubbling tint without damaging the glass or rear defroster. Complete adhesive cleanup. From 400 MDL.',
      },
      h1: 'Car window tint removal',
      intro:
        'Old film faded, bubbled, or you need to pass inspection? We remove it cleanly, with no scratches and no harm to the rear defroster.',
      body: [
        'We use steam and special tools that lift the film together with the adhesive. On heated rear windows we work especially carefully to keep the lines intact.',
        'After removal the glass is fully cleaned and ready for new film — we can install it the same day.',
      ],
      benefits: [
        'No scratches on the glass',
        'Defroster lines stay intact',
        'Complete adhesive removal',
        'New film the same day',
      ],
      duration: '1–2 hours',
      priceFrom: 400,
      faq: [],
    },
  },
  servicesPage: {
    h1: 'Car tinting services',
    intro:
      'From a simple sun strip to full ceramic tint — choose the service you need or message us for a recommendation.',
  },
  service: {
    benefitsTitle: 'What you get',
    faqTitle: 'Questions about this service',
    otherTitle: 'Other services',
    priceNote: 'The final price depends on your car model and chosen film.',
  },
  prices: {
    h1: 'Car tinting prices',
    intro:
      'Choose your body type, film and the windows to tint — the calculator shows an estimate instantly.',
    calcTitle: 'Price calculator',
    body: 'Body type',
    film: 'Film type',
    zones: 'What to tint',
    bodies: {
      hatchback: 'Hatchback',
      sedan: 'Sedan / Wagon',
      suv: 'SUV / Crossover',
      minivan: 'Minivan',
    },
    zoneNames: {
      rear: 'Rear half (rear sides + back glass)',
      front: 'Front side windows',
      strip: 'Windshield sun strip',
      windshield: 'Heat-rejection windshield',
      lights: 'Taillights / headlights',
    },
    total: 'Estimated price',
    note: 'This is an estimate. We confirm the exact price once we know your car model.',
    tableTitle: 'Base prices',
    book: 'Book with this configuration',
    message: 'Estimate',
  },
  gallery: {
    h1: 'Gallery & tint levels',
    intro: 'See what every tint level looks like, plus our latest work.',
    levelsTitle: 'Tint levels',
    levelsText: 'The percentage shows how much visible light passes through the glass (VLT).',
    worksTitle: 'Our work',
    worksEmpty: 'We post our latest work on Instagram every day.',
    follow: 'Follow us on Instagram',
  },
  faq: {
    h1: 'Car tinting FAQ',
    intro: 'Answers to the questions our customers ask most often.',
    items: [
      {
        q: 'How long does a full car tint take?',
        a: 'Usually 2–4 hours depending on the model and number of windows. A sun strip takes about 30 minutes.',
      },
      {
        q: 'How long before I can roll my windows down?',
        a: '3–5 days. That is how long the adhesive needs to fully cure. In cold weather it may take a little longer.',
      },
      {
        q: 'What tint level is legal?',
        a: 'Rear windows usually have no restrictions. For the windshield and front side windows the law sets a minimum light transmission — we advise you before installation and suggest a legal option.',
      },
      {
        q: 'What is the difference between carbon and ceramic film?',
        a: 'Neither fades nor affects signal. Ceramic rejects significantly more heat and offers better clarity, but costs more.',
      },
      {
        q: 'What warranty do you offer?',
        a: 'Depending on the film — from 3 to 10 years. It covers fading, peeling and bubbling.',
      },
      {
        q: 'How do I care for tinted windows?',
        a: 'Clean with a soft microfibre cloth and ammonia-free cleaners. Avoid abrasives and scrapers on the inside.',
      },
      {
        q: 'Does tint affect the rear defroster?',
        a: 'No. The film goes over the defroster lines and does not affect them. When removing tint we work carefully to keep them intact.',
      },
      {
        q: 'Do I need to leave the car all day?',
        a: 'No. Most jobs are done in a few hours. Wait in our lounge or we will let you know when the car is ready.',
      },
    ],
  },
  contacts: {
    h1: 'Contact',
    intro: 'Call, message or drop by the studio. We will help you choose the right film.',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    hours: 'Opening hours',
    closed: 'Sunday — closed',
    mapTitle: 'Tonirovka.md studio map',
  },
  booking: {
    title: 'Book online',
    text: 'Fill in the form — your message opens in WhatsApp or Telegram, ready to send.',
    name: 'Name',
    phone: 'Phone',
    car: 'Car',
    carPlaceholder: 'e.g. Toyota Camry 2020',
    service: 'Service',
    date: 'Preferred date',
    comment: 'Comment',
    sendWhatsapp: 'Send via WhatsApp',
    sendTelegram: 'Send via Telegram',
    note: 'During opening hours we usually reply within 15 minutes.',
    greeting: 'Hello! I would like to book an appointment.',
    copied: 'Message copied — paste it into the Telegram chat.',
    required: 'Please enter your name and phone',
  },
  notFound: {
    h1: 'Page not found',
    text: 'It looks like this page does not exist or has been moved.',
    back: 'Back to home page',
  },
  footer: {
    about:
      'Professional car tinting studio. Premium films, clean-bay installation and a written warranty.',
    rights: 'All rights reserved.',
    legal: 'We advise on the tint levels permitted by law.',
    navTitle: 'Navigation',
    servicesTitle: 'Services',
    contactsTitle: 'Contact',
  },
};
