import { useBookings } from "./useBookings";

export default function Bookings(){
    const { bookings } = useBookings();
    console.log(bookings);
    
    return(
        <div>Bookings</div>
    );
};