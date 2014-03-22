var bloop = new Wad({source : 'sine', env : {hold : 1}, panning : 0})
var kick = new Wad({source : '/us/sendaudio/kick.mp3', reverb : {}})
kick.play({wait:3})


var bass = new Wad({
    source : 'sine',
    env : {
        attack : .1,
        decay : .1,
        sustain : .9,
        hold : .1,
        release : .1
    }
})
// var stereoBounce = setInterval(function(){
//     bloop.play({panning : 11})
//     setTimeout(function(){
//         bloop.play({panning : -11})
//     }, 500)
// }, 1000)

var oneLoop = function() {

    kick.play({wait : 00})
    // kick.play({wait : 01})
    // kick.play({wait : 02})
    // kick.play({wait : 03})
    kick.play({wait : 04})
    // kick.play({wait : 04.5})
    // kick.play({wait : 06})
    // kick.play({wait : 07})
    kick.play({wait : 08})
    kick.play({wait : 09})
    // kick.play({wait : 10})
    // kick.play({wait : 11})
    kick.play({wait : 12})
    // kick.play({wait : 13})
    kick.play({wait : 14})
    kick.play({wait : 15})
    bass.play({ pitch : 'C2', wait : 0.0})
    bass.play({ pitch : 'C3', wait : 0.5})
    bass.play({ pitch : 'C2', wait : 1.0})
    bass.play({ pitch : 'C3', wait : 1.5})
    bass.play({ pitch : 'C2', wait : 2.0})
    bass.play({ pitch : 'C3', wait : 2.5})
    bass.play({ pitch : 'C2', wait : 3.0})
    bass.play({ pitch : 'C3', wait : 3.5})
    bass.play({ pitch : 'F2', wait : 4.0})
    bass.play({ pitch : 'F3', wait : 4.5})
    bass.play({ pitch : 'F2', wait : 5.0})
    bass.play({ pitch : 'F3', wait : 5.5})
    bass.play({ pitch : 'F2', wait : 6.0})
    bass.play({ pitch : 'F3', wait : 6.5})
    bass.play({ pitch : 'F2', wait : 7.0})
    bass.play({ pitch : 'F3', wait : 7.5})
    bass.play({ pitch : 'Ab2', wait : 8.0})
    bass.play({ pitch : 'Ab3', wait : 8.5})
    bass.play({ pitch : 'Ab2', wait : 9.0})
    bass.play({ pitch : 'Ab3', wait : 9.5})
    bass.play({ pitch : 'Ab2', wait : 10.0})
    bass.play({ pitch : 'Ab3', wait : 10.5})
    bass.play({ pitch : 'Ab2', wait : 11.0})
    bass.play({ pitch : 'Ab3', wait : 11.5})
    bass.play({ pitch : 'G2', wait : 12.0})
    bass.play({ pitch : 'G3', wait : 12.5})
    bass.play({ pitch : 'G2', wait : 13.0})
    bass.play({ pitch : 'G3', wait : 13.5})
    bass.play({ pitch : 'G2', wait : 14.0})
    bass.play({ pitch : 'G3', wait : 14.5})
    bass.play({ pitch : 'G2', wait : 15.0})
    bass.play({ pitch : 'Bb2', wait : 15.5})

}

$(document).ready(function(){
    $('#go').on('click', function(){
        oneLoop();
        setInterval(oneLoop, 16000);
    })
    
})