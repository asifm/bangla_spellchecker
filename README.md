## Goal

A Bangla spellchecker with a web interface. The spellchecker will suggest corrections according to some (yet-to-decide) standard, such as Bangla Academy, or Prothom Alo. Currently, the spellchecker flags some words as wrong though they are correct according to Bangla Academy.

## Current limitations

- flags many proper nouns (সত্যজিত)
- flags some words that are actually correct according to modern (reformed) spelling standards (বাঙালি)
- for some commonly misspelt words, the suggestions are not always accurate (আকাংখা -> আকাঙ্ক্ষা, but suggest আকাটা instead)

## Data

The data comes from http://cgit.freedesktop.org/libreoffice/dictionaries/tree/

## Technologies

Node package to use: https://github.com/Wulf/nodehun (more active development than the other ones) or https://github.com/GitbookIO/hunspell-spellchecker or ...

Also, looks useful: https://github.com/rexxars/nodehun-sentences. It's not working currently with Bangla text.

## ToDo

- Clarify why not to use readFileSync and what to use instead
