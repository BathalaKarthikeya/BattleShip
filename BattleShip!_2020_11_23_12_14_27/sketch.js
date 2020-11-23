var spaceship;
var ufo1, ufo2, ufo3, ufo4, ufo5, ufo6, ufo7, ufo8, ufo9, ufo10, ufo11, ufo12, ufo13, ufo14, ufo15, ufo16, ufo17, ufo18, ufo19, ufo20, ufo21, ufo22, ufo23, ufo24;
var earth;
var bullet;
var bullet1;
var edges;

var ufo_img;
var spaceship_img;
var earth_img;

var ufoGroup;
var bulletGroup1;
var bulletGroup;

var gameState = "play";

var gunshot;
var ufo_def;
var back;

function preload() {
  spaceship_img = loadImage("spaceship.jpg");
  ufo_img = loadImage("ufo.jpg");
  gunshot = loadSound("gunshot.mp3");
  ufo_def = loadSound("ufo_def.mp4");
  back = loadSound("space.mp3");
  earth_img = loadImage("earth.jpg");
}

function setup() {
  createCanvas(600, 600);

  ufoGroup = createGroup();
  bulletGroup = createGroup();
  bulletGroup1 = createGroup();

  spaceship = createSprite(300, 550, 10, 10);
  spaceship.scale = 0.2;
  spaceship.addImage(spaceship_img);

  ufo1 = createSprite(50, 25, 20, 20);
  ufo1.scale = 0.2;
  ufoGroup.add(ufo1);
  ufo1.addImage(ufo_img);

  ufo2 = createSprite(150, 25, 20, 20);
  ufo2.scale = 0.2;
  ufoGroup.add(ufo2);
  ufo2.addImage(ufo_img);

  ufo3 = createSprite(250, 25, 20, 20);
  ufo3.scale = 0.2;
  ufoGroup.add(ufo3);
  ufo3.addImage(ufo_img);

  ufo4 = createSprite(350, 25, 20, 20);
  ufo4.scale = 0.2;
  ufoGroup.add(ufo4);
  ufo4.addImage(ufo_img);

  ufo5 = createSprite(450, 25, 20, 20);
  ufo5.scale = 0.2;
  ufoGroup.add(ufo5);
  ufo5.addImage(ufo_img);

  ufo6 = createSprite(550, 25, 20, 20);
  ufo6.scale = 0.2;
  ufoGroup.add(ufo6);
  ufo6.addImage(ufo_img);

  ufo7 = createSprite(50, 100, 20, 20);
  ufo7.scale = 0.2;
  ufoGroup.add(ufo7);
  ufo7.addImage(ufo_img);

  ufo8 = createSprite(150, 100, 20, 20);
  ufo8.scale = 0.2;
  ufoGroup.add(ufo8);
  ufo8.addImage(ufo_img);

  ufo9 = createSprite(250, 100, 20, 20);
  ufo9.scale = 0.2;
  ufoGroup.add(ufo9);
  ufo9.addImage(ufo_img);

  ufo10 = createSprite(350, 100, 20, 20);
  ufo10.scale = 0.2;
  ufoGroup.add(ufo10);
  ufo10.addImage(ufo_img);

  ufo11 = createSprite(450, 100, 20, 20);
  ufo11.scale = 0.2;
  ufoGroup.add(ufo11);
  ufo11.addImage(ufo_img);

  ufo12 = createSprite(550, 100, 20, 20);
  ufo12.scale = 0.2;
  ufoGroup.add(ufo12);
  ufo12.addImage(ufo_img);

  ufo13 = createSprite(50, 175, 20, 20);
  ufo13.scale = 0.2;
  ufoGroup.add(ufo13);
  ufo13.addImage(ufo_img);

  ufo14 = createSprite(150, 175, 20, 20);
  ufo14.scale = 0.2;
  ufoGroup.add(ufo14);
  ufo14.addImage(ufo_img);

  ufo15 = createSprite(250, 175, 20, 20);
  ufo15.scale = 0.2;
  ufoGroup.add(ufo15);
  ufo15.addImage(ufo_img);

  ufo16 = createSprite(350, 175, 20, 20);
  ufo16.scale = 0.2;
  ufoGroup.add(ufo16);
  ufo16.addImage(ufo_img);

  ufo17 = createSprite(450, 175, 20, 20);
  ufo17.scale = 0.2;
  ufoGroup.add(ufo17);
  ufo17.addImage(ufo_img);

  ufo18 = createSprite(550, 175, 20, 20);
  ufo18.scale = 0.2;
  ufoGroup.add(ufo18);
  ufo18.addImage(ufo_img);

  ufo19 = createSprite(50, 250, 20, 20);
  ufo19.scale = 0.2;
  ufoGroup.add(ufo19);
  ufo19.addImage(ufo_img);

  ufo20 = createSprite(150, 250, 20, 20);
  ufo20.scale = 0.2;
  ufoGroup.add(ufo20);
  ufo20.addImage(ufo_img);

  ufo21 = createSprite(250, 250, 20, 20);
  ufo21.scale = 0.2;
  ufoGroup.add(ufo21);
  ufo21.addImage(ufo_img);

  ufo22 = createSprite(350, 250, 20, 20);
  ufo22.scale = 0.2;
  ufoGroup.add(ufo22);
  ufo22.addImage(ufo_img);

  ufo23 = createSprite(450, 250, 20, 20);
  ufo23.scale = 0.2;
  ufoGroup.add(ufo23);
  ufo23.addImage(ufo_img);

  ufo24 = createSprite(550, 250, 20, 20);
  ufo24.scale = 0.2;
  ufoGroup.add(ufo24);
  ufo24.addImage(ufo_img);

  keyPressed();
}

