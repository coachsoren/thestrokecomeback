// =============================================
// CONTENT CONFIGURATION FILE
// All copy, links, and editable text lives here.
//
// HOW TO EDIT:
// 1. Thinkific purchase link → update THINKIFIC_URL
// 2. Founder credentials    → update the founder object
// 3. Contact email          → update CONTACT_EMAIL
// =============================================

// ---- LINKS ----
export const THINKIFIC_URL =
  "https://jorgen-s-site-0485.thinkific.com/products/courses/TheStrokeComebackProtocol";

export const CONTACT_EMAIL = "hello@strokecomebackprotocol.com";

export const BRAND_NAME = "The Stroke Comeback Protocol";

// ---- FOUNDER ----
// To add a real headshot: place it at public/images/founder.jpg
// then uncomment founder.headshotSrc and update FounderSection.tsx.
export const founder = {
  name: "Dr. Jörgen Sandell",
  title: "Clinician & Scientist in Neurological Recovery",
  headshotAlt: "Dr. Jörgen Sandell, founder of The Stroke Comeback Protocol",
  // headshotSrc: "/images/founder.jpg",
};

// ---- HERO SECTION ----
export const hero = {
  eyebrow: "12-Week Guided Home Recovery Program",
  headline: "What do you do when rehab ends,\nbut recovery doesn't?",
  subheadline:
    "A structured 12-week program that helps stroke survivors continue recovery at home — with clarity, consistency, and real guidance.",
  supportingLine: "No guesswork. No random exercises. Just a clear path forward.",
  trustBar: "12-week guided program  •  20 chapters  •  100 lessons  •  Lifetime access  •  Designed to complement medical care",
  primaryCTA: "Start the Program",
  secondaryCTA: "View Full Program",
  stats: [
    { value: "12", label: "Structured weeks" },
    { value: "20", label: "Chapters" },
    { value: "12", label: "Live group calls" },
    { value: "∞", label: "Lifetime access" },
  ],
};

// ---- MID-PAGE CTA ----
export const midCTA = {
  headline: "Start your recovery with a clear plan",
  primaryCTA: "Start the Program",
  urgencyLine: "You can start today and go at your own pace.",
};

// ---- PROBLEM SECTION ----
export const problem = {
  headline: "What happens when rehab ends — but recovery doesn't?",
  intro: "Formal rehabilitation is an important start. But for many survivors, it ends before recovery feels finished.",
  body: "The challenge after discharge is rarely motivation. It is the absence of structure — no clear daily plan, no way to understand what the brain is trying to relearn, and no system for turning that into consistent action at home.",
  cards: [
    { text: "I want to keep improving, but I don't know what to focus on." },
    { text: "I've been given advice, but never a clear system to follow." },
    { text: "Progress has slowed and I don't know how to move it forward." },
    { text: "There's too much conflicting information and not enough direction." },
  ],
};

// ---- SOLUTION SECTION ----
export const solution = {
  headline: "A system built around how the brain actually recovers",
  body: "The Stroke Comeback Protocol translates neuroplasticity principles into a practical framework you can follow at home. Every element is chosen for a reason — and that reason is explained in plain language.",
  pillars: [
    {
      icon: "Brain",
      title: "Neuroplasticity in Practice",
      description:
        "How the recovering brain changes — and why consistent, purposeful repetition is the core mechanism of recovery.",
    },
    {
      icon: "Activity",
      title: "Progressive Movement",
      description:
        "Structured progressions for mobility and strength, matched to your current level.",
    },
    {
      icon: "Moon",
      title: "Sleep Restoration",
      description:
        "Evidence-informed strategies for more restorative sleep — one of recovery's most overlooked pillars.",
    },
    {
      icon: "Wind",
      title: "Pain and Tension",
      description:
        "Work with post-stroke tension and discomfort, rather than managing around it.",
    },
    {
      icon: "Heart",
      title: "Motivation and Mindset",
      description:
        "Grounded, realistic approaches to the emotional side of long-term recovery.",
    },
    {
      icon: "TrendingUp",
      title: "Long-Term Sustainability",
      description:
        "Leave the 12 weeks with a self-directed plan you understand and can maintain independently.",
    },
  ],
};

// ---- WHY DIFFERENT SECTION ----
export const whyDifferent = {
  headline: "What makes this different",
  differentiators: [
    {
      title: "Neuroplasticity-based — not random exercises",
      description:
        "Every session is grounded in how the brain learns and rewires. You understand why you are doing each thing.",
    },
    {
      title: "Built for home",
      description:
        "Designed around real daily life. No special equipment or professional supervision required.",
    },
    {
      title: "A defined 12-week progression",
      description:
        "Each week builds on the last. There is no guessing about what comes next.",
    },
    {
      title: "Weekly live calls",
      description:
        "You are not working through this alone. Ask questions, course-correct, and hear from others doing the same.",
    },
    {
      title: "The 'why' is always explained",
      description:
        "When you understand why a practice works, you are more likely to do it — and do it consistently.",
    },
  ],
  quote:
    "The stroke-damaged brain isn't broken — it's hungry for guidance. Every rep, every step, every movement is a signal for rewiring.",
};

