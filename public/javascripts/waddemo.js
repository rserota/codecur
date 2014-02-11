var bloop = new Wad({
    source : 'sine',
   
    env : {
        attack : .1,
        decay : .3,
        hold : .3,
        sustain : .8,
        release : .2
    },
    panning : 0,
    reverb : .3


})

// bloop.play()

// var stereoBounce = setInterval(function(){
//     bloop.play({panning : 11})
//     setTimeout(function(){
//         bloop.play({panning : -11})
//     }, 500)
// }, 1000)

var noise = new Wad({
    source : 'noise',
    volume : 2,
    filter : {
        type : 'lowpass',
        frequency : 900,
        q : .9
    },
    // reverb : .2,
    env : {
        attack : .02,
        decay : .01,
        hold : .1,
        sustain : .1,
        release : .01
    }
})

// var mic = new Wad({
//     source : 'mic',
//     volume : 2.0,
//     reverb : .2,
//     filter : {
//         type : 'lowpass',
//         frequency : 200
//     }
// })

var bpm = 80
var pattern = [
    {instrument : noise, args : {}, beat : 1.5},
    {instrument : noise, args : {}, beat : 2.5},
    {instrument : noise, args : {}, beat : 3.5},
    {instrument : noise, args : {}, beat : 4.5},
    {instrument : noise, args : {}, beat : 5.5},
    {instrument : noise, args : {}, beat : 6.5},
    {instrument : noise, args : {}, beat : 7.5},
    {instrument : noise, args : {}, beat : 8.5},
    {instrument : bloop, args : {pitch: 'C5'}, beat : 1},
    {instrument : bloop, args: {pitch: 'Eb5'}, beat : 3},
        {instrument : bloop, args : {pitch: 'C5'}, beat : 1.5},

    {instrument : bloop, args: {pitch: 'G5'}, beat : 5},
    {instrument : bloop, args: {pitch: 'Bb5'}, beat : 7}
]

var playTimeout = function(pattern, i){
    setTimeout(function(){pattern[i].instrument.play(pattern[i].args)}, (pattern[i].beat - 1) * (60000/bpm))
}

var playPattern = function(pattern){
    for (var i = 0; i < pattern.length; i++){
        playTimeout(pattern, i)
    } 
}

setInterval(function(){
    playPattern(pattern)
}, 4000)


