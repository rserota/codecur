$(document).ready(function(){
    $('.playbutton').on('click', function(){
        saw.play({pitch:$(this).text()})
    })
    $('.playbutton2').on('click', function(){
        saw2.play({pitch:$(this).text()})
    })
    $('.playbutton3').on('click', function(){
        saw3.play({pitch:$(this).text()})
    })
    $('.phone').on('click', function(){
        phone.play()
    })
    $('.phone2').on('click', function(){
        phone2.play()
    })
    $('.phone3').on('click', function(){
        phone3.play()
    }) 

    $(document).on('click', 'ul.dropdown-menu li',function(){
        var $this = $(this)
        $this.siblings().removeClass('active')
        $this.addClass('active')
        $this.closest('.dropdown').find('.btn').text($this.children('a').text())

    })
})