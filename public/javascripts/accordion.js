$(document).ready(function(){
    $('.accordion a').on('click', function(){
        if ($(this).prev().hasClass('fa-plus-circle')){
            $('i').removeClass('fa-minus-circle').addClass('fa-plus-circle')
            $(this).prev().removeClass('fa-plus-circle').addClass('fa-minus-circle')
        }
        else {
            $(this).prev().toggleClass('fa-minus-circle').toggleClass('fa-plus-circle')
            
        }
    })

    var hax = function(){
        $('.panel-heading').on('click', function(){
            $('.panel-heading').off('click') 
            $(this).find('[data-toggle="collapse"]').trigger('click')
            hax()
        })
    }

    hax()
})