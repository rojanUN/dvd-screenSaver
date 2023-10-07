const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

class Particle {
  constructor() {
    this.x = Math.random() * (350 - 0) + 0;
    this.y = Math.random() * (350 - 0) + 0;
    this.width = 70;
    this.height = 70;
    this.xSpeed = randomizeSpeed();
    this.ySpeed = randomizeSpeed();
    this.color = setColor();
    this.image = new Image();
    this.image.src = "dvd-logo.png";
  }
  render() {
    c.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  checkCollision() {
    if (this.x + this.width > canvas.width || this.x < 0) {
      this.xSpeed *= -1;
      this.color = setColor();
    }
    if (this.y + this.height > canvas.height || this.y < 0) {
      this.ySpeed *= -1;
      this.color = setColor();
    }
  }
}

function setColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function randomizeSpeed() {
  return Math.random() * (0.75 - 0.5) + 0.5;
}
const particle = new Particle();

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  particle.checkCollision();
  particle.render();
  particle.move();
  requestAnimationFrame(animate);
}
animate();
