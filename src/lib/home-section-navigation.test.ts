import { describe, expect, it } from "vitest";
import {
  isHomeSectionHash,
  parseHomeSectionFromValues,
} from "./home-section-parser";

describe("isHomeSectionHash", () => {
  it("accepts supported section hashes", () => {
    expect(isHomeSectionHash("#about")).toBe(true);
    expect(isHomeSectionHash("#contact")).toBe(true);
  });

  it("rejects unsupported values", () => {
    expect(isHomeSectionHash("#work")).toBe(false);
    expect(isHomeSectionHash("about")).toBe(false);
  });
});

describe("parseHomeSectionFromValues", () => {
  it("prioritizes hash when it is valid", () => {
    expect(parseHomeSectionFromValues("#about", "?section=contact")).toBe("#about");
  });

  it("falls back to query section when hash is missing", () => {
    expect(parseHomeSectionFromValues("", "?section=about")).toBe("#about");
    expect(parseHomeSectionFromValues("", "?section=contact")).toBe("#contact");
  });

  it("is case-insensitive for hash and query", () => {
    expect(parseHomeSectionFromValues("#ABOUT", "")).toBe("#about");
    expect(parseHomeSectionFromValues("", "?section=CONTACT")).toBe("#contact");
  });

  it("returns null for unknown sections", () => {
    expect(parseHomeSectionFromValues("#unknown", "?section=work")).toBeNull();
  });
});
