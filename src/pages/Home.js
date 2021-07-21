import React, { useState, useEffect } from "react";

export default function Home() {
  const [state, setState] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const url = `https://api.agify.io/?name=${state}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAge(data.age));
  });

  useEffect(() => {
    const url = `https://api.nationalize.io/?name=${state}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountry(data.country[0].country_id));
  });

  useEffect(() => {
    const url = `https://api.genderize.io/?name=${state}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setGender(data.gender));
  });

  function handleOnSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formInputValue = form.input.value;
    setState(formInputValue);
  }

  return (
    <>
      <h2>Where is your name from?</h2>
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
      <p className="countryResult">Your Gender is: {gender}</p>
    </>
  );
}
