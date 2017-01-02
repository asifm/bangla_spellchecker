var fs = require('fs');
var spellcheck = require('nodehun-sentences');
var nodehun = require('nodehun');


var nodehunInstance = new nodehun(
    fs.readFileSync('data/bn_BD.aff'),
    fs.readFileSync('data/bn_BD.dic')
    // fs.readFileSync('data/en_US.aff'),
    // fs.readFileSync('data/en_US.dic')
);


var textToCheck = "অস্দ্ফ্জ অ;স্দ্লফ্জ অদ্জ্ফ যখন সময় থমকে দাড়ায় নিরান্ষায় পাখিন দুহাতেব বারাইল"

// textToCheck = "The problemr withh such a goode mentence is what"

spellcheck(nodehunInstance, textToCheck, function(err, typos) {
    if (err) {
        throw err;
    }

    // `typos` is an array of all typos, each one an object containing:
    //   - `word`: the word which was concidered a typo (string)
    //   - `suggestions`: list of suggestions (array of strings)
    //   - `positions`: list of positions where the typo was found (array of objects)
    typos.forEach(function(typo) {
        console.log(typo.word + ' is not a valid word');
        console.log('Suggestions: ' + typo.suggestions)
        // console.log('found ' + typo.positions.length + ' occurences')
    });

    // Each entry in `typo.positions` contains the following keys:
    //   - `from`: The start offset for the typo within the text (integer)
    //   - `to`: The end offset for the typo within the text (integer)
    //   - `length`: Word length (integer)
    // textToCheck.substring(typo[0].from, typo[0].to) === typo[0].word;
});

// spellcheck(hunspell, text, function(err, typos) {
//     if (err) {
//         throw err;
//     }
//
//     console.log(typos);
//
//     typos == [{
//         word: 'ceck',
//         suggestions: [
//             'check',
//             'neck',
//             'deck',
//             'peck'
//             // ...
//         ],
//         positions: [{
//             from: 29,
//             to: 33,
//             length: 4
//         }]
//     }];
// });
