function Events() {
  const handleClick = () => {
    alert("button Clicked");
  };
  return (
    <div>
      <h1>Handling Events</h1>
      <button className="btn" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default Events;
