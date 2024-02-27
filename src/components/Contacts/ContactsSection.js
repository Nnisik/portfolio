import Contact from "./Contact";
import contactsData from "../../data/data-contacts.json";

export default function ContactsSection() {
  return (
    <div className="contacts-section">
      {contactsData.map((contact) => {
        return (
          <Contact key={contact.id} icon={contact.img} href={contact.text} />
        );
      })}
    </div>
  );
}
