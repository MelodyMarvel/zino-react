import { useRef, useEffect } from "react";

function UnControlledInputs() {
  const nameInputRef = useRef(null);
  const jobInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredJob = jobInputRef.current.value;

    console.log(enteredName, enteredJob);
  };
  //console.log(nameInputRef);
  useEffect(() => {
    nameInputRef.current.focus();
  }, []);
  return (
    <div className="--bg-primary --mh-100vh">
      <h2 className="--text-light --text-center">UnControlled Inputs</h2>
      <div className="--flex-center">
        <div className="--card --bg-light --width-500px --flex-center">
          <form onSubmit={handleSubmit} className="--form-control">
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" ref={nameInputRef} />
            </div>
            <div>
              <label htmlFor="job">Job:</label>
              <input type="text" name="job" ref={jobInputRef} />
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

export default UnControlledInputs;
