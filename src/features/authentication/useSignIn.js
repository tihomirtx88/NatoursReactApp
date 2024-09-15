import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { apiLogin } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: isLoadingLogin, mutate: loginData } = useMutation({
    mutationFn: ({ email, password }) => apiLogin({ email, password }),

    onSuccess: (user) => {
      console.log(user, "from sing in");

      queryClient.setQueryData(["user"], user.data.user);

      toast.success("You are successfully logged in your account");
      navigate("/dashboard", { replace: true });
    },

    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provide email or password is incorrect");
    },
  });

  return { isLoadingLogin, loginData };
}
