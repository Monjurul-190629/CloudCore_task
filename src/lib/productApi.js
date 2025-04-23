import axios from "axios"

export const productApi = async () => {
    const response = await axios.get('https://admin.refabry.com/api/all/product/get');
    return response.json();
}