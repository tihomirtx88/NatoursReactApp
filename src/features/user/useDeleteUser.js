import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteUserApi } from "../../services/apiUser";

export function useDeleteUser(){
    const queryClient = useQueryClient();

    const {isLoading: isDeletingUser, mutate: deleteUser} = useMutation({
        mutationFn: deleteUserApi,
        onSuccess: ()=> {
            toast.success("User successfully deleted");
            queryClient.invalidateQueries({
                queryKey: ["users"],
            })
        },
        onError: (err) => {
            toast.error(`Error deleting tour: ${err.message}`);
        },
    })
    return { isDeletingUser, deleteUser };
}