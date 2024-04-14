"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
//Controller
class UserController {
    constructor(userModel, view) {
        this.userModel = userModel;
        this.view = view;
        this.userModel = userModel;
        this.view = view;
    }
    updateName(name) {
        this.userModel.name = name;
        this.updateView();
    }
    updateGrade(grade) {
        this.userModel.grade = grade;
        this.updateView();
    }
    updateView() {
        console.log(`Name: ${this.userModel.name}, Grade: ${this.userModel.grade}`);
    }
}
exports.UserController = UserController;
