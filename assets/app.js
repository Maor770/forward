// =============================================================
//   AI ENGINE DATA - 5 engines + 3 audiences
//   Edit this section to update content of any sub-page.
// =============================================================

const AI_DATA = {

  engines: {
    'maor-script': {
      name: 'MaorScript',
      domain: 'Writing & Narrative',
      stage: 'Beta',
      tagline: 'The voice of a Mashpia who grew up on the Rebbe\'s Sichos.',
      hero: 'Fine-tuned large language model trained on a decade of Maor scripts, vetted Chassidic storytelling frameworks, and the authentic register of Anash.',
      capabilities: [
        'Generate full episode scripts with dialogue calibrated to age group',
        'Write age-appropriate adaptations of Sichos and Maamarim',
        'Produce learning materials (parsha overviews, holiday content, Chassidic stories) in multiple voices',
        'Adapt single concepts across formats: video script, picture book, lesson plan',
        'Maintain narrative consistency across multi-episode series',
      ],
      difference: {
        commercial: 'Generic "Jewish-flavored" content. Confuses Lubavitch, Litvish, and Sephardi traditions. Cannot distinguish between Mashpia and Rabbi. Defaults to American children\'s TV register that doesn\'t land with our audience.',
        maor: 'Trained on 10 years of vetted Maor scripts plus a curated corpus of Sichos, Maamarim, and Chassidic stories. Knows the difference between a Niggun for Yud-Beis Tammuz and one for Lag B\'Omer. Understands when a Sicha needs a Hanocha and when it doesn\'t.',
      },
      stack: [
        { layer: 'Base model', value: 'Claude 3.5 Sonnet via API' },
        { layer: 'Training corpus', value: '~3,000 vetted Maor scripts + curated Chassidic literature' },
        { layer: 'Fine-tuning', value: 'RLHF on writer-rated outputs' },
        { layer: 'Output validation', value: 'Halachic + style review by senior writers before production use' },
      ],
      roadmap: [
        { phase: 'Q1 2026', status: 'done', label: 'Beta · internal use by Maor writing team' },
        { phase: 'Q3 2026', status: 'planned', label: 'Production · sub-second response, content versioning' },
        { phase: 'Q1 2027', status: 'planned', label: 'API release to first 5 partner organizations' },
      ],
      demo: {
        title: 'Sample · Episode Opening',
        type: 'script',
      },
    },

    'maor-anim': {
      name: 'MaorAnim',
      domain: 'Animation & Video',
      stage: 'Prototype',
      tagline: 'Hollywood-level animation at a fraction of the cost.',
      hero: 'Proprietary pipeline combining state-of-the-art video models, custom character consistency systems, and our own rigging built on 10 years of character libraries.',
      capabilities: [
        'Animate full episodes from script to render',
        'Maintain character consistency across scenes, episodes, and seasons',
        'Generate B-roll and establishing shots from text descriptions',
        'Adapt existing characters to new scenarios while preserving recognizability',
        'Produce both 2D-style and pseudo-3D animation depending on content needs',
      ],
      difference: {
        commercial: 'Runway, Pika, and Sora produce impressive but inconsistent characters. Same character looks different in two scenes. No control over animation arc. Cannot integrate existing IP libraries.',
        maor: 'Built on 10 years of character libraries - Yanky, Mendy, the Maor family. Character consistency across 20+ scenes. Director-level control over pacing and emotion. Episode that costs $80K traditional now costs $3K-$8K.',
      },
      stack: [
        { layer: 'Base models', value: 'Runway Gen-3, Pika 1.5, custom diffusion' },
        { layer: 'Character library', value: '40+ proprietary character rigs from 10 years of production' },
        { layer: 'Consistency layer', value: 'Custom character embedding system' },
        { layer: 'Quality control', value: 'Frame-by-frame review pipeline + auto-correction' },
      ],
      roadmap: [
        { phase: 'Q4 2025', status: 'done', label: 'Prototype · single-character scenes, 30 seconds' },
        { phase: 'Q2 2026', status: 'inprogress', label: 'Beta · multi-character scenes, full episodes (in dev)' },
        { phase: 'Q4 2026', status: 'planned', label: 'Production · daily content output' },
      ],
      demo: {
        title: 'Sample · Character Consistency Test',
        type: 'animation',
      },
    },

    'maor-voice': {
      name: 'MaorVoice',
      domain: 'Voice Synthesis',
      stage: 'Production',
      tagline: 'One English episode becomes Hebrew, Russian, Spanish, and Yiddish in hours.',
      hero: 'Ethically licensed voice models trained on consenting voice actors, producing narration indistinguishable from studio recording - across multiple languages.',
      capabilities: [
        'Multilingual narration with single source script',
        'Emotional fidelity: laughter, intensity, calm, excitement preserved across languages',
        'Voice cloning of approved voice actors with explicit consent + royalties',
        'Long-form narration (30+ minutes) without quality degradation',
        'Children\'s voices, adult voices, character voices - full range',
      ],
      difference: {
        commercial: 'ElevenLabs and similar are excellent but ethically opaque (training data). No accountability for voice actor compensation. Yiddish nearly nonexistent. Hebrew has noticeable accent issues.',
        maor: 'Every voice in our model has signed consent and ongoing royalties. Native Hebrew (no American accent). Yiddish that sounds like home. Studio-grade output for kids\' content where audio quality is non-negotiable.',
      },
      stack: [
        { layer: 'Base model', value: 'ElevenLabs Voice Lab + custom fine-tuning' },
        { layer: 'Voice library', value: '12 licensed voice actors, growing' },
        { layer: 'Languages', value: 'English, Hebrew, Russian, Spanish, Yiddish (production); French, Portuguese (research)' },
        { layer: 'Compensation model', value: 'Per-minute royalty to voice actors, fully transparent' },
      ],
      roadmap: [
        { phase: 'Q3 2025', status: 'done', label: 'Production · English + Hebrew live' },
        { phase: 'Q2 2026', status: 'inprogress', label: 'Russian + Yiddish live' },
        { phase: 'Q4 2026', status: 'planned', label: 'Open licensing to partner organizations' },
      ],
      demo: {
        title: 'Sample · Multilingual Narration',
        type: 'voice',
      },
    },

    'maor-sound': {
      name: 'MaorSound',
      domain: 'Music & Niggunim',
      stage: 'Research',
      tagline: 'Score that would make a Baal Menagen nod in recognition.',
      hero: 'AI trained on the corpus of authentic Chabad Niggunim and traditional Jewish music theory, composing original score that feels native - not borrowed.',
      capabilities: [
        'Original score composition for episode-length content',
        'Niggun-inspired themes that respect traditional structure',
        'Underscore for emotional beats: simcha, hisorerus, contemplation',
        'Children\'s songs in authentic Chabad melodic style',
        'Adaptive scoring that responds to scene length and tone',
      ],
      difference: {
        commercial: 'Suno and Udio are powerful but produce generic "world music" or "Jewish-themed" tracks that miss the soul. Cannot understand the difference between a Yom Tov Niggun and a Hisvaadus Niggun.',
        maor: 'Trained on the actual corpus of vetted Chabad Niggunim. Knows the modes, the structures, the emotional vocabulary. Output passes the test of an authentic listener - and that test is everything.',
      },
      stack: [
        { layer: 'Base models', value: 'Suno v4 + custom MIDI generation' },
        { layer: 'Training corpus', value: '600+ vetted Chabad Niggunim + traditional Jewish music theory' },
        { layer: 'Theory layer', value: 'Custom rules engine for modal validity' },
        { layer: 'Quality validation', value: 'Review by Baalei Menagen + senior writers' },
      ],
      roadmap: [
        { phase: 'Q1 2026', status: 'done', label: 'Research · proof of concept on Yom Tov Niggunim' },
        { phase: 'Q3 2026', status: 'planned', label: 'Prototype · full-episode scoring' },
        { phase: 'Q2 2027', status: 'planned', label: 'Beta · integrated into MaorAnim pipeline' },
      ],
      demo: {
        title: 'Sample · Original Niggun Composition',
        type: 'sound',
      },
    },

    'maor-sync': {
      name: 'MaorSync',
      domain: 'Lip Sync & Localization',
      stage: 'Beta',
      tagline: 'The Hebrew version doesn\'t look like a bad import - it looks native.',
      hero: 'Frame-perfect lip-sync adaptation across languages, so dubbing into Hebrew, Russian, or Yiddish doesn\'t betray its origin in English production.',
      capabilities: [
        'Re-animate mouth movements to match dubbed audio',
        'Preserve facial expression and emotion through the sync transformation',
        'Process full episodes in hours, not weeks',
        'Multi-language batch processing - single source produces 5 native versions',
        'Quality matches Disney-grade international releases',
      ],
      difference: {
        commercial: 'Most dubbing leaves obvious lip mismatches that distract viewers. Manual re-animation costs more than the original episode. Tools like HeyGen sync but lose facial nuance.',
        maor: 'Frame-perfect sync without losing the original facial expression. Critical for our secular Jewish and Noahide audiences where production value signals seriousness - bad dubbing kills credibility instantly.',
      },
      stack: [
        { layer: 'Base model', value: 'HeyGen API + custom facial preservation layer' },
        { layer: 'Pipeline', value: 'Audio → phoneme map → mouth shape generation → composite' },
        { layer: 'Languages supported', value: 'English, Hebrew, Russian, Spanish, Yiddish' },
        { layer: 'Throughput', value: '~30 minutes of finished video per hour of compute' },
      ],
      roadmap: [
        { phase: 'Q1 2026', status: 'done', label: 'Beta · 5 languages live, episode-length tested' },
        { phase: 'Q3 2026', status: 'planned', label: 'Production · integrated batch pipeline' },
        { phase: 'Q1 2027', status: 'planned', label: 'Open licensing for translation partners' },
      ],
      demo: {
        title: 'Sample · Three-Language Lip Sync',
        type: 'sync',
      },
    },
  },

  audiences: {
    'frum-children': {
      name: 'Frum Children Beyond Lubavitch',
      tagline: 'Bringing the warmth of Chassidus to the broader Orthodox world.',
      tam: '650,000',
      tamLabel: 'Orthodox Jewish children worldwide',
      budget: '$100,000',
      budgetLabel: 'Launch capital · self-sustaining thereafter',
      hero: 'Litvish, Chassidish, Modern Orthodox - the broader frum world has access to plenty of educational content, but very little carries the warmth and depth of Chassidus. We change that with content that opens hearts without triggering denominational defenses.',
      whyNow: 'Frum children today consume premium English-language children\'s media at unprecedented rates - but most of it carries values their parents disagree with. The market for high-quality Yiddishe-Neshama content in English-language premium production is wide open and growing.',
      strategy: [
        { title: 'Distribution Partners', body: 'Torah Umesorah network, Agudah summer programs, TorahAnytime (3M+ users), Chinuch.org, frum bookstore networks' },
        { title: 'Content Voice', body: 'Joyful, story-first, never preachy. Chassidus emerges through characters\' choices - not lectures. The content earns trust by being genuinely entertaining first.' },
        { title: 'Format Mix', body: 'Animated series (primary), picture books (secondary), live-event content for camps and schools (tertiary)' },
        { title: 'Authenticity Anchor', body: 'Every script reviewed by Mashpia + senior writers before production. Halachic accuracy is non-negotiable; this is what differentiates us from generic frum content.' },
      ],
      year1: {
        videos: 150,
        series: 3,
        viewers: '40K',
        revenue: '$50K projected (subscriptions + book sales)',
      },
      year3: {
        videos: 600,
        series: 8,
        viewers: '100K active families',
        revenue: '$500K-$800K (subscriptions + licensing)',
      },
      revenueModel: [
        'Subscription tier ($8/month per family) - projected 30K subscribers by end of Year 3',
        'Premium book sales (Maor publishing arm)',
        'Licensing of episodes to partner Yeshivos and camps',
        'Sponsored content from aligned brands (kosher food, Jewish toys, Sefarim)',
      ],
      budgetBreakdown: [
        { line: 'Initial content production (12 pilot episodes)', amount: 35000 },
        { line: 'Distribution platform setup (subscription + delivery)', amount: 18000 },
        { line: 'Marketing campaign (digital + community)', amount: 22000 },
        { line: 'Partnerships and outreach (TorahAnytime, schools)', amount: 15000 },
        { line: 'Operations buffer (Year 1 staffing, contingency)', amount: 10000 },
      ],
    },

    'secular-jewish-children': {
      name: 'Secular Jewish Children',
      tagline: 'Reaching them where they already are.',
      tam: '1,200,000',
      tamLabel: 'Secular Jewish children worldwide',
      budget: '$100,000',
      budgetLabel: 'Launch capital · self-sustaining thereafter',
      hero: 'The Rebbe\'s Mivtzoim never recognized denominational walls. The largest Jewish demographic globally is unaffiliated or secular. They consume YouTube, TikTok, and streaming content - and they want to be Jewish in some way they can\'t articulate.',
      whyNow: 'No professional, premium-production content currently exists for the secular Jewish child. The market is empty because the cost of authentic, high-quality Jewish children\'s media has been prohibitive. With MaorAnim cutting production cost by 90%, the math finally works.',
      strategy: [
        { title: 'Distribution Channels', body: 'YouTube/TikTok primary (where the audience already lives), streaming platforms (potential Netflix/Disney+ partnership), Chabad Shluchim network as community-level distributors' },
        { title: 'Content Voice', body: 'Joyful, proud, unmistakably Jewish - but never preachy. Story-first content that earns the watch. Identity-affirming, not religion-imposing.' },
        { title: 'Shluchim Integration', body: '5,000+ Chabad Houses become first-touch distributors. Each Shaliach gets unlimited license; content becomes their kiruv tool.' },
        { title: 'Multilingual from Day One', body: 'English primary, Hebrew/Russian/Spanish/French via MaorVoice + MaorSync. Same episode, native localization - not subtitled imports.' },
      ],
      year1: {
        videos: 50,
        series: 2,
        viewers: '50K reach',
        revenue: '$0 - pure community-building phase',
      },
      year3: {
        videos: 200,
        series: 5,
        viewers: '500K active viewers',
        revenue: '$300K-$600K (sponsorships + licensing + premium tier)',
      },
      revenueModel: [
        'Free community distribution to drive scale (Years 1-2)',
        'Sponsorship from Jewish federations and family foundations',
        'Licensing to Jewish Federations, JCCs, day schools (Year 2+)',
        'Premium tier with bonus content for engaged families ($5/month, Year 3+)',
        'Streaming platform licensing deal (Year 3 target: Disney+ Israel, similar)',
      ],
      budgetBreakdown: [
        { line: 'Pilot episode production (12 flagship episodes)', amount: 35000 },
        { line: 'Multi-language localization (Voice + Sync)', amount: 20000 },
        { line: 'Marketing campaign (YouTube/TikTok + influencer)', amount: 22000 },
        { line: 'Shluchim distribution kit + training', amount: 15000 },
        { line: 'Operations buffer + analytics infrastructure', amount: 8000 },
      ],
    },

    'children-of-the-world': {
      name: 'Children of the World',
      tagline: 'The Sheva Mitzvos B\'nei Noach as a children\'s framework.',
      tam: '2,000,000,000',
      tamLabel: 'Non-Jewish children globally',
      budget: '$100,000',
      budgetLabel: 'Launch capital · self-sustaining thereafter',
      hero: 'The Seven Noahide Laws are not a Jewish secret - they are humanity\'s inheritance, given at Sinai. We produce the first-ever professional, serialized children\'s content teaching the Sheva Mitzvos as a framework for moral identity.',
      whyNow: 'The Rebbe explicitly emphasized this audience. The infrastructure (curriculum, media, distribution) does not yet exist at scale. Ask Noah International and other Noahide organizations have been calling for exactly this for years. We can be the foundational provider.',
      strategy: [
        { title: 'Curriculum Partnership', body: 'Ask Noah International and leading Noahide educators co-develop the curriculum. Each episode reinforces one of the Seven Mitzvos through character-driven storytelling.' },
        { title: 'Distribution', body: 'Through Chabad Shluchim\'s existing non-Jewish community programs (1,500+ Houses run programming for Bnei Noach), partner Noahide schools, YouTube primary' },
        { title: 'Content Voice', body: 'Universal not Jewish-specific in its surface. Stories about choices, character, what makes a person good. Children identify with the characters; the moral framework is the structure they don\'t see being built.' },
        { title: 'Languages', body: 'English primary, Spanish (huge Noahide community in Latin America), Portuguese (Brazil), French (Africa). Multi-lang built in via MaorVoice.' },
      ],
      year1: {
        videos: 24,
        series: 1,
        viewers: '10 pilot partner schools, 2 languages',
        revenue: '$0 - proof-of-concept phase',
      },
      year3: {
        videos: 100,
        series: 3,
        viewers: '50K children, 100+ partner schools',
        revenue: '$200K-$400K (school licensing + sponsorships)',
      },
      revenueModel: [
        'School licensing ($500/school/year for full curriculum library)',
        'Free community distribution via Shluchim (kiruv-aligned, foundation-supported)',
        'Family Federation sponsorships (foundations focused on universal Jewish values)',
        'Premium parent guide subscription ($10/month, Year 3+)',
        'Long-term licensing to mainstream educational platforms (Year 4+)',
      ],
      budgetBreakdown: [
        { line: 'Curriculum co-development (Ask Noah International partnership)', amount: 25000 },
        { line: 'Pilot season production (12 episodes, multi-language)', amount: 35000 },
        { line: 'Pilot school onboarding + teacher training materials', amount: 15000 },
        { line: 'Marketing to Noahide community + Shluchim network', amount: 15000 },
        { line: 'Operations + research budget', amount: 10000 },
      ],
    },
  },
};


