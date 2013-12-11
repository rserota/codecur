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
})