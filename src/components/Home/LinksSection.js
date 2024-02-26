import Badge from './Badge';

function Link(props) {
    return (
        <a href={ props.href } className="home-link">
            <Badge 
                name={props.name}
                icon={props.icon} 
            />
        </a>
    );
}

export default function LinksSection() {
    return (
        <div className="home-links-section">
            <Link 
                name="LinkedIn" 
                href="https://linkedin.com/in/nina-samykova-1522a225b" 
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" 
            />
            <Link 
                name="GitHub" 
                href="https://github.com/Nnisik" 
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" 
            />
        </div>
    );
}