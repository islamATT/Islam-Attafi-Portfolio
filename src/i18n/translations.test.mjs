import { describe, expect, test } from "bun:test";
import { resolveLanguage, languageDirection } from "./translations.ts";

describe("language selection", () => {
  test("defaults to English without a saved choice", () => {
    expect(resolveLanguage(null)).toBe("en");
    expect(resolveLanguage("invalid")).toBe("en");
  });
  test("restores the saved Arabic choice", () => {
    expect(resolveLanguage("ar")).toBe("ar");
    expect(resolveLanguage("en")).toBe("en");
  });
  test("Arabic mirrors direction and English restores it", () => {
    expect(languageDirection("ar")).toBe("rtl");
    expect(languageDirection("en")).toBe("ltr");
  });
});