// ---- PROGRAM BREAKDOWN SECTION ----
export const program = {
  statement: [
    "Most stroke survivors are not lacking motivation.",
    "They are lacking a clear plan.",
  ],
  headline: "A clear, step-by-step recovery structure",
  sectionLabel: "How your recovery is structured",
  intro: [
    "Each phase builds on the last — so you always know what to focus on next.",
    "You don't just follow exercises. You understand what your brain is trying to relearn and how to support that process.",
  ],
  phases: [
    {
      number: "01",
      title: "Understanding what actually happened",
      body: "Start by understanding stroke at a deeper level — what changed in your brain, and why recovery can feel slow, confusing, or unpredictable.",
      outcome: "This replaces fear with clarity.",
      items: [],
      chapters: "Chapters 1–3",
    },
    {
      number: "02",
      title: "The science of recovery",
      body: "Learn how neuroplasticity works in practice — how to apply it through repetition, movement, and targeted exercises that help the brain rebuild connections.",
      outcome: "",
      items: [],
      chapters: "Chapters 4–6",
    },
    {
      number: "03",
      title: "The hidden challenges",
      body: "Stroke is not just physical. Address the things that often stall recovery and learn how to move forward again.",
      outcome: "",
      items: ["Fatigue", "Emotional impact", "Cognitive overload"],
      chapters: "Chapters 7–10",
    },
    {
      number: "04",
      title: "Rebuilding real-world function",
      body: "The focus shifts to action. This is where recovery becomes visible in everyday life.",
      outcome: "",
      items: ["Movement and mobility", "Speech and communication", "Coordination and daily function"],
      chapters: "Chapters 11–14",
    },
    {
      number: "05",
      title: "The overlooked recovery factors",
      body: "Most programs ignore these. Learn how to support recovery through areas that often make a bigger difference than expected.",
      outcome: "",
      items: ["Nutrition", "Swallowing", "Sensory and visual systems"],
      chapters: "Chapters 15–17",
    },
    {
      number: "06",
      title: "Bringing it all together",
      body: "Move from isolated exercises to a structured daily system — one you understand and can maintain independently.",
      outcome: "",
      items: ["What to do", "How to do it", "How to adjust when things don't work"],
      chapters: "Chapters 18–20",
    },
  ],
  highlights: [
    "20 structured chapters",
    "100 guided lessons",
    "Video, audio, and practical walkthroughs",
    "Designed for real-life application at home",
  ],
  closingLine: "By the end, you have a clear, structured way forward.",
};

// ---- WHO IT'S FOR SECTION ----
export const whoItsFor = {
  headline: "Who this is for",
  included: [
    "Stroke survivors who want to continue improving after rehab",
    "People who feel stuck or unsure what to focus on",
    "Those looking for a structured daily approach to recovery",
    "Caregivers who want to support recovery in a practical, informed way",
  ],
  excluded: [
    "Emergency or acute medical situations",
    "A replacement for medical or therapist-led care",
    "People looking for passive treatment or quick fixes",
  ],
};

// ---- TESTIMONIALS ----
export const testimonials = {
  headline: "Who this program is helping",
  items: [
    {
      quote: "I felt stuck after rehab ended. This gave me a clear structure and something to follow every day.",
      attribution: "Program participant",
    },
    {
      quote: "For the first time, I understood why I was doing each exercise — that changed everything.",
      attribution: "Program participant",
    },
    {
      quote: "It helped me feel more in control of my recovery again.",
      attribution: "Program participant",
    },
    {
      quote: "I wish I had something like this earlier. It fills the gap that rehab leaves behind.",
      attribution: "Program participant",
    },
  ],
  disclaimer:
    "These responses reflect individual experiences. Results vary based on stroke severity, time since stroke, and personal engagement with the program.",
};

// ---- DELIVERABLES SECTION ----
export const deliverables = {
  headline: "Everything you need to follow the program",
  intro: "One investment. All the tools, content, and support to complete the full 12 weeks — and beyond.",
  items: [
    {
      title: "Structured video lessons for each phase",
      detail: "Watch at your own pace, revisit any time.",
    },
    {
      title: "Audio versions for flexible learning",
      detail: "Listen while moving, resting, or away from a screen.",
    },
    {
      title: "Worksheets to track your progress",
      detail: "Printable materials for applying and monitoring each week's work.",
    },
    {
      title: "Weekly live calls for guidance",
      detail: "Ask questions, stay on track, and hear how others are progressing.",
    },
    {
      title: "Recorded sessions — all 12 weeks",
      detail: "Every live call is recorded and available to revisit.",
    },
    {
      title: "Lifetime access",
      detail: "The program and all future updates remain yours indefinitely.",
    },
  ],
  price: "$997",
  priceLabel: "One-time investment",
  priceSubNote: "Lifetime access  •  No subscription  •  All future updates included",
  urgencyLine: "You can start today and go at your own pace.",
  guarantee: "If you enroll and the program is not right for you, contact us within the first 7 days.",
};

