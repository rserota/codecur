var bloop = new Wad({source : 'sine', env : {hold : 1}, panning : 0})
var kick = new Wad({source : '/us/sendaudio/kick.mp3'})
var bpm = 68
var beat = 60 / bpm

var bass = new Wad({
    source : 'sine',
    env : {
        attack : .1,
        decay : .1,
        sustain : .9,
        hold : .5,
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

    kick.play({wait : beat*1})
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
    bass.play({ pitch : 'C2',  wait : beat * 1})
    bass.play({ pitch : 'C3',  wait : beat * 2})
    bass.play({ pitch : 'C2',  wait : beat * 3})
    bass.play({ pitch : 'C3',  wait : beat * 4})
    bass.play({ pitch : 'C2',  wait : beat * 5})
    bass.play({ pitch : 'C3',  wait : beat * 6})
    bass.play({ pitch : 'C2',  wait : beat * 7})
    bass.play({ pitch : 'C3',  wait : beat * 8})
    bass.play({ pitch : 'F2',  wait : beat * 9})
    bass.play({ pitch : 'F3',  wait : beat * 10})
    bass.play({ pitch : 'F2',  wait : beat * 11})
    bass.play({ pitch : 'F3',  wait : beat * 12})
    bass.play({ pitch : 'F2',  wait : beat * 13})
    bass.play({ pitch : 'F3',  wait : beat * 14})
    bass.play({ pitch : 'F2',  wait : beat * 15})
    bass.play({ pitch : 'F3',  wait : beat * 16})
    bass.play({ pitch : 'Ab2', wait : beat * 17})
    bass.play({ pitch : 'Ab3', wait : beat * 18})
    bass.play({ pitch : 'Ab2', wait : beat * 19})
    bass.play({ pitch : 'Ab3', wait : beat * 20})
    bass.play({ pitch : 'Ab2', wait : beat * 21})
    bass.play({ pitch : 'Ab3', wait : beat * 22})
    bass.play({ pitch : 'Ab2', wait : beat * 23})
    bass.play({ pitch : 'Ab3', wait : beat * 24})
    bass.play({ pitch : 'G2',  wait : beat * 25})
    bass.play({ pitch : 'G3',  wait : beat * 26})
    bass.play({ pitch : 'G2',  wait : beat * 27})
    bass.play({ pitch : 'G3',  wait : beat * 28})
    bass.play({ pitch : 'G2',  wait : beat * 29})
    bass.play({ pitch : 'G3',  wait : beat * 30})
    bass.play({ pitch : 'G2',  wait : beat * 31})
    bass.play({ pitch : 'Bb2', wait : beat * 32})

}

$(document).ready(function(){
    $('#go').on('click', function(){
        oneLoop();
        setInterval(oneLoop, 16000);
    })
    
})