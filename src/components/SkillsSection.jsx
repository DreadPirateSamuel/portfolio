import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const skills = [
    { name: "HTML/CSS", level: 4, category: "frontend" },
    { name: "JavaScript", level: 4, category: "frontend" },
    { name: "Node.js", level: 4, category: "backend" },
    { name: "Python", level: 5, category: "backend" },
    { name: "C++", level: 5, category: "backend" },
    { name: "C#", level: 5, category: "backend" },
    { name: "Java", level: 4, category: "backend" },
    { name: "SQL", level: 4, category: "database" },
    { name: "MIPS Assembly", level: 4, category: "low-level" },
    { name: "PyTorch", level: 4, category: "machine-learning" },
    { name: "GitHub", level: 4, category: "tools" },
    { name: "VS Code", level: 5, category: "tools" },
    { name: "Linux Environment", level: 4, category: "tools" },
    { name: "React", level: 3, category: "tools" },
    { name: "Agile Methodologies", level: 4, category: "methodologies" },
    { name: "Photoshop", level: 4, category: "design" },
    { name: "InDesign", level: 3, category: "design" },
];

const categories = ["all", "frontend", "backend", "database", "low-level", "machine-learning", "tools", "methodologies", "design"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [isDarkMode, setIsDarkMode] = useState(false);

    const filteredSkills = skills.filter((skill) =>
        activeCategory === "all" || skill.category === activeCategory
    );

    // Detect theme based on <html class="dark">
    useEffect(() => {
        const checkTheme = () =>
            document.documentElement.classList.contains("dark");

        setIsDarkMode(checkTheme());

        const observer = new MutationObserver(() => {
            setIsDarkMode(checkTheme());
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <p className="text-center text-sm text-muted-foreground mb-12">
                    Rated on a 1–5 scale based on familiarity.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize border",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-foreground"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className={cn(
                                        "h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]",
                                        isDarkMode ? "bg-primary" : "bg-blue-700"
                                    )}
                                    style={{ width: `${skill.level * 20}%` }}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}/5</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
