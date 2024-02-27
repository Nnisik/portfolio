export default function Contact(props) {
    return (
        <div className="flex contact">
            <img 
                className="contact-badge" 
                src={ props.icon }
                alt="">
            </img>
            { props.href }
        </div>
    );
}