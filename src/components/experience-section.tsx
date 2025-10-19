

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
      <h2 className="text-3xl md:text-4xl font-bold mb-16 font-display">Experience & Education</h2>
      <div className="relative max-w-2xl mx-auto">
        {/* The vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border -z-10"></div> {/* Added -z-10 */}

        {/* Timeline items */}
        {timelineEvents.map((event, index) => (
          <div key={index} className="relative mb-12">
            {/* Dot on the line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full mt-1.5 border-2 border-background"></div> {/* Added border */}
            <Card className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'mr-auto text-right' : 'ml-auto text-left'}`}> {/* Adjusted text alignment */}
              <CardHeader>
                {/* Corrected Flex Container for Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1"> {/* Changed flex behavior */}
                  <div className={`sm:flex-grow ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}> {/* Ensure text aligns correctly */}
                    <CardTitle>{event.role}</CardTitle>
                    <p className="font-semibold">{event.company}</p>
                  </div>
                  {/* Reduced date font size and added shrink-0 */}
                  <p className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap sm:shrink-0">{event.date}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{event.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}