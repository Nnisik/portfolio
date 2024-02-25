function Project(props, {tools}) {
    console.log(tools)
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

export default function Portfolio() {
    return (
        <div id="portfolio">
            <h1>Portfolio</h1>
            <Project name="Bulleting Board" descrip="k dhf8eb ue 8egh e98  eyhe heg 8ye  uegy2 3fi nsi bv8 8qwsnch yg7w no8dc88wfb wy7x7q284b xjsygd7 bb fy gef y 2 hyasnc q8q y3r o" tools={"PHP    ReactJS"} />
            <Project name="Bulleting Board" descrip="shhmbvuie,i wije9" tools={ "PHP    ReactJS"} />
            <Project name="Bulleting Board" descrip="shhmbvuie,i wije9" tools={"PHP    ReactJS"} />
        </div>
    );
} 