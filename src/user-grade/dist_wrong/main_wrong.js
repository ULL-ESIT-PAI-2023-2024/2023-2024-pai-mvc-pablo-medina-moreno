"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_wrong_js_1 = require("./controller_wrong.js");
const model_wrong_js_1 = require("./model_wrong.js");
const view_wrong_js_1 = require("./view_wrong.js");
function main() {
    const user = new model_wrong_js_1.UserModel("Ricardo", 4.8);
    const userView = new view_wrong_js_1.UserView();
    const userController = new controller_wrong_js_1.UserController(user, userView);
    // Updating the user's data directly (this is what you should NOT do!)
    user.name = "Pedro";
    user.grade = 5.0;
    userController.updateView();
}
main();
