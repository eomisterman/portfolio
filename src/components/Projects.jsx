import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <>
      <section className="min-h-fit basis-auto my-10 mr-7 text-sm font-mono text-slate-700 max-w-lg">
        <h2 className="text-3xl sm:text-2xl font-extrabold mb-16">Projects</h2>
        <div className="mb-16">
          <a
            href="https://trackemist.netlify.app"
            className="text-xl font-light mb-1 hover:text-amber-100"
          >
            TracKemist {<FontAwesomeIcon icon={faLink} />}
          </a>
          <p>
            TracKemist is a web application that interfaces with the Spotify Web API to allows users to search for artists, albums, and tracks. Users can also view their top artists and tracks and save their favorite tracks to a playlist. The application is still in Spotify&apos;s API developer mode, meaning that users can only be added manually by the developer. Please reach out if you would like to be added as a user!
          </p>
        </div>
        <div className="mb-16">
          <a
            href="https://github.com/eomisterman/gamechanger_app"
            className="text-xl font-light mb-1 hover:text-amber-100"
          >
            Schedule {<FontAwesomeIcon icon={faLink} />}
          </a>
          <p>
            Full stack web application displaying a mock schedule for a fictional youth baseball team. The frontend is made with React and the backend is made with Kotlin and Springboot.
          </p>
        </div>
        <div className="mb-16">
          <a
            href="https://github.com/eomisterman/machine-eyes"
            className="text-xl font-light mb-1 hover:text-amber-100"
          >
            Machine Eyes {<FontAwesomeIcon icon={faLink} />}
          </a>
          <p>
            Machine Eyes is the capstone project for the completion of the Computer Science major. It uses a Xbox Kinect motion sensor to track movements, support vector machine (SVM) algorithm to learn and identify movements and poses, Max MSP to convert the motion sensing data to on-screen coordinates, and Processing to generate animations of eyes that follow a user. Machine Eyes is capable of tracking and identifying audience movements, then projecting eye animations that follow the individual throughout an exhibition space.
          </p>
        </div>
        <div className="mb-16">
          <a
            href="https://github.com/eomisterman/adventure_time"
            className="text-xl font-light mb-1 hover:text-amber-100"
          >
            Adventure Time {<FontAwesomeIcon icon={faLink} />}
          </a>
          <p>
            This site is an adventure piece for the Digital Studio art class, it
            explores addiction and the effects that addiction has on one&apos;s
            perception, health, and values as the user interacts with the piece.
          </p>
        </div>
        {/* Add more projects here! */}
      </section>
    </>
  );
};

export default Projects;