function draw() {
  background(0);

  back.play()

  if (gameState === "play") {

    if (keyIsDown(LEFT_ARROW)) {
      spaceship.x = spaceship.x - 2
    }

    if (keyIsDown(RIGHT_ARROW)) {
      spaceship.x = spaceship.x + 2
    }

    if (bulletGroup.isTouching(ufo1)) {
      ufo1.destroy();
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo2)) {
      ufo2.destroy();
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo3)) {
      ufo3.destroy();
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo4)) {
      ufo4.destroy();
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo5)) {
      ufo5.destroy();
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo6)) {
      ufo6.destroy();
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo7)) {
      ufo7.destroy();
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo8)) {
      ufo8.destroy();
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo9)) {
      ufo9.destroy();
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo10)) {
      ufo10.destroy();
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo11)) {
      ufo11.destroy();
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo12)) {
      ufo12.destroy();
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo13)) {
      ufo13.destroy();
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo14)) {
      ufo14.destroy();
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo15)) {
      ufo15.destroy();
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo16)) {
      ufo16.destroy();
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo17)) {
      ufo17.destroy();
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo18)) {
      ufo18.destroy();
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo19)) {
      ufo19.destroy();
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo20)) {
      ufo20.destroy();
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo21)) {
      ufo21.destroy();
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo22)) {
      ufo22.destroy();
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo23)) {
      ufo23.destroy();
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo24)) {
      ufo24.destroy();
      bulletGroup.destroyEach();
      ufo_def.play();
    }

    edges = createEdgeSprites();

    spaceship.collide(edges);

    if (bulletGroup1.isTouching(spaceship)) {
      gameState = "end";
    }
  } else if (gameState === "end") {
    spaceship.destroy();
    bulletGroup.destroyEach();

    earth = createSprite(225, 775, 20, 20);
    earth.addImage(earth_img);

    fill("red");
    textSize(25);
    text("GAME ENDED YOU LOSE!!!", 100, 400);

    if (frameCount % 60) {
      bullet1 = createSprite(random(0, 600), 10, 7, 12);
      bullet1.shapeColor = "red";
      bullet1.velocityY = 6;
      bulletGroup1.add(bullet1);
    }
  }

  drawSprites();
}

function keyPressed() {

  if (keyCode === 32) {
    bullet = createSprite(spaceship.x, spaceship.y, 5, 10);

    bullet.shapeColor = "blue";
    bullet.velocityY = -4;
    bulletGroup.add(bullet);

    bullet1 = createSprite(random(0, 600), 10, 7, 12);
    bullet1.shapeColor = "red";
    bullet1.velocityY = 9;
    bulletGroup1.add(bullet1);

    gunshot.play();
  }

}