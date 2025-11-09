// src/utils/slugify.ts
export function slugify(text: string): string {
  return text
    .toString()                    // cast
    .normalize('NFD')              // split accented chars
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')  // drop non-alnum except space & hyphen
    .replace(/\s+/g, '-')          // space → dash
    .replace(/-+/g, '-')            // collapse multiple dashes
    .replace(/^-+|-+$/g, '');       // trim leading/trailing dashes
}