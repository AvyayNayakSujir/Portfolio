"use client";

import { useEffect, useState, useRef } from "react";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  timeline?: string;
  githubUrl?: string[];
  liveUrl?: string;
  features?: string[];
}

const projects: Project[] = [
  { 
    title:"Multi-Agent AI Research Assistant",
    description:"Engineered a 4-agent research pipeline (research, reader, writer, critique) orchestrated with LangGraph, coordinating hand-offs through a shared state graph. Built a critique agent that cross-checks generated claims against retrieved sources and triggers targeted revisions through a bounded feedback loop, reducing unsupported claims in the final draft. Engineered a production-grade FastAPI backend with structured logging, custom exception handling, API-key authentication, and rate limiting. Defined a research endpoint to stream live per-agent progress via Server-Sent Events, consumed by a Next.js frontend. Containerized the backend with Docker and automated builds/deployments to Docker Hub and Railway via a GitHub Actions CI/CD pipeline.",
    techStack:["Python", "LangGraph", "Tavily", "Beautiful Soup 4","FastAPI","Docker", "Git","GitHub Actions","Railway", "Next.js","TypeScript","Tailwind CSS", "Vercel"],
    timeline: "July 2026",
    githubUrl:["https://github.com/AvyayNayakSujir/Multi-Agent-AI-Research-Assistant", "https://github.com/AvyayNayakSujir/Multi-Agent-AI-Research-Assistant-FE"],
    liveUrl:"https://researchwithai.vercel.app",
  },
  {
    title: "LLM Observability Platform",
    description: "An observability platform that monitors LLM token consumption across applications using a custom npm wrapper library. Tracks usage metrics across multiple dimensions- per feature, per user, and per provider- enabling granular cost and performance analysis. Implements time-series token usage dashboards, giving teams visibility into usage trends and anomalies over time. Mirrors core infrastructure monitoring principles: instrumentation, metric collection, multi-dimensional aggregation, and reporting.",
    timeline: "April 2026",
    techStack:["Next.js", "TypeScript", "Tailwind CSS", "Clerk (Auth)","Supabase", "SQL","npm"],
    githubUrl:["https://github.com/AvyayNayakSujir/llm-observability"],
  }
];

export default function Projects() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 },
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="projects-section"
      className="min-h-screen py-20 px-6 sm:px-12 transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mb-4">
            My Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isVisible = visibleItems.includes(index);

            return (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                data-index={index}
                className={`relative transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group h-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-lg p-6 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col">
      {/* Timeline Period */}
      {project.timeline && (
        <div className="flex items-center gap-2 text-sm text-emerald-400 mb-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="font-medium">{project.timeline}</span>
        </div>
      )}

      {/* Project Title */}
      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-3">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-zinc-300 mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Features */}
      {project.features && project.features.length > 0 && (
        <div className="mb-4">
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-zinc-400"
              >
                <svg
                  className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack */}
      <div className="mt-auto pt-4 border-t border-zinc-700/50">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {project.githubUrl &&
            project.githubUrl.map((url, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-700/50 hover:bg-zinc-700 text-zinc-300 hover:text-emerald-400 rounded-lg transition-all duration-200 text-sm font-medium"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {project.githubUrl!.length > 1
                  ? `GitHub (${idx + 1})`
                  : "GitHub"}
              </a>
            ))}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-lg transition-all duration-200 text-sm font-medium border border-emerald-500/20 hover:border-emerald-500/40"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
