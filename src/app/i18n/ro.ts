import { Dict } from './dict';

export const RO: Dict = {
  langName: 'Română',
  nav: {
    home: 'Acasă',
    services: 'Servicii',
    gallery: 'Galerie',
    faq: 'Întrebări',
    contacts: 'Contacte',
    book: 'Programează-te',
    menu: 'Deschide meniul',
    close: 'Închide meniul',
  },
  common: {
    from: 'de la',
    onRequest: 'la cerere',
    call: 'Sună',
    bookNow: 'Programează-te',
    learnMore: 'Detalii',
    allServices: 'Toate serviciile',
    skipToContent: 'Salt la conținut',
    language: 'Limba',
    writeUs: 'Scrie-ne',
    backToTop: 'Sus',
    breadcrumb: 'Navigare',
    tagline: 'Tonare și detailing auto',
    home: 'Acasă',
  },
  days: { Mo: 'Lun', Tu: 'Mar', We: 'Mie', Th: 'Joi', Fr: 'Vin', Sa: 'Sâm', Su: 'Dum' },
  seo: {
    home: {
      title: 'Tonare și detailing auto în Chișinău | Tonirovka.md',
      description:
        'Tonare geamuri, colantare caroserie și faruri, polish, curățare chimică, cer înstelat și iluminare ambientală în Chișinău.',
    },
    services: {
      title: 'Servicii de tonare și detailing în Chișinău | Tonirovka.md',
      description:
        'Tonare auto și clădiri, colantare caroserie și faruri, polish, curățare chimică, ceață uscată, retapițare plafon, cer înstelat, iluminare, aer condiționat și covorașe EVA.',
    },
    gallery: {
      title: 'Galerie lucrări și niveluri de tonare | Tonirovka.md',
      description:
        'Vezi cum arată tonarea de 5%, 15%, 20%, 35%, 50% și 70% și lucrările noastre de tonare auto realizate în Chișinău.',
    },
    faq: {
      title: 'Întrebări frecvente despre tonarea auto | Tonirovka.md',
      description:
        'Cât timp nu poți coborî geamurile, ce folie să alegi și cum îngrijești tonarea. Răspunsuri de la specialiștii Tonirovka.md.',
    },
    contacts: {
      title: 'Contacte și programare — tonare auto Chișinău | Tonirovka.md',
      description:
        'Adresa, telefonul și programul studioului Tonirovka.md din Chișinău. Programează-te online prin WhatsApp sau Telegram în câteva secunde.',
    },
    notFound: {
      title: 'Pagina nu a fost găsită | Tonirovka.md',
      description: 'Pagina căutată nu există. Revino pe pagina principală Tonirovka.md.',
    },
  },
  home: {
    badge: 'Tonare și detailing în Chișinău',
    title: 'Tonare auto',
    titleAccent: 'fără compromisuri',
    text: 'Folii premium, montaj într-o cameră curată, fără bule și fără praf. Plus colantare, polish, curățare chimică și tuning de interior — totul într-un singur studio.',
    ctaPrimary: 'Programează-te',
    ctaSecondary: 'Toate serviciile',
    stats: { years: 'ani de experiență', cars: 'mașini tonate' },
    tintTitle: 'Alege nivelul de tonare',
    tintText:
      'Mișcă selectorul și vezi cum se schimbă aspectul mașinii. Procentul arată câtă lumină trece prin geam: cu cât e mai mic, cu atât geamul e mai închis.',
    servicesTitle: 'Ce facem',
    servicesText:
      'Tonare, colantare, detailing și tuning de interior — într-un singur loc, cu materiale certificate.',
    whyTitle: 'De ce Tonirovka.md',
    whyText: 'Lucrăm ca pentru propria mașină. Fiecare detaliu contează.',
    why: [
      {
        icon: 'sparkles',
        title: 'Cameră curată',
        text: 'Montăm într-o boxă închisă, fără praf. Rezultatul — folie fără bule, fire de păr sau particule.',
      },
      {
        icon: 'layers',
        title: 'Folii premium',
        text: 'Lucrăm doar cu folii certificate, care nu se decolorează și nu devin violete.',
      },
      {
        icon: 'scissors',
        title: 'Tăiere precisă',
        text: 'Șabloane exacte pentru fiecare model. Folia ajunge până la marginea geamului, fără goluri vizibile.',
      },
      {
        icon: 'shield',
        title: 'Lucru atent',
        text: 'Protejăm garniturile, ornamentele și electronica în timpul lucrului și îți predăm mașina curată.',
      },
      {
        icon: 'tinting',
        title: 'Totul într-un studio',
        text: 'Tonare, colantare, polish, curățare chimică și tuning de interior — o singură programare, un singur loc.',
      },
      {
        icon: 'chat',
        title: 'Consultanță sinceră',
        text: 'Îți spunem ce nivel de tonare este permis și ce folie merită banii pentru stilul tău de condus.',
      },
    ],
    processTitle: 'Cum lucrăm',
    process: [
      {
        title: 'Programare',
        text: 'Scrie-ne pe WhatsApp sau Telegram și alege ziua și ora potrivită.',
      },
      {
        title: 'Consultare',
        text: 'Alegem împreună folia și nivelul de tonare, îți arătăm mostre pe geam.',
      },
      {
        title: 'Montaj',
        text: 'Curățăm geamurile, croim folia după șablon și o aplicăm în cameră curată.',
      },
      {
        title: 'Predare',
        text: 'Verificăm fiecare geam și îți dăm sfaturi de îngrijire.',
      },
    ],
    filmsTitle: 'Ce folie să alegi',
    filmsText:
      'Toate foliile blochează 99% din razele UV. Diferența e în protecția termică, durabilitate și claritate.',
    faqTitle: 'Întrebări frecvente',
  },
  tint: {
    label: 'Transmisie lumină (VLT)',
    hint: 'Trage sau apasă pe un procent',
    levels: {
      5: 'Limuzină — intimitate maximă, nu se vede nimic din exterior.',
      15: 'Foarte închis — aspect sport, interior aproape invizibil.',
      20: 'Închis — cea mai populară alegere pentru geamurile din spate.',
      35: 'Mediu — stil elegant, vizibilitate bună noaptea.',
      50: 'Deschis — reduce căldura și orbirea, aspect discret.',
      70: 'Aproape transparent — protecție termică fără schimbarea aspectului.',
    },
  },
  glass: {
    title: 'Vezi diferența pe geam',
    text: 'Trage linia spre stânga sau spre dreapta: în stânga e geamul fără folie, în dreapta — cu folia aleasă.',
    label: 'Tipul foliei',
    hint: 'Trage linia stânga–dreapta',
    before: 'Fără folie',
    alt: 'Fereastră panoramică de birou cu vedere spre oraș',
    films: {
      solar: {
        name: 'Solară',
        text: 'Reduce căldura și orbirea, păstrează vederea clară și lumina naturală.',
      },
      mirror: {
        name: 'Oglindă',
        text: 'Reflectă până la 80% din energia solară; ziua, din exterior, nu se vede înăuntru.',
      },
      matte: {
        name: 'Mată',
        text: 'Lasă lumina să treacă, dar ascunde ce e în spatele sticlei — pentru birouri și băi.',
      },
    },
  },
  films: {
    names: { standard: 'Standard', ceramic: 'Ceramică' },
    texts: {
      standard: 'Folie vopsită de bază pentru un buget mic. Aspect bun și protecție UV.',
      ceramic: 'Nano-ceramică: protecție termică maximă și claritate perfectă, fără interferențe.',
    },
    rows: [
      { label: 'Blocare UV', values: ['99%', '99%'] },
      { label: 'Reducere căldură', values: ['până la 30%', 'până la 70%'] },
      { label: 'Nu se decolorează', values: ['—', '✓'] },
      { label: 'Fără interferențe GPS/GSM', values: ['✓', '✓'] },
    ],
    popular: 'Popular',
  },
  services: {
    tinting: {
      name: 'Tonare geamuri auto',
      short: 'Tonare completă sau parțială cu folie standard ori ceramică, cu nivelul dorit.',
      seo: {
        title: 'Tonare geamuri auto Chișinău — de la 60 € | Tonirovka.md',
        description:
          'Tonare geamuri auto cu folie standard și ceramică, de la 5% la 70%. Montaj în cameră curată, fără bule. Programare rapidă.',
      },
      h1: 'Tonare geamuri auto',
      intro:
        'Tonarea geamurilor protejează interiorul de soare, reduce căldura din habitaclu și îți oferă intimitate. Montăm folii premium care arată impecabil ani la rând.',
      body: [
        'Fiecare folie este croită după șablonul exact al mașinii tale și termoformată pe geam, astfel încât să urmeze perfect curbura sticlei. Pe geamurile din spate aplicăm folia dintr-o singură bucată, fără îmbinări.',
        'Poți alege orice nivel de transmisie a luminii — de la 5% (efect de limuzină) până la 70% (aproape transparent). Pentru geamurile laterale din față și parbriz te consultăm privind limitele permise de lege.',
        'Foliile ceramice nu se decolorează, nu devin violete și nu interferează cu GPS-ul sau semnalul telefonului.',
      ],
      benefits: [
        'Blochează 99% din radiația UV — protejează pielea și interiorul',
        'Reduce căldura din habitaclu și sarcina pe aerul condiționat',
        'Ascunde lucrurile din mașină de priviri străine',
        'Ține cioburile la loc în caz de spargere a geamului',
        'Reduce orbirea de la soare și farurile din spate',
      ],
      priceFrom: 60,
      faq: [
        {
          q: 'Pot coborî geamurile imediat după tonare?',
          a: 'Recomandăm să nu cobori geamurile 3–5 zile, până când adezivul se fixează complet.',
        },
        {
          q: 'Apar bule după tonare?',
          a: 'Mici zone aburite pot apărea primele zile — este umezeală care se evaporă singură. Bulele de aer sau praf nu apar datorită montajului în cameră curată.',
        },
      ],
    },
    buildings: {
      name: 'Tonare fațade clădiri',
      short:
        'Folii de protecție solară și oglindă pentru geamurile caselor, birourilor și vitrinelor.',
      seo: {
        title: 'Tonare geamuri și fațade clădiri în Chișinău | Tonirovka.md',
        description:
          'Tonare geamuri pentru apartamente, birouri, vitrine și fațade de sticlă: folii de protecție solară, oglindă și mate. Măsurare la fața locului, montaj la cheie.',
      },
      h1: 'Tonare geamuri și fațade de clădiri',
      intro:
        'Folia arhitecturală reduce căldura din încăpere, protejează mobilierul de decolorare și ascunde interiorul de privirile din stradă — fără a schimba geamurile.',
      body: [
        'Aplicăm folii de protecție solară, oglindă, mate și decorative pe geamurile apartamentelor și caselor, pereții de sticlă din birouri, vitrine și fațade.',
        'Folia de protecție solară reduce căldura și orbirea, dar păstrează vederea clară și lumina naturală. Folia oglindă reflectă până la 80% din energia solară, iar ziua, din exterior, geamul arată ca o oglindă — nimeni nu vede înăuntru.',
        'Folia mată lasă lumina să treacă, dar ascunde ce se află în spatele sticlei: ideală pentru pereții de sticlă din birouri, sălile de ședințe, uși și geamurile de la baie. Pe vitrine aplicăm și folii decorative, benzi și logo decupat.',
        'Folia de siguranță, mai groasă, ține sticla întreagă la lovitură și îngreunează spargerea geamului — potrivită pentru vitrine și apartamente de la parter.',
        'Venim la măsurare, îți arătăm mostre direct pe geamul tău și calculăm prețul după suprafața vitrată. Montajul se face curat, fără demontarea geamurilor.',
        'Geamurile se pot spăla după 30 de zile, cu o lavetă moale și detergent fără particule abrazive.',
      ],
      benefits: [
        'Mai puțină căldură vara și costuri mai mici cu aerul condiționat',
        'Blochează până la 99% din radiația UV — mobila și podeaua nu se decolorează',
        'Mai puțină orbire pe monitoare și ecrane',
        'Intimitate ziua — din exterior nu se vede înăuntru',
        'Sticla ține cioburile la impact',
        'Fără schimbarea geamurilor, iar folia se poate scoate oricând',
      ],
      priceFrom: null,
      priceNote: 'Prețul final depinde de tipul foliei și de suprafața vitrată.',
      faq: [
        {
          q: 'Se vede prin folia oglindă seara?',
          a: 'Da. Folia oglindă ascunde partea mai întunecată: ziua nu se vede înăuntru, dar seara, cu lumina aprinsă în cameră, interiorul se vede din exterior. Pentru intimitate și seara recomandăm folie mată sau jaluzele.',
        },
        {
          q: 'Folia face camera prea întunecată?',
          a: 'Nu neapărat. Pentru locuințe recomandăm folii de protecție solară deschise, care opresc căldura, dar lasă să treacă 50–70% din lumină. Îți arătăm mostre pe geamul tău înainte de montaj.',
        },
        {
          q: 'Se poate aplica pe geamuri termopan?',
          a: 'Da, aplicăm folia pe partea interioară a geamului termopan. Pentru geamuri mari și folii închise la culoare verificăm compatibilitatea, ca sticla să nu se supraîncălzească.',
        },
        {
          q: 'Cum se calculează prețul?',
          a: 'Prețul depinde de tipul foliei și de suprafața vitrată, în m². Venim la măsurare, alegem împreună folia și primești un preț exact înainte de montaj.',
        },
        {
          q: 'Folia se poate scoate?',
          a: 'Da. Folia se îndepărtează fără a deteriora sticla, iar adezivul rămas se curăță. O poți înlocui oricând cu alt tip de folie.',
        },
      ],
    },
    headlights: {
      name: 'Folie pe faruri',
      short: 'Folie de protecție transparentă sau fumurie pe faruri și stopuri.',
      seo: {
        title: 'Folie pe faruri în Chișinău — de la 100 € | Tonirovka.md',
        description:
          'Aplicare folie pe faruri și stopuri: poliuretan transparent sau folie fumurie. Protecție de pietre și îngălbenire, aspect sport. De la 100 €.',
      },
      h1: 'Folie de protecție pe faruri',
      intro:
        'Folia pe optică protejează plasticul farurilor de pietre, zgârieturi și îngălbenire, iar varianta fumurie schimbă complet aspectul mașinii.',
      body: [
        'Pentru faruri recomandăm poliuretan transparent sau ușor fumuriu — nu reduc intensitatea luminii. Pentru stopuri avem folii fumurii de diferite densități, până la aspect complet negru.',
        'Folia elastică se aplică cu încălzire, urmează forma farului și se poate scoate oricând fără a afecta optica.',
      ],
      benefits: [
        'Protecție de pietre și nisip',
        'Farurile nu se îngălbenesc și nu se matizează',
        'Aspect sport cu folie fumurie',
        'Se scoate fără urme',
      ],
      priceFrom: 100,
      faq: [],
    },
    wrap: {
      name: 'Colantare caroserie',
      short: 'Poliuretan sau vinil colorat — protecția vopselei și o culoare nouă.',
      seo: {
        title: 'Colantare caroserie în Chișinău — de la 300 € per element | Tonirovka.md',
        description:
          'Colantare caroserie cu folie poliuretanică anti-pietriș și folie vinil colorată: elemente separate, zonele de risc sau toată mașina. De la 300 € per element.',
      },
      h1: 'Colantare caroserie',
      intro:
        'Poliuretanul transparent protejează vopseaua originală de ciupituri și zgârieturi, iar vinilul colorat schimbă culoarea mașinii fără revopsire.',
      body: [
        'Poți colanta doar zonele de risc — capotă, bară, aripi, oglinzi — sau toată mașina. Întoarcem folia peste marginile elementelor ca să nu se vadă muchiile.',
        'Folia colorată — lucioasă, mată sau satinată — schimbă aspectul și păstrează vopseaua originală sub ea. Se scoate fără urme când vrei să revii la culoarea din fabrică.',
      ],
      benefits: [
        'Protejează vopseaua de pietriș, nisip și reactivi',
        'Culoare nouă fără revopsire',
        'Păstrează valoarea mașinii la vânzare',
        'Se scoate fără a afecta vopseaua',
      ],
      priceFrom: 300,
      priceUnit: 'per element',
      faq: [],
    },
    polishing: {
      name: 'Polish caroserie',
      short: 'Eliminăm zgârieturile fine și hologramele, redăm luciul profund al vopselei.',
      seo: {
        title: 'Polish caroserie auto în Chișinău — de la 200 € | Tonirovka.md',
        description:
          'Polish abraziv și de restaurare: eliminarea zgârieturilor, hologramelor și a vopselei mate. Strat de protecție după polish. De la 200 €.',
      },
      h1: 'Polish caroserie auto',
      intro:
        'Polishul îndepărtează stratul subțire de lac deteriorat împreună cu zgârieturile fine, iar mașina arată din nou ca nouă.',
      body: [
        'Înainte de lucru spălăm mașina, îndepărtăm bitumul și particulele metalice și măsurăm grosimea lacului. Polișăm în mai multe etape, alegând pastele și bureții pentru fiecare element.',
        'După polish recomandăm un strat de ceară sau ceramică — luciul ține mai mult, iar murdăria se prinde mai greu.',
      ],
      benefits: [
        'Dispar zgârieturile fine și hologramele',
        'Luciu profund, ca de oglindă',
        'Sigur — controlăm grosimea lacului',
        'Pregătire perfectă înainte de vânzare',
      ],
      priceFrom: 200,
      faq: [],
    },
    cleaning: {
      name: 'Curățare chimică interior',
      short: 'Curățare profundă a scaunelor, plafonului, mochetei și plasticului.',
      seo: {
        title: 'Curățare chimică interior auto în Chișinău — de la 100 € | Tonirovka.md',
        description:
          'Curățare chimică completă a interiorului: scaune, plafon, mochetă, portbagaj și plastic. Eliminăm pete și mirosuri, îngrijim pielea. De la 100 €.',
      },
      h1: 'Curățare chimică a interiorului auto',
      intro:
        'Readucem curățenia și mirosul proaspăt în habitaclu: scoatem petele, praful și murdăria din toate materialele și colțurile.',
      body: [
        'Aspirăm praful și resturile, curățăm scaunele, plafonul, mocheta, portierele și portbagajul cu soluții profesionale și extractor. Plasticul și pielea le curățăm și le protejăm.',
        'După curățare uscăm bine interiorul, așa că primești mașina uscată și gata de drum.',
      ],
      benefits: [
        'Eliminăm petele și murdăria veche',
        'Scăpăm de mirosurile neplăcute',
        'Îngrijire atentă a pielii și alcantarei',
        'Interior uscat la predare',
      ],
      priceFrom: 100,
      faq: [],
    },
    dryFog: {
      name: 'Ceață uscată',
      short: 'Neutralizarea mirosului de tutun, animale și umezeală în tot habitaclul.',
      seo: {
        title: 'Ceață uscată pentru mașină în Chișinău — de la 20 € | Tonirovka.md',
        description:
          'Tratament cu ceață uscată: elimină mirosul de tutun, animale, ars și umezeală, pătrunde în ventilație și tapițerie. Rapid și sigur. De la 20 €.',
      },
      h1: 'Tratament interior cu ceață uscată',
      intro:
        'Ceața uscată pătrunde în tapițerie, plafon și conductele de aer și distruge moleculele mirosului, nu doar îl maschează.',
      body: [
        'Generatorul transformă lichidul neutralizator în particule foarte fine, care umplu tot habitaclul, inclusiv sistemul de ventilație, fără a lăsa umezeală.',
        'După aerisire rămâne doar o aromă ușoară și neutră. Completează perfect curățarea chimică.',
      ],
      benefits: [
        'Elimină mirosul de tutun, animale și umezeală',
        'Pătrunde în ventilație și tapițerie',
        'Nu lasă umezeală sau urme',
        'Nu lasă umezeală sau reziduuri',
      ],
      priceFrom: 20,
      faq: [],
    },
    headliner: {
      name: 'Retapițare plafon',
      short: 'Plafon nou din alcantara, piele ecologică sau textil.',
      seo: {
        title: 'Retapițare plafon auto în Chișinău — de la 250 € | Tonirovka.md',
        description:
          'Retapițarea plafonului auto cu alcantara, piele ecologică sau textil. Eliminăm lăsarea plafonului, refacem stâlpii și parasolarele. De la 250 €.',
      },
      h1: 'Retapițare plafon auto',
      intro:
        'Plafonul s-a lăsat sau s-a decolorat? Îl retapițăm cu material nou — interiorul arată mai scump și mai îngrijit.',
      body: [
        'Demontăm plafonul, îndepărtăm vechea tapițerie și buretele și îl îmbrăcăm cu materialul ales, pe adeziv rezistent la căldură. La cerere îmbrăcăm și stâlpii, parasolarele și mânerele în ton.',
        'Retapițarea se poate combina cu cerul înstelat sau iluminarea ambientală — montăm fibra optică și cablurile înainte de îmbrăcare.',
      ],
      benefits: [
        'Plafonul nu se mai lasă',
        'Alcantara, piele ecologică sau textil',
        'Stâlpi și parasolare în ton',
        'Se combină cu cerul înstelat',
      ],
      priceFrom: 250,
      faq: [],
    },
    ambient: {
      name: 'Iluminare ambientală',
      short: 'Iluminare de contur în habitaclu, cu culoarea aleasă din aplicație.',
      seo: {
        title: 'Iluminare ambientală auto în Chișinău — de la 300 € | Tonirovka.md',
        description:
          'Montare iluminare ambientală de contur în habitaclu: orice culoare, moduri dinamice, control de pe telefon. De la 300 €.',
      },
      h1: 'Iluminare ambientală în habitaclu',
      intro:
        'Lumina de contur discretă de-a lungul bordului și portierelor face interiorul cald și elegant, ca la mașinile premium.',
      body: [
        'Integrăm benzi LED în bord, portiere, spațiul pentru picioare și consola centrală. Cablurile le trecem ascuns, fără găuri inutile.',
        'Culoarea și intensitatea se schimbă de pe telefon, iar în modurile dinamice lumina trece lin dintr-o culoare în alta sau reacționează la muzică.',
      ],
      benefits: [
        'Zeci de culori și moduri',
        'Control de pe telefon',
        'Cablare ascunsă și îngrijită',
        'Efect de interior premium',
      ],
      priceFrom: 300,
      faq: [],
    },
    starlight: {
      name: 'Cer înstelat',
      short: 'Sute de stele care sclipesc pe plafon — ca într-un Rolls-Royce.',
      seo: {
        title: 'Cer înstelat în mașină în Chișinău — de la 400 € | Tonirovka.md',
        description:
          'Cer înstelat pe plafonul mașinii: fibră optică, efect de sclipire și stele căzătoare, control de pe telefon. De la 400 €.',
      },
      h1: 'Cer înstelat în habitaclu',
      intro:
        'Sute de stele din fibră optică pe plafon transformă fiecare drum într-o plimbare sub cerul liber al nopții.',
      body: [
        'Demontăm plafonul și montăm manual fire de fibră optică de grosimi diferite, ca stelele să aibă luminozitate diferită, ca cele adevărate. Sursa de lumină o ascundem după tapițerie.',
        'Poți adăuga sclipire, stele căzătoare și schimbarea culorii — totul controlat de pe telefon. Se potrivește perfect cu retapițarea plafonului.',
      ],
      benefits: [
        'Sute de stele de intensități diferite',
        'Sclipire și stele căzătoare',
        'Schimbarea culorii de pe telefon',
        'Fibra optică nu se încălzește',
      ],
      priceFrom: 400,
      faq: [],
    },
    aircon: {
      name: 'Încărcare aer condiționat',
      short: 'Diagnostic, verificarea scurgerilor și încărcare cu freon.',
      seo: {
        title: 'Încărcare aer condiționat auto în Chișinău — de la 40 € | Tonirovka.md',
        description:
          'Încărcarea aerului condiționat auto: vidare, test de etanșeitate, încărcare cu doza exactă de agent frigorific și ulei. De la 40 €.',
      },
      h1: 'Încărcare aer condiționat auto',
      intro:
        'Aerul condiționat nu mai răcește? Verificăm sistemul de scurgeri și îl încărcăm cu doza exactă de agent frigorific pentru mașina ta.',
      body: [
        'Extragem agentul vechi, vidăm sistemul și verificăm etanșeitatea. Apoi încărcăm agentul frigorific și uleiul strict după volumul din fabrică.',
        'La final măsurăm temperatura la guri. La cerere tratăm evaporatorul și ventilația împotriva bacteriilor și mirosurilor.',
      ],
      benefits: [
        'Test de scurgeri înainte de încărcare',
        'Doză exactă conform producătorului',
        'Din nou aer rece în habitaclu',
        'Tratament antibacterian la cerere',
      ],
      priceFrom: 40,
      faq: [],
    },
    evaMats: {
      name: 'Covorașe EVA la comandă',
      short: 'Covorașe cu celule după șablonul mașinii tale — rețin apa și murdăria.',
      seo: {
        title: 'Covorașe auto EVA la comandă în Chișinău — de la 50 € | Tonirovka.md',
        description:
          'Covorașe EVA la comandă după șablonul mașinii tale: habitaclu și portbagaj, culoarea celulelor și a bordurii la alegere. Fără miros, se spală ușor. De la 50 €.',
      },
      h1: 'Covorașe EVA la comandă',
      intro:
        'Covorașele EVA cu celule rețin apa, zăpada și nisipul, iar podeaua rămâne uscată și curată. Le facem exact după forma podelei mașinii tale.',
      body: [
        'Croim covorașele după șablonul modelului tău — acoperă toată podeaua și nu alunecă. Culoarea celulelor și a bordurii o alegi din zeci de variante.',
        'Materialul EVA este ușor, nu miroase, nu crapă la ger și se spală cu apă într-un minut.',
      ],
      benefits: [
        'Exact după forma podelei',
        'Rețin apa, zăpada și murdăria',
        'Se spală într-un minut',
        'Culoarea celulelor și bordurii la alegere',
      ],
      priceFrom: 50,
      faq: [],
    },
  },
  servicesPage: {
    h1: 'Serviciile studioului',
    intro:
      'De la tonare și colantare până la curățare chimică și cer înstelat — alege serviciul de care ai nevoie sau scrie-ne pentru o recomandare.',
  },
  service: {
    benefitsTitle: 'Ce primești',
    faqTitle: 'Întrebări despre acest serviciu',
    otherTitle: 'Alte servicii',
    priceNote: 'Prețul final depinde de modelul mașinii și volumul lucrărilor.',
    galleryTitle: 'Galerie',
    photo: 'Fotografia',
    prev: 'Fotografia anterioară',
    next: 'Fotografia următoare',
  },
  gallery: {
    h1: 'Galerie și niveluri de tonare',
    intro: 'Vezi cum arată fiecare nivel de tonare și lucrările noastre recente.',
    levelsTitle: 'Niveluri de tonare',
    levelsText: 'Procentul arată câtă lumină vizibilă trece prin geam (VLT).',
    worksTitle: 'Lucrările noastre',
    worksEmpty: 'Lucrările noastre recente le publicăm zilnic pe Instagram.',
    follow: 'Urmărește-ne pe Instagram',
  },
  faq: {
    h1: 'Întrebări frecvente despre tonare',
    intro: 'Am adunat răspunsurile la cele mai frecvente întrebări ale clienților noștri.',
    items: [
      {
        q: 'Cât timp nu pot coborî geamurile după tonare?',
        a: '3–5 zile. În acest timp adezivul se fixează complet. Pe vreme rece perioada poate fi puțin mai lungă.',
      },
      {
        q: 'Ce nivel de tonare este permis?',
        a: 'Pentru geamurile din spate și lunetă, de obicei nu există restricții. Pentru parbriz și geamurile laterale din față legea impune o transmisie minimă a luminii — te consultăm înainte de montaj și îți recomandăm o variantă legală.',
      },
      {
        q: 'Care e diferența dintre folia standard și cea ceramică?',
        a: 'Ambele blochează 99% din UV. Folia ceramică reține semnificativ mai multă căldură, are o claritate mai bună și nu se decolorează, dar costă mai mult.',
      },
      {
        q: 'Cum îngrijesc geamurile tonate?',
        a: 'Spală-le cu o lavetă moale din microfibră și soluții fără amoniac. Evită obiectele abrazive și racleta pe partea interioară.',
      },
      {
        q: 'Folia afectează încălzirea lunetei?',
        a: 'Nu. Folia se aplică peste firele de încălzire și nu le afectează funcționarea. La detonare lucrăm cu grijă ca firele să rămână intacte.',
      },
    ],
  },
  contacts: {
    h1: 'Contacte',
    intro: 'Sună-ne, scrie-ne sau vino direct la studio. Te ajutăm să alegi folia potrivită.',
    address: 'Adresa',
    phone: 'Telefon',
    email: 'Email',
    hours: 'Program',
    closed: 'Duminică — zi liberă',
    mapTitle: 'Harta studioului Tonirovka.md',
    mapOpen: 'Deschide în Google Maps',
  },
  booking: {
    title: 'Programare online',
    text: 'Completează formularul și te sunăm pentru confirmare. Poți scrie și direct pe Viber, WhatsApp sau Telegram.',
    name: 'Nume',
    phone: 'Telefon',
    car: 'Mașina',
    carPlaceholder: 'ex. Toyota Camry 2020',
    service: 'Serviciu',
    date: 'Data dorită',
    comment: 'Comentariu',
    send: 'Trimite cererea',
    sending: 'Se trimite…',
    sentTitle: 'Mulțumim!',
    sent: 'Cererea ta a fost trimisă. Te sunăm în curând pentru a confirma ziua și ora programării.',
    again: 'Trimite încă o cerere',
    nameError: 'Introdu numele',
    phoneError: 'Introdu un număr de telefon valid',
    commentPlaceholder: 'Ce trebuie făcut, ce folie sau nivel de tonare dorești, întrebări…',
    error: 'Cererea nu a putut fi trimisă. Încearcă din nou sau scrie-ne pe WhatsApp.',
    orMessenger: 'sau scrie-ne direct',
    subject: 'Programare nouă de pe site',
    sendVia: 'Trimite prin',
    note: 'Răspundem de obicei în 15 minute în timpul programului.',
    greeting: 'Bună ziua! Aș dori o programare.',
    copied: 'Mesajul a fost copiat — lipește-l în chat.',
  },
  notFound: {
    h1: 'Pagina nu a fost găsită',
    text: 'Se pare că această pagină nu există sau a fost mutată.',
    back: 'Înapoi la pagina principală',
  },
  footer: {
    about: 'Studio de tonare și detailing auto. Materiale premium și lucru în cameră curată.',
    rights: 'Toate drepturile rezervate.',
    legal: 'Te consultăm privind nivelurile de tonare permise de legislație.',
    navTitle: 'Navigare',
    servicesTitle: 'Servicii',
    contactsTitle: 'Contacte',
  },
};
