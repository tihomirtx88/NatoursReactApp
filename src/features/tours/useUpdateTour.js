import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTourApi } from "../../services/apiTours";
import toast from "react-hot-toast";
// import { useParams } from "react-router";

export  function useUpdateTour(){
    const queryClient = useQueryClient();

    // const { tourId } = useParams(); // Extract tourId from URL params
  
    const { mutate: updateTour, isLoading: isTourUpdating } = useMutation({
        mutationFn: (newTour) => {
          const { formData, tourId } = newTour
          updateTourApi(formData, tourId)
        }, // Pass formData and tourId
        onSuccess: () => {
          toast.success("Tour successfully edited");
          queryClient.invalidateQueries({ queryKey: ["tours"] });
        },
        onError: (err) => toast.error(err.message),
      });
      
    
      return { isTourUpdating, updateTour };
}