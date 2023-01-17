import { NextPage } from 'next'
import Header from '../components/header'
import Hero from '../components/hero'
import Language from '../components/language'
import Projects from '../components/projects'
import Skills from '../components/skills'
import Tools from '../components/tools'

export default function Home({ }: NextPage) {
  return (
    <div>
      <main className="dark:bg-gray-800 font-mono bg-white lg:h-screen">
        <Header />
        <Hero />
      </main>
      <div className="text-zinc-600 mx-auto max-w-xs md:max-w-2xl space-y-8 mt-4">
        <Language />
        <Tools />
        <Skills />
        <Projects />
      </div>
      <footer className="h-28 flex items-end">
        <div className="flex justify-center w-full py-6 text-sm text-zinc-600">
          &copy; {new Date().getFullYear()} Samsul Muarrif
        </div>
      </footer>
    </div>
  )
}
