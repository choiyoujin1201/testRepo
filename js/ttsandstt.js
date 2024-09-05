// Web Speech API TTS
function speech(text){
    const speecher = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();

    speecher.voice = voices.find((voice) => voice.lang == 'ko-KR');

    window.speechSynthesis.speak(speecher);
}

// Web Speech API STT
function startRecord(){
    recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    recognition.lang = 'ko';
    recognition.maxAlternatives = 5;

    recognition.addEventListener('speechstart', () => {
        console.log('record start');
    });

    recognition.addEventListener('speechend', () => {
        console.log('record end');
    });

    recognition.addEventListener('result', (e) => {
        console.log(e.results[0][0].transcript);
    });

    recognition.start();
}

function startSpeechRecognition() {
    return new Promise((resolve, reject) => {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        
        recognition.interimResults = false; // 중간 결과를 받을지 여부
        recognition.lang = 'ko-KR'; // 한국어 설정

        recognition.onstart = () => {
            console.log('음성 인식이 시작되었습니다.');
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript; // 인식된 텍스트
            resolve(transcript); // Promise를 해결
        };

        recognition.onerror = (event) => {
            reject(new Error(`음성 인식 오류: ${event.error}`)); // 오류 발생 시 Promise를 거부
        };

        recognition.onend = () => {
            console.log('음성 인식이 종료되었습니다.');
        };

        recognition.start(); // 음성 인식 시작
    });
}

// 사용 예시
// startSpeechRecognition()
//     .then(transcript => {
//         console.log('인식된 텍스트:', transcript);
//     })
//     .catch(error => {
//         console.error(error);
//     });
