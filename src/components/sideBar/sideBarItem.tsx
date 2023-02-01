import { Link } from "react-router-dom";

export interface ISideBarItem {
  text: string;
  path: string;
  icon: JSX.Element;
}

interface ISideBarItemProps {
  item: ISideBarItem;
  isExpanded: boolean;
}

export const SideBarItem = ({ item, isExpanded }: ISideBarItemProps) => {
  return (
    <Link
      to={item.path}
      className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
    >
      {item.icon}
      {isExpanded && <p className="menu-item-text">{item.text}</p>}
    </Link>
  );
};
