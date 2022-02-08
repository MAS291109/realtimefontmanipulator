leftWrist_x = 0;
rightWrist_x = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560,110);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#abdeeb');
    document.getElementById("font_size").innerHTML = "Font Size = "+difference+"px";
    textSize(difference);
    fill("#000000");
    text('Meghna',70,200);
}

function modelLoaded(){
    console.log("PoseNet Is Working");
}

function gotPoses(results,error){
    if(error){
        console.log(error);
    }
    if(results.length > 0){
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;

        difference = floor(leftWrist_x - rightWrist_x);

        console.log("rightWrist_X = "+results[0].pose.rightWrist.x);
        console.log("leftWrist_X = "+results[0].pose.leftWrist.x);
    } 
}