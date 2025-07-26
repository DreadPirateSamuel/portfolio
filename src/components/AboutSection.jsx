import { Code, Bot, KeyRound } from 'lucide-react';

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Creative Technologist & Lifelong Learner
                        </h3>

                        <p className="text-muted-foreground"> 
                            Core GPA: 3.9<br />
                            Graduation Date: Spring 2026<br />
                            Student Member: Association for Computing Machinery<br /><br />
                            With a foundation in object-oriented programming, AI, and secure system design, 
                            I thrive on exploring how innovative technology can solve practical problems. 
                            I value clean code, continuous improvement, and building tools that empower people. 
                            Whether it's contributing to scalable systems or experimenting with user-focused applications, 
                            I'm always seeking opportunities to grow, collaborate, and make an impact through thoughtful engineering.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a 
                                href="/resume.docx" 
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                                download
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                                    <p className="text-muted-foreground">
                                        Build robust web and desktop apps using modern frameworks and databases.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Bot className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Artificial Intelligence</h4>
                                    <p className="text-muted-foreground">
                                        Apply machine learning and neural networks to real-world challenges.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <KeyRound className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Secure System Design</h4>
                                    <p className="text-muted-foreground">
                                        Develop applications with a focus on security, data integrity, and scalability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

