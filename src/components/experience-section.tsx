import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const timelineEvents = [
  {
    company: "CUNY Tech Prep",
    role: "Web Development Fellow",
    date: "Aug 2024 – May 2025",
    description: "Selected for a competitive fellowship to build production-grade full-stack projects using Agile methodologies."
  },
  {
    company: "Debug Dragons LLC",
    role: "Software Developer",
    date: "Aug 2024 – Present",
    description: "Build and maintain full-stack features, integrate APIs, and optimize performance for client websites."
  },
  {
    company: "Queens College, CUNY",
    role: "B.A. in Computer Science",
    date: "Graduated Sep 2024",
    description: "Specialized in data structures, algorithms, software engineering, and systems programming."
  },
   {
    company: "K.S. Billing & Associates Inc.",
    role: "IT Support Specialist",
    date: "Jan 2021 – Present",
    description: "Supported software/hardware systems, managed corporate websites, and automated backup processes to ensure data integrity."
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="container mx-auto text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-16">Experience & Education</h2>
      <div className="relative max-w-2xl mx-auto">
        {/* The vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

        {/* Timeline items */}
        {timelineEvents.map((event, index) => (
          <div key={index} className="relative mb-12">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full mt-1.5"></div>
            <Card className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{event.role}</CardTitle>
                    <p className="font-semibold">{event.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-nowrap">{event.date}</p>
                </div>
              </CardHeader>
              <CardContent className="text-left">
                <p className="text-muted-foreground">{event.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}