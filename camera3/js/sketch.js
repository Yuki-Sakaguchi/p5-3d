let angle = 0

function setup () {
  createCanvas(400, 300, WEBGL);
}

function draw () {
  background(0)

  // 遠近法を無視したカメラでマウスの位置で距離を変える
  let fov = map(mouseX, 0, width, 0, PI)
  let cameraZ = (height / 2) / tan((PI / 3) / 2)
  perspective(fov, width / height, cameraZ / 10, cameraZ * 10)

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