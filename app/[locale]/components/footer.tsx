import { getScopedI18n } from "@/locales/server";

export default async function Footer() {
    const t = await getScopedI18n("footer");
    return (
        <footer className="snap-end border-t border-white/20 py-6 text-center">
            <p className="text-xs md:text-sm text-white/30">{t("copyright")}</p>
        </footer>
    );
}