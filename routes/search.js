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
    var flag
    givenWord = request.params.word

    dict.spellSuggestions(givenWord, function(err, correct, suggestions, origWord){
        var intro = `<p>আপনার দিয়েছেন: ${origWord}</p>`
        if (err) {
            flag = 'error'
        } else if (correct) {
            flag = 'correct'
        } else if (suggestions.length === 0){
            flag = 'foreign'
        } else {
            flag = 'wrong'
            reply = suggestions
        }
        // response.send(reply)
        response.render('search', {
            intro: intro,
            reply: reply,
            flag: flag
        })
    })
}

module.exports = router
