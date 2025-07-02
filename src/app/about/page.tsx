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
  // return (
  //   <div className="container mx-auto p-8 max-w-5xl">
  //     {/** Header Area */}
  //     <div className="flex justify-between items-center mb-8">
  //       {/** Title */}
  //       <h1 className="text-5xl font-bold">Projects</h1>
  //       {/** Nav group on the right side */}
  //         <div className="flex items-center gap-4">
  //           {/** Categories Button */}
  //           <CategoryFilter 
  //           categories={categories}
  //           activeCategory={activeCategory}
  //           setActiveCategory={setActiveCategory}
  //           />
  //           {/** Back to Home */}
  //           <Link
  //             href="/"
  //             className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium"
  //         >
  //             Home
  //           </Link>
  //         </div>
  //       </div>

  //     {Object.entries(filteredCategories).map(([category, categoryProjects]) => (
  //       <section key={category} className="mb-12">
  //         <h2 className="text-2xl font-bold mb-6">{category}</h2>
  //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  //           {categoryProjects.map((project) => (
  //             <div key={project.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
  //               <h3 className="text-xl font-bold mb-2">{project.title}</h3>
  //               <p className="text-gray-600 mb-4">{project.description}</p>
  //               <div className="flex flex-wrap gap-2 mb-4">
  //                 {project.tags.map((tag) => (
  //                   <span key={tag} className="bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-100 px-2 py-1 text-xs rounded">
  //                     {tag}
  //                   </span>
  //                 ))}
  //               </div>
  //               <Link 
  //                 href={project.link} 
  //                 target="_blank" 
  //                 rel="noopener noreferrer"
  //                 className="text-blue-600 hover:underline inline-flex items-center"
  //               >
  //                 View Project
  //                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  //                 </svg>
  //               </Link>
  //             </div>
  //           ))}
  //         </div>
  //       </section>
  //     ))}
  //   </div>
  // );
}