function Link(props) {
    return (
        <a href={ props.href } className="link">
            <img className='link-icon' src={ props.icon } alt="" />
        </a>
    );
}

function Skill(props) {
    return (
        <img className="skill" src={ props.icon } alt=""></img>
    );
}

function Links() {
    return (
        <div className="links-section">
            <Link name="LinkedIn" href="https://linkedin.com/in/nina-samykova-1522a225b" icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
            <Link name="GitHub" href="https://github.com/Nnisik" icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
        </div>
    );
}

function Skills() {
    return (
        <div className="skills-section">
            <Skill name="HTML" icon="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" />
            <Skill name="CSS" icon="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" />
            <Skill name="SaSS" icon="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" />
            <Skill name="JavaScript" icon="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" />
            <Skill name="React JS" icon="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
            <Skill name="Python" icon="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" />
            <Skill name="Django" icon="https://cdn.worldvectorlogo.com/logos/django.svg" />
            <Skill name="Git" icon="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" />
            <Skill name="sqlite" icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-plain.svg" />
        </div>
    );
}

export default function Home() {
    return (
        <div className="home" id="home">
            <div className="info">
                <h1>Full-Stack Developer</h1>
                <p>Hi! I'm Nina. I'm a junour full-stack web developer with experience in HTML, CSS, JavaScript & Python.</p>
                <Links />
                <Skills />
            </div>
            <div className="photo">
            </div>
        </div>
    );
}