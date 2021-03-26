// https://www.npmjs.com/package/react-scroll
import { Link } from "react-scroll";
// https://react-icons.github.io/react-icons/
import { FaChevronCircleDown } from "react-icons/fa";
import NavBar from "../containers/NavBar";
import SocialLinks from "./SocialLinks";

// Image
import picture from "../images/logo.svg";

const About = ({ theme, setTheme, githubUrl, name, link, bio, twitter }) => {
  const newTheme = `${theme} d-flex flex-column min-vh-100 justify-content-center`;

  const socialData = {
    githubUrl: githubUrl,
    link: link,
    twitter: twitter,
  };

  return (
    <header id="about" className={newTheme}>
      <NavBar theme={theme} setTheme={setTheme} />
      <div className="container text-center">
        <img
          className="logo spin img-fluid"
          src={picture}
          alt="React Logo"
          height="45%"
          width="45%"
        />
        <h1>Dante L. James</h1>
        <hr />
        <p>Hello All! There is a lot when it comes to getting to know me, but with that being said I'll do my best to summarize. I have lived in a few different states throughout the west coast of the country but I was born and raised in Denver CO. I went to East High School in the heart of the city, not too far from downtown and the capitol building. I've always loved the area, so much so I bought a condo in the Cap Hill area of Denver about 8 months ago. After I finished high school I had my first attempt at college in Fort Collins at Colorado State University. Turns out it wasn't for me. But I did find a passion for MMA and cage fighting. From there that passion took me to Portland OR, and then ultimately Las Vegas as I made it on to different teams. I had the pleasure of training with many notable fighters, including Matt Lindland, Randy Couture, Ray Sefo, and Misha Tate (Misha actually gave me a bloody nose for hitting her too hard). From there I found myself moving back to Denver. After a few years of odd jobs and customer serivce jobs I worked my way up to being an interim Vice President of sales for Transamerica Life Insurance company. Long story short, I loved the culture, hated the job. After leaving that job I found this bootcamp and decided to follow another of my passions for coding.</p>
        <SocialLinks {...socialData} />
        <Link className="scroll" to="skills" smooth={true} duration={750}>
          <FaChevronCircleDown id="scroll-down" />
        </Link>
      </div>
    </header>
  );
};

export default About;
