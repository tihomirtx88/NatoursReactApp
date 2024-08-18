import { useQuery } from "@tanstack/react-query";
import { getMontlyTours } from "../../services/apiTours"
import { useParams } from "react-router";

export function useMontlyTours(){
    const { year } = useParams();  // Capturing the year from the URL
    const { data: montlyTours } = useQuery({
      queryKey: ["montlyTours", year],  // Adding year to the query key to handle caching correctly
      queryFn: () => getMontlyTours(year),
      retry: false
    });
  
    return {  montlyTours };
};