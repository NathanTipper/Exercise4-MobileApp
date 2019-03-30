window.addEventListener("deviceorientation", handleOrientation)

console.log("Hello");

var canvas,
    alpha = 0,
    beta = 0,
    gamma = 0,
    rValue = 0,
    gValue = 0,
    bValue = 0,
    mappedBeta = 0,
    mappedGamma = 0,
    rotationSpeed = 0.01,
    scalar = 0.01;

function handleOrientation(event) {
  alpha = event.alpha;
  beta = event.beta;
  gamma = event.gamma;
}

let baloo;
function preload() {
  baloo = loadFont('fonts/BalooChettan-Regular.ttf');
}

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  textFont(baloo);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(bValue, rValue, gValue);
  mappedBeta = map(beta, -180, 180, 0, 360);
  mappedGamma = map(gamma, -90, 90, 0, 180);
  rValue = map(alpha, 0, 360, 0, 255);
  gValue = map(beta, -180, 180, 0, 255);
  bValue = map(gamma, -90, 90, 0, 255);
  textSize(32);
  fill(rValue, gValue, bValue);
  text('This is trippy!!!', 0, -(innerHeight/4) - 150);
  rotateX(mappedBeta * rotationSpeed);
  rotateY(mappedGamma * rotationSpeed);
  rotateZ(alpha * rotationSpeed);
  fill(rValue, gValue, bValue);
  scale(mappedBeta * scalar, mappedGamma * scalar, alpha * scalar);
  box(100);
}
