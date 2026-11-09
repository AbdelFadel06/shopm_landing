import Header from "./Header";
import Footer from "./Footer";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="container-page max-w-2xl py-14 sm:py-20">
        <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{title}</h1>
        <p className="mt-2 text-xs text-muted">Dernière mise à jour : {updated}</p>
        <div className="legal mt-8">{children}</div>
      </main>
      <Footer />
    </>
  );
}
