import Image from "next/image";
import { getTranslations } from "@/lib/get-translations";
import { isValidLocale, type Locale } from "@/lib/i18n";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return null;
  const t = getTranslations(locale as Locale);

  return (
    <main>
      <h1 className="flex justify-center text-5xl md:text-6xl pt-10 pb-12 font-bold">
        {t("projects.title")}
      </h1>
      <h2 className="flex justify-center text-xl md:text-3xl text-center pb-20">
        {t("projects.subtitle")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-10 md:gap-8 px-4 mb-20">
        <a
          href="https://github.com/borakaanaras/ondate"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <div className="w-full min-h-[500px] md:min-h-[550px] rounded-xl bg-amber-50 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative w-full h-60 md:h-64">
              <Image
                src="/images/ondate.jpg"
                alt="OnDate"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-4 md:p-6">
              <h2 className="text-black font-bold text-xl md:text-2xl mb-2">On Date</h2>
              <p className="text-black text-sm md:text-base">{t("projects.onDateDesc")}</p>
              <p className="text-red-700 mt-3 text-md md:text-sm">{t("projects.clickHint")}</p>
            </div>
          </div>
        </a>

        <a
          href="https://github.com/borakaanaras/on-earth"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <div className="w-full min-h-[500px] md:min-h-[550px] rounded-xl bg-amber-50 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative w-full h-60 md:h-64">
              <Image
                src="/images/onearthh.jpg"
                alt="On Earth"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-4 md:p-6">
              <h2 className="text-black font-bold text-xl md:text-2xl mb-2">On Earth</h2>
              <p className="text-black text-sm md:text-base">{t("projects.onEarthDesc")}</p>
              <p className="text-red-700 mt-3 text-md md:text-sm">{t("projects.clickHint")}</p>
            </div>
          </div>
        </a>
      </div>
    </main>
  );
}
