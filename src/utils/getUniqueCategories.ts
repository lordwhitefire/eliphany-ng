// src/utils/getUniqueCategories.ts
import products from '@/data/products.json';

export function getUniqueCategories(): string[] {
  const set = new Set<string>();
  for (const p of products) {
    if (p.category_1_text) set.add(p.category_1_text);
    if (p.category_2_text) set.add(p.category_2_text);
  }
  return Array.from(set).sort();
}