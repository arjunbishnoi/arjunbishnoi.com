export const VIEWALL_BLOB_COLORS = [
  "bg-cyan-500/62",
  "bg-pink-500/58",
  "bg-violet-500/56",
  "bg-lime-500/44",
  "bg-orange-500/46",
  "bg-rose-400/65",
];

export function shuffleColors(colors: string[]) {
  const next = [...colors];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

export function rotateColors(colors: string[], offset: number) {
  const next = [...colors];
  const shift = ((offset % next.length) + next.length) % next.length;
  return next.map((_, i) => next[(i + shift) % next.length]);
}
