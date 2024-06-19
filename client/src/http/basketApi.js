import {$host} from "./index.js";

export const addToBasket = async (userId, productId)=> {
    const response = await $host.post('/api/basket', { userId, productId });
    return response
}

export const  removeFromBasket = async (basketProductId)=> {
    const data  = await $host.delete('/api/basket', { data: { basketProductId } });
    return data
}

export const  fetchBasket = async (userId)=> {
    const response = await $host.get(`/api/basket/${userId}`);

    return response
}