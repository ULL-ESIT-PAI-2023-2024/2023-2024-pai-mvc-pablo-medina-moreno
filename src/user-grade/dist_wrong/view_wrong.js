"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserView = void 0;
class UserView {
    showUser(userModel) {
        console.log(`Name: ${userModel.name}, Grade: ${userModel.grade}`);
    }
}
exports.UserView = UserView;
