// =============================================
// CONTENT CONFIGURATION FILE
// All copy, links, and editable text lives here.
//
// HOW TO EDIT:
// 1. Thinkific purchase link: update THINKIFIC_URL below
// 2. Founder details: update the founder object below
// 3. Contact email: update CONTACT_EMAIL below
// 4. Brand name: update BRAND_NAME below
// =============================================

// ---- LINKS ----
// To change the Thinkific purchase URL, update this single value:
export const THINKIFIC_URL =
  "https://jorgen-s-site-0485.thinkific.com/products/courses/TheStrokeComebackProtocol";

export const CONTACT_EMAIL = "hello@strokecomebackprotocol.com"; // Replace with real email

export const BRAND_NAME = "The Stroke Comeback Protocol";

// ---- FOUNDER ----
// Replace these placeholder values with real information:
export const founder = {
  name: "Founder Name",              // e.g. "Dr. Jane Smith" or "Jørgen Olsen"
  title: "Founder & Lead Clinician", // e.g. "Physiotherapist, MSc Neurological Rehabilitation"
  qualifications: "",                 // e.g. "BSc Physiotherapy, MSc Neurological Rehabilitation"
  background: "",                     // e.g. "15 years in neurological rehabilitation"
  headshotAlt: "Founder of The Stroke Comeback Protocol",
  // headshotSrc: "/images/founder.jpg",  // Uncomment and set path when real photo is available
};

// ---- HERO SECTION ----
export const hero = {
  headline: "A Clearer Path Forward After Stroke",
  subheadline:
    "A 12-week guided neuroplasticity program designed to help stroke survivors continue recovery at home with more structure, confidence, and support.",
  body: "If rehab has ended but recovery still matters, The Stroke Comeback Protocol helps you understand what to focus on, why it matters, and how to build a practical daily recovery routine you can actually follow.",
  trustLine: "12-week guided program  •  Lifelong access  •  Designed to complement medical care",
  primaryCTA: "Enroll Now",
  secondaryCTA: "See Full Program Details",
};

// ---- PROBLEM SECTION ----
export const problem = {
  headline: "What happens when rehab ends, but recovery doesn't?",
  body: "Many stroke survivors receive important medical care and formal rehabilitation, but are still left wondering what to do next in daily life. The challenge is often not motivation. It is lack of structure, lack of clarity, and lack of a practical plan to follow consistently at home.",
  cards: [
    "I want to keep improving, but I'm not sure what to focus on.",
    "I've been given advice, but not a clear system.",
    "I feel like progress has slowed and I don't know how to restart.",
    "There is too much scattered information online and not enough guidance.",
  ],
};

// ---- SOLUTION SECTION ----
export const solution = {
  headline: "A daily recovery system built around neuroplasticity",
  body: "The Stroke Comeback Protocol translates recovery principles into a structured, practical framework for everyday life. Instead of random exercises or scattered advice, participants follow a guided 12-week approach that helps them work on recovery with more direction, understanding, and consistency.",
  pillars: [
    {
      icon: "Brain",
      title: "Neuroplasticity Foundation",
      description:
        "Understand how the recovering brain learns and rewires — so every session has a clear purpose behind it.",
    },
    {
      icon: "Activity",
      title: "Progressive Movement Training",
      description:
        "Build mobility and strength gradually, with structured progressions matched to your current capacity.",
    },
    {
      icon: "Moon",
      title: "Sleep Restoration",
      description:
        "Address one of recovery's most overlooked factors with practical strategies for better, more restorative sleep.",
    },
    {
      icon: "Wind",
      title: "Pain and Tension Management",
      description:
        "Learn evidence-informed approaches to reduce physical tension and manage post-stroke discomfort.",
    },
    {
      icon: "Heart",
      title: "Motivation and Mindset",
      description:
        "Navigate the emotional landscape of recovery with realistic, grounded strategies for consistency.",
    },
    {
      icon: "TrendingUp",
      title: "Long-Term Sustainability",
      description:
        "Build a recovery plan designed to last well beyond the 12 weeks — one you can maintain independently.",
    },
  ],
};

// ---- WHY DIFFERENT SECTION ----
export const whyDifferent = {
  headline: "Why this is different from general stroke recovery information",
  differentiators: [
    {
      title: "Guided neuroplasticity, not random exercises",
      description:
        "Every element of the program is tied to how the brain actually learns and changes — giving your effort more meaning.",
    },
    {
      title: "Practical home implementation, not just theory",
      description:
        "This is designed for real life — not a clinical setting. You can follow it from home, at your own pace.",
    },
    {
      title: "Clear structure over 12 weeks",
      description:
        "A defined weekly progression removes the guesswork and gives your recovery a shape it can follow.",
    },
    {
      title: "Support and accountability through guided calls",
      description:
        "Live group calls keep you on track, give you a place to ask questions, and remind you that you are not doing this alone.",
    },
    {
      title: "Designed to help you understand the 'why'",
      description:
        "When you understand why a practice matters, you are more likely to do it — and do it consistently.",
    },
  ],
  quote:
    "The stroke-damaged brain isn't broken — it's hungry for guidance. Every rep, every step, every movement is a vote for rewiring.",
};

// ---- WHO IT'S FOR SECTION ----
export const whoItsFor = {
  headline: "Who this program is best suited for",
  included: [
    "Stroke survivors who want a more structured way to continue recovery",
    "People who feel stuck after formal rehab has ended",
    "Those dealing with lingering walking, hand, fatigue, sleep, tension, or confidence issues",
    "People willing to engage in guided practice over 12 weeks",
    "Caregiver-supported participants and families seeking more clarity",
  ],
  excluded: [
    "Emergency or acute medical management",
    "A replacement for physician-led rehab",
    "People expecting passive treatment only",
    "Anyone looking for miracle-cure promises",
    "People unwilling to practice consistently",
  ],
};

