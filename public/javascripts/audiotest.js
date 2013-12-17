var wads = {}
var newWad = {
    source : 'sine',
    reverb : {wet : 0 },
    env : {
        attack : .1,
        hold : 1,
        release : .2
    }
}
var checkValidName = function(){
    var wadname = $('#wadname').val()
    if((wadname === '') || (wads[wadname])){
        $('#wadmakerbutton').addClass('disabled')
    }
    else {
        $('#wadmakerbutton').removeClass('disabled')
    }
}
$(document).ready(function(){

    $(document).on('click', 'ul.dropdown-menu li',function(){
        var $this = $(this)
        $this.siblings().removeClass('active')
        $this.addClass('active')
        $this.closest('ul').siblings('.relabel').text($this.children('a').text())
    })
    $(document).on('tap', 'ul.dropdown-menu li',function(){
        var $this = $(this)
        $this.siblings().removeClass('active')
        $this.addClass('active')
        $this.closest('ul').siblings('.relabel').text($this.children('a').text())
    })

    $('#wadmakerbutton').on('click', function(){
        var wadname = $('#wadname').val()
        var template = _.template($('#wadtemplate').html())
        $('.wads').append(template({name : wadname}))

        newWad.source = $('#source').text().toLowerCase()
        if($('#reverb').text() === 'None'){newWad.reverb.wet = 0.00001}
        if($('#reverb').text() === 'Quiet'){newWad.reverb.wet = .4}
        if($('#reverb').text() === 'Loud'){newWad.reverb.wet = 1}
        if($('#attack').text() === 'Fast'){newWad.env.attack = .1}
        if($('#attack').text() === 'Slow'){newWad.env.attack = .5}
        if($('#release').text() === 'Fast'){newWad.env.release = .2}
        if($('#release').text() === 'Slow'){newWad.env.release = .5}
        console.log(newWad)
        wads[wadname] = new Wad(newWad)
        checkValidName()
    })

    $('#wadmakerbutton').on('tap', function(){
        var wadname = $('#wadname').val()
        var template = _.template($('#wadtemplate').html())
        $('.wads').append(template({name : wadname}))

        newWad.source = $('#source').text().toLowerCase()
        if($('#reverb').text() === 'None'){newWad.reverb.wet = 0.00001}
        if($('#reverb').text() === 'Quiet'){newWad.reverb.wet = .4}
        if($('#reverb').text() === 'Loud'){newWad.reverb.wet = 1}
        if($('#attack').text() === 'Fast'){newWad.env.attack = .1}
        if($('#attack').text() === 'Slow'){newWad.env.attack = .5}
        if($('#release').text() === 'Fast'){newWad.env.release = .2}
        if($('#release').text() === 'Slow'){newWad.env.release = .5}
        console.log(newWad)
        wads[wadname] = new Wad(newWad)
        checkValidName()
    })

    $(document).on('click', '.glyphicon-remove-circle', function(){
        wads[$(this).siblings('.h1').text()] = null
        $(this).closest('.wad').remove()
        checkValidName()
    })

    $(document).on('tap', '.glyphicon-remove-circle', function(){
        wads[$(this).siblings('.h1').text()] = null
        $(this).closest('.wad').remove()
        checkValidName()
    })

    $(document).on('click', '.playbutton', function(){
        console.log($(this).siblings('.notename').text())
        var notename = $(this).siblings('.notename').text() + '4'
        var wadname = $(this).closest('.wad').find('.h1').text()
        console.log('notename: ',notename)
        console.log('wadname: ',wadname)
        wads[wadname].play({pitch : notename})
    })
    $(document).on('tap', '.playbutton', function(){
        console.log($(this).siblings('.notename').text())
        var notename = $(this).siblings('.notename').text() + '4'
        var wadname = $(this).closest('.wad').find('.h1').text()
        console.log('notename: ',notename)
        console.log('wadname: ',wadname)
        wads[wadname].play({pitch : notename})
    })

    $('#wadname').on('keyup', function(event){
        checkValidName()
    })

    $("[rel='tooltip']").tooltip()
    
})