import React, { useState } from "react";

export default function Nation() {
  const [typedValue, setTypedValue] = useState();
  const [nation, setNation] = useState();

  function handleOnSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formInputValue = form.input.value;
    setTypedValue(formInputValue);

    if (nation) {
      const url = `https://api.nationalize.io/?name=${typedValue}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => setNation(data?.country[0]?.country_id));
    } else {
      setNation("we dont have your name in our database");
    }
  }

  return (
    <div className="Home">
      <h2>Discover the typical origin of your name!</h2>
      <form onSubmit={handleOnSubmit} className="submitForm">
        <input
          name="input"
          id="input"
          placeholder="type your name"
          type="text"
        ></input>
        <button type="submit">Explore</button>
      </form>
      <p className="res">Your names origin is:{nation}</p>
    </div>
  );
}
