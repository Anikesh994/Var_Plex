import { useMutation, useQuery} from "convex/react"
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const useConvexQuery = (query , ...args)=>{

    const result = useQuery(query,...args);
    const [data , setData] = useState(undefined);
    const [loading , isLoading] = useState(true);
    const [error , setError] = useState(null);

    useEffect(()=>{
        if(result === undefined){
            isLoading(true);
        }
        else{
            try {
                setData(result);
            } catch (err) {
                setError(err);
                toast.error(err.message);
            }
            finally{
                isLoading(false);
            }
        }
    },[result]);

    return {
        data,
        loading,
        error,
    };

};

export const useConvexMutation = (mutation )=>{

    const mutationFn = useMutation(mutation);
    const [data , setData] = useState(undefined);
    const [loading , isLoading] = useState(true);
    const [error , setError] = useState(null);

    const mutate = async (...args) => {
        isLoading(true);
        setError(null);
        try {
            const response = await mutationFn(...args);
            setData(response);
            return response;
        } catch (err) {
            setError(err);
            toast.error(err.message);
        }
        finally{
            isLoading(false);
        }
    }

    return {
        mutate,
        data,
        loading,
        error,
    };

};