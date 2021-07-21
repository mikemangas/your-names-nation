import React, { useState, useEffect } from "react";

export default function FetchData({ ageprop, inputName }) {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const url = `https://api.agify.io/?name=${inputName}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAge(data.age));
    return age(ageprop);
  });

  useEffect(() => {
    const url = `https://api.nationalize.io/?name=${inputName}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountry(data.country));
  });

  useEffect(() => {
    const url = `https://api.genderize.io/?name=${inputName}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setGender(data.name));
  });
}
