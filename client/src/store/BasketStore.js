import { makeAutoObservable } from 'mobx';



class BasketStore {
    _basket = [];

    constructor() {
        makeAutoObservable(this);
    }

    setBasket(basket){
        this._basket = basket
    }

    get basket(){
        return this._basket
    }

}


export default BasketStore;