"use strict";

let votingArea = document.getElementById("voting-area");
let resultsArea = document.getElementById("results-area");

let gumImg = document.getElementById("product1");
let penImg = document.getElementById("product2");
let dragonImg = document.getElementById("product3");

// add variables that need to be declared for products

function Product(name, imgSrc) {
  this.name = this.name;
  this.imgSrc = this.imgSrc;
  this.voteCount = 0;
  this.viewCount = 0;
}

// add "new Product"
let gum = new Product("gum", "./img/bubblegum.jpg");
let pen = new Product("pen", "./img/pen.jpg");
let dragon = new Product("dragon", "./img/dragon.jpg");

let productArray = [];

productArray.push(gum);
productArray.push(pen);
productArray.push(dragon);

console.log(productArray);

function setOddImages(gum, pen, dragon) {
  gumImg.src = gum.imgSrc;
  gumImg.alt = gum.name;
  gumImg.title = gum.name;
  penImg.src = pen.imgSrc;
  penImg.alt = pen.name;
  penImg.title = pen.name;
  dragon.src = dragon.imgSrc;
  dragon.alt = dragon.name;
  dragon.title = dragon.name;
}

setOddImages();
