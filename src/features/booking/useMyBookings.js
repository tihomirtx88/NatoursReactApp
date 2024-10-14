import { useQuery } from "@tanstack/react-query";
import { getMyBookingApi } from "../../services/apiBookings";

export function useMybookings() {

    const { data: myBookings = [], error } = useQuery({
      queryKey: ["bookings"],
      queryFn: () => getMyBookingApi(),
      retry: false,
    });
  
    return { error, myBookings };
  }