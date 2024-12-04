import { useState } from "react";

export default function EducationalExp() {
  const [education, setEducation] = useState({
    name: "",
    programme: "",
    date: "",
  });
  const [editing, setEditing] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  }

  function handleEdit() {
    setEditing(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEditing(false);
  }
  return editing ? (
    <form className="education-info-form">
      <h1>Enter your education level</h1>
      <div className="form-elements-container">
        <p>
          <label htmlFor="school">School: </label>
          <input
            type="text"
            name="school"
            id="school"
            value={education.school}
            onChange={handleChange}
            placeholder="School Name"
          />
        </p>
        <p>
          <label htmlFor="title">Programme title: </label>
          <input
            type="text"
            name="title"
            id="title"
            value={education.title}
            onChange={handleChange}
            placeholder="Title of Study"
          />
        </p>
        <p>
          <label htmlFor="date">Date of completion: </label>
          <input
            type="date"
            name="date"
            id="date"
            value={education.date}
            onChange={handleChange}
          />
        </p>
      </div>

      <div className="submit-btn">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </form>
  ) : (
    <div className="submitted-info">
      <h1>Educational background</h1>
      <h2>School: {education.school}</h2>
      <h2>Title: {education.title}</h2>
      <h2>Date: {education.date}</h2>
      <div className="edit-btn">
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
}
