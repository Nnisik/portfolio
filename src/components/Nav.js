function NavButton(props) {
    return (
        <a className='nav-btn' href={ "#" + props.id } id={"id-" + props.id}>
            <p>{ props.name }</p>
        </a>
    );
}

export default function Nav() {
    return (
        <div id='nav'>
            <NavButton icon="../attachments/navbar/icons8-home-50.png" id="home" name='Home' />
            <NavButton icon="" id="about" name='About' />
            <NavButton icon="../attachments/navbar/icons8-view-quilt-50.png" id="portfolio" name='Projects' />
            <NavButton icon="../attachments/navbar/icons8-contacts-50.png" id="contact" name='Contact' />
        </div>
    );
}