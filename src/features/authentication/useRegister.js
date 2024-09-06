import { useMutation } from "@tanstack/react-query";
import { apiRegister } from "./../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export default function useRegister(){
  const navigate = useNavigate();
  const { mutate: signUp, isLoading: isRegisterLoading } = useMutation({
    mutationFn: apiRegister,
    onSuccess: () => {
        toast.success(
            "Account successfully created! Please verify the new account from the users email adress"
        );
        navigate("/dashboard", {replace: true});
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Provide email or passowrd are incorect');
  } 
  });

  return {signUp, isRegisterLoading};
};