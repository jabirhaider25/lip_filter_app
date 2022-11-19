noseX = 0;
noseY = 0;
function take_snapshot()
{
save('myFilterimage.png');
}
function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw() {
image(video, 0, 0, 300, 300);
image(lip_stick,noseX,noseY,30,30)
}
function preload() {
lip_stick = loadImage('https://i.postimg.cc/TYWf79BZ/image-processing20210615-6157-hwoqzg.png');
}

function modelLoaded() {
console.log('poseNet is initialized');
}
function gotPoses(results) {
if (results.length > 0);
{
console.log(results)
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("noseX = "+noseX);
console.log("noseY = "+noseY);
}
}



