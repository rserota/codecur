window.AudioContext = window.AudioContext || window.webkitAudioContext;
context = new AudioContext();

var wad = function(arg){
    this.source = arg.source;
    this.volume = arg.volume || 1 // peak volume. min:0, max:1 (actually max is infinite, but ...just keep it at or below 1)
        this.env = {
            attack : arg.env ? (arg.env.attack || 0) : 0, // time in seconds from onset to peak volume
            decay : arg.env ? (arg.env.decay || 0) : 0, // time in seconds from peak volume to sustain volume
            sustain : arg.env ? (arg.env.sustain || 1) : 1, // sustain volume level, as a percent of peak volume. min:0, max:1
            hold : arg.env ? (arg.env.hold || 9001) : 9001, // time in seconds to maintain sustain volume
            release : arg.env ? (arg.env.release || 0) : 0 // time in seconds from sustain volume to zero volume
        }
    
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
                that.gain.gain.linearRampToValueAtTime(that.volume, context.currentTime+that.env.attack)
                that.gain.gain.linearRampToValueAtTime(that.volume*that.env.sustain, context.currentTime+that.env.attack+that.env.decay)
                that.gain.gain.linearRampToValueAtTime(0.0001, context.currentTime+that.env.attack+that.env.decay+that.env.hold+that.env.release)

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
    env : {
        attack : 1
    }
})

asm = new wad({
    source : 'http://localhost:3000/us/sendaudio/asm.mp3',
})

tone = new wad({
    source : 'http://localhost:3000/us/sendaudio/A2.wav',
    env : {
        attack : .1,
        decay : .2,
        sustain : .9,
        hold : .5,
        release : .9
    }
})

tone2 = new wad({
    source : 'http://localhost:3000/us/sendaudio/A2.wav',
    env : {
        attack : .1,
        decay : .2,
        sustain : .4,
        hold : .5,
        release : .9
    }
})