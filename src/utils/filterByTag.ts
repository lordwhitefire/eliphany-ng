// src/utils/filterByTag.ts
import type { Product } from '@/types';
import { slugify } from './slugify'; // ADD THIS LINE

export function filterByTag(list: Product[], tagSlug: string): Product[] {
  return list.filter(p => {
    const t1 = p.tag_1_text ? slugify(p.tag_1_text) : '';
    const t2 = p.tag_2_text ? slugify(p.tag_2_text) : '';
    const t3 = p.tag_3_text ? slugify(p.tag_3_text) : '';
    return t1 === tagSlug || t2 === tagSlug || t3 === tagSlug;
  });
}