import Cat from "../models/Cat.js";

//PRIVATE
let _cat = new Cat("Nacho")

function checkMood() {
  if (_cat.petCount > 5) {
    _cat.mood = "Annoyed"
    _cat.img = "http://www.top13.net/wp-content/uploads/2017/01/angry-cat-photography-4.jpg"
  }
  return _cat.mood, _cat.img
}


//PUBLIC
export default class CatService {
  constructor() {
    //console.log("Hello from cat service")
  }

  pet() {
    _cat.petCount++
    checkMood()
  }

  get Cat() {
    return _cat
  }

}
