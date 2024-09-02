import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TourDetailsPage from "./pages/tourDetailsPage";
import AppLayout from "./components/AppLayout";
import Tours from "./components/Tours";
import MontlyPlanTours from "./features/tours/MontlyPlanTours";
import LoginPage from "./pages/LoginPage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="montly-plan/:year" element={<MontlyPlanTours/>}/>
            <Route path="tours" element={<Tours />} />
            <Route path="tours/:tourId" element={<TourDetailsPage />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
