import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";

function RootLayout(props) {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;