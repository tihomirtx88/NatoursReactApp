import { useQuery } from "@tanstack/react-query";
import { getStatsTourApi } from "../../services/apiTours";

export function useTourStats() {

    const { data: tourStats = [], error } = useQuery({
      queryKey: ["tours"],
      queryFn: () => getStatsTourApi(),
      retry: false,
      refetchOnMount: true,  
      staleTime: 0,  
    });
  
    return { error, tourStats };
  }