$(document).ready(function(){
    $('.playbutton').on('click', function(){
        saw.play({pitch:$(this).text()})
    })
})