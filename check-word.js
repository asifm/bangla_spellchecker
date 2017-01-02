var nodehun = require('nodehun')
var fs = require('fs')

var affbuf = fs.readFileSync('data/bn_BD.aff')
var dictbuf = fs.readFileSync('data/bn_BD.dic')


// var affbuf = fs.readFileSync('data/en_US.aff')
// var dictbuf = fs.readFileSync('data/en_US.dic')


var dict = new nodehun(affbuf,dictbuf)


dict.spellSuggestions('আকাংখা',function(err, correct, suggestions, origWord){
    console.log(err, correct, suggestions, origWord);
    // because "color" is a defined word in the US English dictionary
    // the output will be: null, true, [], 'color'
});
