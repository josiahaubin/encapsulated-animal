import CatController from "../controllers/CatController.js";
import DogController from "../controllers/DogController.js";


class App {
  constructor() {
    this.controllers = {
      catController: new CatController,
      dogController: new DogController
    }
  }
}

window["app"] = new App()