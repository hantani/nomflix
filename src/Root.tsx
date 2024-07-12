import { Outlet } from "react-router-dom";
import Header from "./Components/Header";

function RootComponent() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default RootComponent;
