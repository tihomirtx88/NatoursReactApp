// import About from "./About";
// import Book from "./Book";
// import Features from "./Features";
// import Stories from "./Stories";
// import Tours from "./Tours";
import Header from "./Header";
import Footer from "./Footer";
// import Popup from "./Popup";
import { Outlet } from "react-router";

const Main = () => {
  return (
    <>
      <Header/>
      <main className="main">
         <Outlet/>
      </main>
      {/* <About />
      <Features />
      <Tours />
      <Stories />
      <Book />
      <Popup/> */}
      <Footer/>
    </>
  );
};

export default Main;
