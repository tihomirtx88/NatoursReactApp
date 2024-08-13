import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TourDetailsPage from "./pages/tourDetailsPage";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard/:tourId" element={<TourDetailsPage/>}/>
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
