window.AudioContext = window.AudioContext || window.webkitAudioContext;
context = new AudioContext();

var wad = function(args){
    this.source = args.source;

    this.playSound = function(){ //url is the location of the sound
        var request = new XMLHttpRequest();
        request.open("GET", this.source, true);
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
}

phone = new wad({
    source : 'http://localhost:3000/us/sendaudio'
})