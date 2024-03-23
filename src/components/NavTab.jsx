import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
const tabs = [
  {
    tex: "home",
    to: "/",
  },
  {
    tex: "about",
    to: "/about",
  },
  {
    tex: "Concept To Product",
    to: "/concepttoproduct",
  },
  {
    tex: "Product To Buisness",
    to: "/producttobuisness",
  },
  {
    tex: "Business Legal & Strategy",
    to: "#",
  },
  {
    tex: "InvinIP",
    to: "#",
  },
];
const NavTab = () => {
  const [selected, setSelected] = useState(tabs[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div>
        <div className="  lg:flex  items-center lg:flex-wrap gap-2 max-lg:hidden">
          {tabs.map((tab) => (
            <Chip
              text={tab.tex}
              link={tab.to}
              selected={selected === tab.tex}
              setSelected={setSelected}
              key={tab}
            />
          ))}
        </div>
        <div
          className="hidden max-lg:block cursor-pointer"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
      </div>

      {isMenuOpen && (
        <div>
          <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-gray-50  ">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}>
              <button className="btn btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className=" lg:hidden flex flex-col items-center gap-y-12 text-7xl justify-center h-full z-10 text-white">
              {tabs.map((tab) => (
                // <li key={item}>
                //   <a
                //     href={item.href}
                //     className="font-montserrat leading-normal text-lg text-slate-gray">
                //     {item.label}
                //   </a>
                // </li>
                <Chip
                  text={tab.tex}
                  link={tab.to}
                  selected={selected === tab.tex}
                  setSelected={setSelected}
                  key={tab}
                />
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

const Chip = ({ text, selected, setSelected, link }) => {
  return (
    <>
      <button
        onClick={() => setSelected(text)}
        className={`${
          selected ? "text-white" : "text-black hover:text-slate-700 "
        } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}>
        <span className="relative z-10 capitalize">
          <Link to={link}>{text}</Link>
        </span>
        {selected && (
          <motion.span
            layoutId="pill-tab"
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"></motion.span>
        )}
      </button>
    </>
  );
};

export default NavTab;
