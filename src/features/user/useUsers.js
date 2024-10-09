import { useQuery } from "@tanstack/react-query";
import { getallUsersApi } from "../../services/apiUser";

export function useUsers() {
 
  const { data: allUsers = [], error, isLoading: isLoadingUsers } = useQuery({
    queryKey: ["users"],
    queryFn: getallUsersApi,
    retry: false,
  });

  return { error, allUsers, isLoadingUsers };
}