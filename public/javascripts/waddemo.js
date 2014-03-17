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

    setTimeout(function(){ kick.play() }, 00000)
    setTimeout(function(){ kick.play() }, 01000)
    setTimeout(function(){ kick.play() }, 02000)
    setTimeout(function(){ kick.play() }, 03000)
    setTimeout(function(){ kick.play() }, 04000)
    setTimeout(function(){ kick.play() }, 05000)
    setTimeout(function(){ kick.play() }, 06000)
    setTimeout(function(){ kick.play() }, 07000)

    setTimeout(function(){ kick.play() }, 08000)
    setTimeout(function(){ kick.play() }, 09000)
    setTimeout(function(){ kick.play() }, 10000)
    setTimeout(function(){ kick.play() }, 11000)
    setTimeout(function(){ kick.play() }, 12000)
    setTimeout(function(){ kick.play() }, 13000)
    setTimeout(function(){ kick.play() }, 14000)
    setTimeout(function(){ kick.play() }, 15000)

    setTimeout(function(){ bass.play({ pitch : 'C2' }) }, 00000)
    setTimeout(function(){ bass.play({ pitch : 'C3' }) }, 00500)
    setTimeout(function(){ bass.play({ pitch : 'C2' }) }, 01000)
    setTimeout(function(){ bass.play({ pitch : 'C3' }) }, 01500)
    setTimeout(function(){ bass.play({ pitch : 'C2' }) }, 02000)
    setTimeout(function(){ bass.play({ pitch : 'C3' }) }, 02500)
    setTimeout(function(){ bass.play({ pitch : 'C2' }) }, 03000)
    setTimeout(function(){ bass.play({ pitch : 'C3' }) }, 03500)
    setTimeout(function(){ bass.play({ pitch : 'F2' }) }, 04000)
    setTimeout(function(){ bass.play({ pitch : 'F3' }) }, 04500)
    setTimeout(function(){ bass.play({ pitch : 'F2' }) }, 05000)
    setTimeout(function(){ bass.play({ pitch : 'F3' }) }, 05500)
    setTimeout(function(){ bass.play({ pitch : 'F2' }) }, 06000)
    setTimeout(function(){ bass.play({ pitch : 'F3' }) }, 06500)
    setTimeout(function(){ bass.play({ pitch : 'F2' }) }, 07000)
    setTimeout(function(){ bass.play({ pitch : 'F3' }) }, 07500)

    setTimeout(function(){ bass.play({ pitch : 'Ab2'}) }, 08000)
    setTimeout(function(){ bass.play({ pitch : 'Ab3'}) }, 08500)
    setTimeout(function(){ bass.play({ pitch : 'Ab2'}) }, 09000)
    setTimeout(function(){ bass.play({ pitch : 'Ab3'}) }, 09500)
    setTimeout(function(){ bass.play({ pitch : 'Ab2'}) }, 10000)
    setTimeout(function(){ bass.play({ pitch : 'Ab3'}) }, 10500)
    setTimeout(function(){ bass.play({ pitch : 'Ab2'}) }, 11000)
    setTimeout(function(){ bass.play({ pitch : 'Ab3'}) }, 11500)
    setTimeout(function(){ bass.play({ pitch : 'G2' }) }, 12000)
    setTimeout(function(){ bass.play({ pitch : 'G3' }) }, 12500)
    setTimeout(function(){ bass.play({ pitch : 'G2' }) }, 13000)
    setTimeout(function(){ bass.play({ pitch : 'G3' }) }, 13500)
    setTimeout(function(){ bass.play({ pitch : 'G2' }) }, 14000)
    setTimeout(function(){ bass.play({ pitch : 'G3' }) }, 14500)
    setTimeout(function(){ bass.play({ pitch : 'G2' }) }, 15000)
    setTimeout(function(){ bass.play({ pitch : 'Bb2'}) }, 15500)

}

$(document).ready(function(){
    $('#go').on('click', function(){
        oneLoop();
        setInterval(function(){oneLoop(), 16000});
    })
    
})