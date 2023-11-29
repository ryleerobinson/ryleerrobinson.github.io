// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min,max) {
  return Math.floor(Math.random()*(max-min)) + min;
}

// function to generate rnadom color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// define Ball constructor

function Ball() {
  this.x = random(0,width);
  this.y = random(0,height);
  this.velX = random(-7,7);
  this.velY = random(-7,7);
  this.color = randomRGB();
  this.size = random(10,20);
}

// define ball draw method

Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
