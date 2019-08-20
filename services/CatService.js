import Cat from "../models/Cat.js";

//PRIVATE
let _cat = new Cat("Nacho")

function checkMood() {
  if (_cat.petCount > 20) {
    _cat.mood = "Bloodthristy"
    _cat.img = "https://i.ytimg.com/vi/4z8yX9jFEHM/hqdefault.jpg"
  } else if (_cat.petCount > 15) {
    _cat.mood = "Angry"
    _cat.img = "https://farm1.staticflickr.com/32/66916039_2a1cfad9cf_z.jpg"
  } else if (_cat.petCount > 10) {
    _cat.mood = "Bitey"
    _cat.img = "http://www.catster.com/wp-content/uploads/2015/06/kitten-biting-finger-600p.jpg"
  } else if (_cat.petCount > 5) {
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
