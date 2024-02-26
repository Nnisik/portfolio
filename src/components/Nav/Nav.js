import NavButton from "./NavButton";

export default function Nav() {
    return (
        <div id='nav'>
            <div className="nav-me">Nina Samykova</div>
            <div className="nav-links">
                <NavButton icon="../attachments/navbar/icons8-home-50.png" id="home" name='Home' />
                <NavButton icon="" id="about" name='About' />
                <NavButton icon="../attachments/navbar/icons8-view-quilt-50.png" id="portfolio" name='Projects' />
                <NavButton icon="../attachments/navbar/icons8-contacts-50.png" id="contact" name='Contact' />
            </div>
        </div>
    );
}