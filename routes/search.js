var fs = require('fs')
var nodehun = require('nodehun')
var express = require('express')
var bodyParser = require('body-parser')

var router = express.Router()

router.use(bodyParser.json()) // support json encoded bodies


var reply

var affbuf = fs.readFileSync('data/bn_BD.aff')
var dictbuf = fs.readFileSync('data/bn_BD.dic')
var dict = new nodehun(affbuf, dictbuf)


router.get('/search/:word', renderResult)

function renderResult(request, response) {

    var word = request.params.word

    dict.spellSuggestions(word, function (err, correct, suggestions, origWord) {

        reply = {
            err: err,
            correct: correct,
            suggestions: suggestions,
            numSuggestions: suggestions.length,
            origWord: origWord
        }
        console.log('now rendering')
        response.render('search', {
            reply: reply
        })
    })
}


router.get('/api/:word', sendJson)

function sendJson(request, response) {

    var word = request.params.word

    dict.spellSuggestions(word, function (err, correct, suggestions, origWord) {

        reply = {
            err: err,
            correct: correct,
            suggestions: suggestions,
            numSuggestions: suggestions.length,
            origWord: origWord
        }

        console.log('serving api json');
        response.contentType('json')
        response.send(reply)
    })


}

module.exports = router




// var intro = `আপনি দিয়েছেন: ${origWord}`
// if (err) {
//     flag = 'error'
// } else if (correct) {
//     flag = 'correct'
// } else if (suggestions.length === 0){
//     flag = 'foreign'
// } else {
//     flag = 'wrong'
//     reply = suggestions
// }