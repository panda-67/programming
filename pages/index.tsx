import { NextPage } from "next";
import AboutMe from "../components/about";
import MyHead from "../components/head";
import Header from "../components/header";
import Hero from "../components/hero";
import Language from "../components/language";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Tools from "../components/tools";

export default function Home({}: NextPage) {
  return (
    <div className="dark:bg-zinc-900">
      <MyHead title="Programming | Samsul Muarrif" />
      <section className="dark:bg-stone-800 dark:text-current font-mono bg-stone-200 lg:h-screen">
        <Header />
        <Hero />
      </section>
      <main className="text-zinc-600 dark:text-slate-200 mx-auto max-w-xs md:max-w-2xl py-4 space-y-8 mt-4">
        <AboutMe />
        <Language />
        <Tools />
        <Skills />
        <Projects />
      </main>
      <footer className="h-28 flex items-end">
        <div className="flex justify-center w-full py-6 text-sm text-zinc-600 dark:text-slate-300">
          &copy; {new Date().getFullYear()} Samsul Muarrif
        </div>
      </footer>
    </div>
  );
}
