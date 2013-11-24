module.exports = {
    index : function(request, response){
        response.redirect('/us')
    },

	home : function(request, response){
        console.log('how about dem logs?')
		response.render('index',{test: "<b>Feeling Curious?</b>"})
	},

    hax : function(request, response){
        console.log('request: ', request.body)
    }
}