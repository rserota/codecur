var db = require('../models/mongooseModels.js')
module.exports = {
    index : function(request, response){
        response.redirect('/us')
    },

	home : function(request, response){
        console.log('how about dem logs?')
		response.render('home',{test: "<b>Feeling Curious?</b>"})
	},

    submitBlog : function(request, response){
        var newBlogPost = new db.BlogPost({
            title : request.body.title,
            body : request.body.body,
            tags : ['testing','testing, 1 2']
        })
        newBlogPost.save(function(error){
            response.send('Blog successfully updated')
        })
    },

    hax : function(request, response){
        console.log('request: ', request.body)
        response.send('Good stuff')
    }
}