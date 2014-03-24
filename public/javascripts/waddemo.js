var bloop = new Wad({source : 'sine', env : {hold : 1}, panning : 0})
var kick = new Wad({source : '/us/sendaudio/kick.mp3'})
var bpm = 68
var beat = 60 / bpm

var bass = new Wad({
    source : 'sine',
    volume : .9,
    env : {
        attack : .1,
        decay : .1,
        sustain : .9,
        hold : .4,
        release : .1
    }
})


var hat = new Wad(Wad.presets.highHatClosed)
var snare = new Wad(Wad.presets.snare)
var hatOpen = new Wad(Wad.presets.highHatOpen)
Wad.setGlobalReverb({impulse : '/us/sendaudio/longhall.wav', wet : .1})
snare.setVolume(9)
// var stereoBounce = setInterval(function(){
//     bloop.play({panning : 11})
//     setTimeout(function(){
//         bloop.play({panning : -11})
//     }, 500)
// }, 1000)

var oneLoop = function() {
    hat.play({wait : beat * 0.5})
    hat.play({wait : beat * 1.5})
    hat.play({wait : beat * 2.5})
    hat.play({wait : beat * 3.0})
    hatOpen.play({wait : beat * 3.5, panning : .1})
    hat.play({wait : beat * 4.5})
    hat.play({wait : beat * 5.5})
    hat.play({wait : beat * 6.5})
    hat.play({wait : beat * 7.0})
    hatOpen.play({wait : beat * 7.5, panning : -.1})


    hat.play({wait : beat * (0.5 + 8)})
    hat.play({wait : beat * (1.5 + 8)})
    hat.play({wait : beat * (2.5 + 8)})
    hat.play({wait : beat * (3.0 + 8)})
    hatOpen.play({wait : beat * (3.5 + 8), panning : .1})
    hat.play({wait : beat * (4.5 + 8)})
    hat.play({wait : beat * (5.5 + 8)})
    hat.play({wait : beat * (6.5 + 8)})
    hat.play({wait : beat * (7.0 + 8)})

    snare.play({wait : beat * 1})
    snare.play({wait : beat * 2.25})
    snare.play({wait : beat * 3})
    snare.play({wait : beat * 5})
    snare.play({wait : beat * 6.25})
    snare.play({wait : beat * 7})

    snare.play({wait : beat * (1 + 8)})
    snare.play({wait : beat * (2.25 + 8)})
    snare.play({wait : beat * (3 + 8)})
    snare.play({wait : beat * (5 + 8)})
    snare.play({wait : beat * (6.25 + 8)})
    snare.play({wait : beat * (7 + 8)})


    kick.play({wait : beat*0})
    kick.play({wait : beat*2})
    kick.play({wait : beat*4})
    // kick.play({wait : beat*4.5})
    kick.play({wait : beat*6})
    // kick.play({wait : beat*7})
    // kick.play({wait : beat*7.5})
    kick.play({wait : beat*(0+8)})
    kick.play({wait : beat*(2+8)})
    kick.play({wait : beat*(4+8)})
    // kick.play({wait : beat*(4.5+8)})
    kick.play({wait : beat*(6+8)})
    // kick.play({wait : beat*(7+8)})
    kick.play({wait : beat*(7.5+8)})
    bass.play({ pitch : 'C2',   wait : beat * 0})
    bass.play({ pitch : 'C3',   wait : beat * .5})
    bass.play({ pitch : 'C2',   wait : beat * 1})
    bass.play({ pitch : 'C3',   wait : beat * 1.5})
    bass.play({ pitch : 'C2',   wait : beat * 2})
    bass.play({ pitch : 'C3',   wait : beat * 2.5})
    bass.play({ pitch : 'C2',   wait : beat * 3})
    bass.play({ pitch : 'C3',   wait : beat * 3.5})
    bass.play({ pitch : 'F2',   wait : beat * 4})
    bass.play({ pitch : 'F3',  wait : beat * 4.5})
    bass.play({ pitch : 'F2',  wait : beat * 5})
    bass.play({ pitch : 'F3',  wait : beat * 5.5})
    bass.play({ pitch : 'F2',  wait : beat * 6})
    bass.play({ pitch : 'F3',  wait : beat * 6.5})
    bass.play({ pitch : 'F2',  wait : beat * 7})
    bass.play({ pitch : 'F3',  wait : beat * 7.5})
    bass.play({ pitch : 'Ab2', wait : beat * 8})
    bass.play({ pitch : 'Ab3', wait : beat * 8.5})
    bass.play({ pitch : 'Ab2', wait : beat * 9})
    bass.play({ pitch : 'Ab3', wait : beat * 9.5})
    bass.play({ pitch : 'Ab2', wait : beat * 10})
    bass.play({ pitch : 'Ab3', wait : beat * 10.5})
    bass.play({ pitch : 'Ab2', wait : beat * 11})
    bass.play({ pitch : 'Ab3', wait : beat * 11.5})
    bass.play({ pitch : 'G2',  wait : beat * 12})
    bass.play({ pitch : 'G3',  wait : beat * 12.5})
    bass.play({ pitch : 'G2',  wait : beat * 13})
    bass.play({ pitch : 'G3',  wait : beat * 13.5})
    bass.play({ pitch : 'G2',  wait : beat * 14})
    bass.play({ pitch : 'G3',  wait : beat * 14.5})
    bass.play({ pitch : 'G2',  wait : beat * 15})
    bass.play({ pitch : 'Bb2', wait : beat * 15.5})

}

$(document).ready(function(){
    $('#go').on('click', function(){
        oneLoop();
        setInterval(oneLoop, Math.floor(beat * 16 * 1000));
    })
    
})