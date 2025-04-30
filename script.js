const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const image = new Image();
image.src = "meme.png"; 
function generate() {
  const text1 = document.getElementById("text1").value;
  const text2 = document.getElementById("text2").value.split("\n");

  image.onload = () => {
    drawAll(text1, text2);
  };

  if (image.complete) {
    drawAll(text1, text2);
  }
}

function drawAll(text1, text2) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  // TEXT 1
  ctx.save();
  ctx.translate(1300, 1100); 
  ctx.rotate(75 * Math.PI / 180);
  ctx.fillStyle = "black";
  ctx.font = "bold 60px Arial";
  ctx.fillText(text1, 75, -900);
  ctx.restore();

  // TEXT 2
  ctx.fillStyle = "black";
  ctx.font = "70px Arial";

  const startX = 800;
  const startY = 2650;
  const lineSpacing = 250;

  text2.forEach((line, i) => {
    ctx.save();
    ctx.translate(startX, startY + i * lineSpacing);
    ctx.rotate(-20 * Math.PI / 180);
    ctx.fillText(line, 1300,-25);
    ctx.restore();
  });
}

function saveImage() {
  const link = document.createElement("a");
  link.download = "meme.png";
  link.href = canvas.toDataURL();
  link.click();
}