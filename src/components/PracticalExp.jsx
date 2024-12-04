import { useState } from "react";

export default function PracticalExp() {
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  });
  const [editing, setEditing] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  }

  function handleSubmit() {
    setEditing(false);
  }

  function handleEdit() {
    setEditing(true);
  }

  return editing ? (
    <form className="practical-info-form">
      <h1>Enter your work experience</h1>
      <div className="form-elements-container">
        <p>
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            name="company"
            id="company"
            value={experience.company}
            onChange={handleChange}
            placeholder="Company Name"
          />
        </p>
        <p>
          <label htmlFor="position">Position: </label>
          <input
            type="text"
            name="position"
            id="position"
            value={experience.position}
            onChange={handleChange}
            placeholder="Position Title"
          />
        </p>
        <p>
          <label htmlFor="responsibilities">Responsibilities: </label>
          <textarea
            name="responsibilities"
            id="responsibilities"
            value={experience.responsibilities}
            onChange={handleChange}
            placeholder="Main Responsibilities"
          ></textarea>
        </p>
        <p>
          <label htmlFor="startDate">StartDate: </label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={experience.startDate}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="endDate">EndDate:</label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            value={experience.endDate}
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
      <h1>Practical Experience</h1>
      <h2>Company: {experience.company}</h2>
      <h2>Position: {experience.position}</h2>
      <h2>Responsibilities: {experience.responsibilities}</h2>
      <h2>
        From: {experience.startDate} To: {experience.endDate}
      </h2>
      <div className="edit-btn">
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
}
