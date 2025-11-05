import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = () => {
    // const axiosPublic = useAxiosPublic();

    const { refetch, data: products = [] } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            // const res = await axiosPublic.get("/category");
            // return res.data;
            const res = await fetch("/products.json");
            const data = await res.json();
            return data;
        },
    });

    return [products, refetch];
};

export default useProducts;
