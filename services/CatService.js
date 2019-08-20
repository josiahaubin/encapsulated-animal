import Cat from "../models/Cat.js";

//PRIVATE
let _cat = new Cat("Nacho")

//PUBLIC
export default class CatService {
  constructor() {
    //console.log("Hello from cat service")
  }

  get Cat() {
    return _cat
  }
}