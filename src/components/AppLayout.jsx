import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Book from "./Book";
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
      <Book />
      <Footer />
    </>
  );
};

export default AppLayout;
