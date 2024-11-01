import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { createTourApi } from "./../../services/apiTours";
import toast from "react-hot-toast";

export default function useCreateTour(){
    const navigate = useNavigate();
    const { mutate: createTour, isLoading: isloadingCreateTour } = useMutation({
      mutationFn: createTourApi,
      onSuccess: (tour) => {
          console.log(tour, 'from create tour');
          
          toast.success(
              "Tour successfully created!"
          );
          navigate("/dashboard", {replace: true});
      },
      onError: (err) => {
        if (err.response) {
          console.log('Server responded with an error:', err.response.data); 
        } else if (err.request) {
          console.log('Request was made but no response was received', err.request);
        } else {
          console.log('Something went wrong with the request setup', err.message);
        }
        toast.error(`Error creating tour: ${err.message}`);
    } 
    });
  
    return {createTour, isloadingCreateTour};
  };