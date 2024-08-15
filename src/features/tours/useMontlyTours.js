import { useQuery } from "@tanstack/react-query";
import { getMontlyTours } from "../../services/apiTours"
import { useParams } from "react-router";

export function useMontlyTours(){
    const {year} = useParams();
    const { data: montlyTours, error} = useQuery({
        queryKey: ["montlyTours"],
        queryFn: () => getMontlyTours(year),
        retry: false
    });

    return { error, montlyTours };
};