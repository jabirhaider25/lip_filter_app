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
}
function preload() {

}

function modelLoaded() {
console.log('poseNet is initialized');
}
function gotPoses(results) {
if (results.length > 0);
{
console.log(results)
console.log("lip_x =" + results[0].pose.lip.x);
console.log("lip_y =" + results[0].pose.lip.y);
}
}



