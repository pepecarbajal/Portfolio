import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";
const Content = ({ about, projects, skills, name }) => {
    return (    
        <>
            <div className="lg:w-[55%] lg:ml-[45%] h-full p-6 lg:pt-16 lg:pr-[15%] lg:pl-16">
                <About description={about.description} />
                <Projects projects={projects} />
                <Skills skills={skills} />
                <Footer name={name} />
            </div>
        </>
    );
}

export default Content;