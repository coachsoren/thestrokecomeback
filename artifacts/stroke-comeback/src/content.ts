// =============================================
// CONTENT CONFIGURATION FILE
// All copy, links, and editable text lives here.
//
// HOW TO EDIT:
// 1. Thinkific purchase link → update THINKIFIC_URL
// 2. Founder credentials    → update the founder object
// 3. Contact email          → update CONTACT_EMAIL
// 4. Brand name             → update BRAND_NAME
// =============================================

// ---- LINKS ----
// To change the Thinkific purchase URL, update this single value:
export const THINKIFIC_URL =
  "https://jorgen-s-site-0485.thinkific.com/products/courses/TheStrokeComebackProtocol";

export const CONTACT_EMAIL = "hello@strokecomebackprotocol.com"; // Replace with real email

export const BRAND_NAME = "The Stroke Comeback Protocol";

// ---- FOUNDER ----
// =============================================
// TO ADD FOUNDER CREDENTIALS:
// Fill in each field below. Empty strings are hidden automatically.
// founder.name             → Full name, e.g. "Jørgen Olsen" or "Dr. Jane Smith"
// founder.title            → Primary role, e.g. "Physiotherapist & Neurological Rehabilitation Specialist"
// founder.qualifications   → Degrees/certs, e.g. "BSc (Hons) Physiotherapy · MSc Neurological Rehabilitation"
// founder.yearsExperience  → e.g. "15+ years working in neurological rehabilitation"
// founder.clinicalFocus    → e.g. "Specialising in stroke recovery, neuroplasticity, and motor re-education"
// founder.mission          → A single sentence on what drives this work, in the founder's own voice
// founder.headshotSrc      → Uncomment and set path once a real photo is available
// =============================================
export const founder = {
  name: "Founder Name",
  title: "Founder & Lead Clinician",
  qualifications: "",       // e.g. "BSc Physiotherapy · MSc Neurological Rehabilitation"
  yearsExperience: "",      // e.g. "15+ years in neurological rehabilitation"
  clinicalFocus: "",        // e.g. "Specialising in stroke recovery and motor re-education"
  mission: "",              // e.g. "I built this because I believe every stroke survivor deserves a clear plan."
  headshotAlt: "Founder of The Stroke Comeback Protocol",
  // headshotSrc: "/images/founder.jpg",  // Uncomment when photo is available
};

// ---- HERO SECTION ----
export const hero = {
  eyebrow: "12-Week Guided Home Recovery Program",
  headline: "What do you do when rehab ends,\nbut recovery doesn't?",
  subheadline:
    "A structured 12-week program that helps stroke survivors continue recovery at home — with clarity, consistency, and real guidance.",
  supportingLine: "No guesswork. No random exercises. Just a clear path forward.",
  body: "The Stroke Comeback Protocol is a 12-week guided neuroplasticity program that gives stroke survivors and their families a practical, evidence-informed daily framework — so recovery has structure, purpose, and forward momentum.",
  trustBar: "12-week guided program  •  20 chapters  •  100 lessons  •  Lifetime access  •  Designed to complement medical care",
  trustLine: "12-week guided program  •  Lifelong access  •  Designed to complement medical care",
  primaryCTA: "Start the Program",
  secondaryCTA: "View Full Program",
  stats: [
    { value: "12", label: "Structured weeks" },
    { value: "4", label: "Phases of recovery" },
    { value: "12", label: "Live group calls" },
    { value: "∞", label: "Lifelong access" },
  ],
};

// ---- MID-PAGE CTA (shown after Problem, Program, and Benefits) ----
export const midCTA = {
  headline: "Start your recovery with a clear plan",
  primaryCTA: "Start the Program",
  urgencyLine: "You can start today and go at your own pace.",
};

// ---- PROBLEM SECTION ----
export const problem = {
  headline: "What happens when rehab ends — but recovery doesn't?",
  intro:
    "Formal rehabilitation is an important start. But for many stroke survivors, it ends before recovery feels finished.",
  body: "The challenge after discharge is rarely motivation. It is the absence of structure — no clear daily plan, no way to understand what the brain is trying to relearn, and no system for turning that knowledge into consistent action at home.",
  cards: [
    { text: "I want to keep improving, but I don't know what to focus on." },
    { text: "I've been given advice, but never a clear system to follow." },
    { text: "Progress has slowed and I don't know how to move it forward again." },
    { text: "There's too much conflicting information and not enough direction." },
  ],
};

