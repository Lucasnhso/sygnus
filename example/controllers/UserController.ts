import UserUseCase from "../useCases/UserUseCase";
import ResourceController from "../../src/lib/Resources/Controller";

export default class UserController extends ResourceController {
  constructor() {
    super(new UserUseCase());
  }
}
