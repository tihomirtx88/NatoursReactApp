import { useAuth } from "../../context/AuthContext";
import BookingCard from "./BookingCard";
import { useBookings } from "./useBookings";

export default function Bookings(){
    const { bookings } = useBookings();
    const readingData = bookings?.data?.data || [];
    const { user } = useAuth();

    const userBookingsData = readingData.filter(booking => booking.user._id === user._id);
    console.log(userBookingsData);
    
    
    
    return(
        <div className="card-container">
      {userBookingsData.length > 0 ? (
        userBookingsData.map((booking) => (
          <BookingCard key={booking._id} booking={booking} />
        ))
      ) : (
        <div className="TODO">
          {/* TODO */}
        </div>
      )}
    </div>
    );
};