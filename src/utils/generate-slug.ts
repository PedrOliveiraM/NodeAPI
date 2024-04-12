export function generateSlug(text: string): string {
  const slug = text
    .normalize("NFD") // normalize para separar os acentos
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .toLowerCase() // bota em caixa bauxa
    .replace(/[^\w\s]+/g, "") // Remove símbolos
    .replace(/\s+/g, "-"); // Substitui espaços por hífens

  return slug;
}
