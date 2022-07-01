function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/s0LfrPUeS/model.json",modelready);
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
    img=document.getElementById("animal");
    if(results[0].label=="Barking"){
        img.src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F1155826%2Fscreenshots%2F4134590%2Fdog_dance_dribbble.gif&f=1&nofb=1";
    }
    else if(results[0].label=="Meowing"){
        img.src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F31.media.tumblr.com%2F35973342a8f51315023d58c249664b00%2Ftumblr_n9hu86QyRL1sedjuto1_400.gif&f=1&nofb=1";
    }
    else{
        img.src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fblog-guru.net%2Fwp-content%2Fuploads%2F2015%2F11%2FSensorineural-Hearing-Loss-Symptoms.gif%3Fresize%3D636%252C358%26ssl%3D1&f=1&nofb=1";
    }
}
