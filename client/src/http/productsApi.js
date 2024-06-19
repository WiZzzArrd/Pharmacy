import { $host} from "./index.js";

export const fetchCategories = async () =>{
    const {data} = await $host.get("api/category")
    return data
}

export const fetchProducts =  async (categoryId, page, limit = 5)=>{
    const {data} = await $host.get("api/product", {
        params: {
            categoryId,
            page,
            limit
        }
    })
    return data
}

export const fetchOneProduct = async (id)=>{
    const {data} = await $host.get("api/product/" + id)
    return data
}

