/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number; // in RM (Malaysian Ringgit)
  category: 'Dogs' | 'Cats' | 'Small Pets' | 'Treats' | 'Toys' | 'Accessories';
  rating: number;
  isPopular?: boolean;
  isAvailable: boolean;
  illustrationType: 'treats' | 'bed' | 'toy' | 'bowl' | 'shampoo' | 'collar' | 'mouse' | 'catnip';
  colorBg: string; // solid pastel background color for illustrated style
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Staff {
  name: string;
  role: string;
  bio: string;
  description: string;
  funFact: string;
  petCount: string;
  illustrationType: 'groomer' | 'vet' | 'founder';
}

export interface Review {
  id: string;
  petName: string;
  petBreed: string;
  ownerName: string;
  text: string;
  rating: number;
  avatarBg: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  priceRange: string;
  duration: string;
  description: string;
  features: string[];
}
