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
    

    if(!(this.source in {'sine':0, 'sawtooth':0, 'square':0, 'triangle':0})){
        /** fetch resources **/
        var request = new XMLHttpRequest();
        request.open("GET", this.source, true);
        request.responseType = "arraybuffer";
        var that = this
        request.onload = function() {
            context.decodeAudioData(request.response, function onSuccess(decodedBuffer){
                that.decodedBuffer = decodedBuffer
            })
        }
        request.send();
        //////////////////////
    }

    this.setVolume = function(volume){
        this.volume = volume;
        // if(this.gain){this.gain.gain.value = volume};
    }

    this.playEnv = function(){
        this.gain.gain.linearRampToValueAtTime(0.0001, context.currentTime)
        this.gain.gain.linearRampToValueAtTime(this.volume, context.currentTime+this.env.attack)
        this.gain.gain.linearRampToValueAtTime(this.volume*this.env.sustain, context.currentTime+this.env.attack+this.env.decay)
        this.gain.gain.linearRampToValueAtTime(0.0001, context.currentTime+this.env.attack+this.env.decay+this.env.hold+this.env.release)
        this.soundSource.stop(context.currentTime+this.env.attack+this.env.decay+this.env.hold+this.env.release)
        ///////////////////////////
        this.soundSource.start(context.currentTime);
    }

    this.nodes = []
    this.plugEmIn = function(){
        for (var i=1; i<this.nodes.length; i++){
            this.nodes[i-1].connect(this.nodes[i])
        }
    }

    this.play = function(arg){
        if(arg && arg.volume){this.volume = arg.volume}
        if(this.source in {'sine':0, 'sawtooth':0, 'square':0, 'triangle':0}){            
            this.soundSource = context.createOscillator()
            this.soundSource.type = this.source
        }
        else{
            this.soundSource = context.createBufferSource();
            this.soundSource.buffer = that.decodedBuffer;    
        }

        this.nodes = []
        this.nodes.push(this.soundSource)

        this.gain = context.createGain()
        this.nodes.push(this.gain)

        this.nodes.push(context.destination)

        this.plugEmIn()

        /** this is the envelope **/
        this.playEnv()
    }

//If multiple instances of a sound are playing simultaneously, stopSound only can stop the most recent one
    this.stop = function(){
        this.gain.gain.linearRampToValueAtTime(.0001, context.currentTime+this.env.release)
        this.soundSource.stop(context.currentTime+this.env.release)
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
    env : {
        release : 5
    }
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


saw = new wad({
    source : 'sawtooth',
    env : {
        attack : .5,
        decay : .5,
        sutain : .9,
        hold : 2,
        release : 1
    }
})

tri = new wad({
    source : 'triangle',
    env : {
        attack : .15,
        decay : .2,
        sutain : .9,
        hold : 2,
        release : 1
    }
})