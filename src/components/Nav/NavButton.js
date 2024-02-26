export default function NavButton(props) {
    return (
        <a className='nav-btn' href={ "#" + props.id } id={"id-" + props.id}>
            <p>{ props.name }</p>
        </a>
    );
}
