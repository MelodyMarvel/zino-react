function HelloWorld() {
  const name = "zino";

  return (
    <>
      <div style={{ color: "red", backgroundColor: "blue" }}>
        <h1>Hello World</h1>
        <h1>{name}</h1>

        <h2>{Math.random() * 10}</h2>
      </div>
    </>
  );
}

export default HelloWorld;
