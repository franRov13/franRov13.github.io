"use client"

import Link from "next/link";
import {Menu, MenuItems, MenuButton, Transition} from "@headlessui/react"
import { Fragment, useState } from 'react'

interface Project {
  title: string; 
  description: string; 
  tags: string[]; 
  link: string; 
  category: string; 
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null); 

  const projects: Project[] = [
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

  const categories = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  const filteredCategories = activeCategory
    ? { [activeCategory]: categories[activeCategory] }
    : categories;

  return (
    <div className="container mx-auto p-8 max-w-5xl">
      {/** Header Area */}
      <div className="flex justify-between items-center mb-8">
        {/** Title */}
        <h1 className="text-5xl font-bold">Projects</h1>
        {/** Nav group on the right side */}
          <div className="flex items-center gap-4">
            {/** Categories Button */}
            <CategoryFilter 
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            />
            {/** Back to Home */}
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium"
          >
              Home
            </Link>
          </div>
        </div>

      {Object.entries(filteredCategories).map(([category, categoryProjects]) => (
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
    </div>
  );
}

function CategoryFilter({ 
  categories, 
  activeCategory, 
  setActiveCategory 
}: { 
  categories: Record<string, Project[]>;
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium">
          {activeCategory || 'Categories'}
          {activeCategory && (
            <span className="ml-1 text-xs text-indigo-600 dark:text-indigo-400">
              ({categories[activeCategory].length})
            </span>
          )}
        </MenuButton>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right bg-white dark:bg-gray-800 rounded shadow-lg z-10">
          <div className="py-1">
            <button
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 w-full text-left px-4 py-2 text-sm"
              onClick={() => setActiveCategory(null)}
            >
              All Categories
            </button>
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 w-full text-left px-4 py-2 text-sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}