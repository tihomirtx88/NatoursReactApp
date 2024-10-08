import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTourApi } from "../../services/apiTours";
import toast from "react-hot-toast";

export function useDeleteTour(){
    const queryClient = useQueryClient();

    const {isLoading: isDeleting, mutate: deleteTour} = useMutation({
        mutationFn: deleteTourApi,
        onSuccess: ()=> {
            toast.success("Tour successfully deleted");
            queryClient.invalidateQueries({
                queryKey: ["tours"],
            })
        },
        onError: (err) => {
            toast.error(`Error deleting tour: ${err.message}`);
        },
    })
    return { isDeleting, deleteTour };
}