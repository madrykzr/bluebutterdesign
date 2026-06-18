/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Page = 'home' | 'collection' | 'lookbook' | 'atelier' | 'contact';

export type Palette = 'rose' | 'moss';

export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  frontImage: string;
  altImage: string;
  detailImages?: string[];
  details: string[];
  slug: string;
}

export interface LookbookItem {
  id: string;
  image: string;
  quote?: string;
  caption: string;
  parallaxOffset: number;
}
