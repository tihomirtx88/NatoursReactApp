import { useQuery } from "@tanstack/react-query";
import { getReviewsApi } from "../../services/apiReviews";

export function useReviews() {
    const {
      data: reviewsData = [],
      error,
      isLoading,
      isFetching,
    } = useQuery({
      queryKey: ["reviwes"],
      queryFn: () => getReviewsApi(),
      retry: false,
      refetchOnMount: true,
      staleTime: 0,
    });
  
    return { reviewsData, error, isLoading, isFetching };
  }