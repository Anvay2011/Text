rightwristx=0;
leftwristx=0;
difference=0;
nosex=0;
nosey=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background("grey");
    document.getElementById("square_sides").innerHTML="Font Size of the Text will be "+difference+"px";
    fill("white");
    stroke("white");
    text('Anvay',nosex,nosey)
    textSize(difference);
}

function modelLoaded(){
    console.log("poseNet loaded")
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
        console.log("Nosex= "+nosex+" Nosey= "+nosey);
        console.log("Left Wrist= "+leftwristx+" Right Wrist= " +rightwristx+" Difference= "+ difference);
    }
}

