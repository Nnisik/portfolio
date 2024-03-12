import aboutMeData from "../../data/data-about.json";
import './style/style.css';

export default function About() {
  return (
    <div id="about" className="flex">
      <div className="flex about-me">
        <h1>{aboutMeData.header}</h1>
        <p>
          {aboutMeData.text}
        </p>
      </div>
    </div>
  );
}
