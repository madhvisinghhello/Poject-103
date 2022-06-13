Webcam.set({
    width:350, 
    height:300,
    Image_format:'png',
    png_quality:90
});

camera=document.getElementById("Camera");

Webcam.attach('#Camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier=ml4.imageClassifier('https://teachablemachine.withgoogle.com/models/juRQqDXMI/model.json', modelLoaded);
function madelLoaded(){
    console.log('model Loaded');
}
function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}