// =============================================================
// =============================================================
//   DATA - EDITABLE SECTION
//   This is the only block that needs to change to update
//   property facts, institutions, defaults, etc.
//   Everything else in this file is the calculator engine.
// =============================================================
// =============================================================

// Default DATA = 417 Maple. Per-property pages can override the defaults via
// window.PROPERTY_DATA_OVERRIDE (e.g., property-653.html sets it before loading app.js).
const DATA_417 = {

  // -------- Property Identity --------
  property: {
    address: "417 Maple Street",
    neighborhood: "Crown Heights, Brooklyn",
    listedBy: "Valerie Sebbag · 555 Properties",
    units: 2,
    unitsSub: "3 BR / 2 BA each",
    lot: "40 × 100",
    lotSub: "4,000 sqft",
    zoning: "R6",
    options: { bargain: 'Maybe', growth: 'Yes' },
  },

  // -------- Financial Defaults --------
  defaults: {
    askingPrice: 2400000,
    income: {
      current:    { u1: 4655, u2: 4155, storage: 1000, parking: 0 },
      stabilized: { u1: 4795, u2: 4280, storage: 2000, parking: 2000 },
    },
    opex: {
      propertyTax:  5829,
      insurance:    7500,
      water:        3000,
      utilities:    1500,
      maintenance:  5000,
    },
    vacancyPct: 5,
    mortgage: {
      rate:        6.5,
      years:       30,
      targetDscr:  1.25,
      downPayments: [20, 25, 30, 35],
    },
    bargainSale: {
      salePrice: 2004000,
      fmv:       2700000,
      basis:     1550000,
      rpttRate:  2.625,
      bracket:   35,
    },
  },

  // -------- Scoring (visual, not calculated) --------
  score: {
    operations:    12,  // out of 20
    location:      21,  // out of 25
    development:   18,  // out of 20
    maorFit:       17,  // out of 25
    risk:           8,  // out of 10
  },

  // -------- Anash Institutions (to add: append a new entry) --------
  anashInstitutions: [
    { name: "Friendship Circle",       address: "674 Rutland Rd, Brooklyn, NY 11203" },
    { name: "Yeshiva Darchai Menachem", address: "432 Rutland Rd, Brooklyn, NY 11203" },
    // Add more here as confirmed:
    // { name: "...", address: "..." },
  ],
  // Pattern note shown below institutions list:
  patternNote: "Both institutions are on Rutland Road - within walking distance of each other and of 417 Maple. This is not a coincidence; it's a corridor. Each institution that anchored here has helped the area become central.",

};

const DATA = (typeof window !== 'undefined' && window.PROPERTY_DATA_OVERRIDE) || DATA_417;

// =============================================================
// =============================================================
//   CALCULATOR ENGINE - do not edit below unless changing logic
// =============================================================
// =============================================================

// ---- Format helpers ----
const fmt = {
  dollar: (n) => '$' + Math.round(n).toLocaleString('en-US'),
  dollarPlain: (n) => Math.round(n).toLocaleString('en-US'),
  dollarShort: (n) => {
    const abs = Math.abs(n);
    if (abs >= 1000000) {
      const v = (n / 1000000);
      return '$' + (Math.abs(v % 1) < 0.01 ? v.toFixed(0) : v.toFixed(2)) + 'M';
    }
    if (abs >= 10000) return '$' + Math.round(n / 1000) + 'K';
    return '$' + Math.round(n).toLocaleString('en-US');
  },
  percent: (n, decimals = 2) => n.toFixed(decimals) + '%',
  ratio: (n) => n.toFixed(2) + '×',
  monthly: (n) => '$' + Math.round(n).toLocaleString('en-US') + ' /mo',
  yearly: (n) => '$' + Math.round(n).toLocaleString('en-US') + ' /yr',
  sigSign: (n, formatter) => (n > 0 ? '+' : '') + formatter(n),
};

// ---- Mortgage P&I factor (monthly) ----
function pmtFactor(annualRatePct, years) {
  const r = (annualRatePct / 100) / 12;
  const n = years * 12;
  if (r === 0) return 1 / n;
  return r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
}

// ---- Read all inputs from DOM ----
function readInputs() {
  const get = (id) => {
    const el = document.getElementById(id);
    if (!el) return 0;
    // Strip commas - supports formatted text inputs (e.g., "2,400,000")
    const cleanValue = String(el.value).replace(/,/g, '');
    return parseFloat(cleanValue) || 0;
  };
  return {
    price:           get('i-price'),
    u1Current:       get('i-u1-current'),
    u2Current:       get('i-u2-current'),
    storageCurrent:  get('i-storage-current'),
    parkingCurrent:  get('i-parking-current'),
    u1Stab:          get('i-u1-stab'),
    u2Stab:          get('i-u2-stab'),
    storageStab:     get('i-storage-stab'),
    parkingStab:     get('i-parking-stab'),
    propTax:         get('i-prop-tax'),
    insurance:       get('i-insurance'),
    water:           get('i-water'),
    utils:           get('i-utils'),
    maint:           get('i-maint'),
    vacancyPct:      get('i-vacancy'),
    rate:            get('i-rate'),
    years:           get('i-years'),
    targetDscr:      get('i-target-dscr'),
    downPcts:        [get('i-down-slider') || 25],  // lean v2: single value
  };
}

// ---- Run all calculations ----
function calculate(inp) {
  const griCurrentMo = inp.u1Current + inp.u2Current + inp.storageCurrent + inp.parkingCurrent;
  const griCurrentYr = griCurrentMo * 12;
  const griStabMo    = inp.u1Stab + inp.u2Stab + inp.storageStab + inp.parkingStab;
  const griStabYr    = griStabMo * 12;
  const upsideMo     = griStabMo - griCurrentMo;
  const upsideYr     = griStabYr - griCurrentYr;

  const vacancyAmt = griStabYr * (inp.vacancyPct / 100);
  const egi        = griStabYr - vacancyAmt;
  const opexTotal  = inp.propTax + inp.insurance + inp.water + inp.utils + inp.maint;
  const noi        = egi - opexTotal;
  const capRate    = inp.price > 0 ? (noi / inp.price) * 100 : 0;

  const factor = pmtFactor(inp.rate, inp.years);

  const scenarios = inp.downPcts.map((downPct) => {
    const downAmt    = inp.price * (downPct / 100);
    const loan       = inp.price - downAmt;
    const monthlyPmt = loan * factor;
    const annualPmt  = monthlyPmt * 12;
    const dscr       = annualPmt > 0 ? noi / annualPmt : 0;

    const requiredAnnualPmt = inp.targetDscr > 0 ? noi / inp.targetDscr : 0;
    const gapNoi = Math.max(0, inp.targetDscr * annualPmt - noi);

    let priceReduction = 0;
    if (factor > 0 && downPct < 100 && inp.targetDscr > 0) {
      const targetMonthly = noi / inp.targetDscr / 12;
      const targetLoan    = targetMonthly / factor;
      const targetPrice   = targetLoan / (1 - downPct / 100);
      priceReduction      = Math.max(0, inp.price - targetPrice);
    }

    return {
      downPct, downAmt, loan, monthlyPmt, annualPmt, dscr,
      gapNoi, priceReduction,
      pass: dscr >= inp.targetDscr,
    };
  });

  return {
    griCurrentMo, griCurrentYr, griStabMo, griStabYr,
    upsideMo, upsideYr,
    vacancyAmt, egi, opexTotal, noi, capRate,
    scenarios,
  };
}

// ---- Render helpers ----
function setOut(name, value) {
  const els = document.querySelectorAll(`[data-out="${name}"]`);
  els.forEach((el) => { el.textContent = value; });
}
function setBarStyle(name, widthPct) {
  const els = document.querySelectorAll(`[data-out-style="${name}"]`);
  els.forEach((el) => { el.style.width = widthPct + '%'; });
}