// ---- BENEFITS SECTION ----
export const benefits = {
  headline: "What participants are looking for",
  items: [
    {
      title: "Confidence in what to do each day",
      description: "Wake up with a clear focus — no longer having to figure out where to begin.",
    },
    {
      title: "Continuation, not abandonment",
      description: "Recovery that picks up where formal rehab left off.",
    },
    {
      title: "One framework to follow",
      description: "Replace scattered advice with a single coherent system.",
    },
    {
      title: "Visible progress",
      description: "Structure and tracking make improvement legible, even when it feels slow.",
    },
    {
      title: "Support when motivation is hard",
      description: "Weekly calls and structured guidance keep recovery moving during difficult periods.",
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
  intro: "These are questions we hear often. If yours is not here, reach out directly.",
  items: [
    {
      question: "Is it too late for me to improve?",
      answer:
        "Not necessarily. The brain retains its capacity for change throughout life — neuroplasticity. Many people make meaningful progress well beyond the acute phase when they have the right structure, repetition, and support.",
    },
    {
      question: "My stroke was several years ago. Is this still relevant?",
      answer:
        "Yes. A long plateau often means the right framework has been missing, not that recovery has stopped. This program is designed to help people re-engage with recovery purposefully, regardless of how much time has passed.",
    },
    {
      question: "What if I am very limited physically?",
      answer:
        "The program works from where you are, not from a fixed starting point. The goal is practical, adaptable improvement based on your current capacity.",
    },
    {
      question: "I completed rehabilitation. Can I still join?",
      answer:
        "Many participants join because formal rehab ended before they felt ready. This program provides continued structure and follow-through at home — it is not a clinical service, but a guided continuation.",
    },
    {
      question: "What if fatigue is a significant problem for me?",
      answer:
        "Fatigue is one of the most common challenges after stroke, and the program accounts for it. This is about pacing and working intelligently within your current capacity — not intensity.",
    },
    {
      question: "I have no background in neuroscience. Will I understand this?",
      answer:
        "Completely. Everything is explained in plain, practical language. No prior knowledge required.",
    },
    {
      question: "Why would I pay for this when there is free information online?",
      answer:
        "Free information is usually scattered and hard to turn into a daily plan. This program provides structure, sequencing, and live guidance — saving you the work of piecing it together yourself.",
    },
    {
      question: "Is this a substitute for medical care or therapy?",
      answer:
        "No. This program is designed to work alongside medical care and rehabilitation — not replace it. It is not an emergency or acute stroke treatment.",
    },
  ],
};

// ---- FOUNDER SECTION ----
export const founderSection = {
  headline: "Created to bridge the gap between rehab and real life",
  credentialLabel: "About the creator",
  body: [
    "The Stroke Comeback Protocol grew out of something I observed repeatedly: stroke survivors received rehabilitation, and then the structure simply stopped. Many were left to figure out the rest on their own — without enough explanation, or a clear plan.",
    "The missing piece was rarely motivation. It was clarity. People were expected to continue their recovery but didn't know what to prioritise, how to organise their effort, or how to understand what their brain was trying to relearn.",
    "This program exists to address that gap — connecting professional knowledge with everyday life in a way people can genuinely use, week after week, at home.",
  ],
  credentials: [
    "25+ years of experience in neuromodulation and rehabilitation",
    "Clinical and scientific background",
    "Experience in neurological recovery and rehabilitation technology",
    "Advisor to rehabilitation centres worldwide",
  ],
  closingSentence:
    "My goal is simple: to give stroke survivors a clearer, more practical path forward after rehab.",
};

// ---- FINAL CTA SECTION ----
export const finalCTA = {
  headline: "You've tried to figure this out on your own.\nNow you have a clear plan to follow.",
  body: [
    "Rehab gives you a starting point. But what comes after is often unclear — and that's where many people get stuck.",
    "This program is built to give you structure, clarity, and a path forward you can actually follow.",
  ],
  nextSteps: [
    "Get instant access",
    "Start with Phase 1 today",
    "Follow a clear daily structure",
    "Join your first live session",
  ],
  primaryCTA: "Start the Program",
  subline: "Know exactly what to do, starting tomorrow.",
  trustNotes: [
    "12-week guided program",
    "Weekly live calls",
    "Lifetime access",
    "Complements medical care",
  ],
};

// ---- RISK REDUCTION (above price) ----
export const riskReduction = {
  headline: "Designed to support — not replace — your care",
  body: [
    "This program is built to complement medical care and rehabilitation.",
    "It provides structure and practical daily guidance — not a substitute for professional medical advice or treatment.",
  ],
  reassurance: "You can go at your own pace and revisit everything as needed.",
};

// ---- DISCLAIMER ----
// Shown in the footer only.
export const disclaimer =
  "This program is intended as an educational and guided recovery support resource. It is designed to complement, not replace, medical care, rehabilitation, or advice from your physician or therapist. It is not an emergency or acute stroke treatment. Individual outcomes will vary.";
