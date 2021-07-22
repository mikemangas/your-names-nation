import React, { useState } from "react";

function useFetch(name) {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState([]);

  if (name) {
    const url = `https://api.agify.io/?name=${name}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAge(data.age));
  }

  if (name) {
    const url = `https://api.nationalize.io/?name=${name}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountry(data.country[0].country_id));
  }

  if (name) {
    const url = `https://api.genderize.io/?name=${name}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setGender(data.gender));
  }

  return { age, gender, country };
}

export default useFetch;
