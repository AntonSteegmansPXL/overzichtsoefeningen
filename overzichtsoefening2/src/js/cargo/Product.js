"use strict";
// naam
export default class Product{
    _id;
    _weight;

    constructor(id, weight) {
        if (id > 0 && weight > 0 && Number.isInteger(id) && typeof weight == 'number') {
            this._id = id;
            this._weight = weight;
        } else {
            throw new Error("opgegeven waarden voldoen niet aan de voorwaarden")
        }
        this._id = id;
        this._weight = weight;
    }


    get id() {
        return this._id;
    }

    get weight() {
        return this._weight;
    }
}
