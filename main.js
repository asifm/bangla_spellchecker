console.log("Server is starting.")

var fs = require('fs')
var nodehun = require('nodehun')
var express = require("express")

var app = express()
var reply
var givenWord

var affbuf = fs.readFileSync('data/bn_BD.aff')
var dictbuf = fs.readFileSync('data/bn_BD.dic')
var dict = new nodehun(affbuf, dictbuf)

var server = app.listen(3000, function() {
    console.log("Listening...")
})

app.use(express.static("."))

app.get('/search/:word', sendSuggestions)

function sendSuggestions(request, response) {
    givenWord = request.params.word

    dict.spellSuggestions(givenWord, function(err, correct, suggestions, origWord){
        var intro = `আপনি দিয়েছেন যে শব্দ: ${origWord}`
        if (err) {
            reply = `${intro}. I'm sorry. Something went wrong. Please let us know what you tried so that we can fix the problem. The contact information is at the bottom of the page.`
        } else if (correct) {
            reply = `${origWord} আমার অভিধানে আছে। সম্ভবত কোনো ভুল নেই।`
        } else if (suggestions.length === 0){
            reply = `${origWord} কি অন্য় ভাষার শব্দ? আমি শুধু বাংলা শব্দ চিনতে পারি।`
        } else {
            reply = suggestions
        }
        response.send(reply)
        console.log(reply)
    })
}

