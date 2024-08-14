import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Book from "./Book";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Book />
      <Footer />
    </>
  );
};

export default AppLayout;
