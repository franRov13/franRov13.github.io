import Link from "next/link";
import SocialIcons from "@/components/social-icons";

export default function About() {
  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      
      <div className="mb-8">
        <p className="mb-4">
          Hello! I&apos;m Francisco Rovira, a software developer passionate about creating 
          engaging digital experiences. I specialize in web development and game programming.
        </p>
        <p>
          I&apos;m always looking to expand my skills and take on new challenges in the tech world.
        </p>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Certifications</h2>
        <ul className="list-disc pl-5">
          <li className="mb-2">CodePath Intro to Web Development</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "Game Development"].map((skill) => (
            <span 
              key={skill} 
              className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Connect With Me</h2>
        <SocialIcons />
      </section>
      
      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
      </div>
    </div>
  );
}