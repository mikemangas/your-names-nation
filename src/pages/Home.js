export default function Home() {
  return (
    <>
      <h2>Where is your name from?</h2>
      <form className="submitForm">
        <input placeholder="type your name" type="text"></input>
        <button type="submit">Explore</button>
      </form>
    </>
  );
}
