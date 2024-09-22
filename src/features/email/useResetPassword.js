import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { resetPasswordApi } from "../../services/apiEmail";

export default function useResetPassword() {
  const navigate = useNavigate();
  const { mutate: resetPassword, isLoading: isResetPasswordLoading } =
    useMutation({
      mutationFn: resetPasswordApi,
      onSuccess: () => {
        toast.success("Password successfully reset!");
        navigate("/login", { replace: true });
      },
      onError: (error) => {
        toast.error(error.message || "Error resetting password");
      },
    });

  return { resetPassword, isResetPasswordLoading };
}
