let angle = 0

function setup () {
  createCanvas(400, 300, WEBGL);
}

function draw () {
  background(0)
  
  // マウスの横移動に応じてカメラを動かす
  let camX = map(mouseX, 0, width, -200, 0)
  camera(camX, 0, (height / 2) / tan(PI / 6), camX, 0, 0, 0, 1, 0)

  ambientLight(255)

  // 四角
  push()
  rotateX(angle)
  rotateY(angle * 0.3)
  rotateZ(angle * 1.2)
  noStroke()
  normalMaterial()
  box(100)
  pop()

  translate(0, 100)

  // 床
  push()
  noStroke()
  fill(123)
  box(500, 1, 500)
  pop()

  angle += 0.02
}