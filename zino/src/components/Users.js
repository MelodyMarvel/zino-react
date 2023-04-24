import React from "react";
import Button from "./Button";
import Card from "./Card";

function Users({ name, job }) {
  return (
    <div>
      <div>
        <h1>Name: {name}</h1>
        <h3>Job: {job}</h3>
        <Button>Learn More</Button>
      </div>
    </div>
  );
}

export default Users;
