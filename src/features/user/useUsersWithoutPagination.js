import { useQuery } from "@tanstack/react-query";
import { getallUsersApi } from "../../services/apiUser";

export function useUsersWithoutPagination() {
  const {
    data: allUsers = [],
    error,
    isLoading: isLoadingUsers,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getallUsersApi,
    retry: false,
    refetchOnMount: true,
    staleTime: 0,
  });

  return {
    error,
    isLoadingUsers,
    allUsers,
  };
}
