import { Dict } from './dict';

export const EN: Dict = {
  langName: 'English',
  nav: {
    home: 'Home',
    services: 'Services',
    gallery: 'Gallery',
    faq: 'FAQ',
    contacts: 'Contact',
    book: 'Book now',
    menu: 'Open menu',
    close: 'Close menu',
  },
  common: {
    from: 'from',
    onRequest: 'on request',
    call: 'Call',
    bookNow: 'Book now',
    learnMore: 'Details',
    allServices: 'All services',
    duration: 'Duration',
    skipToContent: 'Skip to content',
    language: 'Language',
    writeUs: 'Message us',
    backToTop: 'Back to top',
    breadcrumb: 'Breadcrumb',
    tagline: 'Car tint & detailing',
    home: 'Home',
  },
  days: { Mo: 'Mon', Tu: 'Tue', We: 'Wed', Th: 'Thu', Fr: 'Fri', Sa: 'Sat', Su: 'Sun' },
  seo: {
    home: {
      title: 'Car Tinting & Detailing in Chișinău | Tonirovka.md',
      description:
        'Window tinting, car wrapping, headlight film, polishing, interior cleaning, starlight headliners and ambient lighting in Chișinău. Up to 10-year warranty.',
    },
    services: {
      title: 'Car Tinting & Detailing Services in Chișinău | Tonirovka.md',
      description:
        'Car and building tinting, wraps, headlight film, polishing, interior cleaning, dry fog, headliners, starlight, ambient lighting, AC recharge and EVA mats.',
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
    badge: 'Tinting & detailing in Chișinău',
    title: 'Car window tinting',
    titleAccent: 'without compromise',
    text: 'Premium films installed in a dust-free bay — no bubbles, no specks. Plus wraps, polishing, interior cleaning and cabin upgrades, all in one studio with a written warranty.',
    ctaPrimary: 'Book now',
    ctaSecondary: 'All services',
    stats: { years: 'years of experience', cars: 'cars tinted', warranty: 'year warranty' },
    tintTitle: 'Choose your tint level',
    tintText:
      'Move the slider to see how the car looks. The percentage is how much light passes through the glass: the lower it is, the darker the window.',
    servicesTitle: 'What we do',
    servicesText:
      'Tinting, wraps, detailing and cabin upgrades in one place, with certified materials.',
    whyTitle: 'Why Tonirovka.md',
    whyText: 'We treat every car as if it were our own. Every detail matters.',
    why: [
      {
        icon: 'sparkles',
        title: 'Clean bay',
        text: 'We install in a closed, dust-free bay. The result: film with no bubbles, hairs or particles.',
      },
      {
        icon: 'layers',
        title: 'Premium films',
        text: 'Only certified films that never fade or turn purple.',
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
    names: { standard: 'Standard', ceramic: 'Ceramic' },
    texts: {
      standard: 'Entry-level dyed film for a small budget. Good looks and UV protection.',
      ceramic:
        'Nano-ceramic: maximum heat rejection and perfect clarity, zero signal interference.',
    },
    rows: [
      { label: 'UV blocking', values: ['99%', '99%'] },
      { label: 'Heat rejection', values: ['up to 30%', 'up to 70%'] },
      { label: 'Fade-proof', values: ['—', '✓'] },
      { label: 'No GPS/GSM interference', values: ['✓', '✓'] },
      { label: 'Warranty', values: ['3 years', '10 years'] },
    ],
    popular: 'Popular',
  },
  services: {
    tinting: {
      name: 'Car window tinting',
      short: 'Full or partial tint with standard or ceramic film at the darkness you want.',
      seo: {
        title: 'Car Window Tinting in Chișinău — from €60 | Tonirovka.md',
        description:
          'Car window tinting with standard and ceramic film from 5% to 70%. Dust-free install, no bubbles, up to 10-year warranty. Quick booking.',
      },
      h1: 'Car window tinting',
      intro:
        'Tint protects your interior from the sun, keeps the cabin cooler and gives you privacy. We install premium films that look flawless for years.',
      body: [
        'Every film is cut to the exact pattern of your car and heat-shrunk on the glass so it follows the curve perfectly. Rear windows get a single piece with no seams.',
        'Choose any light transmission from 5% (limo look) to 70% (almost clear). For the front side windows and windshield we advise you on the legal limits.',
        'Ceramic films never fade, never turn purple and do not interfere with GPS or mobile signal.',
      ],
      benefits: [
        'Blocks 99% of UV — protects your skin and interior',
        'Keeps the cabin cooler and eases the AC',
        'Hides belongings from prying eyes',
        'Holds the glass together if it breaks',
        'Reduces glare from the sun and headlights behind you',
      ],
      duration: '2–4 hours',
      priceFrom: 60,
      faq: [
        {
          q: 'Can I roll my windows down right after tinting?',
          a: 'We recommend keeping them up for 3–5 days until the adhesive fully cures.',
        },
        {
          q: 'Will there be bubbles?',
          a: 'Small hazy patches may appear in the first days — that is moisture and it evaporates on its own. There are no air or dust bubbles thanks to our clean bay.',
        },
      ],
    },
    buildings: {
      name: 'Building window tinting',
      short: 'Solar control and mirror films for homes, offices and shop windows.',
      seo: {
        title: 'Building & Office Window Film in Chișinău | Tonirovka.md',
        description:
          'Window film for apartments, offices, shopfronts and glass facades: solar control, mirror and frosted films. On-site measuring, turnkey installation.',
      },
      h1: 'Window film for buildings and facades',
      intro:
        'Architectural film cuts the heat indoors, stops furniture from fading and hides the interior from the street — without replacing the glass.',
      body: [
        'We install solar control, mirror, frosted and decorative films on the windows of apartments and houses, office glass partitions, shopfronts and glass facades.',
        'We come to measure, pick the right film for the job and price it by glass area. Installation is clean and needs no window removal.',
      ],
      benefits: [
        'Less heat in summer and lower AC bills',
        'Furniture and floors do not fade',
        'Daytime privacy — no view in from outside',
        'Glass holds together on impact',
      ],
      duration: 'from 1 day',
      priceFrom: null,
      faq: [],
    },
    headlights: {
      name: 'Headlight film',
      short: 'Clear or smoked protective film for headlights and taillights.',
      seo: {
        title: 'Headlight Protection Film in Chișinău — from €100 | Tonirovka.md',
        description:
          'Clear polyurethane or smoked film for headlights and taillights. Protection from stone chips and yellowing, plus a sporty look. From €100.',
      },
      h1: 'Headlight protection film',
      intro:
        'Film on your lights protects the plastic from stones, scratches and yellowing, and a smoked version changes the look of the car completely.',
      body: [
        'For headlights we recommend clear or lightly smoked polyurethane — it does not dim the beam. For taillights there are smoked films in several shades, up to a fully blacked-out look.',
        'The stretchy film is applied with heat, follows the shape of the lamp and can be removed at any time without harming the lens.',
      ],
      benefits: [
        'Protection from stones and sand',
        'No yellowing or hazing',
        'Sporty look with smoked film',
        'Removes without residue',
      ],
      duration: '1–2 hours',
      priceFrom: 100,
      faq: [],
    },
    wrap: {
      name: 'Car wrapping',
      short: 'Paint protection film or colour vinyl — protect the paint or change the colour.',
      seo: {
        title: 'Car Wrapping & PPF in Chișinău — from €300 per panel | Tonirovka.md',
        description:
          'Paint protection film and colour vinyl wraps: single panels, high-impact areas or the whole car. From €300 per panel.',
      },
      h1: 'Car wrapping and paint protection film',
      intro:
        'Clear polyurethane protects the factory paint from chips and scratches, while colour vinyl changes the look of the car without a respray.',
      body: [
        'Wrap just the high-impact areas — bonnet, bumper, wings, mirrors — or the whole car. We tuck the film around panel edges so no edges show.',
        'Colour film in gloss, matte or satin changes the look and keeps the original paint safe underneath. It peels off cleanly whenever you want the factory colour back.',
      ],
      benefits: [
        'Protects paint from chips, sand and road salt',
        'A new colour without a respray',
        'Keeps resale value up',
        'Removes without harming the paint',
      ],
      duration: 'from 1 day',
      priceFrom: 300,
      priceUnit: 'per panel',
      faq: [],
    },
    polishing: {
      name: 'Paint polishing',
      short: 'We remove light scratches and holograms and bring back a deep gloss.',
      seo: {
        title: 'Car Paint Polishing in Chișinău — from €200 | Tonirovka.md',
        description:
          'Paint correction and restoration polishing: removes swirl marks, holograms and dull paint. Protective coating after polishing. From €200.',
      },
      h1: 'Car paint polishing',
      intro:
        'Polishing removes a thin damaged layer of clear coat along with fine scratches and swirls, so the car looks showroom-new again.',
      body: [
        'First we wash the car, remove tar and iron fallout and measure the paint thickness. Then we polish in several stages, choosing compounds and pads for every panel.',
        'Afterwards we recommend wax or a ceramic coating — the gloss lasts longer and dirt sticks less.',
      ],
      benefits: [
        'Removes light scratches and holograms',
        'Deep, mirror-like gloss',
        'Safe — we measure paint thickness',
        'Perfect prep before selling',
      ],
      duration: '1–2 days',
      priceFrom: 200,
      faq: [],
    },
    cleaning: {
      name: 'Interior deep cleaning',
      short: 'Deep cleaning of seats, headliner, carpets and plastics.',
      seo: {
        title: 'Car Interior Deep Cleaning in Chișinău — from €100 | Tonirovka.md',
        description:
          'Full interior detailing: seats, headliner, carpets, boot and plastics. Stain and odour removal, careful leather care. From €100.',
      },
      h1: 'Car interior deep cleaning',
      intro:
        'We bring back a clean, fresh cabin: stains, dust and dirt come out of every fabric and gap.',
      body: [
        'We vacuum out dust and debris and clean the seats, headliner, carpets, doors and boot with professional products and an extractor. Plastics and leather are cleaned and protected.',
        'After cleaning we dry the interior thoroughly, so you pick the car up dry and ready to drive.',
      ],
      benefits: [
        'Removes stains and ground-in dirt',
        'Eliminates bad odours',
        'Gentle care for leather and Alcantara',
        'Dry interior at handover',
      ],
      duration: '4–8 hours',
      priceFrom: 100,
      faq: [],
    },
    dryFog: {
      name: 'Dry fog treatment',
      short: 'Neutralises smoke, pet and damp odours throughout the cabin.',
      seo: {
        title: 'Dry Fog Odour Removal for Cars in Chișinău — from €20 | Tonirovka.md',
        description:
          'Dry fog treatment removes smoke, pet, burnt and damp smells and reaches the vents and upholstery. Fast and safe. From €20.',
      },
      h1: 'Dry fog odour treatment',
      intro:
        'Dry fog gets into the upholstery, headliner and air ducts and breaks down odour molecules instead of masking them.',
      body: [
        'A fogger turns the neutralising liquid into ultra-fine particles that fill the whole cabin, including the ventilation system, without leaving moisture.',
        'It takes about half an hour, and after airing only a light neutral scent remains. A perfect add-on to interior cleaning.',
      ],
      benefits: [
        'Removes smoke, pet and damp smells',
        'Reaches vents and upholstery',
        'No moisture or streaks',
        'About 30 minutes',
      ],
      duration: '30–40 minutes',
      priceFrom: 20,
      faq: [],
    },
    headliner: {
      name: 'Headliner upholstery',
      short: 'A new headliner in Alcantara, eco-leather or fabric.',
      seo: {
        title: 'Car Headliner Replacement in Chișinău — from €250 | Tonirovka.md',
        description:
          'Headliner re-upholstery in Alcantara, eco-leather or fabric. We fix sagging and match the pillars and sun visors. From €250.',
      },
      h1: 'Car headliner upholstery',
      intro:
        'Sagging or faded headliner? We re-cover it in new material — the cabin looks more upmarket and tidy.',
      body: [
        'We take the headliner out, strip the old fabric and foam and re-cover it with the material you choose using heat-resistant adhesive. Pillars, visors and handles can be done to match.',
        'Combine it with a starlight headliner or ambient lighting — we route the fibre optics and wiring before covering.',
      ],
      benefits: [
        'No more sagging',
        'Alcantara, eco-leather or fabric',
        'Matching pillars and visors',
        'Pairs with a starlight headliner',
      ],
      duration: '1–2 days',
      priceFrom: 250,
      faq: [],
    },
    ambient: {
      name: 'Ambient lighting',
      short: 'Contour lighting in the cabin with colours picked from an app.',
      seo: {
        title: 'Car Ambient Lighting in Chișinău — from €300 | Tonirovka.md',
        description:
          'Ambient contour lighting installed in your cabin: any colour, dynamic modes, control from your phone. From €300.',
      },
      h1: 'Ambient interior lighting',
      intro:
        'Soft contour lighting along the dashboard and doors makes the cabin feel warm and premium, like in luxury cars.',
      body: [
        'We build LED lines into the dashboard, doors, footwells and centre console. Wiring is hidden, with no unnecessary holes.',
        'Colour and brightness are changed from your phone, and dynamic modes fade between colours or react to music.',
      ],
      benefits: [
        'Dozens of colours and modes',
        'Phone control',
        'Hidden, tidy wiring',
        'A premium-cabin feel',
      ],
      duration: '1 day',
      priceFrom: 300,
      faq: [],
    },
    starlight: {
      name: 'Starlight headliner',
      short: 'Hundreds of twinkling stars on your headliner — Rolls-Royce style.',
      seo: {
        title: 'Starlight Headliner in Chișinău — from €400 | Tonirovka.md',
        description:
          'Starlight headliner for your car: fibre optics, twinkle and shooting-star effects, phone control. From €400.',
      },
      h1: 'Starlight headliner',
      intro:
        'Hundreds of fibre-optic stars on the roof turn every drive into a night ride under an open sky.',
      body: [
        'We take the headliner out and hand-place fibre-optic strands of different thicknesses so the stars vary in brightness like real ones. The light source is hidden behind the trim.',
        'Add twinkle, shooting stars and colour changes — all controlled from your phone. Pairs perfectly with headliner upholstery.',
      ],
      benefits: [
        'Hundreds of stars of varying brightness',
        'Twinkle and shooting stars',
        'Colour changes from your phone',
        'Fibre optics stay cool',
      ],
      duration: '1–2 days',
      priceFrom: 400,
      faq: [],
    },
    aircon: {
      name: 'AC recharge',
      short: 'Diagnostics, leak check and refrigerant recharge.',
      seo: {
        title: 'Car AC Recharge in Chișinău — from €40 | Tonirovka.md',
        description:
          'Car air conditioning recharge: vacuum, leak test and the exact amount of refrigerant and oil for your car. From €40.',
      },
      h1: 'Car AC recharge',
      intro:
        'AC not cooling? We check the system for leaks and recharge it with the exact amount of refrigerant your car needs.',
      body: [
        'We recover the old refrigerant, vacuum the system and check that it holds pressure. Then we fill refrigerant and oil to the factory specification.',
        'Finally we measure the vent temperature. On request we treat the evaporator and vents against bacteria and odours.',
      ],
      benefits: [
        'Leak test before recharging',
        'Exact factory-spec amount',
        'Cold air within 30–60 minutes',
        'Antibacterial treatment on request',
      ],
      duration: '30–60 minutes',
      priceFrom: 40,
      faq: [],
    },
    evaMats: {
      name: 'Custom EVA mats',
      short: 'Honeycomb mats cut to your car — they trap water and dirt.',
      seo: {
        title: 'Custom EVA Car Mats in Chișinău — from €50 | Tonirovka.md',
        description:
          'EVA floor mats made to your car: cabin and boot, your choice of cell and edging colours. Odourless and easy to wash. From €50.',
      },
      h1: 'Custom EVA floor mats',
      intro:
        'Honeycomb EVA mats trap water, snow and sand, so your floor stays dry and clean. We make them to the exact shape of your car.',
      body: [
        'We cut the mats to your model’s pattern — they cover the whole floor and stay in place. Pick the cell and edging colours from dozens of options.',
        'EVA is light, odourless, does not crack in frost and rinses clean with water in a minute.',
      ],
      benefits: [
        'Exact fit for your floor',
        'Trap water, snow and dirt',
        'Clean in a minute',
        'Your choice of colours',
      ],
      duration: '1–3 days',
      priceFrom: 50,
      faq: [],
    },
  },
  servicesPage: {
    h1: 'Our services',
    intro:
      'From tinting and wraps to interior cleaning and starlight headliners — choose the service you need or message us for a recommendation.',
  },
  service: {
    benefitsTitle: 'What you get',
    faqTitle: 'Questions about this service',
    otherTitle: 'Other services',
    priceNote: 'The final price depends on your car model and the scope of work.',
    galleryTitle: 'Gallery',
    photo: 'Photo',
    prev: 'Previous photo',
    next: 'Next photo',
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
        q: 'What is the difference between standard and ceramic film?',
        a: 'Both block 99% of UV. Ceramic rejects significantly more heat, offers better clarity and never fades, but costs more.',
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
      'Car tinting and detailing studio. Premium materials, clean-bay work and a written warranty.',
    rights: 'All rights reserved.',
    legal: 'We advise on the tint levels permitted by law.',
    navTitle: 'Navigation',
    servicesTitle: 'Services',
    contactsTitle: 'Contact',
  },
};
