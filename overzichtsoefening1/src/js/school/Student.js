"use strict";
import Course from './Course';
// naam: 
export default class Student{
    _id;
    _courses;

    constructor(id) {
        this._id = id;
        this._courses = []
    }

    addCourse(course) {
        if (!course instanceof Course) {
            throw new Error("object is no instance of Course")
        } else {
            this._courses.push(course);
        }
    }

    calculateGrade() {
        let grade = 0
        let numberCompleted = 0

        this._courses.forEach(e => {
            if (e._completed === true) {
                grade += e._grade;
                numberCompleted++;
            }
        })
        if (numberCompleted === 0) {
            throw new Error("no completed courses");
        } else {
            return grade / numberCompleted
        }
    }
}
