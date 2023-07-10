import Link from "next/link";
import { API_URL, FooterType, HeaderType } from "../api";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const headerRes = await fetch(`${API_URL}/header?locale=${params.locale}`);
  const header: HeaderType = await headerRes.json();

  const footerRes = await fetch(`${API_URL}/footer?populate=links`);
  const footer: FooterType = await footerRes.json();

  return (
    <div className="flex flex-col max-w-[45ch] mx-auto py-12 min-h-screen">
      <header className="mb-12 text-lg flex flex-row justify-between items-center">
        <p>{header.data.attributes.description}</p>

        <div className="flex flex-row gap-6">
          <Link
            href="/tr"
            className={
              params.locale === "tr" ? "text-pink-500" : "text-gray-500"
            }
          >
            Türkçe
          </Link>
          <Link
            href="/en"
            className={
              params.locale === "en" ? "text-pink-500" : "text-gray-500"
            }
          >
            English
          </Link>
        </div>
      </header>
      {children}

      <footer className="mt-auto flex flex-row gap-6 text-lg text-gray-500">
        {footer.data.attributes.links.map((link) => (
          <Link href={link.url}>{link.name}</Link>
        ))}
      </footer>
    </div>
  );
}
