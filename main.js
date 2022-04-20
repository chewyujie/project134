img ="";
status ="";
objects =[];
function preload()
{
    img = loadImage('dog_cat.jpg')
}
function setup()
{
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw()
{
    
    image(video,0,0,380,380);
    
     if(status="")
     {
         for(i = 0; 1< objects.length;i++)
         {
        r =random(255);
        g =random(255);
        b =random(255);

             objectDetector.detect(video,gotResults);
             document.getElementById("status").innerHTML = "Status : object detected";
             document.getElementById("number_of_objects").innerHTML = "Number of objevts detected are"+object.length;
            fill(r,g,b);
             fill("#FF0000");
             percent = floor(objects[i].confidence *100);
             text(objects[i].label +""+ percent +"%" , objects[i].x + 15, objects[i].y + 15 );
             noFill();
             stroke(r,g,b)
                stroke("#FF0000");
                rect(objects[i].x, objects[i].y, objects[i].width,objects[i].heigth);
         }
     }
}
function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(video, gotResults);
}
function gotResults(error, results)
{
    if (error){
        console.log(error);
    }
    console.log(results);
    objects =results;
}