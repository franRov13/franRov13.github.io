import Image from "next/image";
import Link from "next/link";
import SocialIcons from "@/components/social-icons";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-20 flex flex-col">
      <header className="flex justify-between items-center mb-16">
        <div className="font-bold text-2xl">Francisco Rovira</div>

        <div className="flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </header>
      
      <main className="flex flex-col gap-8 flex-grow">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Welcome
            </h1>
            <p className="text-xl mb-6">
              Software Developer focused on creating engaging digital experiences.
            </p>
            <SocialIcons />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/profile.png"
              alt="Francisco Rovira"
              width={300}
              height={300}
              className="rounded-full shadow-lg"
            />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="Crypto Dashboard" 
              description="Interactive cryptocurrency tracking application"
              link="https://github.com/franRov13/Crypto-tracker"
            />
            <ProjectCard 
              title="Audio Visualizer" 
              description="Creative visualization of audio input"
              link="https://github.com/franRov13/AudioVisualizer"
            />
            <ProjectCard 
              title="NES Blackjack Game" 
              description="Blackjack game built on the 6502 NES architecture"
              link="https://github.com/franRov13/Blackjack"
            />
          </div>
        </section>
      </main>
      
      <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
        <p>© {new Date().getFullYear()} Francisco Rovira. All rights reserved.</p>
      </footer>
    </div>
  );
}

function ProjectCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
}