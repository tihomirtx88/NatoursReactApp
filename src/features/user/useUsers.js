import { useQuery } from "@tanstack/react-query";
import { getallUsersApi } from "../../services/apiUser";
import { useMemo } from "react";
import { sortTours } from "../../utils/usersSorting";
import Pagination from "../../utils/paginations";

export function useUsers(sortBy, page, searchQuery , pageSize = 9) {
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

  const users = allUsers?.data?.users || [];

  // Memoize the sorted and paginated data
  const sortedAndPaginatedUsers = useMemo(() => {
    const filteredUsers = users.filter(user => 
      user?.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
      user?.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user?.role?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedUsers = sortTours(filteredUsers, sortBy);

    const pagination = new Pagination(sortedUsers, pageSize);

    pagination.goToPage(page);

    return {
      paginatedUsers: pagination.getPaginatedItems(),
      totalPages: pagination.totalPages,
      currentPage: pagination.currentPage,
    };
  }, [users, sortBy, searchQuery, page, pageSize]);

 

  // return { error, allUsers, isLoadingUsers };
  return {
    ...sortedAndPaginatedUsers,
    error,
    isLoadingUsers,
    allUsers
  };
}
