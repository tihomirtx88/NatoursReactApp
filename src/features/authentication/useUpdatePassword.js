import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updatePasswordApi } from "../../services/apiAuth";

export default function useUpdatePassword(){
    const queryClient = useQueryClient();

    const { mutate: updateUserPassword, isLoading: isUpdatingUserPassword } = useMutation({
        mutationFn: updatePasswordApi,
        onSuccess: ({user}) => {
            toast.success("User password updated");
          //Set manual data in query cache
            queryClient.setQueryData(['user'], user);
            queryClient.invalidateQueries({ queryKey: ["user"] });
          },
          onError: (err) => toast.error(err.message),
    });

    return { isUpdatingUserPassword, updateUserPassword };
};