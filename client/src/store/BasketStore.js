import { makeAutoObservable } from 'mobx';



class BasketStore {
    _basket = [];

    constructor() {
        makeAutoObservable(this);
    }

    setBasket(basket){
        this._basket.push(basket)
    }

    setFilter(id){
        this._basket = this._basket.filter((p)=>  p.id !== id)
    }

    get basket(){
        return this._basket
    }

}


export default BasketStore;