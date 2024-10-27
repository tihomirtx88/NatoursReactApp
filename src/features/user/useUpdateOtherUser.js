import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUsersApi } from "../../services/apiUser";
import toast from "react-hot-toast";

export default function useUpdateOtherUser(){
    const queryClient = useQueryClient();

    const { mutate: updateOtherUser, isLoading: isUpdatingOtherUser } = useMutation({
        mutationFn: (newUser) => {
     
            const { formData, userId } = newUser;
            console.log(userId, 'from hook id');
            
             return updateUsersApi(formData, userId);
        },
        onSuccess: (user) => {
          //Set manual data in query cache
            queryClient.setQueryData(['user'], user);
            queryClient.invalidateQueries({ queryKey: ["user"] });
          },
          onError: (err) => toast.error(err.message),
    });

    return { isUpdatingOtherUser, updateOtherUser };
};