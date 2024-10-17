import { useQuery } from "@tanstack/react-query";
import { getTours } from "../../services/apiTours";
import { sortTours } from "../../utils/tourSorting";
import { useMemo } from "react";
import Pagination from "../../utils/paginations";

export function useTours(sortBy, page, searchQuery , pageSize = 9) {

  const { data: toursData = [], error, isFetching } = useQuery({
    queryKey: ["tours"],
    queryFn: () => getTours(),
    retry: false,
    refetchOnMount: true,  
    staleTime: 0,  
  });

  console.log(toursData, 'API Response Data'); // Debug the response here

  const tours = toursData?.data?.tours || [];

  // Memoize the sorted and paginated data
  const sortedAndPaginatedTours = useMemo(() => {

    const filteredTours = tours.filter(tour => 
      tour.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      tour.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.difficulty.toLowerCase().includes(searchQuery.toLowerCase())
    );
 
    const sortedTours = sortTours(filteredTours, sortBy);

    const pagination = new Pagination(sortedTours, pageSize);

    pagination.goToPage(page);

    return {
      paginatedTours: pagination.getPaginatedItems(),
      totalPages: pagination.totalPages,
      currentPage: pagination.currentPage,
    };
  }, [tours, sortBy, searchQuery, page, pageSize]);

  return {
    ...sortedAndPaginatedTours,
    error,
    isFetching,
  };
}
