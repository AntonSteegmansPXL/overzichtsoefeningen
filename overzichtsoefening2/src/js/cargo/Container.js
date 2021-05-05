"use strict";
// naam:
import Product from './Product';
export default class Container{
    _products;
    _maxWeight;

    constructor(maxWeight) {
        if (typeof maxWeight == 'number' && maxWeight > 0) {
            this._maxWeight = maxWeight;
            this._products = [];
        } else {
            throw new Error("maxWeight is not a number or is less than 0");
        }
    }

    addProduct(product) {
        if (product instanceof Product && this._products.forEach(e => e._id.contains(product._id)) && this.totalWeightProducts() + product._weight < this._maxWeight) {
            this._products.push(product);
        } else {
            throw new Error("product does not meet requirements");
        }
    }

    getProductAtIndex(index) {
        if (Number.isInteger(index) && index > 0 && index < this._products.length) {
            return this._products[index];
        } else {
            throw new Error("value for index does not meet requirements")
        }
    }

    totalWeightProducts() {
        let total = 0;
        this._products.forEach(e => total += e._weight);

        return total;
    }
}
