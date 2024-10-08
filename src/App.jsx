import { Navigate, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import Dashboard from "./components/Dashboard";
import Book from "./features/booking/Book";
import TourDetailsPage from "./pages/tourDetailsPage";
import AppLayout from "./components/AppLayout";
import Tours from "./features/tours/Tours";
import MontlyPlanTours from "./features/tours/MontlyPlanTours";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import PageNotFound from "./pages/PageNotFound";
import UserProfilePage from "./pages/UserProfilePage";
import ResetPasswordPage from "./features/email/ResetPasswordPage";
import BookingsPage from "./pages/BookingsPage";
import BookingsDetailsPage from "./pages/BookingDetailsPage";
import CreateTourForm from "./features/tours/CreateTourForm";

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
      <AuthProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="montly-plan/:year" element={<MontlyPlanTours />} />
            <Route path="tours" element={<Tours />} />
            <Route path="create/booking" element={<Book/>}/>
            <Route path="tours/:tourId" element={<TourDetailsPage />} />
            <Route path="profile" element={<UserProfilePage/>}/>
            <Route path="resetPassword/:token" element={<ResetPasswordPage/>}/>
            <Route path="bookings" element={<BookingsPage/>}/>
            <Route path="bookings/:bookingId" element={<BookingsDetailsPage/>}/>
            <Route path="create/tour" element={<CreateTourForm/>}/>
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Toaster
            position="top-right"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "white",
                color: "var(--color-gray-700)",
              },
            }}
          />
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
