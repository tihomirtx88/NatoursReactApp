import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { forgotPasswordApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useForgetPassword(){
    const navigate = useNavigate();
    const { mutate: forgotPassword, isLoading: isforgotPasswordLoading } = useMutation({
      mutationFn: forgotPasswordApi,
      onSuccess: () => {
          toast.success(
              "You will recive email wth new token and reset password"
          );
          navigate("/dashboard", {replace: true});
      },
      onError: (err) => {
        console.log('ERROR', err);
        toast.error('Provide email or passowrd are incorect');
    } 
    });
  
    return {forgotPassword, isforgotPasswordLoading};
  };