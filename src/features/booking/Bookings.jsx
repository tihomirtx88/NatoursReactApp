import BookingCard from "./BookingCard";
import { useBookings } from "./useBookings";

export default function Bookings(){
    const { bookings } = useBookings();
    const readingData = bookings?.data?.data || [];
    
    return(
        <div className="card-container">
      {readingData.length > 0 ? (
        readingData.map((booking) => (
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