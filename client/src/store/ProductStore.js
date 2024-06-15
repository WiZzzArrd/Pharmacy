import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._categories = [
            {id: 1, name: "Лекарство"},
            {id: 2, name: "Витамины и пищевые добавки"}
        ]

        this._productsList = [
            {
                id: 1,
                name: "Троксактив",
                price: 1239,
                rating: 5,
                img: "https://cdn.farmlend.ru/assets/thumbnails/e4/e4e24d04e3dcbfb45c1c5bd41bea2bbf.jpg"
            }, {
                id: 2,
                name: "Троксактив",
                price: 1239,
                rating: 5,
                img: "https://cdn.farmlend.ru/assets/thumbnails/e4/e4e24d04e3dcbfb45c1c5bd41bea2bbf.jpg"
            }, {
                id: 3,
                name: "Троксактив",
                price: 1239,
                rating: 5,
                img: "https://cdn.farmlend.ru/assets/thumbnails/e4/e4e24d04e3dcbfb45c1c5bd41bea2bbf.jpg"
            }, {
                id: 4,
                name: "Троксактив",
                price: 1239,
                rating: 5,
                img: "https://cdn.farmlend.ru/assets/thumbnails/e4/e4e24d04e3dcbfb45c1c5bd41bea2bbf.jpg"
            },
        ]

        this._selectedCategory = {}

        makeAutoObservable(this)
    }

    setCategories(categories){
        this._categories = categories
    }

    setProducts(products){
        this._productsList = products
    }

    setSelectedCategory(category){
        this._selectedCategory = category
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

}