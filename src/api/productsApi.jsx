import api from "./apiInterceptor"

export const fetchProducts = async()=>{
    try{
        const response = await api.get("/products");
        return response.data;
    }catch(error){
        throw new Error("Failed to fetch products");
    }
};