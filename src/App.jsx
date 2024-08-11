import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Register from "./components/Register";
import Tours from "./components/Tours";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />}>
            <Route index element={<Navigation replace to="dashboard" />} />
            <Route path="bookings" element={<Tours />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
