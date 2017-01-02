console.log("Server is starting.")

var fs = require('fs')
var nodehun = require('nodehun')
var express = require("express")
var app = express()
var suggestions;
var givenWord;

var affbuf = fs.readFileSync('data/bn_BD.aff')
var dictbuf = fs.readFileSync('data/bn_BD.dic')
// For testing purposes:
// var affbuf = fs.readFileSync('data/en_US.aff')
// var dictbuf = fs.readFileSync('data/en_US.dic')


var server = app.listen(3000, function() {
    console.log("Listening...")
})

// app.use(express.static("website"))

var dict = new nodehun(affbuf, dictbuf)

app.get('/search/:word', sendSuggestions)

function sendSuggestions(request, response) {
    givenWord = request.params.word

    suggestions = dict.spellSuggestions(givenWord, function(err, correct, possibilities, origWord){
        var intro = `আপনি দিয়েছেন যে শব্দ: ${origWord}`
        if (err) {
            response.send(`${intro}. I'm sorry. Something went wrong. Please let us know what you tried so that we can fix the problem. The contact information is at the bottom of the page.`)
        } else if (correct) {
            response.send(`${intro} । এ শব্দটি আমার অভিধানে আছে। সম্ভবত এতে কোনো ভুল নেই।`)
        } else if (possibilities.length === 0){
            response.send(`${intro}
            এ শব্দ কি অন্য় ভাষার? আমি শুধু বাংলা শব্দই চিনতে পারি।`)
            console.log(`${intro}. এ শব্দ কি অন্য় ভাষার? আমি শুধু বাংলা শব্দই চিনতে পারি।`)
        } else {
            response.send(possibilities)   
        }
    });
}

