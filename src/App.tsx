import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import { SideBar } from "./components/sideBar";

export const App = () => {
  return (
    <div className="App">
      <SideBar />
      <Outlet />
    </div>
  );
};
