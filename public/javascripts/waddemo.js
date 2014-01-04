var bloop = new Wad({
    source : 'sine',
   
    env : {
        attack : .1,
        decay : .3,
        hold : .3,
        sustain : .8,
        release : .2
    },
    panning : 0


})

// bloop.play()

// var stereoBounce = setInterval(function(){
//     bloop.play({panning : 11})
//     setTimeout(function(){
//         bloop.play({panning : -11})
//     }, 500)
// }, 1000)

var bpm = 120
var pattern = [
    {args : {pitch: 'C5'}, beat : 1},
    {args: {pitch: 'Eb5'}, beat : 3},
    {args: {pitch: 'G5'}, beat : 5},
    {args: {pitch: 'Bb5'}, beat : 7}
]

var playTimeout = function(instrument, pattern, i){
    setTimeout(function(){instrument.play(pattern[i].args)}, (pattern[i].beat - 1) * (60000/bpm))
}

var playPattern = function(instrument, pattern){
    for (var i = 0; i < pattern.length; i++){
        playTimeout(instrument, pattern, i)
    } 
}

setInterval(function(){
    playPattern(bloop, pattern)
}, 4000)
