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
                            Cybersecurity Graduate Student & Software Technologist
                        </h3>

                        <p className="text-muted-foreground"> 
                            M.S. Cybersecurity, NYU Tandon School of Engineering — Expected May 2028<br />
                            B.A. Computer Science, Florida State University — May 2026, Magna Cum Laude<br />
                            NYU Merit Scholarship Recipient<br /><br />
                            My interests span cybersecurity, software engineering, artificial intelligence, and systems development. 
                            I have experience building applications with Python, Java, C#, SQL, Flask, and .NET MAUI, developing machine learning models with PyTorch and Transformers, and working with Linux, APIs, databases, and secure application concepts. 
                            Beyond coursework and personal projects, I have hands-on experience with API integrations, IT troubleshooting, technical documentation, data analysis, testing, and improving the reliability of real-world technology workflows.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a 
                                href={`${import.meta.env.BASE_URL}resume.docx`} 
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                                download
                            >
                                Download Resume
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
                                    <h4 className="font-semibold text-lg">Software & Application Development</h4>
                                    <p className="text-muted-foreground">
                                        Build web, desktop, and cross-platform applications using Python, Flask, C#, .NET MAUI, SQL, APIs, and modern development tools.
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
                                    <h4 className="font-semibold text-lg">Artificial Intelligence & Machine Learning</h4>
                                    <p className="text-muted-foreground">
                                        Develop and evaluate neural networks, CNNs, NLP models, and reinforcement learning systems using PyTorch, Transformers, and Python.
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
                                    <h4 className="font-semibold text-lg">Cybersecurity & Systems</h4>
                                    <p className="text-muted-foreground">
                                        Work with Linux, secure authentication, encryption, access management, system troubleshooting, data integrity, and security-focused application design.
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
