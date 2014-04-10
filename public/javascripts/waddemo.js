var bloop = new Wad({source : 'sine', env : {hold : 1}, panning : 0})
var kick = new Wad({source : '/us/sendaudio/kick.mp3'})
kick.globalReverb = true
var bpm = 68
var beat = 60 / bpm

var bass = new Wad({
    source : 'sine',
    volume : .9,
    globalReverb : true,
    env : {
        attack : .02,
        decay : .1,
        sustain : .9,
        hold : .4,
        release : .1
    }
})

var piano = new Wad({source : 'square', volume : 1.4, env : {attack : .01, decay : .005, sustain : .2, hold : .015, release : .3}, filter : {type : 'lowpass', frequency : 1200, q : 8.5, env : {attack : .2, frequency : 600}}})
piano.globalReverb = true

var hat = new Wad(Wad.presets.highHatClosed)
hat.globalReverb = true
var snare = new Wad(Wad.presets.snare)
snare.globalReverb = true
var hatOpen = new Wad(Wad.presets.highHatOpen)
hatOpen.globalReverb = true
var ghost = new Wad(Wad.presets.ghost)
Wad.setGlobalReverb({impulse : '/us/sendaudio/longhall.wav', wet : .5})
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
    hatOpen.play({wait : beat * 3.5, panning : [1, 1, 1]})
    hat.play({wait : beat * 4.5})
    hat.play({wait : beat * 5.5})
    hat.play({wait : beat * 6.5})
    hat.play({wait : beat * 7.0})
    hatOpen.play({wait : beat * 7.5, panning : [-1, -1, -1]})


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

    hat.play({wait : beat * (0.5 + 16)})
    hat.play({wait : beat * (1.5 + 16)})
    hat.play({wait : beat * (2.5 + 16)})
    hat.play({wait : beat * (3.0 + 16)})
    hatOpen.play({wait : beat * (3.5 + 16), panning : .1})
    hat.play({wait : beat * (4.5 + 16)})
    hat.play({wait : beat * (5.5 + 16)})
    hat.play({wait : beat * (6.5 + 16)})
    hat.play({wait : beat * (7.0 + 16)})
    hatOpen.play({wait : beat * (7.5 + 16), panning : -.1})


    hat.play({wait : beat * (0.5 + 24)})
    hat.play({wait : beat * (1.5 + 24)})
    hat.play({wait : beat * (2.5 + 24)})
    hat.play({wait : beat * (3.0 + 24)})
    hatOpen.play({wait : beat * (3.5 + 24), panning : .1})
    hat.play({wait : beat * (4.5 + 24)})
    hat.play({wait : beat * (5.5 + 24)})
    hat.play({wait : beat * (6.5 + 24)})
    hat.play({wait : beat * (7.0 + 24)})

    snare.play({wait : beat * (1 + 16)})
    snare.play({wait : beat * (2.25 + 16)})
    snare.play({wait : beat * (3 + 16)})
    snare.play({wait : beat * (5 + 16)})
    snare.play({wait : beat * (6.25 + 16)})
    snare.play({wait : beat * (7 + 16)})

    snare.play({wait : beat * (1 + 24)})
    snare.play({wait : beat * (2.25 + 24)})
    snare.play({wait : beat * (3 + 24)})
    snare.play({wait : beat * (5 + 24)})
    snare.play({wait : beat * (6.25 + 24)})
    snare.play({wait : beat * (7 + 24)})


    kick.play({wait : beat*(0 + 16)})
    kick.play({wait : beat*(2 + 16)})
    kick.play({wait : beat*(4 + 16)})
    // kick.play({wait : beat*4.5})
    kick.play({wait : beat*(6 + 16)})
    // kick.play({wait : beat*7})
    // kick.play({wait : beat*7.5})
    kick.play({wait : beat*(0+24)})
    kick.play({wait : beat*(2+24)})
    kick.play({wait : beat*(4+24)})
    // kick.play({wait : beat*(4.5+8)})
    kick.play({wait : beat*(6+24)})
    // kick.play({wait : beat*(7+8)})
    kick.play({wait : beat*(7.5+24)})

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

    bass.play({ pitch : 'C2',   wait : beat * (0 + 16)})
    bass.play({ pitch : 'C3',   wait : beat * (.5 + 16)})
    bass.play({ pitch : 'C2',   wait : beat * (1 + 16)})
    bass.play({ pitch : 'C3',   wait : beat * (1.5 + 16)})
    bass.play({ pitch : 'C2',   wait : beat * (2 + 16)})
    bass.play({ pitch : 'C3',   wait : beat * (2.5 + 16)})
    bass.play({ pitch : 'C2',   wait : beat * (3 + 16)})
    bass.play({ pitch : 'C3',   wait : beat * (3.5 + 16)})
    bass.play({ pitch : 'F2',   wait : beat * (4 + 16)})
    bass.play({ pitch : 'F3',  wait : beat * (4.5 + 16)})
    bass.play({ pitch : 'F2',  wait : beat * (5 + 16)})
    bass.play({ pitch : 'F3',  wait : beat * (5.5 + 16)})
    bass.play({ pitch : 'F2',  wait : beat * (6 + 16)})
    bass.play({ pitch : 'F3',  wait : beat * (6.5 + 16)})
    bass.play({ pitch : 'F2',  wait : beat * (7 + 16)})
    bass.play({ pitch : 'F3',  wait : beat * (7.5 + 16)})
    bass.play({ pitch : 'Ab2', wait : beat * (8 + 16)})
    bass.play({ pitch : 'Ab3', wait : beat * (8.5 + 16)})
    bass.play({ pitch : 'Ab2', wait : beat * (9 + 16)})
    bass.play({ pitch : 'Ab3', wait : beat * (9.5 + 16)})
    bass.play({ pitch : 'Ab2', wait : beat * (10 + 16)})
    bass.play({ pitch : 'Ab3', wait : beat * (10.5 + 16)})
    bass.play({ pitch : 'Ab2', wait : beat * (11 + 16)})
    bass.play({ pitch : 'Ab3', wait : beat * (11.5 + 16)})
    bass.play({ pitch : 'G2',  wait : beat * (12 + 16)})
    bass.play({ pitch : 'G3',  wait : beat * (12.5 + 16)})
    bass.play({ pitch : 'G2',  wait : beat * (13 + 16)})
    bass.play({ pitch : 'G3',  wait : beat * (13.5 + 16)})
    bass.play({ pitch : 'G2',  wait : beat * (14 + 16)})
    bass.play({ pitch : 'G3',  wait : beat * (14.5 + 16)})
    bass.play({ pitch : 'G2',  wait : beat * (15 + 16)})
    bass.play({ pitch : 'Bb2', wait : beat * (15.5 + 16)})

    piano.play( {pitch : 'C5', wait : beat * (0.75)})
    piano.play( {pitch : 'Eb5', wait : beat * (1), filter : { q : 15}})
    piano.play( {pitch : 'C5', wait : beat * (1.5)})
    piano.play( {pitch : 'F5', wait : beat * (1.75 ), env : {release : .2}})

    piano.play( {pitch : 'C5', wait : beat * (4.75)})
    piano.play( {pitch : 'Eb5', wait : beat * (5), filter : { q : 15}})
    piano.play( {pitch : 'C5', wait : beat * (5.5)})
    piano.play( {pitch : 'F5', wait : beat * (5.75), env : {release : .2}})

    piano.play( {pitch : 'C5', wait : beat * (8.75)})
    piano.play( {pitch : 'Eb5', wait : beat * (9), filter : { q : 15}})
    piano.play( {pitch : 'C5', wait : beat * (9.5)})
    piano.play( {pitch : 'F5', wait : beat * (9.75), env : {release : .2}})

    piano.play( {pitch : 'C5', wait : beat * (12.75)})
    piano.play( {pitch : 'Eb5', wait : beat * (13), filter : { q : 15}})
    piano.play( {pitch : 'C5', wait : beat * (14.75)})
    piano.play( {pitch : 'Eb5', wait : beat * (15)})
    piano.play( {pitch : 'G5', wait : beat * (15.5), filter : { q : 15}})

    piano.play( {pitch : 'C5', wait : beat * (0.75 + 16)})
    piano.play( {pitch : 'Eb5', wait : beat * (1 + 16), filter : { q : 15}})
    piano.play( {pitch : 'C5', wait : beat * (1.5 + 16)})
    piano.play( {pitch : 'F5', wait : beat * (1.75 + 16), env : {release : .2}})

    piano.play( {pitch : 'C5', wait : beat * (4.75 + 16)})
    piano.play( {pitch : 'Eb5', wait : beat * (5 + 16), filter : { q : 15}})
    piano.play( {pitch : 'C5', wait : beat * (5.5 + 16)})
    piano.play( {pitch : 'F5', wait : beat * (5.75 + 16), env : {release : .2}})

    piano.play( {pitch : 'C5', wait : beat * (8.75 + 16)})
    piano.play( {pitch : 'Eb5', wait : beat * (9 + 16), filter : { q : 15}})
    piano.play( {pitch : 'C5', wait : beat * (9.5 + 16)})
    piano.play( {pitch : 'F5', wait : beat * (9.75 + 16), env : {release : .2}})

    piano.play( {pitch : 'F5', wait : beat * (11 + 16)})
    piano.play( {pitch : 'Gb5', wait : beat * (11.75 + 16), filter : { q : 15}})
    piano.play( {pitch : 'G5', wait : beat * (12 + 16)})
    piano.play( {pitch : 'C5', wait : beat * (12.75 + 16)})
    piano.play( {pitch : 'D6', wait : beat * (13 + 16), filter : { q : 15}})
    piano.play( {pitch : 'G5', wait : beat * (13 + 16), filter : { q : 15}})
    piano.play( {pitch : 'D6', wait : beat * (13.25 + 16), filter : { q : 15}})
    piano.play( {pitch : 'G5', wait : beat * (13.25 + 16), filter : { q : 15}})
    piano.play( {pitch : 'C6', wait : beat * (13.5 + 16), filter : { q : 15}})
    piano.play( {pitch : 'F6', wait : beat * (13.5 + 16), filter : { q : 15}})
    piano.play( {pitch : 'D6', wait : beat * (13.75 + 16), filter : { q : 15}})
    piano.play( {pitch : 'G5', wait : beat * (13.75 + 16), filter : { q : 15}})

    ghost.play( {pitch : 'G5', wait : beat * (0), panning : -.1})
    ghost.play( {pitch : 'Gb5', wait : beat * (3.75), panning : -.1, env : {hold :.1}})
    ghost.play( {pitch : 'F5', wait : beat * (4), panning : .1})
    ghost.play( {pitch : 'Ab5', wait : beat * (8), panning : -.1})
    ghost.play( {pitch : 'G5', wait : beat * (11), panning : .1})
    ghost.play( {pitch : 'Bb5', wait : beat * (12), panning : .1})
    ghost.play( {pitch : 'Eb5', wait : beat * (13), env : {hold : .1}})

    ghost.play( {pitch : 'G5', wait : beat * (0 + 16), panning : -.1})
    ghost.play( {pitch : 'Gb5', wait : beat * (3.75 + 16), panning : -.1, env : {hold :.1}})
    ghost.play( {pitch : 'F5', wait : beat * (4 + 16), panning : .1})
    ghost.play( {pitch : 'Ab5', wait : beat * (8 + 16), panning : -.1})
    ghost.play( {pitch : 'G5', wait : beat * (11 + 16), panning : .1})
    ghost.play( {pitch : 'Bb5', wait : beat * (12 + 16), panning : .1})
    ghost.play( {pitch : 'Eb5', wait : beat * (13 + 16), env : {hold : .1}})

}

