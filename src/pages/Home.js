import React, { useState } from "react";
import useFetch from "../components/useFetch";

export default function Home() {
  const [state, setState] = useState();
  const { age, gender, country } = useFetch(state);

  function handleOnSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formInputValue = form.input.value;
    setState(formInputValue);
    form.reset();
  }
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
      <p className="ageResult">Your Age is: {age}</p>
      <p className="nameResult">Your Name is: {state}</p>
      <p className="countryResult">You are from: {country}</p>
      <p className="genderResult">Your Gender is: {gender}</p>
    </div>
  );
}
