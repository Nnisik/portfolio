export default function Project(props) {
    return (
        <div className="project">
            <div className="project-promo">
                <img className="progect-img" src="" alt="" />
                <div className="project-links">
                    <a href={props.githubLink} className="project-github-link"></a>
                    <a href={props.websiteLink} className="project-website-link">Website</a>
                </div>
            </div>
            <div className="project-descrip">
                <h3>{ props.name }</h3>
                <p>{ props.descrip }</p>
                <div className="project-stack">
                    <h3>{props.tools}</h3>
                </div>
            </div>
        </div>
    );
}