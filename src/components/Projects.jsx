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
            React web app that connects to Spotify and allows users to create
            playlists and view their favorite songs and artists.
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
            Website displaying mock schedule for a youth sports team. The front
            end is made using React and the API is made with Kotlin and
            SpringBoot.
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
            Capstone project for the Computer Science major. Using Kinect motion
            sensor, machine learning, and Max, Machine Eyes is capable of
            tracking and identifying movements within a space. When target
            movements are identified, eyes are projected on a canvas to follow
            the user throughout the space.
          </p>
        </div>
        <div className="mb-16">
          <a
            href="https://github.com/eomisterman/scraper"
            className="text-xl font-light mb-1 hover:text-amber-100"
          >
            Scraper {<FontAwesomeIcon icon={faLink} />}
          </a>
          <p>Basic web scraper using node.js.</p>
        </div>
        <div className="mb-16">
          <a
            href="https://github.com/eomisterman/adventure_time"
            className="text-xl font-light mb-1 hover:text-amber-100"
          >
            Adventure Time {<FontAwesomeIcon icon={faLink} />}
          </a>
          <p>
            {`This site is an adventure piece for the Digital Studio class, it
            explores addiction and the effects that addiction has on one's
            perception, health, and values.`}
          </p>
        </div>
        <div className="mb-16">
          <a
            href="https://github.com/eomisterman/domestika"
            className="text-xl font-light mb-1 hover:text-amber-100"
          >
            Sketches {<FontAwesomeIcon icon={faLink} />}
          </a>
          <p>Collection of sketches generated using p5.js.</p>
        </div>
        {/* Add more projects here! */}
      </section>
    </>
  );
};

export default Projects;
