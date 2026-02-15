import { getTranslations } from "@/lib/get-translations";
import { isValidLocale, type Locale } from "@/lib/i18n";
import ContactForm from "./contact-form";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return null;
  const t = getTranslations(locale as Locale);

  const messages = {
    title: t("contact.title"),
    successTitle: t("contact.successTitle"),
    successSub: t("contact.successSub"),
    errorMsg: t("contact.errorMsg"),
    labelName: t("contact.labelName"),
    labelEmail: t("contact.labelEmail"),
    labelSubject: t("contact.labelSubject"),
    labelMessage: t("contact.labelMessage"),
    placeholderName: t("contact.placeholderName"),
    placeholderEmail: t("contact.placeholderEmail"),
    placeholderSubject: t("contact.placeholderSubject"),
    placeholderMessage: t("contact.placeholderMessage"),
    submit: t("contact.submit"),
    sending: t("contact.sending"),
  };

  return (
    <main>
      <ContactForm messages={messages} />
    </main>
  );
}
