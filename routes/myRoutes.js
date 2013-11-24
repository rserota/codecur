module.exports = {
    home : function(request, response){
        response.redirect('/us')
    },

	index : function(request, response){
		response.render('index',{test: "<b>Feeling Curious?</b>"})
	}
}