import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import css from "../Contack/Contack.module.css";

export default function Contact({ name, number, id, onDelete }) {
  return (
    <ul className={css.contactItem}>
      <div className={css.details}>
        <li className={css.item}>
          <IoPersonSharp size="16" />
          <p>{name}</p>
        </li>
        <li className={css.item}>
          <FaPhoneAlt size="16" />
          <p>{number}</p>
        </li>
      </div>
      <button
        type="button"
        className={css.deleateButton}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </ul>
  );
}
