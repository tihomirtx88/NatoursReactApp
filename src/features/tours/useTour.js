import { useQuery } from "@tanstack/react-query";
import { getTour } from "../../services/apiTours";
import { useParams } from "react-router";

export function useTour() {
  const {tourId} = useParams();

  const { data: tour = {}, error } = useQuery({
    queryKey: ["tour", tourId],
    queryFn: () => getTour(tourId),
    retry: false,
  });

  return { error, tour };
}
