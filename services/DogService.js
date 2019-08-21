import Dog from "../models/Dog.js";

//PRIVATE
let _dog = new Dog()

//PUBLIC
export default class DogService {
  constructor() {
    //console.log("hello from dog service")
  }

  get Dog() {
    return _dog
  }
}