import CatService from "../services/CatService.js";
//PRIVATE
let _catService = new CatService()


function draw() {
  let catNameElem = document.querySelector('#catName')
  let catPetCountElem = document.querySelector('#catPetCount')
  let cat = _catService.Cat

  catNameElem.textContent = cat.name
  catPetCountElem.textContent = cat.petCount.toString()
}

//PUBLIC
export default class CatController {
  constructor() {
    //console.log("Hello from cat controller")
    draw()
  }
}