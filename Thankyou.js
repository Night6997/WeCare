var SpeechRecognition=window.webkitSpeechRecognition;
var RecognitionAI = new SpeechRecognition();

function speak(){

    var synth = window.speechSynthesis;
    speak_data = "Thank you for donating to Lifeline, Feel free to donate more items!";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    SpeechRecognition.stop();

    speak();
}