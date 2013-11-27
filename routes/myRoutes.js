var db = require('../models/mongooseModels.js')
module.exports = {
    index : function(request, response){
        response.redirect('/us')
    },

	home : function(request, response){
        console.log('how about dem logs?')
        db.BlogPost.find()
            .sort({date : -1})
            .limit(1)
            .exec(function(error, results){
                console.log('myRoutes 13 results: ', results)
                response.render('home',results[0])
            })
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