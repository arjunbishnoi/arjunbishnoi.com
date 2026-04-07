export type HomeSectionHash = "#about" | "#contact";

function normalizeHash(hash: string) {
  return hash.trim().toLowerCase();
}

export function isHomeSectionHash(hash: string): hash is HomeSectionHash {
  const normalized = normalizeHash(hash);
  return normalized === "#about" || normalized === "#contact";
}

export function parseHomeSectionFromValues(hash: string, search: string): HomeSectionHash | null {
  const normalizedHash = normalizeHash(hash);
  if (isHomeSectionHash(normalizedHash)) {
    return normalizedHash;
  }

  const section = new URLSearchParams(search)
    .get("section")
    ?.toLowerCase();

  if (section === "about") {
    return "#about";
  }

  if (section === "contact") {
    return "#contact";
  }

  return null;
}
