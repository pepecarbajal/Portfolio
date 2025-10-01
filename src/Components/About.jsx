const About = ({ description }) => {
    return (
        <>
            <div id="about" className="p-4">
                <h2 className="text-3xl font-bold mb-4 text-textmain">Sobre mí</h2>
                <p className="text-subtext">{description}</p>
                <hr className="my-8 border-t border-subtext" />
            </div>
        </>
    );
}

export default About;