// ---- SOLUTION SECTION ----
export const solution = {
  headline: "A structured system built around how the brain actually recovers",
  body: "The Stroke Comeback Protocol translates neuroplasticity principles into a practical, week-by-week framework you can follow at home. Every element is chosen for a reason — and that reason is explained in plain language.",
  pillars: [
    {
      icon: "Brain",
      title: "Neuroplasticity in Practice",
      description:
        "Learn how the recovering brain changes and why consistent, purposeful repetition is the core mechanism of recovery — explained in everyday language.",
    },
    {
      icon: "Activity",
      title: "Progressive Movement Training",
      description:
        "Build mobility and strength through structured progressions matched to your current level — not a generic routine.",
    },
    {
      icon: "Moon",
      title: "Sleep Restoration",
      description:
        "Address one of recovery's most overlooked pillars with practical, evidence-informed strategies for more restorative sleep.",
    },
    {
      icon: "Wind",
      title: "Pain and Tension Management",
      description:
        "Understand and work with post-stroke tension and discomfort — rather than simply managing around it.",
    },
    {
      icon: "Heart",
      title: "Motivation and Mindset",
      description:
        "Build sustainable consistency through grounded, realistic approaches to the emotional side of long-term recovery.",
    },
    {
      icon: "TrendingUp",
      title: "Long-Term Sustainability",
      description:
        "Leave the 12 weeks with a clear, self-directed recovery plan — one you understand and can maintain independently.",
    },
  ],
};

// ---- WHY DIFFERENT SECTION ----
export const whyDifferent = {
  headline: "What makes this different from general stroke recovery information",
  differentiators: [
    {
      title: "Guided neuroplasticity — not random exercises",
      description:
        "Every session is grounded in how the brain actually learns and rewires. You will understand why you are doing each thing, which makes you more likely to do it.",
    },
    {
      title: "Built for home — not a clinical setting",
      description:
        "The program is designed around real daily life, not ideal clinical conditions. You do not need special equipment or a professional present.",
    },
    {
      title: "A defined 12-week progression",
      description:
        "Each week builds on the last. There is no guessing about what to do next — the structure does that work for you.",
    },
    {
      title: "Live group calls with expert guidance",
      description:
        "Weekly calls mean you are not working through this alone. You can ask questions, course-correct, and hear how others are applying the same principles.",
    },
    {
      title: "You will understand the 'why'",
      description:
        "Understanding why a practice works makes it easier to stay consistent. This program explains the reasoning, not just the steps.",
    },
  ],
  quote:
    "The stroke-damaged brain isn't broken — it's hungry for guidance. Every rep, every step, every movement is a signal for rewiring.",
};

// ---- WHO IT'S FOR SECTION ----
export const whoItsFor = {
  headline: "Who this program is designed for",
  included: [
    "Stroke survivors who want a structured framework to continue recovery at home",
    "People who feel stuck after formal rehabilitation has ended",
    "Those managing lingering deficits in mobility, hand function, fatigue, sleep, or confidence",
    "People willing to commit to guided practice over 12 weeks",
    "Families and caregivers seeking more clarity on how to support daily recovery",
  ],
  excluded: [
    "Emergency or acute stroke care — this is not a medical intervention",
    "A substitute for physician-led rehabilitation or therapy",
    "People expecting recovery without active daily participation",
    "Requests for guaranteed outcomes or cure-rate claims",
    "Anyone unwilling to follow a structured, consistent approach",
  ],
};

