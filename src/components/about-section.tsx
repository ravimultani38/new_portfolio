import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const skills = [
  "TypeScript",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Framer Motion",
];

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/profile-photo.jpg" // Make sure this path matches your photo in the /public folder
              alt="Harpreet Singh's Photo"
              width={250}
              height={250}
              className="rounded-full aspect-square object-cover"
            />
          </div>
          <div className="space-y-4 md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <p className="text-lg text-muted-foreground">
              I&apos;m a passionate full-stack developer with a knack for building
              scalable and user-friendly web applications. I enjoy tackling
              complex problems and turning ideas into beautiful, functional
              products. My goal is always to write clean, efficient, and
              maintainable code.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}