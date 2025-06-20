import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Link href="https://hackclub.com/" className="z-[999] fixed left-0 top-2.5">
        <Image
          src="https://assets.hackclub.com/flag-orpheus-left.svg"
          alt="Hack Club"
          width={170}
          height={170}
        />
      </Link>

      <section className="relative bg-gradient-to-br text-white from-red to-red-dark flex min-h-screen items-center justify-center">
        <div className="bg-grid absolute inset-0 opacity-20"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="mb-6 font-bold text-6xl md:text-8xl tracking-tight">
            Hack Club Singapore
          </h1>
          <p className="mb-8 text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
            Steady support for next generation makers, builders and hackers all around our little red dot!
          </p>
          <p className="opacity-80 text-lg mb-12 max-w-3xl mx-auto">
            We fund Hack Club chapters, hackathons, and shiok projects throughout Singapore.
            No need paiseh about money - we help remove financial barriers so young people can build the future one.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center font-bold text-4xl md:text-5xl text-red">
            Our Singapore Community
          </h2>
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
            <div className="group">
              <div className="duration-300 hover:-translate-y-2 transition-all hover:shadow-xl shadow-lg rounded-3xl bg-white p-8 border-2 border-green">
                <div className="mb-4 flex items-center">
                  <span className="mr-3 text-3xl">🦁</span>
                  <h3 className="text-red font-bold text-2xl">Lion City Hacks</h3>
                </div>
                <p className="mb-4 text-gray-600">
                  Wah, 150 teenagers chionged for 12 hours straight at Red Hat Singapore! Workshops, hacking, and solid friendships formed.
                  Confirm plus chop Singapore's top teen hackathon.
                </p>
                <div className="mb-4 text-sm text-muted">
                  <span className="bg-opacity-20 text-green bg-green text-white rounded-full px-3 py-1">December 2022</span>
                </div>
                <Link href="https://hcb.hackclub.com/lion-city-hacks" className="font-medium text-green hover:text-green-dark">
                  See our transparent finances →
                </Link>
              </div>
            </div>

            <div className="group">
              <div className="duration-300 hover:-translate-y-2 transition-all hover:shadow-xl shadow-lg rounded-3xl bg-white p-8 border-2 border-blue">
                <div className="mb-4 flex items-center">
                  <span className="mr-3 text-3xl">🏫</span>
                  <h3 className="text-red font-bold text-2xl">Hackathon X</h3>
                </div>
                <p className="mb-4 text-gray-600">
                  Hosted at Global Indian International School, open to grades 6-12 students.
                  First time coding? Can! Beginner-friendly hackathon that welcomes everyone.
                </p>
                <div className="mb-4 text-sm text-muted">
                  <span className="bg-opacity-20 text-blue bg-blue text-white rounded-full px-3 py-1">July 2024</span>
                </div>
                <Link href="https://hackathonx.net/" className="font-medium text-blue hover:text-blue-dark">
                  Check it out →
                </Link>
              </div>
            </div>

            <div className="group">
              <div className="duration-300 hover:-translate-y-2 transition-all hover:shadow-xl shadow-lg rounded-3xl bg-white p-8 border-2 border-purple">
                <div className="mb-4 flex items-center">
                  <span className="mr-3 text-3xl">💾</span>
                  <h3 className="text-red font-bold text-2xl">Keepsake</h3>
                </div>
                <p className="mb-4 text-gray-600">
                  Shiok social website crafting event for all secondary, JC, or poly students in Singapore.
                  Everything free one - lunch, snacks, plus custom merch to bring home!
                </p>
                <div className="mb-4 text-sm text-muted">
                  <span className="bg-opacity-20 text-purple bg-purple text-white rounded-full px-3 py-1">June 10, 2025</span>
                </div>
                <Link href="https://keepsake.hackclub.com/" className="font-medium text-purple hover:text-purple-dark">
                  Sounds good? Join us →
                </Link>
              </div>
            </div>

            <div className="group">
              <div className="duration-300 hover:-translate-y-2 transition-all hover:shadow-xl shadow-lg rounded-3xl bg-white p-8 border-2 border-orange">
                <div className="mb-4 flex items-center">
                  <span className="mr-3 text-3xl">🎮</span>
                  <h3 className="text-red font-bold text-2xl">Counterspell Singapore</h3>
                </div>
                <p className="mb-4 text-gray-600">
                  Hack Club's game jam for high schoolers - artists, musicians, and coders team up to build games together.
                  We're part of a global 100+ city event, not bad right?
                </p>
                <div className="mb-4 text-sm text-muted">
                  <span className="bg-opacity-20 text-orange bg-orange text-white rounded-full px-3 py-1">November 23, 2024</span>
                </div>
                <div className="space-x-4 flex">
                  <Link href="https://counterspell.hackclub.com/singapore" className="font-medium text-orange hover:text-orange-dark">
                    Event page →
                  </Link>
                  <Link href="https://hcb.hackclub.com/counterspell-singapore" className="font-medium text-orange hover:text-orange-dark">
                    Our funding →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center font-bold text-4xl md:text-5xl text-red">
            What We Support (Confirm Got Your Back!)
          </h2>
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
            <div className="transition-all duration-300 hover:shadow-xl shadow-lg rounded-3xl bg-white p-8">
              <div className="mb-4 text-4xl">🏫</div>
              <h3 className="mb-4 text-red font-bold text-2xl">High School Clubs</h3>
              <p className="text-gray-600">
                Supporting Hack Club chapters around Singapore with funding for workshops,
                equipment, and events. We help the next generation level up their skills!
              </p>
            </div>
            <div className="transition-all duration-300 hover:shadow-xl shadow-lg rounded-3xl bg-white p-8">
              <div className="mb-4 text-4xl">🏆</div>
              <h3 className="mb-4 text-red font-bold text-2xl">Hackathons</h3>
              <p className="text-gray-600">
                Funding hackathons that bring Singapore's young makers together -
                venues, makan, prizes, and everything in between. We settle everything for you.
              </p>
            </div>
            <div className="transition-all duration-300 hover:shadow-xl shadow-lg rounded-3xl bg-white p-8">
              <div className="mb-4 text-4xl">🚀</div>
              <h3 className="mb-4 text-red font-bold text-2xl">Special Projects</h3>
              <p className="text-gray-600">
                Supporting power initiatives that advance coding education,
                maker culture, and teen leadership across our island home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="text-center mx-auto max-w-4xl">
          <h2 className="mb-12 text-red font-bold text-4xl md:text-5xl">
            About Hack Club Singapore
          </h2>
          <div className="max-w-none prose prose-lg">
            <p className="mb-8 text-gray-700 text-xl">
              Hack Club Singapore operates as fiscally sponsored organization under The Hack Foundation, Hack Club's 501(c)(3) entity.
              We're funded by leftover funds from successful hackathons and community donations in Singapore - everything managed transparently through HCB, no funny business!
            </p>
            <p className="mb-12 text-gray-700 text-xl">
              Our mission damn simple: remove financial barriers for young hackers, makers, and organisers across Singapore.
              Every teenager should have chance to build, learn, and connect with like-minded kakis.
            </p>
          </div>
          <div className="mb-12 text-center gap-8 grid grid-cols-2 md:grid-cols-4">
            <div>
              <div className="text-red font-bold text-3xl">60,000+</div>
              <div className="text-muted">High schoolers in Hack Club globally</div>
            </div>
            <div>
              <div className="text-red font-bold text-3xl">400+</div>
              <div className="text-muted">Clubs worldwide</div>
            </div>
            <div>
              <div className="text-red font-bold text-3xl">1,500+</div>
              <div className="text-muted">Projects fiscally sponsored</div>
            </div>
          </div>
          <Link
            href="mailto:singapore@hackclub.com"
            className="duration-300 hover:-translate-y-1 transition-all hover:shadow-lg font-bold text-lg text-white rounded-full px-8 py-4 bg-gradient-to-r from-cyan to-blue inline-block"
          >
            Jio Us! Get in Touch
          </Link>
        </div>
      </section>

      <footer className="text-white px-6 py-12 bg-gray-900">
        <div className="text-center mx-auto max-w-4xl">
          <p className="mb-4">
            © 2025 Hack Club Singapore. Fiscally sponsored by{' '}
            <Link href="https://the.hackfoundation.org/" className="hover:underline text-cyan">
              The Hack Foundation
            </Link>
            .
          </p>
          <p className="mb-4">
            Part of the global{' '}
            <Link href="https://hackclub.com/" className="hover:underline text-cyan">
              Hack Club
            </Link>
            {' '}network. Managed through{' '}
            <Link href="https://hcb.hackclub.com/" className="hover:underline text-cyan">
              HCB
            </Link>
            .
          </p>
          <p className="text-gray-400 text-sm">EIN: 81-2908499</p>
        </div>
      </footer>
    </main>
  )
}