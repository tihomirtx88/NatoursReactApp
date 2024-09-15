import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { apiLogin } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
// import { useAuth } from "../../context/AuthContext";

export function useSignIn(){
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { setUser, setToken } = useAuth(); // Access context functions

    const { isLoading: isLoadingLogin, mutate: loginData } = useMutation({
        mutationFn: ({ email, password }) => apiLogin({ email, password }),

        onSuccess: (user) => {
            queryClient.setQueryData(['user'], user.data.user);
            localStorage.setItem("jwt", user.data.token);

            setToken(user.data.token);
            setUser(user.data.user);

            toast.success('You are successfully logged in your account');
            navigate("/dashboard", { replace: true });
        },

        onError: (err) => {
            console.log('ERROR', err);
            toast.error('Provide email or password is incorrect');
        }
    });

    return { isLoadingLogin, loginData };
}