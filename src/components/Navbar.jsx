import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar flexBetween">
      <div className="flex-1 flexStart gap-10 flex-column">
        <ul className="xl:flex hidden text-small gap-7">
          <li>
            <a href="/people" className="text-blue-600 ...">
              People
            </a>
          </li>
          <li>
            <a href="/planets" className="text-blue-600 ...">
              Planets
            </a>
          </li>
          <li>
            <a href="/species" className="text-blue-600 ...">
              Species
            </a>
          </li>
          <li>
            <a href="/films" className="text-blue-600 ...">
              Films
            </a>
          </li>
          <li>
            <a href="/starships" className="text-blue-600 ...">
              Starships
            </a>
          </li>
          <li>
            <a href="/vehicles" className="text-blue-600 ...">
              Vehicles
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
