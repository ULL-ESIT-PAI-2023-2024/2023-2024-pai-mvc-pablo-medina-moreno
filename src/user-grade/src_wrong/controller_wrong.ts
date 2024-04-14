import { UserModel } from './model_wrong.js';
import { UserView } from './view_wrong.js';


//Controller
export class UserController {
  constructor(private userModel: UserModel, private view: UserView) {
    this.userModel = userModel;
    this.view = view;
  }

  public updateName(name: string): void {
    this.userModel.name = name;
    this.updateView();
  }
  public updateGrade(grade: number): void {
    this.userModel.grade = grade;
    this.updateView();
  }
  public updateView(): void {
    console.log(`Name: ${this.userModel.name}, Grade: ${this.userModel.grade}`);
  }
}

