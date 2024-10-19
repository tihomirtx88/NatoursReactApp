import { useQuery } from "@tanstack/react-query";
import { getTours } from "../../services/apiTours";

export function useToursWithoutSorting() {

  const { data: toursData = [], isFetching, isLoading } = useQuery({
    queryKey: ["tours"],
    queryFn: () => getTours(),
    retry: false,
    refetchOnMount: true,  
    staleTime: 0,  
  });

   return{isLoading, isFetching, toursData};
}
