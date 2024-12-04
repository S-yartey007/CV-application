import { useState } from "react";
import "../styles/generalinfo.css";

export default function GeneralInfo() {
  //Setting up general info state
  const [info, setInfo] = useState({ name: "", email: "", telephone: "" });
  const [editing, setEditing] = useState(true);

  //event handler for info change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  //event handler for submittion
  function handleSubmit(e) {
    e.preventDefault();
    setEditing(false);
  }

  //event handler for edit
  function handleEdit() {
    setEditing(true);
  }

  return editing ? (
    <form className="general-info-form">
      <h1>Enter your general information</h1>
      <div className="form-elements-container">
        <p>
          <label htmlFor="name">Name:</label>

          <input
            type="text"
            name="name"
            id="name"
            value={info.name}
            onChange={handleChange}
            placeholder="name"
          />
        </p>
        <p>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={info.email}
            onChange={handleChange}
            placeholder="email"
          />
        </p>
        <p>
          <label htmlFor="telephone">Phone number: </label>
          <input
            type="tel"
            name="telephone"
            id="telephone"
            value={info.telephone}
            onChange={handleChange}
            placeholder="phone number"
          />
        </p>
      </div>

      <div className="submit-btn">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </form>
  ) : (
    <div className="submitted-info">
      <h1>General Information</h1>
      <h2>Name: {info.name}</h2>
      <h2>Email: {info.email}</h2>
      <h2>Telephone: {info.telephone}</h2>
      <div className="edit-btn">
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
}
