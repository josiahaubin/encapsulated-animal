import CatService from "../services/CatService.js";

//PRIVATE
let _catService = new CatService()

//PUBLIC
export default class CatController {
  constructor() {
    //console.log("Hello from cat controller")
  }
}