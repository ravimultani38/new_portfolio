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
        <div className="px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-display">About Me</h2>
            <p className="text-lg text-muted-foreground">
              I&apos;m a passionate full-stack developer with a knack for building
              scalable and user-friendly web applications. I enjoy tackling
              complex problems and turning ideas into beautiful, functional
              products. My goal is always to write clean, efficient, and
              maintainable code.
            </p>
            <div className="flex flex-wrap gap-2 justify-center pt-2">
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