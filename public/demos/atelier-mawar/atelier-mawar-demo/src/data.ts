/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, LookbookItem } from './types';

export const products: Product[] = [
  {
    id: 'kebaya-asap',
    name: 'Kebaya Asap',
    price: 'RM 1,650',
    description: 'A classic silhouette reimagined in sheer mist organza, referencing the swirling morning fog.',
    frontImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    altImage: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=800',
    details: [
      'Raw edge finishes with delicate lace inserts',
      '100% fine silk-organza drape',
      'Concealed mother-of-pearl buttons',
      'Dry clean only'
    ],
    slug: 'ss26-asap'
  },
  {
    id: 'cardigan-hujan',
    name: 'Linen Cardigan Hujan',
    price: 'RM 720',
    description: 'An open-knit tailored cardigan, crafted from premium uncooked linen, representing highland rain showers.',
    frontImage: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?auto=format&fit=crop&q=80&w=800',
    altImage: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=800',
    details: [
      'Waffle knit structure in heavy-gauge linen',
      'Flared cuffs with drop shoulder seams',
      'Unrefined organic fiber variations',
      'Handcrafted under natural sunlight'
    ],
    slug: 'ss26-hujan'
  },
  {
    id: 'sarong-subuh',
    name: 'Silk Sarong Subuh',
    price: 'RM 950',
    description: 'Hand-dyed heavy silk wrap skirt, echoing the transition from pitch blue to morning blush.',
    frontImage: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=800',
    altImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800',
    details: [
      'Double-lined washed Habotai silk',
      'Asymmetric self-tie side drape',
      'Hand-dyed using organic local botanical extracts',
      'Made in limited rolls'
    ],
    slug: 'ss26-subuh'
  },
  {
    id: 'embun-shawl',
    name: 'Sari Embun Shawl',
    price: 'RM 480',
    description: 'An ultralight gossamer cashmere shawl, woven so thinly it mirrors dew drops on tea leaves.',
    frontImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
    altImage: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800',
    details: [
      '70% Cashmere, 30% Mulberry Silk',
      'Feathery eyelash-fringed trims',
      'Dyed with natural logwood bark',
      'Width: 140cm, Length: 200cm'
    ],
    slug: 'ss26-embun'
  },
  {
    id: 'kebarung-kabut',
    name: 'Couture Kebarung Kabut',
    price: 'RM 1,800',
    description: 'Our signature over-knee structural robe, designed with wide lapels and architectural pleats.',
    frontImage: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=800',
    altImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    details: [
      'Unstructured modern silhouette with split vents',
      'Concealed double-breasted closure',
      'Blended raw ramie and natural wild silk',
      'Individually tailored in Bukit Damansara'
    ],
    slug: 'ss26-kabut'
  },
  {
    id: 'pleated-dress',
    name: 'Cameron Pleated Dress',
    price: 'RM 1,450',
    description: 'A structural column gown featuring hand-pressed accordion pleats that cascade down like tea plantation terraces.',
    frontImage: 'https://images.unsplash.com/photo-1490254092279-aa60c556e1f6?auto=format&fit=crop&q=80&w=800',
    altImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800',
    details: [
      'Permanently pleated matte silk jersey',
      'High cowl neckline with draped open-back detailing',
      'Hidden floor-clean blind hems',
      'Wrinkle-free material'
    ],
    slug: 'ss26-pleated'
  },
  {
    id: 'petal-slip',
    name: 'Mawar Petal Silk Slip',
    price: 'RM 1,100',
    description: 'Bias-cut absolute luxury slip skirt, celebrating the petal-soft touch of dew-drenched flora.',
    frontImage: 'https://images.unsplash.com/photo-1518612186858-3f43b6ef6e6c?auto=format&fit=crop&q=80&w=800',
    altImage: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800',
    details: [
      'Double-ply washed sand crepe silk',
      'Curved waist tailoring with side zip',
      'Natural blush pigmentation matching our primary archive',
      'Lined in soft pure Habotai'
    ],
    slug: 'ss26-petal'
  },
  {
    id: 'taylor-pant',
    name: 'Bukit Damansara Trouser',
    price: 'RM 820',
    description: 'High-waisted, single-pleat wide trouser with a soft, weighted break at the shoe.',
    frontImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800',
    altImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    details: [
      'Mid-weight linen wool tailoring blend',
      'Internal cotton waistband construction',
      'Rear double-piped pockets with horn button closures',
      'Relaxed full-width leg'
    ],
    slug: 'ss26-trouser'
  }
];

export const lookbookItems: LookbookItem[] = [
  {
    id: '01',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1200',
    quote: "To wear Atelier Mawar is to experience wind moving under raw silk.",
    caption: "The flow of linen and unspun thread, floating like the heavy mist of Cameron Highlands heights.",
    parallaxOffset: -0.05
  },
  {
    id: '02',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1200',
    caption: "Quiet valleys covered in fog, the origin and silence that inspired our color palette and pleats.",
    parallaxOffset: 0.08
  },
  {
    id: '03',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200',
    quote: "Mawar binti Ismail strips modern drape to its humblest weightless state.",
    caption: "Constructed of light wool-ramie blends that rest softly on the skin.",
    parallaxOffset: -0.02
  },
  {
    id: '04',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200',
    caption: "Detailing the raw hems and unseen, fine seams within the pleats of our kebaya range.",
    parallaxOffset: 0.10
  }
];
