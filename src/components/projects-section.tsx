import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "65 St Wine and Liquor Store", // <-- 1. TITLE CHANGED
    description: "Built and maintained full-stack e-commerce features, including shopping cart, checkout, and Stripe integration.",
    image: "/project-65spirits.jpg", 
    stack: ["Next.js", "Stripe", "Tailwind CSS", "Sanity.io"],
    github: "#",
    live: "https://www.65spirits.com/", // <-- 2. LIVE LINK ADDED
  },
  {
    title: "CUNY Connect",
    description: "A centralized student portal with real-time alerts, authentication, and a responsive UI built with the MERN stack.",
    image: "/project-cuny-connect.jpg",
    stack: ["React", "Node.js", "MongoDB", "WebSockets"],
    github: "https://github.com/ravimultani38/hackathon1",
    live: "#",
  },
  {
    title: "Park Out",
    description: "A real-time parking availability app featuring secure, role-based authentication and Google Maps API integration.",
    image: "/project-park-out.jpg",
    stack: ["React", "MongoDB", "Google Maps API", "JWT"],
    github: "https://github.com/ravimultani38/ctp_parking",
    live: "#",
  },
  {
    title: "Royal Turban NY",
    description: "A high-performance, statically generated portfolio website for a professional service, using a headless CMS.",
    image: "/project-royal-turban.jpg",
    stack: ["Next.js", "Sanity.io", "Tailwind CSS"],
    github: "#",
    live: "https://www.royalturbanny.com/", // <-- 3. LIVE LINK CORRECTED
  },
  {
    title: "Twitter Clone",
    description: "A native Android application that mimics the core functionality of Twitter, including posting and viewing tweets.",
    image: "/twitter.gif",
    stack: ["Android", "Java"],
    github: "https://github.com/ravimultani38/SimpleTwitter",
    live: "#",
  },
    {
    title: "Flixster",
    description: "A movie browsing application for Android that displays currently playing movies using the Movie Database API.",
    image: "/flixster.gif",
    stack: ["Android", "Java", "API"],
    github: "https://github.com/ravimultani38/Flixster",
    live: "#",
  },
  {
    title: "Instagram Clone",
    description: "An Android app that replicates key features of Instagram, allowing users to post photos and view a feed.",
    image: "/insta.gif",
    stack: ["Android", "Java"],
    github: "https://github.com/ravimultani38/instragram",
    live: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
            <CardHeader className="flex-grow">
              <div className="aspect-video relative mb-4">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="rounded-md object-cover"
                  unoptimized
                />
              </div>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="text-left pt-2">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
              <div className="flex gap-4">
                <Link href={project.github} target="_blank" className="flex-1">
                  <Button className="w-full" disabled={project.github === "#"}>GitHub</Button>
                </Link>
                <Link href={project.live} target="_blank" className="flex-1">
                    <Button variant="outline" className="w-full" disabled={project.live === "#"}>
                      Live Demo <ExternalLink className="ml-2 h-4 w-4"/>
                    </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}