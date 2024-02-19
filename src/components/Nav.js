function NavButton(props) {
    return (
        <a className='nav-button' href={ props.id }>{ props.name }</a>
    );
}

export default function Nav() {
    return (
        <div className='nav'>
            <NavButton id="#home" name='Home' />
            <NavButton id="#about" name='About' />
            <NavButton id="#portfolio" name='Projects' />
            <NavButton id="#contact" name='Contact' />
        </div>
    );
}