import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._categories = []
        this._productsList = []
        this._selectedCategory = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setCategories(categories){
        this._categories = categories
    }

    setProducts(products){
        this._productsList = products
    }

    setSelectedCategory(category){
        this.setPage(1)
        this._selectedCategory = category
    }

    setPage(page){
        this._page = page
    }

    setTotalCount(count){
        this._totalCount = count
    }

    setLimit(limit){
        this._limit = limit
    }

    get categories(){
        return this._categories
    }

    get productsList(){
        return this._productsList
    }

    get selectedCategory(){
        return this._selectedCategory
    }

    get totalCount(){
        return this._totalCount
    }

    get page(){
        return this._page
    }

    get limit(){
        return this._limit
    }

}