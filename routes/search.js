var fs = require('fs')
var nodehun = require('nodehun')
var express = require('express');

var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

var reply
var givenWord

var affbuf = fs.readFileSync('data/bn_BD.aff')
var dictbuf = fs.readFileSync('data/bn_BD.dic')
var dict = new nodehun(affbuf, dictbuf)

router.get('/search/:word', sendSuggestions)

function sendSuggestions(request, response) {
    givenWord = request.params.word

    dict.spellSuggestions(givenWord, function(err, correct, suggestions, origWord){
        var intro = `আপনি দিয়েছেন যে শব্দ: ${origWord}`
        if (err) {
            reply = `${intro}. I'm sorry. Something went wrong. Please let us know what you tried so that we can fix the problem. The contact information is at the bottom of the page.`
        } else if (correct) {
            reply = `<strong>${origWord}</strong> আমার অভিধানে আছে। সম্ভবত কোনো ভুল নেই।`
        } else if (suggestions.length === 0){
            reply = `${origWord} কি অন্য় ভাষার শব্দ? আমি শুধু বাংলা শব্দ চিনতে পারি।`
        } else {
            reply = suggestions
        }
        // response.send(reply)
        response.render('search', {reply: reply})
        console.log(reply)
    })
}

module.exports = router
