/**
 * Generates a URL-friendly slug from a given string.
 * @param {string} text - The input string to be converted to a slug.
 * @return {string} The generated slug.
 */
export function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .normalize('NFD') // Normalize to decompose combined graphemes into base characters and diacritics
      .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
      .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric characters (except spaces and hyphens)
      .trim() // Trim leading and trailing whitespace
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-'); // Replace multiple hyphens with a single hyphen
  }
  