// ---- PROGRAM BREAKDOWN SECTION ----
export const program = {
  // Statement shown above the section — large, centered, strong
  statement: [
    "Most stroke survivors are not lacking motivation.",
    "They are lacking a clear plan.",
  ],
  // Section headline and intro
  headline: "Inside the Program",
  sectionLabel: "Inside the program: how your recovery unfolds",
  intro: [
    "This is not a collection of random exercises.",
    "It's a structured recovery journey that guides you step by step through the systems stroke affects most.",
    "You don't just learn what to do. You understand what your brain is trying to relearn — and how to support that process.",
  ],
  phases: [
    {
      number: "01",
      title: "Understanding what actually happened",
      body: "You start by understanding stroke at a deeper level. Not just what it is — but what changed in your brain, and why recovery can feel slow, confusing, or unpredictable.",
      outcome: "This removes fear and replaces it with clarity.",
      items: [],
    },
    {
      number: "02",
      title: "The science of recovery",
      body: "You learn how neuroplasticity really works in practice. Not theory — but how to apply it through repetition, movement, and targeted exercises that help the brain rebuild connections.",
      outcome: "",
      items: [],
    },
    {
      number: "03",
      title: "The hidden challenges no one explains",
      body: "Stroke is not just physical. You'll address the things that often stall recovery — so you can understand why progress sometimes stops, and how to move forward again.",
      outcome: "",
      items: ["Fatigue", "Emotional impact", "Cognitive overload"],
    },
    {
      number: "04",
      title: "Rebuilding real-world function",
      body: "Now the focus shifts to action. This is where recovery becomes visible in everyday life.",
      outcome: "",
      items: ["Movement and mobility", "Speech and communication", "Coordination and daily function"],
    },
    {
      number: "05",
      title: "The overlooked recovery factors",
      body: "Most programs ignore these. You'll learn how to support recovery through areas that often make a bigger difference than people expect.",
      outcome: "",
      items: ["Nutrition", "Swallowing", "Sensory and visual systems"],
    },
    {
      number: "06",
      title: "Bringing it all together",
      body: "You move from isolated exercises to a structured daily system. By the end, you're not guessing anymore — you have a clear, structured way forward.",
      outcome: "",
      items: ["What to do", "How to do it", "How to adjust when things don't work"],
    },
  ],
  // Closing checklist — 20 chapters / 100 lessons etc
  highlights: [
    "20 structured chapters",
    "100 guided lessons",
    "Video, audio, and practical walkthroughs",
    "Designed for real-life application at home",
  ],
  closingLine: "By the end, you're not guessing anymore. You have a clear, structured way forward.",
};

// ---- DELIVERABLES SECTION ----
export const deliverables = {
  headline: "Everything included in the program",
  intro: "One investment. Everything you need to follow the program from start to finish — and beyond.",
  microCommitment: {
    label: "See if this is right for you",
    button: "Explore the Program",
  },
  groups: [
    {
      label: "Guidance",
      items: [
        {
          title: "12 weekly live group calls",
          detail: "Join each week's session to ask questions, get guidance, and stay on track.",
        },
        {
          title: "Recorded sessions — all 12 weeks",
          detail: "Every live call is recorded. Revisit any session at any time.",
        },
        {
          title: "Clear weekly structure",
          detail: "Each week has a defined focus. No guessing what to do next.",
        },
      ],
    },
    {
      label: "Content",
      items: [
        {
          title: "Video lessons",
          detail: "Structured video content for every module — watch at your own pace.",
        },
        {
          title: "Audio lessons",
          detail: "Listen while moving, resting, or away from a screen.",
        },
        {
          title: "Worksheets and PDFs",
          detail: "Printable materials for tracking progress and applying each week's principles.",
        },
      ],
    },
    {
      label: "Support",
      items: [
        {
          title: "Email support throughout",
          detail: "Questions between sessions answered directly and thoughtfully.",
        },
        {
          title: "Lifetime access",
          detail: "The program and all future updates remain yours indefinitely.",
        },
      ],
    },
  ],
  price: "$997",
  priceLabel: "One-time investment",
  priceSubNote: "Lifetime access  •  No subscription  •  All future updates included",
  priceNote: "One-time investment. Lifelong access. No recurring fees.",
  urgencyLine: "You can start today and go at your own pace.",
  guarantee: "If you enroll and the program is not right for you, contact us within the first 7 days.",
};

// ---- BENEFITS SECTION ----
export const benefits = {
  headline: "What participants are really looking for",
  items: [
    {
      title: "Confidence in what to do each day",
      description: "Wake up with a clear focus — no longer having to figure out where to begin.",
    },
    {
      title: "A sense of continuation, not abandonment",
      description: "Recovery structured to pick up where formal rehab left off — not leave you on your own.",
    },
    {
      title: "One clear framework to follow",
      description: "Replace scattered advice and conflicting information with a single coherent system.",
    },
    {
      title: "Visible progress — even the small kind",
      description: "Structure and tracking make improvement legible, even when it feels slow.",
    },
    {
      title: "Support when motivation is hard",
      description: "Weekly live calls and structured guidance that keep recovery moving during difficult periods.",
    },
    {
      title: "Hope with a rational foundation",
      description: "Neuroplasticity is real. Understanding it changes how recovery feels — and what seems possible.",
    },
  ],
};

