export function pluralType(type: string, count: number): string {
  if (count === 1) return type;
  if (type === "Methodology") return "Methodologies";
  return type + "s";
}
