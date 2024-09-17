import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiUser";


export function useUser() {
 
  const { data: currentUser = {}, error } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    retry: false,
  });

  return { error, currentUser };
}