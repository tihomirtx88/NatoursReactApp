import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { apiLogin } from "../../services/apiAuth";

export function useSignIn(){
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {isLoading: isLoadingLogin, mutate: loginData} = useMutation({
        mutationFn: ({email, password}) => apiLogin({email, password}),

        onSuccess: (user) => {
            
            // To prevent load user data again after success log in and save in react query cache
            queryClient.setQueryData(['user'], user.data.user);
            navigate("/dashboard", {replace: true});
        },

        onError: (err) => {
            console.log('ERROR', err);
        } 
    });

    return{isLoadingLogin, loginData};
}