import css from "../SearchBox/SearchBox.module.css";

export default function SearchBox({ value, onSearch }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        className={css.inputField}
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </>
  );
}
