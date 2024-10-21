import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiUser";


export function useUser() {
 
  const { data: currentUser = {}, error, isLoading: isLoadingUsers } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    retry: false,
  });

  return { error, currentUser, isLoadingUsers };
}