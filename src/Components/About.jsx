const About = ({ description }) => {
    return (
        <>
            <h2 className="text-3xl font-bold mb-4 text-textmain">About Me</h2>
            <p className="text-subtext lg:mr-[20%]">{description}</p>
            <hr className="my-8 border-t border-subtext lg:mr-[20%]" />
        </>
    );
}

export default About;