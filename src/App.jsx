import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  return (
    <section id="root-section" className="flex flex-row">
        <Routes>
          <Route index element={<Home />} />
          <Route element={<Sidebar />}>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
    </section>
  );
}

export default App;

const Home = () => {
  const style = "text-normal font-light m-2 sm:m-8 text-slate-700"
  return (
    <article className="h-screen table w-full">
      <div className="table-cell align-middle text-center">
        <h1 className="text-2xl sm:text-5xl font-bold mb-12 text-slate-700">Emilio Ovalles-Misterman</h1>
        <Link to="/about" className={style}>About</Link>
        <Link to="/projects" className={style}>Projects</Link>
        <Link to="/contact" className={style}>Contact</Link>
      </div>
    </article>
  );
}