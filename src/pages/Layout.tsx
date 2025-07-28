import { Outlet } from "react-router";
import SideMenu from '../components/SideMenu'

const Layout = () => {
  return (
    <>
    <SideMenu />
      <Outlet />
    </>
  );
};

export default Layout;
