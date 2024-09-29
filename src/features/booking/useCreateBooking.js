import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { createBookingsApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export default function useCreateBooking(){
    const navigate = useNavigate();
    const { mutate: createBooking, isLoading: isloadingCreateBooking } = useMutation({
      mutationFn: createBookingsApi,
      onSuccess: () => {
          toast.success(
              "Booking successfully created!"
          );
          navigate("/dashboard", {replace: true});
      },
      onError: (err) => {
        console.log('ERROR', err);
        toast.error('During create booking something went wrong');
    } 
    });
  
    return {createBooking, isloadingCreateBooking};
  };