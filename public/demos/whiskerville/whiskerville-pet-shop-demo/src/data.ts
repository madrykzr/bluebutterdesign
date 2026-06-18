/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Staff, Review, ServiceItem } from './types';

export const SHOP_INFO = {
  name: "Whiskerville",
  tagline: "Treats, toys & tail wags.",
  description: "KL's friendly neighborhood pet shop since 2021. Nestled in Plaza Damansara, we specialize in high-quality organic premium goods, gentle professional grooming, and caring veterinary wellness visits.",
  location: "Plaza Damansara, Bukit Damansara, 50490 Kuala Lumpur, Malaysia",
  locality: "Plaza Damansara, KL",
  hours: "Mon - Sun, 10:00 AM - 9:00 PM",
  phone: "+60 3-2094 8888",
  email: "hello@whiskerville-demo.my",
  instagram: "@whiskerville.kl"
};

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    slug: "crunchy-joy-treats",
    name: "Crunchy Joy Treats",
    description: "An irresistible blend of oven-baked sweet potato, oats, and real free-range chicken essence. Rich in fiber, standard organic ingredients, and perfectly sized for training bites.",
    price: 24.00,
    category: "Treats",
    rating: 4.9,
    isPopular: true,
    isAvailable: true,
    illustrationType: "treats",
    colorBg: "#F4B6B0" // Soft pink
  },
  {
    id: "p2",
    slug: "royal-comfy-bed",
    name: "Royal Comfy Bed",
    description: "Our signature orthopedic cloud-plush memory foam bed. Styled with sustainable cotton and breathable linen, keeping your pup cool in the tropical Malaysian weather.",
    price: 240.00,
    category: "Accessories",
    rating: 5.0,
    isPopular: true,
    isAvailable: true,
    illustrationType: "bed",
    colorBg: "#A8C09A" // Sage green
  },
  {
    id: "p3",
    slug: "squeaky-squad-plush",
    name: "Squeaky Squad Plush",
    description: "Meet Bobo the Banana! A durably stitched double-layer canvas chew plush with a high-pitched recessed safety squeaker that stays secure even through active chew sessions.",
    price: 32.00,
    category: "Toys",
    rating: 4.8,
    isPopular: true,
    isAvailable: true,
    illustrationType: "toy",
    colorBg: "#8AA8C1" // Dusty blue
  },
  {
    id: "p4",
    slug: "salmon-whisker-wet-food",
    name: "Salmon Whisker Wet Food",
    description: "Slow-simmered Atlantic salmon fillet bites prepared with high-moisture gravy and taurine. Ideal for fussy eaters and promoting premium shiny coats.",
    price: 12.00,
    category: "Cats",
    rating: 4.7,
    isAvailable: true,
    illustrationType: "catnip",
    colorBg: "#FFDCC0" // Soft peach
  },
  {
    id: "p5",
    slug: "kl-leather-dog-collar",
    name: "KL Leather Dog Collar",
    description: "Handcrafted Malaysian full-grain leather neck collaring with brass hardware fixtures. Embossed with our signature little paw seal.",
    price: 85.00,
    category: "Accessories",
    rating: 4.9,
    isAvailable: true,
    illustrationType: "collar",
    colorBg: "#E3D3C4" // Pale Taupe
  },
  {
    id: "p6",
    slug: "eco-bamboo-feeding-bowl",
    name: "Eco Bamboo Feeding Bowl",
    description: "An elegant, heavyweight anti-skid bowl made entirely of biodestructible organic bamboo fibers. Gentle on the planet and easily dishwasher washable.",
    price: 42.00,
    category: "Dogs",
    rating: 4.6,
    isAvailable: true,
    illustrationType: "bowl",
    colorBg: "#FFF0D4" // Butter cream
  },
  {
    id: "p7",
    slug: "oatmeal-soothe-pet-shampoo",
    name: "Oatmeal Soothe Pet Shampoo",
    description: "Formulated specifically by our expert in-house groomers. Infused with soothing colloidal oatmeal and calming lavender, relieving hot-spots and tropical skin irritations.",
    price: 58.00,
    category: "Accessories",
    rating: 4.9,
    isPopular: true,
    isAvailable: true,
    illustrationType: "shampoo",
    colorBg: "#D1E2D3" // Pale Sage
  },
  {
    id: "p8",
    slug: "feather-chase-teaser",
    name: "Feather Chase Teaser",
    description: "An interactive elastic rod teaser featuring colorful organic duck feathers and a subtle silver metal bell trigger that promises boundless feline entertainment.",
    price: 18.00,
    category: "Toys",
    rating: 4.8,
    isAvailable: true,
    illustrationType: "mouse",
    colorBg: "#F6D6D4" // Soft blush
  },
  {
    id: "p9",
    slug: "premium-sudnay-premium-kibbles",
    name: "Premium Sunday Kibbles",
    description: "Hypoallergenic dog kibbles with pasture-raised venison and ancient grains. A holistic superfood recipe designed for healthy joint metabolism and pristine gut health.",
    price: 135.00,
    category: "Dogs",
    rating: 4.9,
    isAvailable: true,
    illustrationType: "treats",
    colorBg: "#C4D4E3" // Ice Blue
  },
  {
    id: "p10",
    slug: "nibble-joy-carrot-sticks",
    name: "Nibble Joy Carrot Sticks",
    description: "Naturally dried organic baby carrots blended with alfalfa, bound into safe chewable blocks tailored especially for rabbits, guinea pigs, and chinchillas.",
    price: 15.00,
    category: "Small Pets",
    rating: 4.5,
    isAvailable: true,
    illustrationType: "treats",
    colorBg: "#FFF1C0" // Warm yellow
  },
  {
    id: "p11",
    slug: "organic-premium-catnip-spray",
    name: "Organic Premium Catnip Spray",
    description: "Highly concentrated 100% natural hydrosol spray distilled from top-shelf dried catnip leaves. Perfect for scratching posts and bringing toys to life.",
    price: 36.00,
    category: "Cats",
    rating: 4.9,
    isAvailable: true,
    illustrationType: "catnip",
    colorBg: "#E3F4E5" // Tinted mint
  },
  {
    id: "p12",
    slug: "cozy-hamster-nesting-pod",
    name: "Cozy Hamster Nesting Pod",
    description: "A cute, ultra-quiet, rounded ceramic sleeping pod that helps tiny critters thermoregulate comfortably during humid Kuala Lumpur afternoons.",
    price: 29.00,
    category: "Small Pets",
    rating: 4.7,
    isAvailable: true,
    illustrationType: "bed",
    colorBg: "#EBD9FC" // Soft lilac
  },
  {
    id: "p13",
    slug: "glow-in-dark-running-ball",
    name: "Glow Running Critter Ball",
    description: "Safe, shatterproof running exercise sphere tailored for tiny paws. Features gentle auto-safety vents and a fluorescent ring that glows softly under low lights.",
    price: 25.00,
    category: "Small Pets",
    rating: 4.4,
    isAvailable: true,
    illustrationType: "toy",
    colorBg: "#E0F5FF" // Soft sky blue
  },
  {
    id: "p14",
    slug: "dental-defense-rope-toy",
    name: "Dental Defense Rope Toy",
    description: "100% natural unbleached cotton threads woven into a heavy-duty double knot. Flosses canine teeth gently during play combats tartar naturally.",
    price: 28.00,
    category: "Toys",
    rating: 4.7,
    isAvailable: true,
    illustrationType: "toy",
    colorBg: "#FFF4ED" // Smooth Cream
  },
  {
    id: "p15",
    slug: "tunnel-of-wonders-cat-tube",
    name: "Tunnel of Wonders Cat Tube",
    description: "A super-fun, collapsible, double-way cat tunnel with internal crinkle paper lining and an overhead peephole, inspiring playful ambushes.",
    price: 49.00,
    category: "Cats",
    rating: 4.9,
    isAvailable: true,
    illustrationType: "mouse",
    colorBg: "#FFECE0" // Peach fluff
  },
  {
    id: "p16",
    slug: "lavender-infusion-fur-mist",
    name: "Lavender Infusion Fur Mist",
    description: "Alcohol-free daily leave-in conditioning spray. Neutralizes odors, adds a dazzling sheen to heavy hair, and leaves a calming herbal aura.",
    price: 39.00,
    category: "Accessories",
    rating: 4.8,
    isAvailable: false, // Out of stock to test disabled states
    illustrationType: "shampoo",
    colorBg: "#EBE3FF" // Light Lavender
  }
];

