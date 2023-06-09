import { useState } from "react";

function MultipleControlledInputs() {
  const [person, setPerson] = useState({ name: "", job: "", position: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = person;
    console.log(newUser);
    setPerson({ name: "", job: "", position: "" });
  };

  return (
    <div className="--bg-primary --mh-100vh">
      <h2 className="--text-light --text-center">Multiple Controlled Inputs</h2>
      <div className="--flex-center">
        <div className="--card --bg-light --width-500px --flex-center">
          <form onSubmit={handleSubmit} className="--form-control">
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={person.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="job">Job:</label>
              <input
                type="text"
                name="job"
                value={person.job}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="position">position:</label>
              <input
                type="text"
                name="position"
                value={person.position}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="--btn-block --btn --btn-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MultipleControlledInputs;
