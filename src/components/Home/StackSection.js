import Badge from "./Badge";

export default function StackSection() {
    return (
        <div className="home-skills-section">
            Stack 
            <div className="home-stack-section">
                <Badge 
                    name="HTML" 
                    icon="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" />
                <Badge 
                    name="CSS" 
                    icon="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" />
                <Badge 
                    name="SaSS" 
                    icon="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" />
                <Badge 
                    name="JavaScript" 
                    icon="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" />
                <Badge 
                    name="React JS" 
                    icon="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
                <Badge 
                    name="Python" 
                    icon="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" />
                <Badge 
                    name="Django" 
                    icon="https://cdn.worldvectorlogo.com/logos/django.svg" />
                <Badge 
                    name="Git" 
                    icon="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" />
                <Badge 
                    name="sqlite" 
                    icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-plain.svg" />
            </div>
        </div>
    );
}
