import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getBookingApi } from "../../services/apiBookings";

export function useBooking() {
    const { bookingId } = useParams();
    
  
    const { data: booking = {}, error } = useQuery({
      queryKey: ["booking", bookingId],
      queryFn: () => getBookingApi(bookingId),
      retry: false,
    });
  
    return { error, booking };
  }
  