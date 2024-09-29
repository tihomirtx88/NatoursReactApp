import { useQuery } from "@tanstack/react-query";
import { getBookingsApi } from "../../services/apiBookings";

export function useBookings() {

  const { data: bookings = [], error: errorBookings } = useQuery({
    queryKey: ["bookings"],
    queryFn: () => getBookingsApi(),
    retry: false,
  });

  return { errorBookings, bookings };
}
