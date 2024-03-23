import React from "react";
import NavTab from "./NavTab";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="font-primary sticky top-0 bg-white  z-10">
          <div className="navbar   md:px-24 px-16">
            <div className="navbar-start letter  ">
              <Link to="/home1">Allinnov</Link>
            </div>
            {/* middle */}
            <div className="navbar-end w-full">
              <div className="">
                <NavTab />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
