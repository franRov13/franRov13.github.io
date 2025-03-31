import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Activism",
      description: "A web platform focused on connecting activists with causes.",
      tags: ["React", "JavaScript", "CSS"],
      link: "https://github.com/franRov13/ActivismWebPage.git",
      category: "Websites",
    },
    {
      title: "Crypto Dashboard",
      description: "Real-time cryptocurrency tracking dashboard with market insights.",
      tags: ["React", "API Integration", "Data Visualization"],
      link: "https://github.com/franRov13/Crypto-tracker.git",
      category: "Websites",
    },
    {
      title: "AudioVisualizer",
      description: "Interactive audio visualization application.",
      tags: ["JavaScript", "Canvas API", "Web Audio API"],
      link: "https://github.com/franRov13/AudioVisualizer",
      category: "Games",
    },
    {
      title: "Diner Dash",
      description: "A time management simulation game based on the popular Diner Dash.",
      tags: ["Game Development", "JavaScript"],
      link: "https://github.com/franRov13/Diner_Dash-",
      category: "Games",
    },
    {
      title: "Slithery Snake",
      description: "Classic snake game with modern twists.",
      tags: ["Game Development", "JavaScript"],
      link: "https://github.com/franRov13/SlitherySnake",
      category: "Games",
    },
    {
      title: "Blackjack",
      description: "NES-style implementation of the classic card game Blackjack.",
      tags: ["NES", "Assembly", "Game Development"],
      link: "https://github.com/franRov13/Blackjack",
      category: "NES Games",
    },
  ];

  // Group projects by category
  const categories = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  return (
    <div className="container mx-auto p-8 max-w-5xl">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>

      {Object.entries(categories).map(([category, categoryProjects]) => (
        <section key={category} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categoryProjects.map((project) => (
              <div key={project.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-100 px-2 py-1 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center"
                >
                  View Project
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}
      
      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
      </div>
    </div>
  );
}