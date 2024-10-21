import { useUsers } from "./useUsers";

export default function AllUsers(){
    const { allUsers, isLoadingUsers } = useUsers();
    console.log(allUsers);
    
    return(
        <div>users</div>
    );
};