// ---- Update DOM with calculation results ----
function render(calc, inp) {
  // Income totals
  setOut('griCurrentMo', fmt.dollar(calc.griCurrentMo));
  setOut('griCurrentYr', fmt.dollar(calc.griCurrentYr));
  setOut('griStabMo',    fmt.dollar(calc.griStabMo));
  setOut('griStabYr',    fmt.dollar(calc.griStabYr));
  setOut('griStabYr2',   fmt.dollar(calc.griStabYr));
  setOut('griStabYr3',   fmt.dollar(calc.griStabYr));
  setOut('upsideMo',     fmt.sigSign(calc.upsideMo, fmt.monthly));
  setOut('upsideMo2',    fmt.sigSign(calc.upsideMo, fmt.monthly));
  setOut('upsideYr',     fmt.sigSign(calc.upsideYr, fmt.yearly));
  setOut('upsideYr2',    fmt.sigSign(calc.upsideYr, fmt.yearly));
  setOut('upsideYr3',    fmt.dollarPlain(calc.upsideYr));

  // OpEx + NOI
  setOut('opexTotal',  fmt.dollar(calc.opexTotal));
  setOut('opexTotal2', fmt.dollar(calc.opexTotal));
  setOut('opexTotal3', fmt.dollar(calc.opexTotal));
  setOut('vacancyAmt', fmt.dollar(calc.vacancyAmt));
  setOut('egi',        fmt.dollar(calc.egi));
  setOut('noi',        fmt.dollar(calc.noi));
  setOut('noi2',       fmt.dollar(calc.noi));
  setOut('capRate',    fmt.percent(calc.capRate, 2));
  setOut('capRate2',   fmt.percent(calc.capRate, 2));

  // Asking price displays
  setOut('priceShort', fmt.dollarShort(inp.price));

  // Mortgage scenarios
  calc.scenarios.forEach((s, i) => {
    const idx = i + 1;
    setOut(`price-${idx}`,    fmt.dollar(inp.price));
    setOut(`down-${idx}`,     fmt.dollar(s.downAmt));
    setOut(`loan-${idx}`,     fmt.dollar(s.loan));
    setOut(`monthly-${idx}`,  fmt.dollar(s.monthlyPmt));
    setOut(`annual-${idx}`,   fmt.dollar(s.annualPmt));
    setOut(`dscr-${idx}`,     fmt.ratio(s.dscr));
    setOut(`gapNoi-${idx}`,   '+' + fmt.dollar(s.gapNoi));
    setOut(`priceRed-${idx}`, '−' + fmt.dollar(s.priceReduction));

    const card = document.querySelector(`.scenario[data-idx="${i}"]`);
    if (card) {
      if (s.pass) card.classList.add('dscr-pass');
      else        card.classList.remove('dscr-pass');
    }
  });
}

// ---- Render static DATA-driven sections (institutions, etc.) ----
function renderStatic() {
  // Property identity
  setOut('listedBy',  DATA.property.listedBy);
  setOut('units',     DATA.property.units);
  setOut('unitsSub',  DATA.property.unitsSub);
  setOut('lot',       DATA.property.lot);
  setOut('lotSub',    DATA.property.lotSub);
  setOut('zoning',    DATA.property.zoning);

  // Score
  const s = DATA.score;
  const total = s.operations + s.location + s.development + s.maorFit + s.risk;
  setOut('scoreTotal', total);
  setOut('scoreOps',   s.operations);
  setOut('scoreLoc',   s.location);
  setOut('scoreDev',   s.development);
  setOut('scoreFit',   s.maorFit);
  setOut('scoreRisk',  s.risk);
  setBarStyle('scoreOpsBar',  (s.operations  / 20) * 100);
  setBarStyle('scoreLocBar',  (s.location    / 25) * 100);
  setBarStyle('scoreDevBar',  (s.development / 20) * 100);
  setBarStyle('scoreFitBar',  (s.maorFit     / 25) * 100);
  setBarStyle('scoreRiskBar', (s.risk        / 10) * 100);

  // Institutions list
  const listEl = document.getElementById('institutions-list');
  if (listEl) {
    const items = DATA.anashInstitutions.map(inst => `
      <div class="inst-item">
        <span class="inst-name">${inst.name}</span>
        <span class="inst-addr">${inst.address}</span>
      </div>
    `).join('');
    listEl.innerHTML = `
      <span class="il-header">Anash Institutions Already Established Nearby</span>
      <div class="il-items">${items}</div>
      ${DATA.patternNote ? `<p class="il-pattern-note"><strong>The pattern:</strong> ${DATA.patternNote}</p>` : ''}
    `;
  }
}

// ---- Set initial input values from DATA defaults ----
function loadDefaults() {
  const d = DATA.defaults;
  // Helper to safely set value (skip if element missing - supports lean v2)
  const setVal = (id, v) => {
    const el = document.getElementById(id);
    if (el) el.value = v;
  };

  // Price gets formatted with commas
  const priceEl = document.getElementById('i-price');
  if (priceEl) {
    priceEl.value = Number(d.askingPrice).toLocaleString('en-US');
  }
  setVal('i-u1-current',      d.income.current.u1);
  setVal('i-u2-current',      d.income.current.u2);
  setVal('i-storage-current', d.income.current.storage);
  setVal('i-parking-current', d.income.current.parking);
  setVal('i-u1-stab',         d.income.stabilized.u1);
  setVal('i-u2-stab',         d.income.stabilized.u2);
  setVal('i-storage-stab',    d.income.stabilized.storage);
  setVal('i-parking-stab',    d.income.stabilized.parking);
  setVal('i-prop-tax',        d.opex.propertyTax);
  setVal('i-insurance',       d.opex.insurance);
  setVal('i-water',           d.opex.water);
  setVal('i-utils',           d.opex.utilities);
  setVal('i-maint',           d.opex.maintenance);
  setVal('i-vacancy',         d.vacancyPct);
  setVal('i-rate',            d.mortgage.rate);
  setVal('i-years',           d.mortgage.years);
  setVal('i-target-dscr',     d.mortgage.targetDscr);

  // Lean v2: single down-payment slider (defaults to second value, e.g., 25%)
  const defaultDown = d.mortgage.downPayments[1] || 25;
  setVal('i-down-slider', defaultDown);
  setVal('i-down-range',  defaultDown);

  // Bargain Sale calculator defaults
  if (d.bargainSale) {
    setVal('i-bs-sale',    d.bargainSale.salePrice);
    setVal('i-bs-fmv',     d.bargainSale.fmv);
    setVal('i-bs-basis',   d.bargainSale.basis);
    setVal('i-bs-rptt',    d.bargainSale.rpttRate);
    setVal('i-bs-bracket', d.bargainSale.bracket);
  }
}

// ---- Recalc + Render cycle ----
function recalc() {
  const inputs = readInputs();
  const result = calculate(inputs);
  render(result, inputs);
  // Bargain Sale - independent calculator, recalc whenever any input changes
  if (typeof calcBargainSale === 'function') calcBargainSale();
}

// ---- Accordion / collapsible toggle ----
function initCollapsibles() {
  document.querySelectorAll('.collapsible').forEach((wrapper) => {
    const header = wrapper.querySelector(':scope > .collapse-header');
    if (!header) return;
    header.addEventListener('click', () => {
      const isOpen = wrapper.classList.toggle('is-open');
      header.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });

  // Building blocks (bb-block) - same pattern, separate selector
  document.querySelectorAll('.bb-block').forEach((block) => {
    const header = block.querySelector('.bb-header');
    if (!header) return;
    header.addEventListener('click', () => {
      const isOpen = block.classList.toggle('is-open');
      header.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });
}

// ---- Mortgage carousel: dot navigation + scroll sync ----
function initCarousel() {
  const track = document.getElementById('mortgageTrack');
  const dotsContainer = document.getElementById('mortgageDots');
  if (!track || !dotsContainer) return;

  const dots = dotsContainer.querySelectorAll('.dot');
  const items = track.querySelectorAll('.carousel-item');

  // Click a dot → scroll the corresponding card into view
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const target = parseInt(dot.dataset.target, 10);
      const item = items[target];
      if (item) {
        track.scrollTo({
          left: item.offsetLeft - track.offsetLeft,
          behavior: 'smooth',
        });
      }
    });
  });

  // As user scrolls/swipes, update which dot is active
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        const idx = parseInt(entry.target.dataset.idx, 10);
        dots.forEach((d, i) => {
          if (i === idx) d.classList.add('active');
          else           d.classList.remove('active');
        });
      }
    });
  }, {
    root: track,
    threshold: 0.5,
  });

  items.forEach((item) => observer.observe(item));
}

// ---- Wire up event listeners ----
function init() {
  loadDefaults();
  renderStatic();
  recalc();

  document.querySelectorAll('input.calc-input').forEach((input) => {
    // Hide from keyboard tab order - viewers won't discover via Tab
    input.setAttribute('tabindex', '-1');
    input.addEventListener('input', recalc);
    input.addEventListener('change', recalc);
  });

  initCollapsibles();
  initCarousel();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// =============================================================
// =============================================================
//   v7 ADDITIONS - Layer Navigation, Save Panel, localStorage
// =============================================================
// =============================================================

const LS_KEY = 'maor_underwriting_defaults_v1';

// ---- Layer Navigation ----
function showLayer(layerId) {
  document.querySelectorAll('.layer').forEach((l) => l.classList.remove('is-active'));
  const target = document.getElementById('layer-' + layerId);
  if (target) {
    target.classList.add('is-active');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

function initLayerNav() {
  // Pillar cards on master hub → enter pillar
  document.querySelectorAll('[data-target-layer]').forEach((btn) => {
    btn.addEventListener('click', () => {
      showLayer(btn.dataset.targetLayer);
    });
  });

  // Property cards in building hub → navigate to the property's own page
  document.querySelectorAll('[data-target-property]').forEach((btn) => {
    if (btn.classList.contains('is-pending')) return;
    btn.addEventListener('click', () => {
      const slug = btn.dataset.targetProperty;
      const page = PROPERTY_PAGES[slug] || 'property';
      window.location.href = page;
    });
  });

  // Back buttons in layer-nav
  document.querySelectorAll('[data-back-to]').forEach((btn) => {
    btn.addEventListener('click', () => {
      showLayer(btn.dataset.backTo);
    });
  });
}

// ---- Save Panel: Open / Close ----
function openSavePanel() {
  const overlay = document.getElementById('savePanelOverlay');
  if (overlay) overlay.classList.add('is-open');
}
function closeSavePanel() {
  const overlay = document.getElementById('savePanelOverlay');
  if (overlay) overlay.classList.remove('is-open');
}

// ---- Build a JSON snapshot of current input values ----
function snapshotInputs() {
  const ids = [
    'i-price','i-u1-current','i-u2-current','i-storage-current','i-parking-current',
    'i-u1-stab','i-u2-stab','i-storage-stab','i-parking-stab',
    'i-prop-tax','i-insurance','i-water','i-utils','i-maint',
    'i-vacancy','i-rate','i-years','i-target-dscr',
    'i-down-slider',
  ];
  const out = {};
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) out[id] = parseFloat(el.value) || 0;
  });
  return out;
}

// ---- Apply a snapshot of values back into inputs ----
function applySnapshot(snap) {
  if (!snap || typeof snap !== 'object') return;
  Object.keys(snap).forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = snap[id];
  });
  recalc();
}

// ---- Build the JSON to export (for Claude to embed) ----
function buildExportJson() {
  const snap = snapshotInputs();
  return JSON.stringify({
    askingPrice: snap['i-price'],
    income: {
      current: {
        u1: snap['i-u1-current'],
        u2: snap['i-u2-current'],
        storage: snap['i-storage-current'],
        parking: snap['i-parking-current'],
      },
      stabilized: {
        u1: snap['i-u1-stab'],
        u2: snap['i-u2-stab'],
        storage: snap['i-storage-stab'],
        parking: snap['i-parking-stab'],
      },
    },
    opex: {
      propertyTax: snap['i-prop-tax'],
      insurance: snap['i-insurance'],
      water: snap['i-water'],
      utilities: snap['i-utils'],
      maintenance: snap['i-maint'],
    },
    vacancyPct: snap['i-vacancy'],
    mortgage: {
      rate: snap['i-rate'],
      years: snap['i-years'],
      targetDscr: snap['i-target-dscr'],
      downPayments: [snap['i-down-slider']],
    },
  }, null, 2);
}

// ---- Toast helpers ----
function showToast(elId, message, success = true) {
  const t = document.getElementById(elId);
  if (!t) return;
  t.textContent = message;
  t.classList.add('is-visible');
  if (success) {
    t.style.background = 'rgba(146,224,168,0.10)';
    t.style.borderColor = 'var(--green)';
    t.style.color = 'var(--green)';
  } else {
    t.style.background = 'rgba(193,61,85,0.10)';
    t.style.borderColor = 'var(--burgundy-light)';
    t.style.color = 'var(--burgundy-light)';
  }
  setTimeout(() => t.classList.remove('is-visible'), 3000);
}

