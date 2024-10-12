import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTourApi } from "../../services/apiTours";
import toast from "react-hot-toast";
import { useParams } from "react-router";

export default function useUpdateTour(){
    const queryClient = useQueryClient();

    const {tourId} = useParams();

    const { mutate: updateTour, isLoading: isTourUpdating } = useMutation({
        mutationFn: (formData) => updateTourApi(formData, tourId), // Accept formData as an argument
        onSuccess: () => {
          toast.success("Tour successfully edited");
          queryClient.invalidateQueries({ queryKey: ["tours"] });
        },
        onError: (err) => toast.error(err.message),
      });
    
      return { isTourUpdating, updateTour };
}