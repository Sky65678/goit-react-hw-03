import Contact from "../Contack/Contack";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.container}>
      {contacts.map((item) => (
        <li className={css.item} key={item.id}>
          <Contact
            name={item.name}
            number={item.number}
            id={item.id}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
}