// ---- Save Panel: wire up actions ----
function initSavePanel() {
  const overlay = document.getElementById('savePanelOverlay');
  if (!overlay || overlay.dataset.veInited === '1') return;
  overlay.dataset.veInited = '1';

  const closeBtn = document.getElementById('savePanelClose');
  if (closeBtn) closeBtn.addEventListener('click', closeSavePanel);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeSavePanel();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSavePanel();
  });

  // Save to browser localStorage
  const btnSaveLocal = document.getElementById('btnSaveLocal');
  if (btnSaveLocal) {
    btnSaveLocal.addEventListener('click', () => {
      try {
        const snap = snapshotInputs();
        localStorage.setItem(LS_KEY, JSON.stringify(snap));
        showToast('toastLocal', '✓ Saved to browser. These values will load next time.', true);
      } catch (err) {
        showToast('toastLocal', '✗ Could not save: ' + err.message, false);
      }
    });
  }

  const btnClearLocal = document.getElementById('btnClearLocal');
  if (btnClearLocal) {
    btnClearLocal.addEventListener('click', () => {
      try {
        localStorage.removeItem(LS_KEY);
        showToast('toastLocal', '✓ Local save cleared. Code defaults will load next time.', true);
      } catch (err) {
        showToast('toastLocal', '✗ Could not clear: ' + err.message, false);
      }
    });
  }

  // Export JSON
  const btnExportJson = document.getElementById('btnExportJson');
  const jsonOutput = document.getElementById('jsonOutput');
  if (btnExportJson && jsonOutput) {
    btnExportJson.addEventListener('click', () => {
      jsonOutput.textContent = buildExportJson();
      jsonOutput.classList.add('is-visible');
    });
  }

  const btnCopyJson = document.getElementById('btnCopyJson');
  if (btnCopyJson) {
    btnCopyJson.addEventListener('click', async () => {
      const json = buildExportJson();
      if (jsonOutput) {
        jsonOutput.textContent = json;
        jsonOutput.classList.add('is-visible');
      }
      try {
        await navigator.clipboard.writeText(json);
        showToast('toastCopy', '✓ JSON copied to clipboard.', true);
      } catch (err) {
        showToast('toastCopy', '⚠ Could not copy automatically. Select the text below and copy manually.', false);
      }
    });
  }

  // Restore Defaults
  const btnRestore = document.getElementById('btnRestoreDefaults');
  if (btnRestore) {
    btnRestore.addEventListener('click', () => {
      try { localStorage.removeItem(LS_KEY); } catch (e) {}
      loadDefaults();
      recalc();
      closeSavePanel();
    });
  }
}

// ---- Trigger detection: Ctrl+Shift+E, "maor" sequence, long-press corner ----
function initSecretTriggers() {
  // Ctrl/Cmd + Shift + E
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'e') {
      e.preventDefault();
      openSavePanel();
    }
  });

  // Type "maor" anywhere
  let buffer = '';
  document.addEventListener('keydown', (e) => {
    // Skip if focused on an input
    if (document.activeElement && document.activeElement.matches('input, textarea')) return;
    if (e.key.length !== 1) {
      // reset buffer on non-printable keys other than letters
      if (e.key === 'Backspace') buffer = buffer.slice(0, -1);
      return;
    }
    buffer += e.key.toLowerCase();
    if (buffer.length > 10) buffer = buffer.slice(-10);
    if (buffer.endsWith('maor')) {
      buffer = '';
      openSavePanel();
    }
  });

  // Mobile long-press on hidden corner button
  const trigger = document.getElementById('secretTrigger');
  if (trigger) {
    let timer = null;
    const start = (e) => {
      timer = setTimeout(() => {
        openSavePanel();
        timer = null;
      }, 1500);
    };
    const cancel = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
    trigger.addEventListener('touchstart', start, { passive: true });
    trigger.addEventListener('touchend', cancel);
    trigger.addEventListener('touchcancel', cancel);
    trigger.addEventListener('mousedown', start);
    trigger.addEventListener('mouseup', cancel);
    trigger.addEventListener('mouseleave', cancel);
  }
}

// ---- Load localStorage values if present (overrides code defaults) ----
function loadFromLocalStorage() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return false;
    const snap = JSON.parse(raw);
    applySnapshot(snap);
    return true;
  } catch (err) {
    console.warn('Could not load local defaults:', err);
    return false;
  }
}

// ---- Override init to add new behaviors ----
const originalInit = init;
init = function() {
  originalInit();
  initLayerNav();
  initSavePanel();
  initSecretTriggers();
  // Load localStorage AFTER originalInit applied code defaults
  loadFromLocalStorage();
};

// Re-run init since the original ran on DOMContentLoaded already at the bottom of script.js
if (document.readyState !== 'loading') {
  initLayerNav();
  initSavePanel();
  initSecretTriggers();
  loadFromLocalStorage();
}

// =============================================================
//   v8.1 - SCROLL FADE-IN ANIMATION
// =============================================================

function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in-on-scroll');
  if (!elements.length) return;

  // If user prefers reduced motion, skip animation entirely
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  // Re-triggering observer: removes is-visible when out of view, re-adds when back in
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        // Only remove if scrolled significantly past (not just slightly out of viewport)
        const rect = entry.target.getBoundingClientRect();
        if (rect.bottom < -50 || rect.top > window.innerHeight + 50) {
          entry.target.classList.remove('is-visible');
        }
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px',
  });

  elements.forEach(el => observer.observe(el));
}

// Run scroll animations init now (or when DOM ready)
if (document.readyState !== 'loading') {
  initScrollAnimations();
} else {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
}

// Re-trigger when switching layers - elements should be immediately visible in non-master layers
const _origShowLayer = showLayer;
showLayer = function(layerId) {
  _origShowLayer(layerId);
  // For master layer (the home page), let IntersectionObserver handle scroll-triggered animation
  // For all other layers, make all fade-in elements visible immediately so user sees content
  if (layerId !== 'master') {
    setTimeout(() => {
      const newLayer = document.getElementById('layer-' + layerId);
      if (newLayer) {
        const hidden = newLayer.querySelectorAll('.fade-in-on-scroll:not(.is-visible)');
        hidden.forEach((el) => el.classList.add('is-visible'));
      }
    }, 30);
  } else {
    // On master, just check what's already in viewport
    setTimeout(() => {
      const newLayer = document.getElementById('layer-' + layerId);
      if (newLayer) {
        const hidden = newLayer.querySelectorAll('.fade-in-on-scroll:not(.is-visible)');
        hidden.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('is-visible');
          }
        });
      }
    }, 50);
  }
};

// =============================================================
// =============================================================
//   v9 - HASH ROUTING, BREADCRUMBS, ENGINE/AUDIENCE DETAIL
// =============================================================
// =============================================================

// ---- Layer & Page mapping ----
const ROUTES = {
  '': { layer: 'master' },
  '#home': { layer: 'master' },
  '#building': { layer: 'building' },
  '#building/properties/417-maple': { layer: 'property' },
  '#building/properties/653-maple': { layer: 'property' },
  '#ai': { layer: 'ai' },
};

// Map property slug -> page URL (Cloudflare Pages strips .html, so omit it)
const PROPERTY_PAGES = {
  '417-maple': 'property',
  '653-maple': 'property-653',
};

// Engine routes (5)
['maor-script', 'maor-anim', 'maor-voice', 'maor-sound', 'maor-sync'].forEach((slug) => {
  ROUTES[`#ai/engines/${slug}`] = { layer: 'engine', engine: slug };
});

// Audience routes (3)
['frum-children', 'secular-jewish-children', 'children-of-the-world'].forEach((slug) => {
  ROUTES[`#ai/audiences/${slug}`] = { layer: 'audience', audience: slug };
});

