function Project(props) {
    return (
        <div class="project">
            <img class="progect-img" src={ props.img } alt="" />
            <div class="project-descrip">
                <h3>{ props.name }</h3>
                <p>{ props.descrip }</p>
                <div class="project-stack">
                    <h3 class="tool">React JS</h3>
                    <h3 class="tool">PHP</h3>
                </div>
            </div>
        </div>
    );
}

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <Project />
            <Project />
            <Project />
        </div>
    );
} 