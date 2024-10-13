import { useQuery } from "@tanstack/react-query";
import { getMytoursApi } from "../../services/apiTours";

export function useMyTours() {

    const { data: myTours = [], error } = useQuery({
      queryKey: ["tours"],
      queryFn: () => getMytoursApi(),
      retry: false,
    });
  
    return { error, myTours };
  }