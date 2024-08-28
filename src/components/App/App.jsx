import ContactForm from "../ContactForm/ContactForm";
import { useState, useEffect } from "react";
import ContactList from "../ContackList/ContackList";
import Contacts from "../../Contacts.json";
import SearchBox from "../SearchBox/SearchBox";

export default function App() {
  const [users, setUser] = useState(() => {
    const savedUsers = window.localStorage.getItem("users");
    return savedUsers !== null ? JSON.parse(savedUsers) : Contacts;
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    window.localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (newUser) => {
    setUser((prevUser) => {
      return [...prevUser, newUser];
    });
  };

  const deleteUser = (userId) => {
    setUser((prevUser) => {
      return prevUser.filter((user) => user.id !== userId);
    });
  };

  const visibleUsers = users.filter((user) => {
    const userName = user.name ? user.name.toLowerCase() : "";
    const userNumber = user.number ? user.number.toLowerCase() : "";
    return (
      userName.includes(search.toLowerCase()) ||
      userNumber.includes(search.toLowerCase())
    );
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addUser} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={visibleUsers} onDelete={deleteUser} />
    </div>
  );
}
