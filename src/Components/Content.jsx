import About from "./About";
const Content = ({ about }) => {
    return (    
        <>
            <div className="lg:w-[55%] lg:ml-[45%] h-full p-6 lg:pt-32 lg:pr-12 lg:pl-16">
                <About description={about.description} />
            </div>
        </>
    );
}

export default Content;