export function normalizeSearchValue(value: string) {
  return value.trim().toLowerCase();
}

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function includesKeyword(value: string, keyword: string) {
  const normalizedValue = normalizeSearchValue(value);
  const normalizedKeyword = normalizeSearchValue(keyword);

  if (!normalizedValue || !normalizedKeyword) {
    return false;
  }

  if (normalizedKeyword.length <= 3) {
    const pattern = new RegExp(`\\b${escapeRegex(normalizedKeyword)}\\b`);
    return pattern.test(normalizedValue);
  }

  return normalizedValue.includes(normalizedKeyword);
}

export function matchesKeywordSet(values: string[], keywords: readonly string[]) {
  return values.some((value) =>
    keywords.some((keyword) => includesKeyword(value, keyword)),
  );
}

export function buildSearchableText(values: string[]) {
  return values.join(" ").toLowerCase();
}
