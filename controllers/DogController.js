import DogService from "../services/DogService.js";

//PRIVATE
let _dogService = new DogService

function draw() {
  let dog = _dogService.Dog
}
//PUBLIC
export default class DogController {
  constructor() {
    //console.log("Hello from dog controller")
  }
}