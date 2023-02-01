import { useState } from "react";
import { Student, Table, House } from "phosphor-react";
import "./style.css";
import { ISideBarItem, SideBarItem } from "./sideBarItem";

export const SideBar = () => {
  const [isExpanded, setExpendState] = useState(false);
  const menuItems: ISideBarItem[] = [
    {
      text: "Home",
      path: "/",
      icon: <House className="menu-item-icon" />,
    },
    {
      text: "Pokemons",
      path: "/pokemons",
      icon: <Student className="menu-item-icon" />,
    },
    {
      text: "Types",
      path: "/types",
      icon: <Student className="menu-item-icon" />,
    },
  ];

  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpanded && (
            <div className="nav-brand">
              <Table className="nav-brand-icon" />
              <h2>Pokedex</h2>
            </div>
          )}
          <button
            className={
              isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpendState(!isExpanded)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
          {menuItems.map((item, i) => (
            <SideBarItem isExpanded={isExpanded} item={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
