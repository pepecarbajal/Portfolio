const Skills = ({ skills }) => {
    return (
        <div id="skills" className="p-4">
            <h2 className="text-3xl font-bold mb-6 text-textmain">Habilidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {Object.entries(skills).map(([category, techList]) => (
                        <div key={category} className="skill-category">
                            <h3 className="text-xl font-bold mt-4 mb-2 text-textmain border-b border-subtext pb-1">
                                {category}
                            </h3>
                            <ul className="space-y-1 mt-3">
                                {techList.map((skill) => (
                                    <li key={skill} className="text-subtext">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Skills;