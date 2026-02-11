"use client";

import { useEffect, useState, useRef } from "react";

interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  timeline: string;
  gpa?: string;
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

const education: EducationItem[] = [
  {
    institution: "NMAM Institute of Technology",
    degree: "Bachelor of Technology",
    field: "Information Science & Engineering",
    timeline: "2026",
    gpa: "8.8/10",
  },
];

const certifications: Certification[] = [
  {
    title: "Full Stack Web Development",
    issuer: "100xdevs",
    date: "2024",
    credentialUrl:
      "https://drive.google.com/file/d/1652MXEGVHoCNi_c3bXGkn6zM2hRmdo9G/view?usp=sharing",
  },
];

export default function Education() {
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
      id="education-section"
      className="min-h-screen py-20 px-6 sm:px-12 transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            My academic journey and professional qualifications
          </p>
        </div>

        {/* Grid Layout for Education and Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">
              Education
            </h3>
            {education.map((edu, index) => {
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
                  <EducationCard education={edu} />
                </div>
              );
            })}
          </div>

          {/* Certifications Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => {
                const certIndex = education.length + index;
                const isVisible = visibleItems.includes(certIndex);

                return (
                  <div
                    key={index}
                    ref={(el) => {
                      itemRefs.current[certIndex] = el;
                    }}
                    data-index={certIndex}
                    className={`relative transition-all duration-1000 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                    }`}
                  >
                    <CertificationCard certification={cert} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface EducationCardProps {
  education: EducationItem;
}

function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="group bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-lg p-8 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div className="flex-1">
          {/* Institution Name */}
          <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">
            {education.institution}
          </h3>

          {/* Degree and Field */}
          <p className="text-xl text-zinc-200 font-semibold mb-1">
            {education.degree}
          </p>
          <p className="text-lg text-zinc-300">{education.field}</p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2">
          {/* Timeline */}
          <div className="flex items-center gap-2 text-sm text-emerald-400">
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
            <span className="font-medium">{education.timeline}</span>
          </div>

          {/* GPA */}
          {education.gpa && (
            <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
              <p className="text-sm text-emerald-400 font-semibold">
                GPA: {education.gpa}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface CertificationCardProps {
  certification: Certification;
}

function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <div className="group bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-lg p-6 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
      {/* Certification Title */}
      <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">
        {certification.title}
      </h4>

      {/* Issuer */}
      <p className="text-zinc-300 font-medium mb-2">{certification.issuer}</p>

      {/* Date and Credential Link */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-emerald-400">
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
          <span className="font-medium">{certification.date}</span>
        </div>

        {certification.credentialUrl && (
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>View Certificate</span>
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
          </a>
        )}
      </div>
    </div>
  );
}
