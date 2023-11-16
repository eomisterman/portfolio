import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <section className="shrink-0 m-8 sm:m-16 sm:mr-8 sm:basis-48 text-slate-700">
        <section>
          <h1 className="text-xl sm:text-3xl font-bold">
            Emilio <br /> Ovalles- <br /> Misterman
          </h1>
        </section>

        <section className="text-md sm:text-md font-thin mt-16">
          <Link to="/about" className="block w-full mb-4">
            About
          </Link>
          <Link to="/projects" className="block w-full mb-4">
            Projects
          </Link>
          <Link to="/contact" className="block w-full mb-4">
            Contact
          </Link>
        </section>
      </section>
      <Outlet />
    </>
  );
};

export default Sidebar;
