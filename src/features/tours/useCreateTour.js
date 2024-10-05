import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { createTourApi } from "./../../services/apiTours";
import toast from "react-hot-toast";

export default function useCreateTour(){
    const navigate = useNavigate();
    const { mutate: createTour, isLoading: isloadingCreateTour } = useMutation({
      mutationFn: createTourApi,
      onSuccess: () => {
          toast.success(
              "Tour successfully created!"
          );
          navigate("/dashboard", {replace: true});
      },
      onError: (err) => {
        console.log('ERROR', err);
        toast.error('During create tour something went wrong');
    } 
    });
  
    return {createTour, isloadingCreateTour};
  };