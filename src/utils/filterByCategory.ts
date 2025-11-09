// src/utils/filterByCategory.ts
import type { Product } from '@/types'; // we’ll create this interface next

export function filterByCategory(list: Product[], categorySlug: string): Product[] {
  return list.filter(p => {
    const cat1 = p.category_1_text ? slugify(p.category_1_text) : '';
    const cat2 = p.category_2_text ? slugify(p.category_2_text) : '';
    return cat1 === categorySlug || cat2 === categorySlug;
  });
}