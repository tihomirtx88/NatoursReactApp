import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { createReveiwApi } from "../../services/apiReviews";
import toast from "react-hot-toast";

export default function useCreateReveiw(){
    const navigate = useNavigate();
    const { mutate: createReview, isLoading: isloadingCreateReview } = useMutation({
      mutationFn: createReveiwApi,
      onSuccess: () => {
          toast.success(
              "Review successfully created!"
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
  
    return {createReview, isloadingCreateReview};
  };