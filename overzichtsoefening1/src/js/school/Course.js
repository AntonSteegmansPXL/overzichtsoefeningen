"use strict";
// naam: Anton Steegmans, Maude Vanhengel
export default class Course {

    _id;
    _grade;
    _completed;

    constructor(id) {
        this._id = id
        this._grade = 0
        this._completed = false
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get grade() {
        return this._grade;
    }

    set grade(value) {
        this._grade = value;
    }

    get completed() {
        return this._completed;
    }

    set completed(value) {
        this._completed = value;
    }
}