// ---- PROGRAM BREAKDOWN SECTION ----
export const program = {
  headline: "What's inside the 12-week program",
  phases: [
    {
      number: "01",
      title: "Foundation",
      weeks: "Weeks 1–3",
      items: [
        "Understanding your recovering brain",
        "Building daily practice routines",
        "Fundamental movement patterns",
      ],
    },
    {
      number: "02",
      title: "Restore Function",
      weeks: "Weeks 4–6",
      items: ["Sleep as recovery", "Walking and mobility", "Strength and control"],
    },
    {
      number: "03",
      title: "Build Capacity",
      weeks: "Weeks 7–9",
      items: ["Managing tension and pain", "Fine motor skills", "Recovering from setbacks"],
    },
    {
      number: "04",
      title: "Sustain and Thrive",
      weeks: "Weeks 10–12",
      items: ["Motivation and mindset", "Advanced goal setting", "Building your long-term plan"],
    },
  ],
};

// ---- DELIVERABLES SECTION ----
export const deliverables = {
  headline: "What you get",
  items: [
    "12 weekly live group calls",
    "Recorded sessions — watch or revisit at any time",
    "Personalised onboarding support",
    "Worksheets and PDF guides",
    "Video lessons for each module",
    "Audio lessons for flexible learning",
    "Email support throughout the program",
    "Lifelong access to course materials and future updates",
  ],
  price: "$997 USD",
  priceNote: "One-time investment. Lifelong access.",
};

// ---- BENEFITS SECTION ----
export const benefits = {
  headline: "What participants are really looking for",
  items: [
    {
      title: "More confidence in what to do each day",
      description: "Wake up knowing what you are working on and why it matters.",
    },
    {
      title: "Less feeling of being abandoned after rehab",
      description: "A structured continuation — so recovery doesn't feel like it ends at discharge.",
    },
    {
      title: "A clearer plan",
      description: "One framework to follow instead of piecing together information from many different sources.",
    },
    {
      title: "A stronger sense of progress",
      description: "Tracking and structure help make improvements visible — even when they feel small.",
    },
    {
      title: "Better support and accountability",
      description: "Group calls and guided check-ins keep you moving when motivation gets harder.",
    },
    {
      title: "More hope grounded in science",
      description: "Understanding neuroplasticity gives recovery a rational, hopeful foundation.",
    },
  ],
};

// ---- FAQ SECTION ----
export const faq = {
  headline: "Frequently Asked Questions",
  items: [
    {
      question: "Is it too late for me to improve?",
      answer:
        "Not necessarily. While the early phase after stroke is important, recovery does not always stop after the first few months. The brain remains capable of change throughout life, and many people can still make meaningful progress when they have the right structure, repetition, and guidance.",
    },
    {
      question: "What if my stroke was years ago?",
      answer:
        "A plateau does not always mean recovery is over. Often, it means the right framework and daily guidance have been missing. This program is designed to help people continue recovery with more purpose and structure, even if a long time has passed.",
    },
    {
      question: "What if I am very limited physically?",
      answer:
        "This program is built around the idea that recovery starts from where you are. The goal is not comparison. It is practical, adaptable progress based on your current capacity.",
    },
    {
      question: "What if I already completed rehabilitation?",
      answer:
        "Many people join because formal rehab ended before they felt finished. This program is designed to complement appropriate care by helping people continue with more clarity, structure, and follow-through at home.",
    },
    {
      question: "What if I get tired easily?",
      answer:
        "Fatigue is common after stroke. This course is not about reckless intensity. It is about pacing, consistency, and working intelligently within your current capacity.",
    },
    {
      question: "What if I do not understand neuroscience?",
      answer:
        "You do not need a scientific background. The course explains recovery principles in clear, practical language so participants can better understand what they are doing and why it matters.",
    },
    {
      question: "Why should I pay when there is free information online?",
      answer:
        "Because free information is often scattered, overwhelming, and difficult to turn into a clear daily plan. This program provides structure, guidance, and a coherent recovery framework.",
    },
    {
      question: "Is this a replacement for medical care or therapy?",
      answer:
        "No. The Stroke Comeback Protocol is designed to complement, not replace, medical care, rehabilitation, or advice from your doctor or therapist.",
    },
  ],
};

// ---- FOUNDER SECTION ----
// Update the founderSection.body with any edits to the founder's voice
export const founderSection = {
  headline: "Created to bridge the gap between rehab and real life",
  body: [
    "The Stroke Comeback Protocol grew out of something I observed repeatedly: stroke survivors often received a period of formal rehabilitation, but after that, many were left feeling that the rest was up to them — without enough structure, explanation, or practical guidance.",
    "What struck me was that the missing piece was often not motivation. It was a clear plan. People were expected to continue working on their recovery, but many did not know what to focus on, how to organise their efforts, or how to understand what their brain and body were trying to relearn.",
    "That is why this course matters to me. I wanted to create something that connects professional knowledge with everyday life — not just theory, and not just isolated exercises, but a practical framework people can actually use at home, week after week.",
  ],
};

// ---- FINAL CTA SECTION ----
export const finalCTA = {
  headline: "Recovery deserves more than guesswork",
  body: "If you or someone you care about is looking for a clearer, more structured path forward after stroke, The Stroke Comeback Protocol was built to help turn recovery principles into daily action.",
  primaryCTA: "Enroll Now",
  secondaryCTA: "View Program",
};

// ---- DISCLAIMER ----
export const disclaimer =
  "This program is intended as an educational and guided recovery support resource. It is designed to complement, not replace, medical care, rehabilitation, or advice from your physician or therapist. It is not an emergency or acute stroke treatment.";
