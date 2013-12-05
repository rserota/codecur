window.AudioContext = window.AudioContext || window.webkitAudioContext;
context = new AudioContext();

var wad = function(arg){
    this.source = arg.source;
    this.volume = arg.volume || 1 // peak volume. min:0, max:1 (actually max is infinite, but ...just keep it at or below 1)
    this.attack = arg.attack || 0 // time in seconds from onset to peak volume
    this.decay = arg.decay || 0 // time in seconds from peak volume to sustain volume
    this.sustain = arg.sustain || 1 // sustain volume level, as a percent of peak volume. min:0, max:1
    this.hold = arg.hold || 9001 // time in seconds to maintain sustain volume
    this.release = arg.release || 0 // time in seconds from sustain volume to zero volume
    this.setVolume = function(volume){
        this.volume = volume;
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
                that.soundSource = context.createBufferSource();
                that.soundSource.buffer = decodedBuffer;    
                that.gain = context.createGain()
                that.soundSource.connect(that.gain);
                that.gain.connect(context.destination)
                //this is the envelope
                that.gain.gain.linearRampToValueAtTime(0.0001, context.currentTime)
                that.gain.gain.linearRampToValueAtTime(that.volume, context.currentTime+that.attack)
                that.gain.gain.linearRampToValueAtTime(that.volume*that.sustain, context.currentTime+that.attack+that.decay)
                that.gain.gain.linearRampToValueAtTime(0.0001, context.currentTime+that.attack+that.decay+that.hold+that.release)

                that.soundSource.start(context.currentTime);

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
    source : 'http://localhost:3000/us/sendaudio/household022.wav',
    attack : 1
})

asm = new wad({
    source : 'http://localhost:3000/us/sendaudio/asm.mp3',
    attack : 10
})

tone = new wad({
    source : 'http://localhost:3000/us/sendaudio/A2.wav',
    attack : .1,
    decay : .2,
    sustain : .9,
    hold : .5,
    release : .9
})

tone2 = new wad({
    source : 'http://localhost:3000/us/sendaudio/A2.wav',
    attack : .1,
    decay : .2,
    sustain : .4,
    hold : .5,
    release : .9
})