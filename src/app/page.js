"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const [showFunFaq, setShowFunFaq] = useState(false)

  const faqStandard = [
    {
      q: "Do I need prior coding experience?",
      a: "Not at all. Our events and clubs are designed to welcome complete beginners as well as experienced coders.",
    },
    {
      q: "What kinds of activities do you organize?",
      a: "We host hackathons, workshops, project showcases, and social meetups—all aimed at helping you learn, build, and connect.",
    },
    {
      q: "How can I join Hack Club Singapore?",
      a: "Simply fill out our sign-up form via the “Join us today!” button above or email us at singapore@hackclub.com.",
    },
    {
      q: "Is there any cost to participate?",
      a: "No—our events and resources are free, thanks to support from The Hack Foundation and community donations.",
    },
  ]

  const faqFun = [
    {
      q: "Is this school-related?",
      a: "Not really. But your teacher will be proud.",
    },
    {
      q: "Do I need to know how to code?",
      a: "No lah. Can even come if you only know Ctrl+C, Ctrl+V.",
    },
    {
      q: "Got free food?",
      a: "If got budget, got makan. Otherwise, donate lah got PayNow?",
    },
    {
      q: "What do you guys do?",
      a: "Build stuff, laugh at bugs, talk nonsense, make friends.",
    },
  ]

  const faqs = showFunFaq ? faqFun : faqStandard

  return (
    <main className="bg-yellow-50 min-h-screen font-sans relative">
      <Link href="https://hackclub.com/" className="fixed left-0 top-5 z-10">
        <Image
          src="https://assets.hackclub.com/flag-orpheus-left.svg"
          alt="Hack Club"
          width={170}
          height={170}
        />
      </Link>

      <section className="relative bg-gradient-to-br from-yellow-100 via-pink-100 to-yellow-100 text-gray-800 flex items-center justify-center min-h-screen px-6">
        <div className="bg-grid absolute inset-0 opacity-10"></div>
        <div className="relative z-10 text-center max-w-2xl">
          <h1 className="mb-4 font-bold text-5xl md:text-7xl tracking-tight">
            Hack Club Singapore
          </h1>
          <p className="mb-6 text-lg md:text-xl opacity-90 leading-relaxed">
            <b>Code. Chill. Make friends. Eat snacks.</b>
          </p>
          <p className="mb-8 text-lg md:text-xl opacity-90 leading-relaxed">
            Supporting the next generation of builders and hackers on this sunny island.
          </p>
          <Link
            href="#join"
            className="inline-block px-8 py-3 rounded-full bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 font-semibold transition-shadow shadow-sm hover:shadow-md"
          >
            Join us today!
          </Link>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-gray-800 font-bold text-3xl md:text-4xl">
            What we&apos;ve been up to…
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Lion City Hacks */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5 border border-yellow-200">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-2">🦁</span>
                <h3 className="text-gray-800 font-bold text-2xl">Lion City Hacks</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                150 students collaborated for 12 hours at Red Hat Singapore, participating in workshops and building friendships.
              </p>
              <span className="inline-block bg-yellow-200 text-gray-800 text-sm rounded-full px-3 py-1 mb-4 mr-2">
                Dec 2022
              </span>
              <div className="flex space-x-4">
                <Link
                  href="https://hcb.hackclub.com/lion-city-hacks"
                  className="text-yellow-600 font-medium hover:underline"
                >
                  See finances →
                </Link>
              </div>
            </div>

            {/* Hackathon X */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5 border border-yellow-200">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-2">🏫</span>
                <h3 className="text-gray-800 font-bold text-2xl">Hackathon X</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Hosted at GIIS for grades 6–12: a beginner-friendly hackathon open to all experience levels.
              </p>
              <span className="inline-block bg-yellow-200 text-gray-800 text-sm rounded-full px-3 py-1 mb-4 mr-2">
                Jul 2024
              </span>
              <div className="flex space-x-4">
                <Link
                  href="https://hackathonx.net/"
                  className="text-yellow-600 font-medium hover:underline"
                >
                  Find out more →
                </Link>
              </div>
            </div>

            {/* Counterspell SG */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5 border border-yellow-200">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-2">🎮</span>
                <h3 className="text-gray-800 font-bold text-2xl">Counterspell SG</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Hack Club’s global game jam: artists, musicians, and coders team up for a Singapore edition of collaborative game development.
              </p>
              <span className="inline-block bg-yellow-200 text-gray-800 text-sm rounded-full px-3 py-1 mb-4">
                Nov 23, 2024
              </span>
              <div className="flex space-x-4">
                <Link
                  href="https://counterspell.hackclub.com/singapore"
                  className="text-yellow-600 font-medium hover:underline"
                >
                  Event page →
                </Link>
                <Link
                  href="https://hcb.hackclub.com/counterspell-singapore"
                  className="text-yellow-600 font-medium hover:underline"
                >
                  Our funding →
                </Link>
              </div>
            </div>

            {/* Keepsake */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5 border border-yellow-200">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-2">💾</span>
                <h3 className="text-gray-800 font-bold text-2xl">Keepsake</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A social site-building event for Secondary, Junior College, and Polytechnic students. Snacks and custom merchandise included!
              </p>
              <span className="inline-block bg-yellow-200 text-gray-800 text-sm rounded-full px-3 py-1 mb-4 mr-2">
                Jun 10, 2025
              </span>
              <div className="flex space-x-4">
                <Link
                  href="https://keepsake.hackclub.com/"
                  className="text-yellow-600 font-medium hover:underline"
                >
                  Join us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-gray-800 font-bold text-3xl md:text-4xl">
            …and what we support!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🏫", title: "Hack Clubs", desc: "Connect with local school chapters across Singapore. Get money to build an awesome community intra and inter clubs :)" },
              { icon: "🏆", title: "Hackathons", desc: "Venues, refreshments, and prizes—so you can focus on creating." },
              { icon: "🚀", title: "Special Projects", desc: "Supporting innovative teen-led initiatives island-wide." }
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-gray-800 font-bold text-2xl mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-6 py-16 bg-yellow-50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-gray-800 font-bold text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
          <label className="inline-flex items-center mb-8 cursor-pointer">
            <input
              type="checkbox"
              checked={showFunFaq}
              onChange={() => setShowFunFaq(!showFunFaq)}
              className="h-5 w-5 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
            />
            <span className="ml-2 text-gray-800">
              For the students
            </span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <summary className="cursor-pointer px-4 py-3 font-semibold text-gray-800 list-none">
                  {q}
                </summary>
                <div className="px-4 pb-4 text-gray-700 leading-relaxed">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-gray-800 font-bold text-3xl md:text-4xl">
            About us
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            <b>Hack Club Singapore</b> is run by a team of passionate teens who make tech accessible and fun for everyone. We believe in community, creativity, and collaboration.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            We’re fiscally sponsored by The Hack Foundation, a non-profit supporting teen hackers globally. Our funding is 100% transparent and community-driven.
          </p>
          <Link
            href="mailto:singapore@hackclub.com"
            className="inline-block rounded-full px-8 py-3 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 font-bold shadow-sm hover:shadow-md transition"
          >
            Get in touch 💌
          </Link>
        </div>
      </section>

      <footer className="bg-white text-gray-600 px-6 py-12">
        <div className="mx-auto max-w-3xl text-center space-y-2">
          <p>
            © 2025 Hack Club Singapore. Sponsored by{" "}
            <Link href="https://the.hackfoundation.org/" className="text-gray-800 hover:underline">
              The Hack Foundation
            </Link>.
          </p>
          <p>
            Part of the global{" "}
            <Link href="https://hackclub.com/" className="text-gray-800 hover:underline">
              Hack Club
            </Link> network.
          </p>
          <p className="text-sm">EIN: 81-2908499</p>
        </div>
      </footer>
    </main>
  )
}