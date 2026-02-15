import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "@/lib/get-translations";
import { isValidLocale, type Locale } from "@/lib/i18n";

export default async function AboutMePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return null;
  const t = getTranslations(locale as Locale);

  return (
    <main className="mx-4 md:mx-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-20">
        <div className="lg:col-span-7 space-y-4 text-amber-50 mb-2">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-4xl mb-2 sm:text-3xl">
            {t("about.title")}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            {t("about.role")}
          </p>

          <div className="space-y-4 text-gray-300 text-base md:text-lg">
            <p>
              {t("about.p1Start")}
              <span className="text-sky-400 font-semibold">{t("about.highlight1")}</span>
              {t("about.p1End")}
            </p>
            <p>
              <span className="text-sky-400 font-semibold">{t("about.highlight2")}</span>
              {t("about.p2End")}
            </p>
            <p>
              {t("about.p3Start")}
              <span className="text-sky-400 font-semibold">{t("about.highlight3")}</span>
              {t("about.p3End")}
              <span className="text-sky-400 font-semibold">{t("about.highlight4")}</span>
              {t("about.p3End2")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href={`/${locale}/contact`}
              className="w-full px-6 py-4 rounded-lg bg-sky-700 hover:bg-sky-800 text-center transition-colors"
            >
              {t("about.ctaContact")}
            </Link>
            <Link
              href={`/${locale}/projects`}
              className="w-full flex justify-center items-center px-6 py-4 rounded-lg border-2 border-sky-800 hover:bg-sky-800/20 text-center transition-colors"
            >
              {t("about.ctaProjects")}
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="overflow-hidden shadow-xl w-full max-w-md lg:max-w-none">
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src="/images/bora.jpeg.png"
                alt="Bora Kaan Aras"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <section className="mb-20 mt-32 -mx-6 px-6">
        <div className="text-center mb-12 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4">
            {t("about.skillsTitle")}
          </h2>
        </div>

        <div className="w-full rounded-lg p-4 md:p-6 lg:p-8">
          <div className="flex flex-wrap justify-center items-start gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto">
            {[
              { name: "Javascript", src: "javascript-original.png" },
              { name: "Typescript", src: "typescript.png" },
              { name: "Next.js", src: "nexttjs.png" },
              { name: "React", src: "react.png" },
              { name: "Node.js", src: "nodejs.png" },
              { name: "Tailwind css", src: "tailwindcss-plain.png" },
              { name: "Figma", src: "figma-original.png" },
              { name: "Git", src: "git-plain.png" },
              { name: "Firebase", src: "firebase.png" },
              { name: "Bootstrap", src: "bootstrap.png" },
              { name: "Photoshop", src: "Photoshop.png" },
              { name: "Illustrator", src: "illustrator.png" },
            ].map(({ name, src }) => (
              <div
                key={name}
                className="flex flex-col items-center justify-center group w-[calc(50%-1rem)] sm:w-auto"
              >
                <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-3 flex items-center justify-center rounded-lg bg-black p-4 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={`/images/Logos/${src}`}
                    alt={name}
                    fill
                    className="object-contain rounded-lg"
                    sizes="7rem"
                  />
                </div>
                <p className="text-white text-sm md:text-base text-center">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
