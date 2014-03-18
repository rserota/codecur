var bloop = new Wad({source : 'sine', env : {hold : 1}, panning : 0})
var kick = new Wad({source : '/us/sendaudio/kick.mp3'})

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
    kick.play({wait : 01})
    kick.play({wait : 02})
    kick.play({wait : 03})
    kick.play({wait : 04})
    kick.play({wait : 05})
    kick.play({wait : 06})
    kick.play({wait : 07})
    kick.play({wait : 08})
    kick.play({wait : 09})
    kick.play({wait : 10})
    kick.play({wait : 11})
    kick.play({wait : 12})
    kick.play({wait : 13})
    kick.play({wait : 14})
    kick.play({wait : 15})
    bass.play({ pitch : 'C2', wait : 00.0})
    bass.play({ pitch : 'C3', wait : 00.5})
    bass.play({ pitch : 'C2', wait : 01.0})
    bass.play({ pitch : 'C3', wait : 01.5})
    bass.play({ pitch : 'C2', wait : 02.0})
    bass.play({ pitch : 'C3', wait : 02.5})
    bass.play({ pitch : 'C2', wait : 03.0})
    bass.play({ pitch : 'C3', wait : 03.5})
    bass.play({ pitch : 'F2', wait : 04.0})
    bass.play({ pitch : 'F3', wait : 04.5})
    bass.play({ pitch : 'F2', wait : 05.0})
    bass.play({ pitch : 'F3', wait : 05.5})
    bass.play({ pitch : 'F2', wait : 06.0})
    bass.play({ pitch : 'F3', wait : 06.5})
    bass.play({ pitch : 'F2', wait : 07.0})
    bass.play({ pitch : 'F3', wait : 07.5})
    bass.play({ pitch : 'Ab2', wait : 08.0})
    bass.play({ pitch : 'Ab3', wait : 08.5})
    bass.play({ pitch : 'Ab2', wait : 09.0})
    bass.play({ pitch : 'Ab3', wait : 09.5})
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