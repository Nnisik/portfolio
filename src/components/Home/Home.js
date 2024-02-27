import LinksSection from "./LinksSection";
import StackSection from "./StackSection";

export default function Home() {
    return (
        <div id="home" className="flex">
            <div className="home-info">
                <h1>Hi! I'm Nina.</h1>
                <p>I'm a junour full-stack web developer with experience in HTML, CSS, JavaScript & Python.</p>
                <LinksSection />
                <StackSection />
            </div>
            <div id="home-photo">
            </div>
        </div>
    );
}