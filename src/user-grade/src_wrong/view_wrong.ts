import { UserModel } from './model_wrong';

export class UserView {
  public showUser(userModel: UserModel): void {
      console.log(`Name: ${userModel.name}, Grade: ${userModel.grade}`);
  }
}