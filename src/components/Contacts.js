function Contact(props) {
    return (
        <div className="contact">
            <img className="contact-badge" src={ props.icon }></img>
            { props.href }
        </div>
    );
}

function ContactsSection() {
    return (
        <div className="footer-contacts-section">
            <Contact icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nO2YzUpbQRTHf/UjChYqIkIRQYRs3JUq0igIpa/QR4ivIH2DLktw415RuuhHuuxK6EIQBBeClBZKYyiCQhRLbRtzZeBcGC4T70xM5iY4Pzib3Dln/mfuyWHOhUAgEAgEmrMEbANVoA5EnqwOHANbwCItMACseRQcpVhJNFnTTeIjLQnrstEdPwBPgRz+yAFzQFnT0QAKNs7bmpMKkDXvND2bNg5VzUGdfNbMaXoqNg56t/FZNs3IJbpTKnr958mefEJTKvrif8A68Bj/jAOvgau7JBDbpQR71HndjACrwHkTLanc1otPJfhQB4QPAivArxQNTgm8APYNQX7IZn1tEP4AeAl8NexzKM9aTgARqYJ8N2ywBzy/g/gC8MUQ96ccUH8TTU4J6O1MBT0xbPgZeOIgfBZ4a4hzJiU6bKnJKYGYh7LJRWJtQ0TN3BJ7Srpa8mb7W5rEaIuaWlo8KWL+J3z+yu8T2toxEfgnsfZakp5ukyb3xVIOHw3lUANeidUMz5WP8m27JtcEYhaAnZQWqGwXWHaMHflIIEa13gOD8CPpZqpt0s0JINNTEfgmVnSdqLJOoN1EIYGMicIb6KU3UO/1kbLaZUP9vOtQv6U5fCJ73mt6NmwcFhM1V5ZT8P1ha14OUL/tPrMNULK40/i2Ny4nMNBFSTREfDydOY98m/Ln8f15vSJ7W5dNIBAIBO4fN6QO4/kYi3eUAAAAAElFTkSuQmCC" name="e-mail" href="samnina805@gmail.com" />
            <Contact icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" name="github" href="https://github.com/Nnisik" />
            <Contact icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" name="linkedin" href="https://linkedin.com/in/nina-samykova-1522a225b" />
        </div>
    );
}

export default function Contacts() {
    return (
        <div id="contact">
            <h1>Feel free to contact me:</h1>
            <ContactsSection />
        </div>
    );
}