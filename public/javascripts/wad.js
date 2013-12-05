window.AudioContext = window.AudioContext || window.webkitAudioContext;
context = new AudioContext();

var wad = function(arg){
    this.source = arg.source;
    this.volume = arg.volume || 1
    this.setVolume = function(volume){
        if(this.gain){this.gain.gain.value = volume};
    }

    this.playSound = function(arg){
        if(arg && arg.volume){this.volume = arg.volume}
        var request = new XMLHttpRequest();
        request.open("GET", this.source, true);
        request.responseType = "arraybuffer";
        var that = this
        request.onload = function() {
            context.decodeAudioData(request.response, function onSuccess(decodedBuffer){
                console.log(that)
                that.soundSource = context.createBufferSource();
                that.soundSource.buffer = decodedBuffer;    
                that.gain = context.createGain()
                that.soundSource.connect(that.gain);
                that.gain.connect(context.destination)
                that.setVolume(that.volume)
                that.soundSource.start(0);

            })        
        };
        request.send();
    }

//If multiple instances of a sound are playing simultaneously, stopSound only can stop the most recent one
    this.stopSound = function(){
        this.soundSource.stop(0)
    }
}

phone = new wad({
    source : 'http://localhost:3000/us/sendaudio/household022.wav'
})

asm = new wad({
    source : 'http://localhost:3000/us/sendaudio/asm.mp3'
})