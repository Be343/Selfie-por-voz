var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event)

    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content=="X")
    {console.log("Tirando minha selfie")
        speak();
    }

}
function speak() {
    var synth = window.speechSynthesis;
    //speak_data = document.getElementById("textbox").value;
    speak_data="Tirando a sua selfie em cinco segundos..."
    var utterThis = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterThis);

    Webcam.attach(camera)
    setTimeout(function(){
        tirarFoto();
        save();
    },5000)
}
camera = document.getElementById("camera");

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
})

function tirarFoto(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'"/>'
    })
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie").src;
    link.href=image;
    link.click()
}