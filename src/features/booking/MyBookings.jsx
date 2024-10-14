import TourCard from "../tours/TourCard";
import { useMybookings } from "./useMyBookings";

export default function MyBookings(){
    const { myBookings } = useMybookings();
    // Extract bookings from the API response data
  const bookings = myBookings?.data?.bookings || [];
    console.log(bookings);
    
    return (
        <div className="card-container">
          {bookings?.length > 0 ? (
            bookings.map((booking) =>  <TourCard key={booking._id} tour={booking.tour} />)
          ) : (
            <div className="TODO">{/* TODO */}</div>
          )}
        </div>
      );
};