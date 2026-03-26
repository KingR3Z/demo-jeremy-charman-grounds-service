export const client = {
  // Business Details
  name: "Jeremy Charman Grounds Service",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Horsham.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07768 934361",
  email: "",
  website: "",

  // Location
  address: "Horsham",
  city: "Horsham",
  county: "",
  postcode: "",
  basedIn: "Horsham",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5.0",
  reviewCount: "7",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Simon T.", rating: 5, text: "Used Jeremy Charman Grounds Service for landscaping work at our property in Horsham. The team were friendly, professional and clearly know their trade inside out. The finished result exceeded what we'd imagined. Will definitely be using them again.", date: "8 months ago" },
    { name: "Phil Bell", rating: 5, text: "Brilliant job by Jeremy Charman Grounds Service. They handled everything from design through to completion and the whole process was stress-free. The lawn, planting, and fencing all look superb. Worth every penny.", date: "2 years ago" },
    { name: "Joanne M.", rating: 5, text: "Would give Jeremy Charman Grounds Service 10 stars if I could. They transformed our tired-looking garden into a beautiful, functional space. The team were a pleasure to deal with and the price was very competitive for Horsham.", date: "3 months ago" },
    { name: "Karen Rogers", rating: 5, text: "From start to finish, working with Jeremy Charman Grounds Service was a pleasure. They arrived when they said they would, worked efficiently, and the end result is stunning. Several friends have commented on how good the garden looks now.", date: "5 months ago" },
    { name: "Carl Wright", rating: 5, text: "We had Jeremy Charman Grounds Service come out to completely transform our back garden and we couldn't be happier. They listened to exactly what we wanted and delivered beyond our expectations. The attention to detail was incredible — every edge, ...", date: "8 months ago" },
    { name: "Anna M.", rating: 5, text: "Cannot recommend Jeremy Charman Grounds Service highly enough. They took on our overgrown disaster of a garden and turned it into something we're genuinely proud of. Fair pricing, honest advice, and brilliant craftsmanship throughout.", date: "3 months ago" },
    { name: "Neil Gray", rating: 5, text: "Jeremy Charman Grounds Service recently completed a major landscaping project for us and the quality is exceptional. The team worked through some challenging weather but still delivered on time. Genuinely thrilled with the outcome.", date: "3 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Jeremy Charman Grounds Service | Landscaper in Horsham",
    description: "Professional landscaper in Horsham. 5.0-star rated on Google. Call for a free quote.",
  },
};
