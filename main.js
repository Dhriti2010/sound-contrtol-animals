function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("",modelready);
}
function modelready(){
    classifier.classify(gotresults);
}
function gotresults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("label").innerHTML="I can hear- "+results[0].label;
        document.getElementById("accuracy").innerHTML="Accuracy- "+(results[0].confidence*100).toFixed(2)+" %";
    }
}
