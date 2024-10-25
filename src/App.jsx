import { Navigate, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

// Pages
import UserProfilePage from "./pages/UserProfilePage";
import ResetPasswordPage from "./features/email/ResetPasswordPage";
import BookingsPage from "./pages/BookingsPage";
import BookingsDetailsPage from "./pages/BookingDetailsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TourDetailsPage from "./pages/tourDetailsPage";

// Components
import Dashboard from "./components/Dashboard";
import Book from "./features/booking/Book";
import AppLayout from "./components/AppLayout";
import Tours from "./features/tours/Tours";
import MontlyPlanTours from "./features/tours/MontlyPlanTours";
import { AuthProvider } from "./context/AuthContext";
import PageNotFound from "./pages/PageNotFound";
import CreateTourForm from "./features/tours/CreateTourForm";
import UpdateTourForm from "./features/tours/UpdateTourForm";
import Mytours from "./features/tours/MyTours";
import MyBookings from "./features/booking/MyBookings";
import TourStats from "./components/TourStats";
import CreateReveiwForm from "./features/reviews/CreateReveiwForm";

// Users
import AllUsers from "./features/user/AllUsers";
import UpdateUserForm from "./features/user/UpdateUserForm";

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
            <Route path="myTours" element={<Mytours />} />
            <Route path="tourStats" element={<TourStats/>}/>
            <Route path="updateTour/:tourId" element={<UpdateTourForm />} />
            <Route path="create/tour" element={<CreateTourForm/>}/>
            <Route path="tours/:tourId" element={<TourDetailsPage />} />
            <Route path="create/booking" element={<Book/>}/>
            <Route path="bookings" element={<BookingsPage/>}/>
            <Route path="myBookings" element={<MyBookings/>}/>
            <Route path="bookings/:bookingId" element={<BookingsDetailsPage/>}/>
            <Route path="all/users" element={<AllUsers/>}/>
            <Route path="profile" element={<UserProfilePage/>}/>
            <Route path="resetPassword/:token" element={<ResetPasswordPage/>}/>
            <Route path="updateUser/:userId" element={<UpdateUserForm />} />
            <Route path="create/review" element={<CreateReveiwForm/>}/>
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
