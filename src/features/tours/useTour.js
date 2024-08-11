import { useQuery } from "@tanstack/react-query";
import { getTour } from "../../services/apiTours";
import { useParams } from "react-router";

export function useTour() {
    const { bookingId } = useParams();
    
  const { data: tour = {}, error } = useQuery({
    queryKey: ["tour", bookingId],
    queryFn: () => getTour(bookingId),
    retry: false,
  });

  return { error, tour };
}
