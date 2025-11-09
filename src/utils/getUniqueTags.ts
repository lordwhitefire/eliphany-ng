// src/utils/getUniqueTags.ts
import products from '@/data/products.json';

export function getUniqueTags(): string[] {
  const set = new Set<string>();
  for (const p of products) {
    if (p.tag_1_text) set.add(p.tag_1_text);
    if (p.tag_2_text) set.add(p.tag_2_text);
    if (p.tag_3_text) set.add(p.tag_3_text);
  }
  return Array.from(set).sort();
}