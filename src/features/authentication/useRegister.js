import { useMutation } from "@tanstack/react-query";
import { apiRegister } from "./../../services/apiAuth";
import toast from "react-hot-toast";

export default function useRegister(){
  const { mutate: signUp, isLoading: isRegisterLoading } = useMutation({
    mutationFn: apiRegister,
    onSuccess: () => {
        toast.success(
            "Account successfully created! Please verify the new account from the users email adress"
        );
    }
  });

  return {signUp, isRegisterLoading};
};