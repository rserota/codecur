
    var context, 
        audioData,
        soundSource, 
        decodedBuffer,
        url = 'http://localhost:3000/us/sendaudio';

    // Step 1 - Initialise the Audio Context
    function init() {
        if (typeof AudioContext !== "undefined") {
            context = new AudioContext();
        } else if (typeof webkitAudioContext !== "undefined") {
            context = new webkitAudioContext();
        } else {
            throw new Error('AudioContext not supported. :(');
        }
    }

    // Step 2: Load our Sound using XHR
    function playSound() {
        var request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.responseType = "arraybuffer";
        request.onload = function() {
            context.decodeAudioData(request.response, function onSuccess(decodedBuffer){
                decodedBuffer = decodedBuffer
                soundSource = context.createBufferSource();
                soundSource.buffer = decodedBuffer;    
                soundSource.connect(context.destination);
                soundSource.start(0);

            })        
        };
        request.send();
    }


    init();
    playSound() 

