import React, { useState } from "react";

export default function Form({ result }) {
  const [typedValue, setTypedValue] = useState();
  const [age, setAge] = useState();

  function handleOnSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formInputValue = form.input.value;
    setTypedValue(formInputValue);

    const url = `https://api.agify.io/?name=${typedValue}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAge(data.age));
  }

  console.log(age);

  return (
    <div className="Home">
      <h2>WHO - ARE - YOU</h2>
      <form onSubmit={handleOnSubmit} className="submitForm">
        <input
          name="input"
          id="input"
          placeholder="type your name"
          type="text"
        ></input>
        <button type="submit">Explore</button>
      </form>
      <p className="res">{result}</p>
    </div>
  );
}
