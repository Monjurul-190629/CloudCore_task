import axios from "axios"

export const productApi = async () => {
    try {
        const response = await axios.get('https://admin.refabry.com/api/all/product/get');
        //console.log(response)
        return response;
    } 
    catch (error) {
        //console.error("Error fetching products:", error);
        throw error; 
    }
}