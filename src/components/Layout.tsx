import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingCTA } from "./FloatingCTA";
import { RouteProgress } from "./RouteProgress";

export const Layout = ({ children, transparentNav = false }: { children: ReactNode; transparentNav?: boolean }) => {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen flex flex-col">
      <RouteProgress />
      <Navbar />
      <main key={pathname} className={`flex-1 animate-fade-in ${transparentNav ? "" : "pt-20"}`}>
        {children}
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export const PageHero = ({ title, tagline, eyebrow }: { title: string; tagline?: string; eyebrow?: string }) => (
  <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white">
    <div className="container-px mx-auto max-w-7xl py-16 md:py-24">
      {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">{eyebrow}</p>}
      <h1 className="mt-2 font-display text-4xl md:text-6xl font-black tracking-tight">{title}</h1>
      {tagline && <p className="mt-4 italic text-white/90 max-w-2xl">{tagline}</p>}
      <p className="mt-2 font-semibold text-white">#TemanNyamanBepergianmu</p>
    </div>
  </section>
);
