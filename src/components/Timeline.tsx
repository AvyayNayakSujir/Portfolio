"use client";

import { useEffect, useState, useRef } from "react";

interface Experience {
  company: string;
  role: string;
  timeline: string;
  contributions: string;
  techStack: string[];
  certificate?: string;
}

const experiences: Experience[] = [
  {
    company: "Visionify Inc.",
    role: "Software Developer Intern",
    timeline: "Sept 2025 - Dec 2025",
    contributions:
      "Worked on an analytical application that tracks production across various pallet manufacturing facilities. I fixed various critical UX bugs, API issues and data inconsistencies, improving reliability. Beyond maintenance, I took ownership of several key upgrades: I refactored the legacy authentication system to a more secure SSO solution and automated daily production digests and hardware monitoring using cron jobs. I also refactored the webhook integrations to ensure that the data flows align perfectly with the requirements of the partners. By rethinking the backend logic, I decoupled asynchronous processes to prevent blocking, bringing configuration save times down from ~17s to under 1s. I also developed and refactored various SQL functions to improve data quality and retrieval speeds across the platform.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Git", "Ant Design", "Supabase", "Clerk", "Vercel"],
    certificate: "https://drive.google.com/file/d/18gMRxz1vNTvph1VsP9tT3o4PY_4_t9Cl/view?usp=sharing",
  },
  {
    company: "Shiransh Ventures Pvt. Ltd.",
    role: "Web Developer Intern",
    timeline: "Jun 2025 - Aug 2025",
    contributions:
      "Built a web platform for Ishna Playschool under Shiransh Ventures Pvt. Ltd. to modernize their information delivery and enrollment systems. I took full ownership of the project, engineering a structured interface to communicate the school's mission while automating their manual inquiry and admission workflows, following the agile methodology during the development process. My focus was on transforming a traditional administrative process into a streamlined digital experience that simplified operations for both the staff and parents.",
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "Firebase","Git"],
    certificate: "https://drive.google.com/file/d/1I64tY8fj2xN9fcgW44e98N0BBNFq_Rsy/view?usp=sharing",
  },
];

export default function Timeline() {
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
      id="experience-section"
      className="min-h-screen py-20 px-6 sm:px-12 transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mb-4">
            Work & Experience
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            My journey through technology and innovation
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-emerald-500/50 via-teal-500/50 to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
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
                      ? "opacity-100 translate-x-0"
                      : `opacity-0 ${isLeft ? "-translate-x-12" : "translate-x-12"}`
                  }`}
                >
                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-center justify-center">
                    {isLeft ? (
                      <>
                        {/* Content Left */}
                        <div className="w-5/12 pr-8">
                          <ExperienceCard experience={exp} align="right" />
                        </div>
                        {/* Center Dot */}
                        <TimelineDot />
                        {/* Empty Space Right */}
                        <div className="w-5/12" />
                      </>
                    ) : (
                      <>
                        {/* Empty Space Left */}
                        <div className="w-5/12" />
                        {/* Center Dot */}
                        <TimelineDot />
                        {/* Content Right */}
                        <div className="w-5/12 pl-8">
                          <ExperienceCard experience={exp} align="left" />
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden">
                    <ExperienceCard experience={exp} align="left" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineDot() {
  return (
    <div className="relative z-10">
      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 ring-8 ring-emerald-500/20">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 animate-ping opacity-20" />
      </div>
    </div>
  );
}

interface ExperienceCardProps {
  experience: Experience;
  align: "left" | "right";
}

function ExperienceCard({ experience, align }: ExperienceCardProps) {
  return (
    <div
      className={`group bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-lg p-6 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300`}
    >
      {/* Timeline Period */}
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
        <span className="font-medium">{experience.timeline}</span>
      </div>

      {/* Company Name */}
      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-1">
        {experience.company}
      </h3>

      {/* Role */}
      <p className="text-lg text-zinc-300 font-semibold mb-4">
        {experience.role}
      </p>

      {/* Contributions */}
      <ul className={`space-y-2`}>{experience.contributions}</ul>

      {/* Certificate Button */}
      {experience.certificate && (
        <a
          href={experience.certificate}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          View Certificate
        </a>
      )}

      {/* Tech Stack */}
      <div className="mt-4 pt-4 border-t border-zinc-700/50">
        <div className="flex flex-wrap gap-2">
          {experience.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
