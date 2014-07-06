    var piano = new Wad({source : 'sawtooth', volume : 1, env : {attack : .01, decay : .005, sustain : .2, hold : .015, release : .3}, filter : {type : 'lowpass', frequency : 1200, q : 8.5, env : {attack : .2, frequency : 600}}})
    piano.globalReverb = true

    var hat = new Wad(Wad.presets.hiHatClosed)
    hat.globalReverb = true
    var snare = new Wad(Wad.presets.snare)
    snare.globalReverb = true
    var hatOpen = new Wad(Wad.presets.hiHatOpen)
    hatOpen.globalReverb = true
    var ghost = new Wad(Wad.presets.ghost)


var notes = ['Bb4', 'G4', 'F4', 'Eb4', 'C4']
var Player = function(args) {
    this.startSide = args.startSide
    this.shotDirection = args.shotDirection
    this.notes = args.notes
    this.energy = 100
    this.bullet = $('<i class="fa fa-star fa-2x fa-spin ' + this.startSide + '">')
    this.energySpan = args.energySpan
    this.playerNumber = args.playerNumber
    this.instrument = args.instrument
    this.recharge = function(){
        if ( this.energy < 100 ) {
            this.energy += 1
            $(this.energySpan).text(this.energy)
        }

    }
    this.shoot = function(lane) {
        if ( this.energy > 30 ) {
            this.instrument.play({pitch:notes[lane], env : {hold : .2}})
            this.energy -= 30
            $(this.energySpan).text(this.energy)
            if (activePlayer === this.playerNumber){
                var shot = this.bullet.clone()
                $('.lane' + lane).append(shot)
                var that = this
                setTimeout(function(){shot.addClass(that.shotDirection)}, 15)
                setTimeout(function(){shot.remove()}, 4100)
            }
        }
        
    }
}

p1 = new Player({playerNumber : 1, startSide : 'startLeft', shotDirection : 'shootRight', energySpan : '.p1Energy', instrument : piano})
p2 = new Player({playerNumber : 2, startSide : 'startRight', shotDirection : 'shootLeft', energySpan : '.p2Energy', instrument : ghost})

var activePlayer = 0
var startTimeStep = function(){
    setInterval(function(){
        p1.recharge()
        p2.recharge()
    }, 25)
}

$(document).ready(function(){
    var startTime = new Date()

    startTimeStep()
    $(document).on('keydown', function(event){
        if ( event.which === 49 ) {
            p1.shoot(4)
        }
        if ( event.which === 50 ) {
            p1.shoot(3)
        }
        if ( event.which === 51 ) {
            p1.shoot(2)
        }
        if ( event.which === 52 ) {
            p1.shoot(1)
        }
        if ( event.which === 53 ) {
            p1.shoot(0)
        }
        if ( event.which === 54 ) {
            p2.shoot(4)
        }
        if ( event.which === 55 ) {
            p2.shoot(3)
        }
        if ( event.which === 56 ) {
            p2.shoot(2)
        }
        if ( event.which === 57 ) {
            p2.shoot(1)
        }
        if ( event.which === 48 ) {
            p2.shoot(0)
        }
    })
    $(document).one('keydown', function(event){
        if ( event.which === 32 ) {
            activePlayer = 1
            oneLoop();
            setInterval(oneLoop, Math.floor(beat * 8 * 1000));
        }
    })

///////////////////////////////////////////////////////////////////////////////////
    var kick = new Wad({source : '/us/sendaudio/kick.mp3'})
    kick.globalReverb = true
    Wad.setGlobalReverb({impulse : '/us/sendaudio/longhall.wav', wet : .5})
    var bpm = 60
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

    // Wad.setGlobalReverb({impulse : '/us/sendaudio/longhall.wav', wet : .5})
    snare.setVolume(9)
    // var stereoBounce = setInterval(function(){
    //     bloop.play({panning : 11})
    //     setTimeout(function(){
    //         bloop.play({panning : -11})
    //     }, 500)
    // }, 1000)

    var oneLoop = function() {
        if ( activePlayer === 1 ) { activePlayer = 2}
        else if ( activePlayer === 2 ) { activePlayer = 1}
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
        snare.play({wait : beat * 1})
        snare.play({wait : beat * 2.25})
        snare.play({wait : beat * 3})
        snare.play({wait : beat * 5})
        snare.play({wait : beat * 6.25})
        snare.play({wait : beat * 7})
        kick.play({wait : beat*0})
        kick.play({wait : beat*2})
        kick.play({wait : beat*4})
        kick.play({wait : beat*6})
    }
///////////////////////////////////////////////////////////////

})