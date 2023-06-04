"use strict";

let votingArea = document.getElementById("voting-area");
let resultsArea = document.getElementById("results-area");

// add variables that need to be declared for products

function Product(name, imgSrc) {
  this.name = name;
  this.imgSrc = imgSrc;
  this.voteCount = 0;
  this.viewCount = 0;
}

// add "new Product"
let gum = new Product("gum", "./img/bubblegum.jpg");
let pen = new Product("pen", "./img/pen.jpg");
let dragon = new Product("dragon", "./img/dragon.jpg");
