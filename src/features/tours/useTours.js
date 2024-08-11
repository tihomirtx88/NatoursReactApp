import { useQuery } from "@tanstack/react-query";
import { getTours } from "../../services/apiTours";

export function useTours() {
  const { data: tours = {}, error } = useQuery({
    queryKey: ["tours"],
    queryFn: () => getTours(),
    retry: false,
  });

  return { error, tours };
}
