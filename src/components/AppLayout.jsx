import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Popup from "./Popup";
import Navigation from "./Navigation";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Popup/>
      <Navigation/>
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