// ---- FAQ SECTION ----
export const faq = {
  headline: "Common questions",
  intro:
    "These are questions we hear often. If yours is not here, reach out directly.",
  items: [
    {
      question: "Is it too late for me to improve?",
      answer:
        "Not necessarily. While the early months after stroke involve the most rapid change, recovery does not have a fixed endpoint. The brain retains its capacity for change throughout life — a property known as neuroplasticity. Many people make meaningful progress well beyond the acute phase when they have the right structure, repetition, and support.",
    },
    {
      question: "My stroke was several years ago. Is this still relevant?",
      answer:
        "Yes. A long plateau does not always mean recovery has stopped — it often means the right framework has been missing. This program is specifically designed to help people re-engage with recovery in a purposeful, structured way, regardless of how much time has passed since the stroke.",
    },
    {
      question: "What if I am very limited physically?",
      answer:
        "The program works from where you are, not from a fixed starting point. The goal is not to compare your progress to anyone else's. It is to build practical, adaptable improvement based on your current capacity — and to understand the principles behind what you are doing.",
    },
    {
      question: "I completed rehabilitation. Can I still join?",
      answer:
        "Many participants join specifically because formal rehab ended before they felt ready. This program is designed to complement appropriate clinical care by providing continued structure, explanation, and follow-through at home. It is not a clinical service — it is a guided continuation.",
    },
    {
      question: "What if fatigue is a significant problem for me?",
      answer:
        "Fatigue is one of the most common challenges after stroke, and the program accounts for it. This is not about intensity — it is about pacing, consistency, and working intelligently within your current capacity. The program includes specific content on managing fatigue as part of the recovery process.",
    },
    {
      question: "I have no background in neuroscience. Will I understand this?",
      answer:
        "Completely. The program explains how the brain recovers in plain, practical language — no prior knowledge required. The goal is to help you understand what you are doing and why, so that you can apply it with confidence.",
    },
    {
      question: "Why would I pay for this when there is free information available online?",
      answer:
        "Free information has real value. The problem is that it is usually scattered, inconsistent, and difficult to turn into a coherent daily plan. This program provides structure, sequencing, live guidance, and a framework that connects everything — saving you the work of piecing it together yourself.",
    },
    {
      question: "Is this a substitute for medical care or professional therapy?",
      answer:
        "No — and this is important. The Stroke Comeback Protocol is an educational and guided recovery support program. It is designed to work alongside medical care, rehabilitation, and the advice of your doctor or therapist. It does not replace any of those services, and it is not an emergency or acute stroke treatment.",
    },
  ],
};

// ---- FOUNDER SECTION ----
export const founderSection = {
  headline: "Created to bridge the gap between rehab and real life",
  credentialLabel: "About the creator",
  body: [
    "The Stroke Comeback Protocol grew out of something I observed repeatedly in practice: stroke survivors received a period of formal rehabilitation — and then, often, the structure simply stopped. Many were left feeling that the rest was up to them, without enough explanation, guidance, or a clear plan to follow at home.",
    "What I noticed was that the missing piece was rarely motivation. It was clarity. People were expected to continue their recovery, but many did not know what to prioritise, how to organise their effort, or how to understand what their brain and body were trying to relearn.",
    "This program exists to address that gap. I wanted to create something that connects professional knowledge with everyday life — not isolated theory, and not random exercises, but a practical framework that people can genuinely use week after week, in their own home, on their own terms.",
  ],
};

// ---- FINAL CTA SECTION ----
export const finalCTA = {
  headline: "Recovery needs more than information.\nIt needs a system.",
  body: "If you or someone you love is looking for a clearer, more structured way forward after stroke, The Stroke Comeback Protocol was built to turn recovery principles into daily, meaningful action.",
  primaryCTA: "Enroll Now — $997",
  secondaryCTA: "See Full Program Details",
  trustNotes: [
    "12-week guided program",
    "Live calls every week",
    "Lifelong access",
    "Complements medical care",
  ],
};

// ---- DISCLAIMER ----
export const disclaimer =
  "This program is intended as an educational and guided recovery support resource. It is designed to complement, not replace, medical care, rehabilitation, or advice from your physician or therapist. It is not an emergency or acute stroke treatment. Individual outcomes will vary.";
