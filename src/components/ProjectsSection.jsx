import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "DEEP-TAO Astronomical Transient Classification",
        description: "A deep learning project replicating the DEEP-TAO study to classify transient astronomical events (e.g., supernovae) using a Convolutional Neural Network on FITS images. Achieved an F1-score of 0.9438, surpassing the original study's 0.5458, with visualizations like confusion matrices and sample images.",
        image: `${import.meta.env.BASE_URL}projects/one.png`,
        tags: ["Python", "TensorFlow", "Deep Learning", "Astronomy", "Data Science"],
        demoUrl: "#",
        githubUrl: "https://github.com/DreadPirateSamuel/Deep-TAO-Replication"
    },
    {
        id: 2,
        title: "eCommerce Simulator",
        description: "A Flask-based web app to simulate an online store with user authentication, CRUD operations, and a dynamic tiered discount system (15%, 10%, 5%) based on purchase history. Features admin/customer interfaces and SQLite database synced with sample data.",
        image: `${import.meta.env.BASE_URL}projects/two.png`,
        tags: ["Backend", "Python", "Flask", "SQLite", "HTML", "Web Development"],
        demoUrl: "#",
        githubUrl: "https://github.com/DreadPirateSamuel/eCommerce-Website-Project"
    },
    {
        id: 3,
        title: "Galaga‑Style Canvas Shooter",
        description: "A fast‑paced, endless 'Galaga'‑inspired shooter built with vanilla ES6 JavaScript and HTML5 Canvas. Features a responsive full‑screen canvas, turbo‑start speeds, 3 lives, and 100 levels of escalating difficulty. Encounter four distinct enemy types (normal, fast, big, zigzag) with unique movement patterns each wave. Controls: ←/→ to move, Space to shoot, R to restart.",
        image: `${import.meta.env.BASE_URL}projects/three.png`,
        tags: ["JavaScript", "HTML5 Canvas", "Game Development", "ES6"],
        demoUrl: "#",
        githubUrl: "https://github.com/DreadPirateSamuel/galaga"
    },
    {
        id: 4,
        title: "Placeholder Project One",
        description: "A placeholder project for future development. Details to be added soon.",
        image: `${import.meta.env.BASE_URL}projects/one.png`,
        tags: ["TBD"],
        demoUrl: "#",
        githubUrl: "https://github.com/DreadPirateSamuel/Deep-TAO-Replication"
    },
    {
        id: 5,
        title: "Placeholder Project Two",
        description: "A placeholder project for future development. Details to be added soon.",
        image: `${import.meta.env.BASE_URL}projects/one.png`,
        tags: ["TBD"],
        demoUrl: "#",
        githubUrl: "https://github.com/DreadPirateSamuel/Deep-TAO-Replication"
    },
    {
        id: 6,
        title: "Placeholder Project Three",
        description: "A placeholder project for future development. Details to be added soon.",
        image: `${import.meta.env.BASE_URL}projects/one.png`,
        tags: ["TBD"],
        demoUrl: "#",
        githubUrl: "https://github.com/DreadPirateSamuel/Deep-TAO-Replication"
    }
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-8xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. More are always on the way!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden rounded-t-lg">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6 rounded-b-lg">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-fg">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        {/*<a href={project.demoUrl} target="__blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20} />
                                        </a>*/}
                                        <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="__blank" href="https://github.com/DreadPirateSamuel">
                    Check Out My GitHub Page! <ArrowRight size={16} />
                </a>
            </div>
        </section>
    );
}
