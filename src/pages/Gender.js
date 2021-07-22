import React, { useState } from "react";

export default function Gender() {
  const [typedValue, setTypedValue] = useState();
  const [gender, setGender] = useState();

  function handleOnSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formInputValue = form.input.value;
    setTypedValue(formInputValue);

    if (gender) {
      const url = `https://api.genderize.io/?name=${typedValue}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => setGender(data?.gender));
    } else {
      setGender("sorry, we dont have your name in our database");
    }
  }

  return (
    <div className="Home">
      <h2>Discover the typical Gender of your name!</h2>
      <form onSubmit={handleOnSubmit} className="submitForm">
        <input
          name="input"
          id="input"
          placeholder="type your name"
          type="text"
        ></input>
        <button type="submit">Explore</button>
      </form>
      <p className="res">Your names Gender is: {gender}</p>
    </div>
  );
}
