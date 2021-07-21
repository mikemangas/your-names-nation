export default function Hobbies() {
  const myHobbies = [
    "Boxing",
    "Climbing",
    "Eating",
    "Spending Time with Baby",
    "Programming",
  ];

  const hobbiesArray = myHobbies.map((hobby, index) => (
    <li key={index}>{hobby}</li>
  ));

  return (
    <section className="bio">
      <h2>My Hobbies</h2>
      <ul>{hobbiesArray}</ul>
    </section>
  );
}
