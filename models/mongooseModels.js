var mongoose = require('mongoose')
var db_url = global.process.env.MONGOHQ_URL || 'mongodb://localhost/codecur'
mongoose.connect(db_url)

var letsMakeADate = function(){
    return new Date()
}
var BlogPost = mongoose.model('BlogPost', {
    title : {type : String},
    url : {type : String},
    date : {type : Date, default : letsMakeADate},
    body : {type : String},
    tags : {type : [String]}
})

module.exports = {
    BlogPost : BlogPost
}