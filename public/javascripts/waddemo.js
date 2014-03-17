var bloop = new Wad({source : 'sine', env : {hold : 1}, panning : 0})
var kick = new Wad({source : 'http://codecur.io/us/sendaudio/kick.mp3'})

// var bass = new Wad({
//     source : 'sine',
//     env : {
//         attack : .3,
//         hold : 1
//     }
// })
// var stereoBounce = setInterval(function(){
//     bloop.play({panning : 11})
//     setTimeout(function(){
//         bloop.play({panning : -11})
//     }, 500)
// }, 1000)

var oneLoop = function() {

    setTimeout(function(){ kick.play() }, 0000)
    setTimeout(function(){ kick.play() }, 1000)
    setTimeout(function(){ kick.play() }, 2000)
    setTimeout(function(){ kick.play() }, 3000)
    setTimeout(function(){ kick.play() }, 4000)
    setTimeout(function(){ kick.play() }, 5000)
    setTimeout(function(){ kick.play() }, 6000)
    setTimeout(function(){ kick.play() }, 7000)

    // setTimeout(function(){ bass.play({pitch : 'C2'}) }, 0000)


}
oneLoop();
setInterval(oneLoop, 8000);