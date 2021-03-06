import "../../src/App.css";
import React, { useState } from "react";

export default function Age() {
  const [typedValue, setTypedValue] = useState();
  const [age, setAge] = useState();

  function handleOnSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formInputValue = form.input.value;
    setTypedValue(formInputValue);

    if (age) {
      const url = `https://api.agify.io/?name=${typedValue}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => setAge(data?.age));
    } else {
      setAge("sorry, we dont have your name in our database");
    }
  }

  return (
    <div className="Home">
      <h2>Discover how old a typical person of your name is!</h2>
      <form onSubmit={handleOnSubmit} className="submitForm">
        <input
          name="input"
          id="input"
          placeholder="type your name"
          type="text"
        ></input>
        <button type="submit">Explore</button>
      </form>
      <p className="res">Your names typical age is: {age}</p>
    </div>
  );
}