// ---- Render engine detail page ----
function renderEngineDetail(slug) {
  const data = AI_DATA.engines[slug];
  if (!data) return;

  // Update breadcrumb
  document.getElementById('bc-engine-current').textContent = data.name;

  // Build content
  const html = `
    <div class="detail-header">
      <span class="kicker">${data.domain} · Stage: ${data.stage}</span>
      <h1>${data.name}</h1>
      <p class="detail-tagline">${data.tagline}</p>
    </div>

    <div class="detail-hero-block">
      <p>${data.hero}</p>
    </div>

    <div class="detail-grid">

      <div class="detail-col">
        <div class="detail-card">
          <h4 class="detail-card-title">Capabilities</h4>
          <ul class="detail-list">
            ${data.capabilities.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>

        <div class="detail-card">
          <h4 class="detail-card-title">Technical Stack</h4>
          <table class="detail-stack-table">
            <tbody>
              ${data.stack.map(s => `
                <tr>
                  <td class="ds-layer">${s.layer}</td>
                  <td class="ds-value">${s.value}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="detail-col">
        <div class="detail-card">
          <h4 class="detail-card-title">Why Not Just Use Commercial AI?</h4>
          <div class="diff-block">
            <div class="diff-row diff-commercial">
              <span class="diff-label">Commercial Tools</span>
              <p>${data.difference.commercial}</p>
            </div>
            <div class="diff-row diff-maor">
              <span class="diff-label">${data.name}</span>
              <p>${data.difference.maor}</p>
            </div>
          </div>
        </div>

        <div class="detail-card">
          <h4 class="detail-card-title">Roadmap</h4>
          <div class="roadmap-list">
            ${data.roadmap.map(r => `
              <div class="roadmap-item roadmap-${r.status}">
                <span class="rm-phase">${r.phase}</span>
                <span class="rm-status">${r.status === 'done' ? '✓ Live' : r.status === 'inprogress' ? 'In Progress' : 'Planned'}</span>
                <span class="rm-label">${r.label}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

    </div>

    <div class="detail-demo">
      <h4 class="detail-card-title">${data.demo.title}</h4>
      ${renderDemo(data.demo.type, data.name)}
    </div>
  `;

  document.getElementById('engine-detail-content').innerHTML = html;
}

// ---- Demo renderers (visual placeholders, swap for real demos later) ----
function renderDemo(type, engineName) {
  switch (type) {
    case 'script':
      return `
        <div class="demo-frame demo-script">
          <div class="demo-script-header">
            <span class="dsh-label">EPISODE 12 · "Mendy's Surprise"</span>
            <span class="dsh-meta">Generated by ${engineName} · v0.4 Beta</span>
          </div>
          <div class="demo-script-body">
            <div class="dsb-line"><span class="dsb-name">YANKY</span><span class="dsb-text">(beaming) Mendy! What did the Rebbe write back?</span></div>
            <div class="dsb-line"><span class="dsb-name">MENDY</span><span class="dsb-text">(holding the letter carefully) He says... he says my Mivtza Tefillin idea will reach more people than I imagined.</span></div>
            <div class="dsb-stage">A pause. The boys look at each other &mdash; the kind of look that says everything.</div>
            <div class="dsb-line"><span class="dsb-name">YANKY</span><span class="dsb-text">So we're really doing this.</span></div>
            <div class="dsb-line"><span class="dsb-name">MENDY</span><span class="dsb-text">(quiet, certain) We're really doing this.</span></div>
          </div>
          <div class="demo-script-footer">
            <span class="dsf-tag">✓ Halachically vetted</span>
            <span class="dsf-tag">✓ Voice consistent with Series Bible</span>
            <span class="dsf-tag">✓ Age 7-11 vocabulary</span>
          </div>
        </div>`;
    case 'animation':
      return `
        <div class="demo-frame demo-animation">
          <div class="demo-anim-grid">
            <div class="demo-anim-frame">
              <div class="daf-placeholder">
                <span class="daf-icon">▶</span>
                <span class="daf-label">Frame 01</span>
              </div>
              <span class="daf-caption">Establishing shot · Yanky enters</span>
            </div>
            <div class="demo-anim-frame">
              <div class="daf-placeholder">
                <span class="daf-icon">▶</span>
                <span class="daf-label">Frame 02</span>
              </div>
              <span class="daf-caption">Reaction shot · same character</span>
            </div>
            <div class="demo-anim-frame">
              <div class="daf-placeholder">
                <span class="daf-icon">▶</span>
                <span class="daf-label">Frame 03</span>
              </div>
              <span class="daf-caption">Wide shot · environment</span>
            </div>
            <div class="demo-anim-frame">
              <div class="daf-placeholder">
                <span class="daf-icon">▶</span>
                <span class="daf-label">Frame 04</span>
              </div>
              <span class="daf-caption">Close-up · same character</span>
            </div>
          </div>
          <div class="demo-anim-meta">
            <span class="dam-stat"><strong>Cost per episode (traditional):</strong> $80,000</span>
            <span class="dam-stat"><strong>Cost per episode (MaorAnim):</strong> $4,200</span>
            <span class="dam-stat"><strong>Render time:</strong> 6 hours</span>
          </div>
        </div>`;
    case 'voice':
      return `
        <div class="demo-frame demo-voice">
          <div class="demo-voice-header">
            <span class="dvh-source">Source: English narration · 2:34</span>
          </div>
          <div class="demo-voice-langs">
            <div class="dvl-row">
              <span class="dvl-flag">🇺🇸</span>
              <span class="dvl-lang">English (Original)</span>
              <div class="dvl-wave"></div>
              <button class="dvl-play" disabled>▶</button>
            </div>
            <div class="dvl-row">
              <span class="dvl-flag">🇮🇱</span>
              <span class="dvl-lang">Hebrew</span>
              <div class="dvl-wave"></div>
              <button class="dvl-play" disabled>▶</button>
            </div>
            <div class="dvl-row">
              <span class="dvl-flag">🇷🇺</span>
              <span class="dvl-lang">Russian</span>
              <div class="dvl-wave"></div>
              <button class="dvl-play" disabled>▶</button>
            </div>
            <div class="dvl-row">
              <span class="dvl-flag">🇪🇸</span>
              <span class="dvl-lang">Spanish</span>
              <div class="dvl-wave"></div>
              <button class="dvl-play" disabled>▶</button>
            </div>
            <div class="dvl-row">
              <span class="dvl-flag">🇮🇱</span>
              <span class="dvl-lang">Yiddish</span>
              <div class="dvl-wave"></div>
              <button class="dvl-play" disabled>▶</button>
            </div>
          </div>
          <div class="demo-voice-meta">
            <span class="dvm-stat"><strong>Production time:</strong> 4 hours for all 5 languages</span>
            <span class="dvm-stat"><strong>Voice actor royalty model:</strong> Per-minute, fully transparent</span>
          </div>
          <div class="demo-disclaimer">Audio playback coming in next iteration · visual demo</div>
        </div>`;
    case 'sound':
      return `
        <div class="demo-frame demo-sound">
          <div class="demo-sound-header">
            <span class="dsh-label">Generated · "Yom Tov Niggun · Variation 3"</span>
          </div>
          <div class="demo-sound-staff">
            <div class="dss-line"></div>
            <div class="dss-line"></div>
            <div class="dss-line"></div>
            <div class="dss-line"></div>
            <div class="dss-line"></div>
            <div class="dss-notes">
              <span class="dsn" style="left:5%;top:30%">♪</span>
              <span class="dsn" style="left:12%;top:50%">♪</span>
              <span class="dsn" style="left:18%;top:45%">♪</span>
              <span class="dsn" style="left:25%;top:30%">♪</span>
              <span class="dsn" style="left:32%;top:60%">♫</span>
              <span class="dsn" style="left:42%;top:35%">♪</span>
              <span class="dsn" style="left:50%;top:55%">♪</span>
              <span class="dsn" style="left:58%;top:40%">♫</span>
              <span class="dsn" style="left:68%;top:30%">♪</span>
              <span class="dsn" style="left:76%;top:50%">♪</span>
              <span class="dsn" style="left:84%;top:45%">♪</span>
              <span class="dsn" style="left:92%;top:35%">♪</span>
            </div>
          </div>
          <div class="demo-sound-tags">
            <span class="dst-tag">Mode: Adonai Malach</span>
            <span class="dst-tag">Tempo: 84 BPM</span>
            <span class="dst-tag">Mood: Simchas Yom Tov</span>
            <span class="dst-tag">Approved by Baal Menagen panel</span>
          </div>
          <div class="demo-disclaimer">Audio playback coming in next iteration · visual demo</div>
        </div>`;
    case 'sync':
      return `
        <div class="demo-frame demo-sync">
          <div class="demo-sync-header">
            <span class="dsh-label">Same character · 3 languages · frame-perfect sync</span>
          </div>
          <div class="demo-sync-grid">
            <div class="dsg-frame">
              <div class="dsg-placeholder">
                <span class="dsg-icon">👤</span>
              </div>
              <span class="dsg-lang">English</span>
              <span class="dsg-text">"And what did you learn today?"</span>
            </div>
            <div class="dsg-frame">
              <div class="dsg-placeholder">
                <span class="dsg-icon">👤</span>
              </div>
              <span class="dsg-lang">Hebrew</span>
              <span class="dsg-text">"ומה למדת היום?"</span>
            </div>
            <div class="dsg-frame">
              <div class="dsg-placeholder">
                <span class="dsg-icon">👤</span>
              </div>
              <span class="dsg-lang">Russian</span>
              <span class="dsg-text">"А что ты сегодня изучал?"</span>
            </div>
          </div>
          <div class="demo-sync-meta">
            <span class="dsm-stat"><strong>Mouth movements:</strong> Re-rendered to match dub</span>
            <span class="dsm-stat"><strong>Facial expression:</strong> Preserved from original</span>
            <span class="dsm-stat"><strong>Per-episode processing:</strong> ~30 minutes</span>
          </div>
        </div>`;
    default:
      return '<div class="demo-frame">Demo coming soon</div>';
  }
}

// ---- Render audience detail page ----
function renderAudienceDetail(slug) {
  const data = AI_DATA.audiences[slug];
  if (!data) return;

  // Update breadcrumb
  document.getElementById('bc-audience-current').textContent = data.name;

  // Format budget breakdown
  const budgetTotal = data.budgetBreakdown.reduce((sum, b) => sum + b.amount, 0);

  const html = `
    <div class="detail-header">
      <span class="kicker">Audience Plan · ${data.budget}</span>
      <h1>${data.name}</h1>
      <p class="detail-tagline">${data.tagline}</p>
    </div>

    <div class="detail-hero-block">
      <p>${data.hero}</p>
    </div>

    <div class="audience-tam-row">
      <div class="atr-stat">
        <span class="atr-num">${data.tam}</span>
        <span class="atr-label">${data.tamLabel}</span>
      </div>
      <div class="atr-stat">
        <span class="atr-num">${data.budget}</span>
        <span class="atr-label">${data.budgetLabel}</span>
      </div>
    </div>

    <div class="detail-grid">

      <div class="detail-col">
        <div class="detail-card">
          <h4 class="detail-card-title">Why Now</h4>
          <p class="detail-paragraph">${data.whyNow}</p>
        </div>

        <div class="detail-card">
          <h4 class="detail-card-title">Strategy</h4>
          <div class="strategy-list">
            ${data.strategy.map(s => `
              <div class="strategy-item">
                <h5 class="si-title">${s.title}</h5>
                <p class="si-body">${s.body}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="detail-col">
        <div class="detail-card">
          <h4 class="detail-card-title">Year 1 &mdash; Proof</h4>
          <table class="targets-table">
            <tbody>
              <tr><td>Videos</td><td>${data.year1.videos}</td></tr>
              <tr><td>Series</td><td>${data.year1.series}</td></tr>
              <tr><td>Reach</td><td>${data.year1.viewers}</td></tr>
              <tr><td>Revenue</td><td>${data.year1.revenue}</td></tr>
            </tbody>
          </table>
        </div>

        <div class="detail-card detail-card-highlight">
          <h4 class="detail-card-title">Year 3 &mdash; Sustainability</h4>
          <table class="targets-table">
            <tbody>
              <tr><td>Videos</td><td>${data.year3.videos}</td></tr>
              <tr><td>Series</td><td>${data.year3.series}</td></tr>
              <tr><td>Reach</td><td>${data.year3.viewers}</td></tr>
              <tr><td>Revenue</td><td>${data.year3.revenue}</td></tr>
            </tbody>
          </table>
        </div>

        <div class="detail-card">
          <h4 class="detail-card-title">Revenue Model</h4>
          <ul class="detail-list">
            ${data.revenueModel.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>
      </div>

    </div>

    <div class="budget-breakdown-section">
      <h4 class="detail-card-title">$100K Starter Capital · How It's Used</h4>
      <div class="budget-table-wrap">
        <table class="budget-table">
          <thead>
            <tr><th>Line Item</th><th>Amount</th></tr>
          </thead>
          <tbody>
            ${data.budgetBreakdown.map(b => `
              <tr>
                <td>${b.line}</td>
                <td class="bb-amount">$${b.amount.toLocaleString()}</td>
              </tr>
            `).join('')}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td class="bb-amount">$${budgetTotal.toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <p class="budget-note">
        After Year 1, this audience becomes self-sustaining through subscriptions, licensing, and partnerships. The $100K is starter capital, not ongoing operational cost.
      </p>
    </div>
  `;

  document.getElementById('audience-detail-content').innerHTML = html;
}

// ---- Hash-based routing ----
function navigateTo(layerId, opts = {}) {
  if (opts.engine) renderEngineDetail(opts.engine);
  if (opts.audience) renderAudienceDetail(opts.audience);
  showLayer(layerId);
}

function readHashAndNavigate() {
  const hash = window.location.hash || '';
  const pageLayer = _pageSplit_layerForCurrentPage();
  const route = ROUTES[hash];

  // If hash points at master (or hash is empty) but we're on a deeper page,
  // stay on the current page's layer instead of redirecting to index.html.
  if (route && route.layer === 'master' && pageLayer !== 'master') {
    navigateTo(pageLayer);
    return;
  }

  if (route) {
    navigateTo(route.layer, route);
  } else {
    navigateTo(pageLayer);
  }
}

function _pageSplit_layerForCurrentPage() {
  // Cloudflare Pages strips .html from URLs, so pathname can be /building OR /building.html
  let file = (window.location.pathname.split('/').filter(Boolean).pop() || '').toLowerCase();
  // Strip trailing slash, add .html if no extension
  if (file && !file.includes('.')) file = file + '.html';
  if (!file) file = 'index.html';
  const map = {
    'index.html': 'master',
    'building.html': 'building',
    'property.html': 'property',
    'property-653.html': 'property',
    'ai.html': 'ai',
    'engine.html': 'engine',
    'audience.html': 'audience'
  };
  return map[file] || 'master';
}

function setHash(hash) {
  if (window.location.hash !== hash) {
    history.pushState(null, '', hash || '#');
  }
}

// ---- Wire up engine + audience cards + breadcrumb ----
function initRouting() {
  // Engine cards
  document.querySelectorAll('[data-target-engine]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const slug = btn.dataset.targetEngine;
      setHash(`#ai/engines/${slug}`);
      navigateTo('engine', { engine: slug });
    });
  });

  // Audience cards
  document.querySelectorAll('[data-target-audience]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const slug = btn.dataset.targetAudience;
      setHash(`#ai/audiences/${slug}`);
      navigateTo('audience', { audience: slug });
    });
  });

  // Breadcrumb nav links
  document.querySelectorAll('[data-nav-to]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.dataset.navTo;
      const hashMap = {
        master: '',
        building: '#building',
        ai: '#ai',
      };
      setHash(hashMap[target] || '');
      navigateTo(target);
    });
  });

  // Existing pillar cards (master hub) - full navigation, not just hash
  document.querySelectorAll('[data-target-layer]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.targetLayer;
      const hashMap = { building: '#building', ai: '#ai' };
      setHash(hashMap[target] || '');
      navigateTo(target);
    });
  });

  // Property card - full navigation to the property's dedicated page
  document.querySelectorAll('[data-target-property]').forEach((btn) => {
    if (btn.classList.contains('is-pending')) return;
    btn.addEventListener('click', () => {
      const slug = btn.dataset.targetProperty;
      setHash(`#building/properties/${slug}`);
      const page = PROPERTY_PAGES[slug] || 'property';
      window.location.href = page;
    });
  });

  // Existing back-to buttons (legacy, in case any remain)
  document.querySelectorAll('[data-back-to]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.backTo;
      const hashMap = { master: '', building: '#building', ai: '#ai' };
      setHash(hashMap[target] || '');
      navigateTo(target);
    });
  });

  // Browser back/forward
  window.addEventListener('popstate', readHashAndNavigate);

  // Initial load
  readHashAndNavigate();
}

if (document.readyState !== 'loading') {
  initRouting();
} else {
  document.addEventListener('DOMContentLoaded', initRouting);
}

// =============================================================
//   v9.5 - RESPONSIVE ORNAMENTS
//   Hide decorative pseudo-elements when their parent wraps to multiple lines
// =============================================================

