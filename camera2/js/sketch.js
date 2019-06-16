let angle = 0

function setup () {
  createCanvas(400, 300, WEBGL);
}

function draw () {
  background(0)

  // 地震のような動き
  let camX = random(-10, 10)
  let camY = random(-10, 10)
  let camZ = random(-10, 10)
  camera(camX, camY, camZ + (height / 2) / tan(PI / 6), 0, 0, 0, 0, 1, 0)

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