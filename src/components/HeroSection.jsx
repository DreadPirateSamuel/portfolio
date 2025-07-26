import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return ( 
        <section 
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10 space-y-6">
                {/* Profile Photo */}
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto rounded-xl overflow-hidden border-4 border-primary shadow-lg animate-fade-in">
                    <img 
                        src={`${import.meta.env.BASE_URL}images/portfoliopic.png`}
                        alt="Samuel Yoder" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-1"> 
                        {" "} 
                        Samuel
                    </span>
                    <span className="text-primary opacity-0 animate-fade-in-1"> 
                        {" "} 
                        Yoder!
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-3">
                    I'm a passionate Computer Science undergraduate at Florida State University, driven by curiosity and a desire to build meaningful, real-world software. 
                </p>

                {/* Button */}
                <div className="opacity-0 animate-fade-in-3">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>

            {/* Scroll Down Arrow */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};