function adjustOrnaments() {
  // List of elements that have decorative pseudo-elements that should disappear if the element wraps
  const selectors = [
    '.mh-mark',         // "$2.5M Capital Campaign" - has flame ornaments via ::before/::after
    '.bb-status',       // Block status pills (rare to wrap, but defensive)
    '.audience-tag',    // Audience One/Two/Three
    '.engine-stage',    // Beta / Production / Research
  ];

  selectors.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => {
      // Compare actual height to expected single-line height
      const cs = window.getComputedStyle(el);
      const lineHeight = parseFloat(cs.lineHeight);
      const fontSize = parseFloat(cs.fontSize);
      const padTop = parseFloat(cs.paddingTop) || 0;
      const padBot = parseFloat(cs.paddingBottom) || 0;
      // Conservative single-line estimate
      const expectedSingleLine = (isNaN(lineHeight) ? fontSize * 1.4 : lineHeight) + padTop + padBot;
      const actualHeight = el.offsetHeight;
      // If actual is more than ~1.4× the expected single line, it has wrapped
      const isWrapped = actualHeight > expectedSingleLine * 1.4;
      el.classList.toggle('is-wrapped', isWrapped);
    });
  });
}

// Debounced resize handler
let _ornamentTimer = null;
function _onResize() {
  if (_ornamentTimer) clearTimeout(_ornamentTimer);
  _ornamentTimer = setTimeout(adjustOrnaments, 80);
}

if (typeof window !== 'undefined') {
  window.addEventListener('resize', _onResize);
  window.addEventListener('load', adjustOrnaments);
  // Also run after layer changes (since detail pages have ornament-bearing elements too)
  if (typeof navigateTo === 'function') {
    const _origNav = navigateTo;
    window.navigateTo = function(...args) {
      _origNav(...args);
      setTimeout(adjustOrnaments, 50);
    };
  }
  // Initial run after DOM ready
  if (document.readyState !== 'loading') {
    setTimeout(adjustOrnaments, 100);
  } else {
    document.addEventListener('DOMContentLoaded', () => setTimeout(adjustOrnaments, 100));
  }
}

// =============================================================
//   PROPERTIES BANNER - auto-count + scroll to properties section
// =============================================================
function initPropertiesBanner() {
  const btn = document.getElementById('propsBannerBtn');
  if (!btn) return;
  const countEl = document.getElementById('propsBannerCount');

  // Auto-count properties
  const allProps = document.querySelectorAll('.prop-card');
  if (countEl) countEl.textContent = allProps.length;

  // Scroll-to action
  btn.addEventListener('click', () => {
    const target = document.querySelector('.property-cards') || document.querySelector('.candidate-properties');
    if (target) {
      const section = target.closest('.collapsible') || target.parentElement;
      const scrollTarget = section || target;
      scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

if (document.readyState !== 'loading') {
  setTimeout(initPropertiesBanner, 150);
} else {
  document.addEventListener('DOMContentLoaded', () => setTimeout(initPropertiesBanner, 150));
}

// =============================================================
//   SHARE BUTTON - Web Share API with clipboard fallback
//   Wires up BOTH header and footer share buttons
// =============================================================
function initShareButton() {
  const shareData = {
    title: 'MaorForward - The Future of Jewish Media',
    text: "Maor's first decade reached thousands. The next can reach millions.",
    url: 'https://maorforward.org',
  };

  async function handleShareClick() {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        if (err.name === 'AbortError') return;
      }
    }
    try {
      await navigator.clipboard.writeText(shareData.url);
      showShareToast('✓ Link copied to clipboard');
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = shareData.url;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        showShareToast('✓ Link copied');
      } catch {
        showShareToast('Copy this URL: ' + shareData.url);
      }
      document.body.removeChild(textArea);
    }
  }

  const headerBtn = document.getElementById('shareBtn');
  if (headerBtn) headerBtn.addEventListener('click', handleShareClick);

  const footerBtn = document.getElementById('footerShareBtn');
  if (footerBtn) footerBtn.addEventListener('click', handleShareClick);
}

function showShareToast(message) {
  let toast = document.getElementById('shareToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'shareToast';
    toast.className = 'share-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('is-visible');
  setTimeout(() => toast.classList.remove('is-visible'), 2000);
}

if (document.readyState !== 'loading') {
  setTimeout(initShareButton, 100);
} else {
  document.addEventListener('DOMContentLoaded', () => setTimeout(initShareButton, 100));
}

// =============================================================
//   PROPERTY CARD V2 - Lean version helpers
// =============================================================

// =========================================
// Property Options (Bargain / Growth toggles)
// =========================================
const OPT_STORAGE_KEY = 'maorforward.options.' + (
  (typeof location !== 'undefined' && location.pathname.includes('653')) ? '653' : '417'
);

function getOptionState() {
  try {
    const raw = localStorage.getItem(OPT_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* ignore */ }
  return (DATA && DATA.property && DATA.property.options) || { bargain: 'Maybe', growth: 'Yes' };
}

function saveOptionState(state) {
  try { localStorage.setItem(OPT_STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
}

function setOption(name, value) {
  document.querySelectorAll(`[data-out="${name}"]`).forEach(el => {
    el.textContent = value;
    el.classList.remove('opt-yes', 'opt-no', 'opt-maybe');
    const v = String(value).toLowerCase();
    if (v === 'yes' || v === '✓') el.classList.add('opt-yes');
    else if (v === 'no' || v === '✗') el.classList.add('opt-no');
    else el.classList.add('opt-maybe');
  });
}

function applyBargainVisibility(value) {
  const section = document.getElementById('bargainSection');
  if (!section) return;
  const v = String(value).toLowerCase();
  if (v === 'no') section.classList.add('is-hidden');
  else            section.classList.remove('is-hidden');
}

const OPT_CYCLE = ['Yes', 'Maybe', 'No'];
function nextOptValue(current) {
  const idx = OPT_CYCLE.findIndex(v => v.toLowerCase() === String(current).toLowerCase());
  return OPT_CYCLE[(idx + 1) % OPT_CYCLE.length];
}

function renderPropertyOptions() {
  const opts = getOptionState();
  setOption('bargainOption', opts.bargain);
  setOption('growthOption',  opts.growth);
  applyBargainVisibility(opts.bargain);

  document.querySelectorAll('[data-toggle]').forEach(btn => {
    if (btn.dataset.wired === '1') return;
    btn.dataset.wired = '1';
    btn.addEventListener('click', () => {
      const name = btn.dataset.toggle;
      const current = btn.textContent.trim();
      const next = nextOptValue(current);
      const state = getOptionState();
      if (name === 'bargainOption') state.bargain = next;
      else if (name === 'growthOption') state.growth = next;
      saveOptionState(state);
      setOption(name, next);
      if (name === 'bargainOption') applyBargainVisibility(next);
    });
  });
}

// =========================================
// Bargain Sale Calculator
// =========================================
function calcBargainSale() {
  if (!document.getElementById('i-bs-sale')) return;

  const get = (id) => {
    const el = document.getElementById(id);
    if (!el) return 0;
    const clean = String(el.value).replace(/,/g, '').trim();
    const n = parseFloat(clean);
    return Number.isFinite(n) ? n : 0;
  };

  const sale    = get('i-bs-sale');
  const fmv     = get('i-bs-fmv');
  const basis   = get('i-bs-basis');  // reserved for future IRC 1011(b) calc
  const rpttPct = get('i-bs-rptt');
  const bracket = get('i-bs-bracket');

  const deduction      = Math.max(0, fmv - sale);
  const rpttSaved      = sale * (rpttPct / 100);
  const taxSavings     = deduction * (bracket / 100);
  const totalSavings   = rpttSaved + taxSavings;
  const forProfitEquiv = sale + totalSavings;
  const discountFmv    = fmv > 0 ? ((fmv - sale) / fmv) * 100 : 0;
  const discountAdj    = fmv > 0 ? ((fmv - forProfitEquiv) / fmv) * 100 : 0;

  // Update each output using a tiny helper so the green-banner outputs use
  // the same code path as the rest. Direct DOM update guards against any
  // setOut/fmt issue surfacing only here.
  const update = (selector, value) => {
    document.querySelectorAll('[data-out="' + selector + '"]').forEach(el => {
      el.textContent = value;
    });
  };

  update('bs-deduction',      fmt.dollar(deduction));
  update('bs-rptt-saved',     fmt.dollar(rpttSaved));
  update('bs-tax-saved',      fmt.dollar(taxSavings));
  update('bs-sale-display',   fmt.dollar(sale));
  update('bs-equiv',          fmt.dollar(forProfitEquiv));
  update('bs-total-savings',  fmt.dollar(totalSavings));
  update('bs-discount-fmv',   discountFmv.toFixed(1) + '%');
  update('bs-discount-adj',   discountAdj.toFixed(1) + '%');
}

// Dedicated init for the bargain calculator - guarantees listeners attach
// even if something upstream in init() failed.
function initBargainSaleCalc() {
  const ids = ['i-bs-sale', 'i-bs-fmv', 'i-bs-basis', 'i-bs-rptt', 'i-bs-bracket'];
  let attached = false;
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (el.dataset.bsWired === '1') return;
    el.dataset.bsWired = '1';
    el.addEventListener('input', calcBargainSale);
    el.addEventListener('change', calcBargainSale);
    attached = true;
  });
  if (attached) calcBargainSale();
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      // Run after main init has had a chance
      setTimeout(initBargainSaleCalc, 200);
    });
  } else {
    setTimeout(initBargainSaleCalc, 200);
  }
}

// Score-jump button (header → score section)
function initScoreJump() {
  const btn = document.getElementById('scoreJumpBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const target = document.getElementById('scoreSection');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// Down-payment slider (sync between range slider + number input)
function initDownSlider() {
  const range = document.getElementById('i-down-range');
  const num   = document.getElementById('i-down-slider');
  if (!range || !num) return;

  // Initial sync - read from num value or default to 25
  const initial = parseFloat(num.value) || 25;
  range.value = initial;
  num.value   = initial;

  // Two-way sync
  range.addEventListener('input', () => {
    num.value = range.value;
    recomputeLiveScenario();
  });
  num.addEventListener('input', () => {
    let v = parseFloat(num.value);
    if (isNaN(v)) v = 25;
    v = Math.max(3, Math.min(50, v));
    range.value = v;
    recomputeLiveScenario();
  });
  num.addEventListener('blur', () => {
    let v = parseFloat(num.value);
    if (isNaN(v) || v < 3) num.value = 3;
    if (v > 50) num.value = 50;
    range.value = num.value;
    recomputeLiveScenario();
  });
}

// Recompute the single live scenario whenever inputs change
function recomputeLiveScenario() {
  if (typeof readInputs !== 'function' || typeof calculate !== 'function') return;
  const inp = readInputs();
  const calc = calculate(inp);

  const downRange = document.getElementById('i-down-range');
  const downPct = downRange ? parseFloat(downRange.value) : 25;
  if (isNaN(downPct)) return;

  const factor = pmtFactor(inp.rate, inp.years);
  const downAmt    = inp.price * (downPct / 100);
  const loan       = inp.price - downAmt;
  const monthlyPmt = loan * factor;
  const annualPmt  = monthlyPmt * 12;
  const dscr       = annualPmt > 0 ? calc.noi / annualPmt : 0;

  setOut('price-live',   fmt.dollar(inp.price));
  setOut('down-live',    fmt.dollar(downAmt));
  setOut('loan-live',    fmt.dollar(loan));
  setOut('monthly-live', fmt.dollar(monthlyPmt));
  setOut('annual-live',  fmt.dollar(annualPmt));

  // DSCR - turn green + add ✓ when target is met
  const targetDscr = inp.targetDscr || 1.25;
  // Use small epsilon to handle rounding - DSCR of 1.249 displays as "1.25" but
  // strictly fails >=1.25. We treat anything ≥ targetDscr - 0.005 as meeting target.
  const meetsTarget = dscr >= targetDscr - 0.005;
  setOut('dscr-live', fmt.ratio(dscr) + (meetsTarget ? ' ✓' : ''));

  // Toggle pass class on the DSCR row for styling
  document.querySelectorAll('.scenario-lean .scen-row.dscr').forEach(el => {
    if (meetsTarget) el.classList.add('dscr-pass');
    else el.classList.remove('dscr-pass');
  });
}

// Hook into existing recompute lifecycle
if (typeof window !== 'undefined') {
  // Wait for everything else to load, then wire up
  setTimeout(() => {
    initScoreJump();
    initDownSlider();
    renderPropertyOptions();
    recomputeLiveScenario();

    // Also hook into all input changes that affect the live scenario
    ['i-price', 'i-rate', 'i-years', 'i-target-dscr',
     'i-u1-stab', 'i-u2-stab', 'i-storage-stab', 'i-parking-stab',
     'i-prop-tax', 'i-insurance', 'i-water', 'i-utils', 'i-maint']
      .forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', recomputeLiveScenario);
      });
  }, 300);
}

