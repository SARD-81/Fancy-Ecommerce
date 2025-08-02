import { Outlet } from "react-router";
import SideMenu from "../components/SideMenu";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <SideMenu />
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
