import { UserController } from "./controller_wrong.js";
import { UserModel } from "./model_wrong.js";
import { UserView } from "./view_wrong.js";


function main() {
  const user = new UserModel("Ricardo", 4.8);
  const userView = new UserView();
  const userController = new UserController(user, userView);

  // Updating the user's data directly (this is what you should NOT do!)
  user.name = "Pedro";
  user.grade = 5.0;
  userController.updateView();
}

main();