// =============================================================
//   PRICE INPUT FORMATTER - adds thousands separators while typing
// =============================================================
function initPriceFormatter() {
  const el = document.getElementById('i-price');
  if (!el) return;

  function formatWithCommas(value) {
    // Remove all non-digits
    const digits = String(value).replace(/[^\d]/g, '');
    if (!digits) return '';
    // Format with commas
    return parseInt(digits, 10).toLocaleString('en-US');
  }

  // Format on initial load (in case default value is unformatted)
  if (el.value) {
    el.value = formatWithCommas(el.value);
  }

  el.addEventListener('input', (e) => {
    const cursorPos = el.selectionStart;
    const oldLength = el.value.length;

    const formatted = formatWithCommas(el.value);
    el.value = formatted;

    // Restore cursor position (adjusted for added/removed commas)
    const lengthDiff = formatted.length - oldLength;
    const newPos = Math.max(0, cursorPos + lengthDiff);
    try { el.setSelectionRange(newPos, newPos); } catch {}
  });

  el.addEventListener('blur', () => {
    el.value = formatWithCommas(el.value);
  });
}

// Hook into existing init lifecycle
if (typeof window !== 'undefined') {
  setTimeout(initPriceFormatter, 350);
}


// =============================================================
//   VISUAL EDITOR - Inline text editing with live preview
//   Trigger: click the flame icon in bottom-LEFT corner
// =============================================================

const VE = {
  active: false,
  selectedEl: null,
  changes: {},
  STORAGE_KEY: 'maor_visual_edits_v1',

  FONTS: [
    { value: "'Vidaloka', serif", label: 'Vidaloka (serif, decorative)' },
    { value: "'Noto Sans', sans-serif", label: 'Noto Sans (sans, body)' },
    { value: "'Cormorant Garamond', serif", label: 'Cormorant Garamond (italic)' },
    { value: "'Playfair Display', serif", label: 'Playfair Display' },
    { value: "'Inter', sans-serif", label: 'Inter' },
    { value: "'Roboto Mono', monospace", label: 'Roboto Mono' },
  ],

  COLORS: [
    { value: '#FFFAF0', label: 'Cream' },
    { value: '#E8C97D', label: 'Gold Bright' },
    { value: '#C9A961', label: 'Gold' },
    { value: '#9B7F3F', label: 'Gold Deep' },
    { value: '#0B1E3F', label: 'Blue Deep' },
    { value: '#1E3766', label: 'Blue Soft' },
    { value: '#9B1B2E', label: 'Burgundy' },
    { value: '#C13D55', label: 'Burgundy Light' },
    { value: '#92E0A8', label: 'Green' },
    { value: '#E8DCC0', label: 'Cream Muted' },
  ],

  WEIGHTS: [
    { value: '300', label: '300 Light' },
    { value: '400', label: '400 Regular' },
    { value: '500', label: '500 Medium' },
    { value: '600', label: '600 SemiBold' },
    { value: '700', label: '700 Bold' },
    { value: '800', label: '800 ExtraBold' },
    { value: '900', label: '900 Heavy' },
  ],
};

// =============================================================
// Generate stable edit codes for every text element
// =============================================================
function veGenerateCodes() {
  const prefixes = {
    'layer-master': 'M',
    'layer-pillar-building': 'B',
    'layer-property': 'P',
    'layer-pillar-ai': 'A',
    'layer-engine-detail': 'E',
    'layer-audience-detail': 'U',
  };

  document.querySelectorAll('.layer, .global-footer').forEach((root) => {
    const prefix = prefixes[root.id] || 'F';
    let counter = 1;

    const candidates = root.querySelectorAll('h1, h2, h3, h4, h5, p, button, li, span, td, th, a');

    candidates.forEach((el) => {
      // Skip if already has code (idempotent)
      if (el.dataset.edit) return;

      // Must have direct text content (not just children)
      const directText = Array.from(el.childNodes)
        .filter(n => n.nodeType === Node.TEXT_NODE)
        .map(n => n.textContent.trim())
        .join('').trim();

      // For h1-h5, p, button, li, td, th, a: include if any text content
      const isBlockText = ['H1','H2','H3','H4','H5','P','BUTTON','LI','TD','TH','A'].includes(el.tagName);
      const hasAnyText = el.textContent.trim().length > 0;

      // For span: only if it has direct text and is a leaf-ish element
      const isSpanLeaf = el.tagName === 'SPAN' && directText.length > 0;

      if (!isBlockText && !isSpanLeaf) return;
      if (!hasAnyText) return;

      // Skip pure-icon containers
      if (el.classList.contains('mh-stat-icon')) return;
      if (el.classList.contains('mh-about-icon')) return;
      if (el.classList.contains('bc-sep')) return;
      if (el.classList.contains('bb-toggle')) return;
      if (el.classList.contains('pillar-cta-arrow')) return;
      if (el.classList.contains('arrow')) return;
      if (el.classList.contains('ec-arrow')) return;
      if (el.classList.contains('acf-arrow')) return;
      if (el.classList.contains('dsg-icon')) return;
      if (el.classList.contains('daf-icon')) return;
      if (el.classList.contains('dvl-flag')) return;
      if (el.classList.contains('dvl-wave')) return;
      if (el.classList.contains('gf-divider')) return;

      // Skip if inside calc-input wrapper
      if (el.closest('.calc-input')) return;
      // Skip if its parent already gets a code (avoid double-tagging nested texts)
      // Actually we DO want nested codes for spans inside p, but only if span has its own text content directly
      if (!isBlockText && !isSpanLeaf) return;

      el.dataset.edit = `${prefix}.${String(counter).padStart(3, '0')}`;
      el.dataset.editType = el.tagName.toLowerCase();
      counter++;
    });
  });
}

// =============================================================
// Apply stored changes to elements
// =============================================================
function veApplyChanges() {
  Object.entries(VE.changes).forEach(([code, props]) => {
    const el = document.querySelector(`[data-edit="${code}"]`);
    if (!el) return;
    veApplyToElement(el, props);
  });
}

function veApplyToElement(el, props) {
  if (props.text !== undefined && props.text !== null) {
    // Convert \n to <br> for visual line breaks
    const escapedText = props.text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br>');

    // Preserve nested elements: if element only has direct text + no important children, replace
    const hasComplexChildren = Array.from(el.childNodes).some(n =>
      n.nodeType === Node.ELEMENT_NODE
      && !n.classList.contains('ve-icon-marker')
      && n.tagName !== 'BR'  // BR is OK to replace
    );
    if (!hasComplexChildren) {
      el.innerHTML = escapedText;
    } else {
      // Replace only direct text nodes; for elements with complex children, just clear text
      Array.from(el.childNodes).forEach(n => {
        if (n.nodeType === Node.TEXT_NODE) n.textContent = '';
      });
      // Inject text at start
      const wrap = document.createElement('span');
      wrap.innerHTML = escapedText;
      while (wrap.firstChild) {
        el.insertBefore(wrap.firstChild, el.firstChild);
      }
    }
  }
  // Use setProperty with 'important' so we can override CSS rules that have !important
  if (props.fontFamily) el.style.setProperty('font-family', props.fontFamily, 'important');
  if (props.fontSize) el.style.setProperty('font-size', props.fontSize, 'important');
  if (props.fontWeight) el.style.setProperty('font-weight', props.fontWeight, 'important');
  if (props.italic !== undefined) el.style.setProperty('font-style', props.italic ? 'italic' : '', 'important');
  if (props.color) {
    // Headings sometimes use background-clip text + transparent fill; need to nuke that to apply color
    el.style.setProperty('color', props.color, 'important');
    el.style.setProperty('-webkit-text-fill-color', props.color, 'important');
    el.style.setProperty('background', 'none', 'important');
    el.style.setProperty('-webkit-background-clip', 'unset', 'important');
    el.style.setProperty('background-clip', 'unset', 'important');
  }
  if (props.letterSpacing) el.style.setProperty('letter-spacing', props.letterSpacing, 'important');
  if (props.lineHeight) el.style.setProperty('line-height', props.lineHeight, 'important');
}

// =============================================================
// Storage
// =============================================================
function veLoad() {
  try {
    const raw = localStorage.getItem(VE.STORAGE_KEY);
    if (raw) VE.changes = JSON.parse(raw);
  } catch (e) {
    console.warn('VE load failed', e);
    VE.changes = {};
  }
}

function veSave() {
  try {
    localStorage.setItem(VE.STORAGE_KEY, JSON.stringify(VE.changes));
  } catch (e) {
    console.warn('VE save failed', e);
  }
}

// =============================================================
// Editor panel UI
// =============================================================
function veCreatePanel() {
  if (document.getElementById('ve-panel')) return;

  const panel = document.createElement('div');
  panel.id = 've-panel';
  panel.className = 've-panel';
  panel.innerHTML = `
    <div class="ve-panel-header">
      <span class="ve-panel-title">Visual Editor</span>
      <button class="ve-close" id="ve-close" type="button" aria-label="Close editor">×</button>
    </div>

    <div class="ve-panel-body">
      <div class="ve-no-selection" id="ve-no-selection">
        <div class="ve-icon-large">✦</div>
        <p><strong>Edit Mode is on.</strong></p>
        <p>Hover over any text to highlight it. Click to start editing.</p>
        <div class="ve-tips">
          <strong>Tips:</strong>
          <ul>
            <li>Headings, paragraphs, buttons, and labels are all editable</li>
            <li>Changes save automatically and persist across sessions</li>
            <li>Use Export to download your changes as JSON</li>
          </ul>
        </div>
      </div>

      <div class="ve-editor" id="ve-editor" style="display:none;">
        <div class="ve-meta">
          <span class="ve-meta-code" id="ve-code">-</span>
          <span class="ve-meta-type" id="ve-type">-</span>
        </div>

        <label class="ve-field">
          <span class="ve-label">Text <em class="ve-hint">(press Enter for line break)</em></span>
          <textarea id="ve-text" rows="5"></textarea>
        </label>

        <div class="ve-field-row">
          <label class="ve-field">
            <span class="ve-label">Font</span>
            <select id="ve-font"></select>
          </label>
        </div>

        <div class="ve-field-row">
          <label class="ve-field">
            <span class="ve-label">Size</span>
            <input type="text" id="ve-size" placeholder="e.g. 1.2rem">
          </label>
          <label class="ve-field">
            <span class="ve-label">Weight</span>
            <select id="ve-weight"></select>
          </label>
        </div>

        <label class="ve-field-checkbox">
          <input type="checkbox" id="ve-italic">
          <span>Italic</span>
        </label>

        <label class="ve-field">
          <span class="ve-label">Color</span>
          <div class="ve-colors" id="ve-colors"></div>
          <input type="text" id="ve-color-custom" placeholder="Or custom: #FFCC00" class="ve-color-input">
        </label>

        <div class="ve-field-row">
          <label class="ve-field">
            <span class="ve-label">Letter spacing</span>
            <input type="text" id="ve-letter-spacing" placeholder="e.g. 0.05em">
          </label>
          <label class="ve-field">
            <span class="ve-label">Line height</span>
            <input type="text" id="ve-line-height" placeholder="e.g. 1.6">
          </label>
        </div>

        <div class="ve-actions">
          <button class="ve-btn ve-btn-reset" id="ve-reset" type="button">Reset</button>
        </div>
      </div>
    </div>

    <div class="ve-panel-footer">
      <div class="ve-changes-counter">
        <span id="ve-counter">0</span> changes pending
      </div>
      <div class="ve-footer-actions">
        <button class="ve-btn ve-btn-secondary" id="ve-view-json" type="button">View JSON</button>
        <button class="ve-btn ve-btn-primary" id="ve-export" type="button">Export</button>
      </div>
    </div>

    <div class="ve-json-viewer" id="ve-json-viewer">
      <div class="ve-json-header">
        <span>Live JSON</span>
        <button class="ve-close" id="ve-json-close" type="button">×</button>
      </div>
      <pre id="ve-json-content"></pre>
    </div>
  `;
  document.body.appendChild(panel);

  // Populate font + weight + colors
  const fontSel = panel.querySelector('#ve-font');
  VE.FONTS.forEach(f => {
    const opt = document.createElement('option');
    opt.value = f.value;
    opt.textContent = f.label;
    fontSel.appendChild(opt);
  });
  const weightSel = panel.querySelector('#ve-weight');
  VE.WEIGHTS.forEach(w => {
    const opt = document.createElement('option');
    opt.value = w.value;
    opt.textContent = w.label;
    weightSel.appendChild(opt);
  });
  const colorsContainer = panel.querySelector('#ve-colors');
  VE.COLORS.forEach(c => {
    const swatch = document.createElement('button');
    swatch.type = 'button';
    swatch.className = 've-swatch';
    swatch.style.background = c.value;
    swatch.dataset.color = c.value;
    swatch.title = c.label;
    swatch.addEventListener('click', () => {
      panel.querySelector('#ve-color-custom').value = c.value;
      veUpdateProp('color', c.value);
      // Mark active
      panel.querySelectorAll('.ve-swatch').forEach(s => s.classList.remove('is-active'));
      swatch.classList.add('is-active');
    });
    colorsContainer.appendChild(swatch);
  });

  // Wire up inputs
  panel.querySelector('#ve-close').addEventListener('click', veToggleEditMode);
  panel.querySelector('#ve-reset').addEventListener('click', veResetCurrent);
  panel.querySelector('#ve-export').addEventListener('click', veExport);
  panel.querySelector('#ve-view-json').addEventListener('click', veToggleJsonViewer);
  panel.querySelector('#ve-json-close').addEventListener('click', veToggleJsonViewer);

  panel.querySelector('#ve-text').addEventListener('input', (e) => veUpdateProp('text', e.target.value));
  panel.querySelector('#ve-font').addEventListener('change', (e) => veUpdateProp('fontFamily', e.target.value));
  panel.querySelector('#ve-size').addEventListener('input', (e) => veUpdateProp('fontSize', e.target.value));
  panel.querySelector('#ve-weight').addEventListener('change', (e) => veUpdateProp('fontWeight', e.target.value));
  panel.querySelector('#ve-italic').addEventListener('change', (e) => veUpdateProp('italic', e.target.checked));
  panel.querySelector('#ve-color-custom').addEventListener('input', (e) => {
    if (/^#[0-9A-Fa-f]{6}$/.test(e.target.value) || /^#[0-9A-Fa-f]{3}$/.test(e.target.value)) {
      veUpdateProp('color', e.target.value);
    }
  });
  panel.querySelector('#ve-letter-spacing').addEventListener('input', (e) => veUpdateProp('letterSpacing', e.target.value));
  panel.querySelector('#ve-line-height').addEventListener('input', (e) => veUpdateProp('lineHeight', e.target.value));
}