$(document).ready(function(){
    $('#go').on('click', function(){
        oneLoop();
        setInterval(oneLoop, Math.floor(beat * 32 * 1000));
    })

    $('#a').on('click', function(){
        ghost.play({pitch:'Bb3', panning : [ $('#x').val(), $('#y').val(), $('#z').val() ] })
    })
     $('#b').on('click', function(){
        ghost.play({pitch:'C4', panning : [ $('#x').val(), $('#y').val(), $('#z').val() ] })
    })   
     $('#c').on('click', function(){
        ghost.play({pitch:'F4', panning : [ $('#x').val(), $('#y').val(), $('#z').val() ] })
    })    
    $('#d').on('click', function(){
        ghost.play({pitch:'G4', panning : [ $('#x').val(), $('#y').val(), $('#z').val() ] })
    })
    $('#e').on('click', function(){
        ghost.play({pitch:'G4', panning : [ $('#x').val(), $('#y').val(), $('#z').val() ] })
    })



    var chords = {
        alpha:['Bb3', 'C4', 'Eb4', 'F4'],
        beta:['G4', 'Bb4', 'C5', 'Eb5'],
        gamma:['G5', 'Bb5', 'C5', 'Eb5'],
        delta:['C2', 'Eb2', 'G2', 'Bb3']
    }

    var boundChord = chords.alpha

    var down7=false
    var down8=false
    var down9=false
    var down0=false

    var setToneLabels = function(a,b,c,d){
        $('#7').text(a)
        $('#8').text(b)
        $('#9').text(c)
        $('#0').text(d)
    }

    $(document).keydown(function(event){
////////// Left hand events     
        if(event.which === 49){
            // console.log('1!')
            // $('#chords .keybound').removeClass('on')
            // $('#1').addClass('on')
            boundChord = chords.alpha
            // setToneLabels('C','E','G','B')
        }
        if(event.which === 50){
            // console.log('2!')
            // $('#chords .keybound').removeClass('on')
            // $('#2').addClass('on')
            boundChord = chords.beta
            // setToneLabels('F','A','C','E')
        }
        if(event.which === 51){
            // console.log('3!')
            // $('#chords .keybound').removeClass('on')
            // $('#3').addClass('on')
            boundChord = chords.gamma
            // setToneLabels('G','B','D','F')
        }
        if(event.which === 52){
            // console.log('4!')
            // $('#chords .keybound').removeClass('on')
            // $('#4').addClass('on')
            boundChord = chords.delta
            // setToneLabels('A','C','E','G')
        }

/////////// Right hand events
        if(event.which === 55 && down7===false){
            down7=true
            // console.log('7!')
            // $('#7').addClass('on')
            ghost.play({pitch: boundChord[0]})
        }
        if(event.which === 56 && down8===false){
            down8=true
            // console.log('8!')
            // $('#8').addClass('on')
            ghost.play({pitch : boundChord[1] })
        }
        if(event.which === 57 && down9===false){
            down9=true
            // console.log('9!')
            // $('#9').addClass('on')
            ghost.play({pitch : boundChord[2] })
        }
        if(event.which === 48 && down0===false){
            down0=true
            // console.log('0!')
            // $('#0').addClass('on')
            ghost.play({pitch : boundChord[3] })
        }
    })
    $(document).keyup(function(event){
        if(event.which === 55){
            // console.log('7!')
            // $('#7').removeClass('on')
            down7=false
            ghost.stop()

            // boughostrrentTime = 0
        }
        if(event.which === 56){
            // console.log('8!')
            // $('#8').removeClass('on')
            down8=false
            ghost.stop()
            // boundChord[1].currentTime = 0            
        }
        if(event.which === 57){
            // console.log('9!')
            // $('#9').removeClass('on')
            down9=false
            ghost.stop()
            // boundChord[2].currentTime = 0
        }
        if(event.which === 48){
            // console.log('0!')
            // $('#0').removeClass('on')
            down0=false
            ghost.stop()
            // boundChord[3].currentTime = 0
        }
    })

    $('.control').on('change', function(){
        ghost.setPanning( [ $('#x').val(), $('#y').val(), $('#z').val() ] )
    })

}) 
