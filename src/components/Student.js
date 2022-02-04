import { useState } from "react";
import viewStudent from "../helper/viewStudent";
import useTags from "../hooks/useTags";

export default function Student({ student, query }) {
  // Student details
  const { name } = student;
  const studentName = `${name.first} ${name.last}`.toLowerCase();
  // const average = getAverage(grades);

  // Tags 
  const [input, handleChange, tags, addNewTag] = useTags();

  // View conditions
  const [expand, setExpand] = useState(false);
  const [decode, setDecode] = useState(false);
  const toggleView = viewStudent(query, studentName, tags);

  return (
    <div className={`student ${!toggleView && "hide"}`}>
      <img src={student.picture.large} alt="profile" />
      <div className="text">
        <h2>{studentName}</h2>
        <div className="details">
          <p>Email: {student.email}</p>
          <p>Location: {student.location.city}, {student.location.country}</p>
          <p>Age: {student.dob.age}</p>
          <div className={`data-container ${expand ? "" : "hide"}`}>
            <div className="data">
              <p>Username: {student.login.username}</p>
              <p>Password: {decode ? student.login.password : student.login.sha1.slice(0, 16)}</p>
              <button 
                className={decode ? "green" : "yellow"}
                onClick={() => setDecode(!decode)}
                >
                  {decode ? "Encrypt" : "Decrypt"}
              </button>
            </div>
          </div>
          <div className="tags">
            {tags &&
              tags.map((tag) => {
                return <p>{tag}</p>;
              })}
          </div>
          <input
            className="tag-input"
            name="tag"
            placeholder="Enter tag"
            value={input.tag}
            onChange={handleChange}
            onKeyDown={addNewTag}
          />
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => setExpand(!expand)}>+</button>
      </div>
    </div>
  );
}
