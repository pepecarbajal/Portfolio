import Skills from "./Skills";
import Projects from "./Projects";
const Content = ({ about, projects }) => {
    return (    
        <>
            <div className="lg:w-[55%] lg:ml-[45%] h-full p-6 lg:pt-16 lg:pr-[15%] lg:pl-16">
                <Projects projects={projects} />
                <Skills />
            </div>
        </>
    );
}

export default Content;