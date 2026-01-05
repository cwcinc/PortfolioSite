import Badge from 'react-bootstrap/Badge';

function Skills() {
    const languages = ['Java', 'TypeScript', 'Python', 'C++', 'JavaScript', 'HTML/CSS', 'SQL', 'C', 'Kotlin'];
    const backend = ['Node.js', 'PostgreSQL', 'Websockets', 'REST APIs', 'Microservices'];
    const versionControl = ['Git', 'GitHub', 'CI/CD'];
    return <>
        <h2 className="header-bar">Skills</h2>
        <div className="skills-body">
            <h3>Languages</h3>
            <div className="skill-badge-container">
                {languages.map((lang) => (
                    <Badge bg="secondary" key={lang} style={{ margin: '5px', fontSize: '1.2em' }}>
                        {lang}
                    </Badge>
                ))}
            </div>

            <h3>Backend & Distributed Systems</h3>
            <div className="skill-badge-container">
                {backend.map((tech) => (
                    <Badge bg="secondary" key={tech} style={{ margin: '5px', fontSize: '1.2em' }}>
                        {tech}
                    </Badge>
                ))}
            </div>
            
            <h3>Version Control & Tools</h3>
            <div className="skill-badge-container">
                {versionControl.map((tool) => (
                    <Badge bg="secondary" key={tool} style={{ margin: '5px', fontSize: '1.2em' }}>
                        {tool}
                    </Badge>
                ))}
            </div>
        </div>
    </>
}


export default Skills;