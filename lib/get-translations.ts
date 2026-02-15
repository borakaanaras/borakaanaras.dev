import type { Locale } from "./i18n";
import trMessages from "../messages/tr.json";
import enMessages from "../messages/en.json";

const messages = {
  tr: trMessages as Record<string, Record<string, string>>,
  en: enMessages as Record<string, Record<string, string>>,
};

export function getTranslations(locale: Locale) {
  const source = messages[locale];
  const fallback = locale === "en" ? messages.tr : messages.en;

  return function t(key: string): string {
    const keys = key.split(".");
    let value: unknown = source;
    let fb: unknown = fallback;
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
      fb = (fb as Record<string, unknown>)?.[k];
    }
    return (value as string) ?? (fb as string) ?? key;
  };
}
