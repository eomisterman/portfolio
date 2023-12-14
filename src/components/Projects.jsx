import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <>
      <section className="basis-auto p-8 sm:p-16 text-md text-slate-700 h-auto overflow-y-scroll w-full">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Projects</h2>
        <div className="mb-8 h-fit">
          <a
            href="https://trackemist.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="text-2xl font-semibold hover:text-sky-300"
          >
            TracKemist {<FontAwesomeIcon icon={faLink} />}
          </a>
          <p className="py-2 max-w-lg">
            TracKemist is a web application that interfaces with the Spotify Web API to allows users to search for artists, albums, and tracks. Users can also view their top artists and tracks and save their favorite tracks to a playlist. The application is still in Spotify&apos;s API developer mode, meaning that users can only be added manually by the developer. Please reach out if you would like to be added as a user!
          </p>
        </div>
        <div className="mb-8">
          <a
            href="https://moonlit-kitten-2f68ef.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="text-2xl font-semibold mb-1 hover:text-sky-300"
          >
            Password Generator {<FontAwesomeIcon icon={faLink} />}
          </a>
          <p className="py-2 max-w-lg">
            Single Page Application written in VanillaJS. Interacting with the Words API, it fetches randomly generated words to user for the passphrases. The password generator is a tool to generate secure passwords and passphrases. As a user you are able to adjust the length and complexity of your passwords or passphrases, depending on your needs.
          </p>
        </div>
        <div className="mb-8">
          <a
            href="https://gentle-cheesecake-7cb3cb.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl font-semibold mb-1 hover:text-sky-300"
          >
            Basketball Scoreboard {<FontAwesomeIcon icon={faLink} />}
          </a>
          <p className="py-2 max-w-lg">
            NCAA Basketball Scoreboard app written in Vanilla JS. The app enables users to track the basketball game clock and score.
          </p>
        </div>
        <div className="mb-8">
          <a
            href="https://github.com/eomisterman/gamechanger_app"
            target="_blank"
            rel="noreferrer"
            className="text-2xl font-semibold mb-1 hover:text-sky-300"
          >
            Schedule {<FontAwesomeIcon icon={faLink} />}
          </a>
          <p className="py-2 max-w-lg">
            Full stack web application displaying a mock schedule for a fictional youth baseball team. The frontend is made with React and the backend is made with Kotlin and Springboot.
          </p>
        </div>
        <div className="mb-8">
          <a
            href="https://github.com/eomisterman/machine-eyes"
            target="_blank"
            rel="noreferrer"
            className="text-2xl font-semibold mb-1 hover:text-sky-300"
          >
            Machine Eyes {<FontAwesomeIcon icon={faLink} />}
          </a>
          <p className="py-2 max-w-lg">
            Machine Eyes is the capstone project for the completion of the Computer Science major. It uses a Xbox Kinect motion sensor to track movements, support vector machine (SVM) algorithm to learn and identify movements and poses, Max MSP to convert the motion sensing data to on-screen coordinates, and Processing to generate animations of eyes that follow a user. Machine Eyes is capable of tracking and identifying audience movements, then projecting eye animations that follow the individual throughout an exhibition space.
          </p>
        </div>
        <div className="mb-8">
          <a
            href="https://github.com/eomisterman/adventure_time"
            target="_blank"
            rel="noreferrer"
            className="text-2xl font-semibold mb-1 hover:text-sky-300"
          >
            Adventure Time {<FontAwesomeIcon icon={faLink} />}
          </a>
          <p className="py-2 max-w-lg">
            This site is an adventure piece for the Digital Studio art class, it
            explores addiction and the effects that addiction has on one&apos;s
            perception, health, and values as the user interacts with the piece.
          </p>
        </div>
        <div className="mb-8">
          <a
            href="https://animated-pothos-b92fee.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl font-semibold mb-1 hover:text-sky-300"
          >
            Visit Buffalo Landing Page {<FontAwesomeIcon icon={faLink} />}
          </a>
          <p className="py-2 max-w-lg">
            Landing page for a hypothetical tour website for the city of Buffalo. Written in HTML and CSS.
          </p>
        </div>
        <div className="mb-8">
          <a
            href="https://papaya-crostata-69f5dc.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl font-semibold mb-1 hover:text-sky-300"
          >
            Birthday Card {<FontAwesomeIcon icon={faLink} />}
          </a>
          <p className="py-2 max-w-lg">
            I hosted an e-card website to celebrate my dogs first birthday. Written in HTML and CSS.
          </p>
        </div>
      </section>
    </>
  );
};

export default Projects;
