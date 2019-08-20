import CatService from "../services/CatService.js";
//PRIVATE
let _catService = new CatService()


function draw() {
  let catNameElem = document.querySelector('#catName')
  let catPetCountElem = document.querySelector('#catPetCount')
  let catMoodElem = document.querySelector('#catMood')
  let catImgElem = document.querySelector('#catImg')
  let cat = _catService.Cat

  catNameElem.textContent = cat.name
  catPetCountElem.textContent = cat.petCount.toString()
  catMoodElem.textContent = cat.mood
  // @ts-ignore
  catImgElem.src = cat.img
}


//PUBLIC
export default class CatController {
  constructor() {
    //console.log("Hello from cat controller")
    draw()
  }

  //Let the service know that the user wants to pet the cat
  pet() {
    _catService.pet()
    draw()
  }
  //Let the service know that the user wants to feed the cat
  feed() {
    _catService.feed()
    draw()
  }
}