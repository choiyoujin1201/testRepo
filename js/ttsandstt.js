// Web Speech API TTS
function speech(text){
    const speecher = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();

    speecher.voice = voices.find((voice) => voice.lang == 'ko-KR');

    window.speechSynthesis.speak(speecher);
}

// Web Speech API STT