function veUpdateProp(prop, value) {
  if (!VE.selectedEl) return;
  const code = VE.selectedEl.dataset.edit;
  if (!code) return;
  if (!VE.changes[code]) VE.changes[code] = {};
  VE.changes[code][prop] = value;
  veApplyToElement(VE.selectedEl, { [prop]: value });
  veSave();
  veUpdateCounter();
  veUpdateJsonViewer();
}

function veResetCurrent() {
  if (!VE.selectedEl) return;
  const code = VE.selectedEl.dataset.edit;
  if (!code) return;
  delete VE.changes[code];
  // Reset inline styles (including the !important ones we added)
  const props = ['font-family', 'font-size', 'font-weight', 'font-style',
                 'color', '-webkit-text-fill-color', 'background',
                 '-webkit-background-clip', 'background-clip',
                 'letter-spacing', 'line-height'];
  props.forEach(p => VE.selectedEl.style.removeProperty(p));
  veSave();
  veUpdateCounter();
  veUpdateJsonViewer();
  // Refresh editor
  veSelectElement(VE.selectedEl);
}

function veSelectElement(el) {
  VE.selectedEl = el;
  document.querySelectorAll('.ve-selected').forEach(e => e.classList.remove('ve-selected'));
  el.classList.add('ve-selected');

  document.getElementById('ve-no-selection').style.display = 'none';
  document.getElementById('ve-editor').style.display = 'block';

  document.getElementById('ve-code').textContent = el.dataset.edit || '-';
  document.getElementById('ve-type').textContent = el.tagName.toLowerCase();

  // Populate fields with current values
  const cs = window.getComputedStyle(el);
  const change = VE.changes[el.dataset.edit] || {};

  // Get the direct text only (not nested children's text), preserving line breaks
  // Build text with \n for <br> elements
  let directTextWithBreaks = '';
  Array.from(el.childNodes).forEach(n => {
    if (n.nodeType === Node.TEXT_NODE) {
      directTextWithBreaks += n.textContent;
    } else if (n.nodeType === Node.ELEMENT_NODE && n.tagName === 'BR') {
      directTextWithBreaks += '\n';
    } else if (n.nodeType === Node.ELEMENT_NODE) {
      // For nested elements (like <strong>, <em>), get their text content
      directTextWithBreaks += n.textContent;
    }
  });
  // If no direct text, fall back to full textContent
  if (!directTextWithBreaks.trim()) {
    directTextWithBreaks = el.textContent;
  }

  document.getElementById('ve-text').value = change.text !== undefined ? change.text : directTextWithBreaks;
  document.getElementById('ve-font').value = change.fontFamily || cs.fontFamily;
  document.getElementById('ve-size').value = change.fontSize || cs.fontSize;
  document.getElementById('ve-weight').value = change.fontWeight || cs.fontWeight || '400';
  document.getElementById('ve-italic').checked = change.italic !== undefined ? change.italic : (cs.fontStyle === 'italic');
  document.getElementById('ve-color-custom').value = change.color || rgbToHex(cs.color);
  document.getElementById('ve-letter-spacing').value = change.letterSpacing || cs.letterSpacing;
  document.getElementById('ve-line-height').value = change.lineHeight || cs.lineHeight;

  // Mark active swatch
  document.querySelectorAll('.ve-swatch').forEach(s => {
    s.classList.toggle('is-active', s.dataset.color.toLowerCase() === (change.color || '').toLowerCase());
  });
}

function rgbToHex(rgb) {
  if (!rgb) return '';
  const m = rgb.match(/\d+/g);
  if (!m || m.length < 3) return rgb;
  return '#' + m.slice(0, 3).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('').toUpperCase();
}

function veUpdateCounter() {
  const count = Object.keys(VE.changes).length;
  const el = document.getElementById('ve-counter');
  if (el) el.textContent = count;
}

function veUpdateJsonViewer() {
  const el = document.getElementById('ve-json-content');
  if (el) el.textContent = JSON.stringify(VE.changes, null, 2);
}

function veToggleJsonViewer() {
  const v = document.getElementById('ve-json-viewer');
  if (!v) return;
  const isOpen = v.classList.toggle('is-open');
  if (isOpen) veUpdateJsonViewer();
}

function veExport() {
  const json = JSON.stringify(VE.changes, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `maor-edits-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// =============================================================
// Edit Mode toggle
// =============================================================
function veToggleEditMode() {
  VE.active = !VE.active;
  document.body.classList.toggle('ve-active', VE.active);

  const panel = document.getElementById('ve-panel');
  if (panel) panel.classList.toggle('is-open', VE.active);

  if (VE.active) {
    veGenerateCodes();
    // Wire click on editable elements
    document.querySelectorAll('[data-edit]').forEach(el => {
      el.addEventListener('click', veOnEditableClick);
    });
  } else {
    document.querySelectorAll('[data-edit]').forEach(el => {
      el.removeEventListener('click', veOnEditableClick);
    });
    document.querySelectorAll('.ve-selected').forEach(e => e.classList.remove('ve-selected'));
    VE.selectedEl = null;
  }
}

function veOnEditableClick(e) {
  if (!VE.active) return;
  e.preventDefault();
  e.stopPropagation();
  veSelectElement(e.currentTarget);
}

// =============================================================
// Flame button + menu in BOTTOM-LEFT corner
// =============================================================
function veCreateFlameButton() {
  if (document.getElementById('ve-flame-btn')) return;

  const btn = document.createElement('button');
  btn.id = 've-flame-btn';
  btn.className = 've-flame-btn';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Editor menu');
  btn.innerHTML = `
    <svg viewBox="0 0 32 40" fill="none" width="22" height="28" aria-hidden="true">
      <defs>
        <linearGradient id="ve-flame-grad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stop-color="#FFEFC2"/>
          <stop offset="50%" stop-color="#E8C97D"/>
          <stop offset="100%" stop-color="#C9A961"/>
        </linearGradient>
      </defs>
      <path d="M 17 3 C 14 8, 10 12, 9 17 C 8 22, 10 28, 14 31 C 11 27, 12 22, 15 18 C 16 22, 17 26, 21 28 C 26 30, 28 24, 27 19 C 26 14, 22 10, 19 6 C 18 9, 18 11, 17 13 C 17 9, 17 6, 17 3 Z" fill="url(#ve-flame-grad)" stroke="#9B7F3F" stroke-width="0.6" stroke-linejoin="round"/>
    </svg>
  `;
  document.body.appendChild(btn);

  // Menu
  const menu = document.createElement('div');
  menu.id = 've-flame-menu';
  menu.className = 've-flame-menu';
  menu.innerHTML = `
    <div class="vfm-header">Editor Tools</div>
    <button class="vfm-item" data-action="visual" type="button">
      <span class="vfm-icon">✎</span>
      <span class="vfm-label">
        <strong>Visual Editor</strong>
        <em>Edit text, fonts, colors</em>
      </span>
    </button>
    <button class="vfm-item" data-action="financial" type="button">
      <span class="vfm-icon">$</span>
      <span class="vfm-label">
        <strong>Financial Editor</strong>
        <em>Edit prices, scenarios, defaults</em>
      </span>
    </button>
    <button class="vfm-item" data-action="export-edits" type="button">
      <span class="vfm-icon">⬇</span>
      <span class="vfm-label">
        <strong>Export All Edits</strong>
        <em>Download JSON to share</em>
      </span>
    </button>
    <button class="vfm-item vfm-item-danger" data-action="reset" type="button">
      <span class="vfm-icon">↺</span>
      <span class="vfm-label">
        <strong>Reset Everything</strong>
        <em>Restore originals</em>
      </span>
    </button>
  `;
  document.body.appendChild(menu);

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('is-open');
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove('is-open');
    }
  });

  // Menu actions
  menu.addEventListener('click', (e) => {
    const item = e.target.closest('.vfm-item');
    if (!item) return;
    const action = item.dataset.action;
    menu.classList.remove('is-open');

    if (action === 'visual') {
      veCreatePanel();
      veToggleEditMode();
    } else if (action === 'financial') {
      // Re-initialize save panel listeners (in case they failed at first load)
      if (typeof initSavePanel === 'function') {
        initSavePanel();
      }
      if (typeof openSavePanel === 'function') {
        openSavePanel();
      }
    } else if (action === 'export-edits') {
      veExport();
    } else if (action === 'reset') {
      if (confirm('Reset all visual edits? This cannot be undone.')) {
        VE.changes = {};
        veSave();
        location.reload();
      }
    }
  });
}

// =============================================================
// Init
// =============================================================
function veInit() {
  veLoad();
  veCreateFlameButton();

  // Apply saved changes after layers/sub-pages render
  setTimeout(() => {
    veGenerateCodes();
    veApplyChanges();
  }, 200);

  // Re-generate codes when navigating to detail pages (engine, audience)
  // Hook into the existing navigateTo
  if (typeof navigateTo === 'function') {
    const origNavigate = navigateTo;
    window.navigateTo = function(layerId, opts = {}) {
      origNavigate(layerId, opts);
      setTimeout(() => {
        veGenerateCodes();
        veApplyChanges();
      }, 100);
    };
  }
}

if (document.readyState !== 'loading') {
  veInit();
} else {
  document.addEventListener('DOMContentLoaded', veInit);
}


// ═══════════════════════════════════════════════════════════════
// PAGE-SPLIT NAVIGATION (auto-injected by split.py)
// Each layer is now its own HTML file. showLayer() is wrapped to
// navigate to the right page when a layer isn't on the current one.
// ═══════════════════════════════════════════════════════════════
(function() {
  const PAGE_MAP = {
    master:   'index.html',
    building: 'building.html',
    property: 'property.html',
    ai:       'ai.html',
    engine:   'engine.html',
    audience: 'audience.html'
  };

  function currentFile() {
    // Cloudflare Pages strips .html — normalize to always include it
    let f = (window.location.pathname.split('/').filter(Boolean).pop() || '').toLowerCase();
    if (f && !f.includes('.')) f = f + '.html';
    return f || 'index.html';
  }

  // Pages that map to the same logical layer (property covers 417 + 653)
  const SAME_LAYER_PAGES = {
    property: ['property.html', 'property-653.html'],
  };

  // Wrap the (final) showLayer to redirect across pages when needed.
  const _pageSplit_origShowLayer = window.showLayer;
  window.showLayer = function(layerId) {
    const targetFile = PAGE_MAP[layerId];
    if (!targetFile) return _pageSplit_origShowLayer.apply(this, arguments);

    const here = currentFile();
    const sameLayer = SAME_LAYER_PAGES[layerId] || [];
    const isHere = (here === targetFile)
      || sameLayer.includes(here)
      || (layerId === 'master' && (here === '' || here === 'index.html'));
    if (isHere) {
      // Same page → behave as before (scroll to top, activate layer)
      return _pageSplit_origShowLayer.apply(this, arguments);
    }

    // Different page → navigate, preserving hash (so engine/audience slug routing keeps working)
    const hash = window.location.hash || '';
    window.location.href = targetFile + hash;
  };
})();