export const STAFF: Staff[] = [
  {
    name: "Aunty Lin",
    role: "Founder & Curator",
    bio: "Our beloved captain! Lin founded Whiskerville after realizing she couldn't find a single store in KL that carried chemical-free treats. She spends her weekends rescuing street cats and hosting neighborhood pet coffee circles.",
    description: "Expert in nutrition and bespoke organic baking recipes.",
    funFact: "Owns 4 rescue dogs and 3 sassy cats who vote on new catalog entries.",
    petCount: "7 pets",
    illustrationType: "founder"
  },
  {
    name: "Dr. Faiz",
    role: "Resident Vet Extraordinaire",
    bio: "Dr. Faiz completed his veterinary surgery degree in Melbourne before returning home. He believes in fearless, positive-reinforcement checks where treats are dispensed as primary medicine, rendering the clinic clinic completely cozy and non-scary.",
    description: "Passionate about pet health education, preventative therapy, and calming anxious pets.",
    funFact: "Fluent in animal whispering and has a pet parrot who sings old traditional songs.",
    petCount: "3 pets",
    illustrationType: "vet"
  },
  {
    name: "Hana",
    role: "Head Groomer & Fur Stylist",
    bio: "Hana has spent over 6 years styling the finest coats in Bukit Damansara. She doesn't just cut fur; she designs styled statements while ensuring the bathing experience remains a soothing water massage ritual.",
    description: "Specializes in scissor-hand trims, skin-soothing masks, and positive puppy desensitization.",
    funFact: "Can snip a perfect teddy-bear face in her sleep, and grooms her own dwarf rabbit every Sunday.",
    petCount: "2 pets",
    illustrationType: "groomer"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    petName: "Milo",
    petBreed: "Golden Retriever",
    ownerName: "Sarah Chew",
    text: "Hana is a magician! Milo usually trembles at the sight of water, but he literally fell asleep during his oatmeal bubble soak. He came back smelling like a lavender cookie!",
    rating: 5,
    avatarBg: "#F4B6B0"
  },
  {
    id: "r2",
    petName: "Kopi",
    petBreed: "Malaysian Kampung Cat",
    ownerName: "Zharif Rahman",
    text: "We dropped by for Dr. Faiz's vaccination package. I was dreading the scratch struggle, but Faiz fed Kopi liquid tuna and the injection was over before Kopi even looked up! Amazing service.",
    rating: 5,
    avatarBg: "#A8C09A"
  },
  {
    id: "r3",
    petName: "Bobo",
    petBreed: "Lop-eared Rabbit",
    ownerName: "Lim Wei Jin",
    text: "So happy they carry dedicated small pet treats! Bobo is entirely obsessed with the Nibble Joy Carrot Sticks. The crew is always friendly and highly knowledgeable.",
    rating: 5,
    avatarBg: "#8AA8C1"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "s1",
    name: "Whiskerville Gentle Grooming",
    priceRange: "RM 50 - RM 150",
    duration: "1.5 - 2.5 hours",
    description: "A deeply therapeutic grooming session custom-tailored to your pet's sensory thresholds. Absolutely no cages, no harsh heat dryers, and boundless treats.",
    features: [
      "Skin-soothing organic herbal bath",
      "Calming warm blow-dry & full brushing",
      "Pristine claw trimming & filing",
      "Ear inspection, cleaning & gentle hair snout trimming",
      "Special scissor coat style & tidy up"
    ]
  },
  {
    id: "s2",
    name: "Caring Wellness Vet Clinic",
    priceRange: "RM 60 - RM 250",
    duration: "30 - 45 mins",
    description: "In-house primary check-ups, vaccines, and wellness consulting, delivered on soft padded cushions with absolute warmth and premium attention.",
    features: [
      "Consultation & nose-to-tail wellness scan (RM 60)",
      "Standard core vaccinations (RM 80 - 150)",
      "Tropical heartworm & tick/flea prevention guidance",
      "Deworming oral therapy administration",
      "Bespoke weight management counseling"
    ]
  },
  {
    id: "s3",
    name: "Cloud-Comfort Boarding",
    priceRange: "RM 50 / night",
    duration: "24-hour cycle",
    description: "Safe, sunlit, climate-controlled boarding suites. Your pets get active playtime sessions every 3 hours and daily video log updates.",
    features: [
      "Private orthopedic custom cot area",
      "Purified climate-controlled cool space",
      "Active group or solo garden play blocks",
      "Complimentary feeding & medication oversight",
      "Daily WhatsApp photo & reel messages"
    ]
  },
  {
    id: "s4",
    name: "Whiskerville Pet Taxi",
    priceRange: "RM 30 flat",
    duration: "One-way (within KL)",
    description: "Safe, seat-belt braced, stress-free transport. We collect your pets from your doorstep and bring them back safely wrapped in custom sheets.",
    features: [
      "Fully air-conditioned secure vehicle routing",
      "Premium pet seat belts or carrier locks",
      "Padded sheets changed after every guest ride",
      "Live GPS tracking link sent straight to your phone"
    ]
  }
];

export const PET_OF_THE_MONTH = {
  name: "Mochi",
  breed: "Shiba Inu",
  age: "2 years old",
  story: "Mochi was adopted from the Kuala Lumpur SPCA in March 2024. When he first arrived, he was shy and easily spooked. Today, he participates as Whiskerville's official Chief Tester, evaluating every chew toy and tasting every treat batch. If his tail wags twice, it is catalog approved!",
  favoriteThing: "Peanut Butter Crunchy Joy Bites",
  adoredBy: "Aunty Lin",
  avatarBg: "#8AA8C1"
};
