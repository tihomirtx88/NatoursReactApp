import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { apiLogout } from "../../services/apiAuth";

export function useLogout(){
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { isLoading: isLogoutLoading, mutate: logoutFn} = useMutation({
        mutationFn: apiLogout,
        onSuccess: () => {
            // Remove user  from react query cache
           queryClient.removeQueries(['user']);
           navigate('/login', {replace: true});
        }
    });

    return {logoutFn, isLogoutLoading};
};