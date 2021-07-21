import { NavLink } from "react-router-dom";
import mike from "../pages/img/michail-mangasarov.1024x1024.jpg";
import "../../src/App.css";

export default function About() {
  return (
    <section className="bio">
      <h2>About Mike</h2>
      <p>
        Hello, my name is Michail, but everyone calls me Mike. I am really
        happy, that you visited my personal Site. I love creating different
        things that come up into my mind, especially if those things are
        digital, like creating a web application or creating and editing media.
        I can call myself an allrounder in the area of digital media. I can
        consult and help you creating everything that a company needs,
        especially when it comes to web solutions. But I love doing other things
        too. I am an open, communicative person, who wants to be around positive
        people in an positive working atmosphere, where everyone appreciates and
        respects the others works and commitments. If you have questions, please
        feel free to <NavLink to="/contact">get in touch</NavLink> with me.
      </p>
      <img className="mike" src={mike} alt="hi"></img>
    </section>
  );
}
