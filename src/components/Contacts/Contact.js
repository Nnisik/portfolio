export default function Contact(props) {
    return (
        <div className="contact">
            <img 
                className="contact-badge" 
                src={ props.icon }
                alt="">
            </img>
            { props.href }
        </div>
    );
}