import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteUserApi } from "../../services/apiUser";
import { useNavigate } from "react-router";

export function useDeleteUser(){
    const navigate = useNavigate();

    const {isLoading: isDeletingUser, mutate: deleteUser} = useMutation({
        mutationFn: deleteUserApi,
        onSuccess: ()=> {
            toast.success("User successfully deleted");
            navigate("/dashboard");
        },
        onError: (err) => {
            toast.error(`Error deleting tour: ${err.message}`);
        },
    })
    return { isDeletingUser, deleteUser };
}