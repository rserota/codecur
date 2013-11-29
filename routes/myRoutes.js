var db = require('../models/mongooseModels.js')
var bcrypt = require('bcrypt')
var breakfast = '$2a$08$Qc0hzrLrPz031mDglyBQlOeRnXBdOMN/m1C5g4gNCi1GtaO7x/i3q'

module.exports = {
    index : function(request, response){
        response.redirect('/us')
    },

	home : function(request, response){

        db.BlogPost.find()
            .sort({date : -1})
            .limit(1)
            .exec(function(error, results){
                console.log('myRoutes 13 results: ', results)
                response.render('home',results[0])
            })
	},

    submitBlog : function(request, response){
        bcrypt.compare(request.body.potato, breakfast, function(error, result){
            console.log('myroutes 23 result: ', result)
            if (result === true){

                var newBlogPost = new db.BlogPost({
                    title : request.body.title,
                    body : request.body.body,
                    tags : ['testing','testing, 1 2']
                })
                newBlogPost.save(function(error){
                    response.send('Blog successfully updated')
                })
            }
            else{
                response.send('nope')
            }
        })
    },

    hax : function(request, response){
        console.log('request: ', request.body)
        response.send('Good stuff')
    }
}