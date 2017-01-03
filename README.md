## Goal

A Bangla spellchecker with a web interface. The spellchecker will suggest corrections according to some (yet-to-decide) standard, such as Bangla Academy, or Prothom Alo. 

## Current limitations

- inflected words are flagged even though correct (e.g. "দেশে"). 
- fails to flag misspelt compound words (e.g. তেলেবাগুনে)
- flags many proper nouns (e.g. সত্যজিত)
- flags some words that are actually correct according to modern (reformed) spelling standards (e.g. বাঙালি)
- for some commonly misspelt words, the suggestions are not always accurate (e.g. আকাংখা -> আকাঙ্ক্ষা, but it suggests only আকাটা instead)

## Plans

- Improved dictionaries
    - Stemming support (so that inflected words are correctly identified)
    - Better suggestions for frequently misspelt words
    - Following a standard set of rules
- Chrome extension
- Ability to check all words in a given document (like MS Word)

## Data

The data comes from http://cgit.freedesktop.org/libreoffice/dictionaries/tree/

## Technologies

Node package to use: https://github.com/Wulf/nodehun

Also, looks useful: https://github.com/rexxars/nodehun-sentences. It's not working currently with Bangla text.
