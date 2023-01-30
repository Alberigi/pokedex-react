import "./style.css";
import { House } from "phosphor-react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto min-vh-100 bg-primary">
          <ul>
            <li>
              <a className="nav-link px-2">
                <House />
                <Link to={"/"} className="ms-1 d-none d-sm-inline">
                  Home
                </Link>
              </a>
            </li>
            <li>
              <a className="nav-link px-2">
                <Link to={"/pokemons"} className="ms-1 d-none d-sm-inline">
                  Pokemons
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
