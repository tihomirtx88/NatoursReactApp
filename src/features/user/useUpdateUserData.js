import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserApi } from "../../services/apiUser"; 
import toast from "react-hot-toast";


export default function useUpdateUserData(){
    const queryClient = useQueryClient();

    const { mutate: updateUser, isLoading: isUpdatingUser } = useMutation({
        mutationFn: updateUserApi,
        onSuccess: ({user}) => {
          //Set manual data in query cache
            queryClient.setQueryData(['user'], user);
            queryClient.invalidateQueries({ queryKey: ["user"] });
          },
          onError: (err) => toast.error(err.message),
    });

    return { isUpdatingUser, updateUser };
};