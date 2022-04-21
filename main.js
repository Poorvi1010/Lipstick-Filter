lipsx=0;
lipsy=0;
function preload()
{

}
function setup()
{
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses)
}
function modelLoaded()
{
console.log("PoseNet is Initialized")
}
function gotPoses(results)
{
 if(results.length>0)
{
console.log(results)
lipsx=results[0].pose.lips.x;
lipsy=results[0].pose.lips.y;
 }
}
function draw()
{

}
function Snapshot()
{
 save("Lipstick_Filter_Image.png")
}