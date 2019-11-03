## Goal

A Bangla spellchecker with a web interface. The spellchecker will suggest corrections according to some (yet-to-decide) standard, such as Bangla Academy.

## Current limitations

- No way to detect inflections. inflected words are flagged even when correct (e.g. দেশে).
- Fails to flag misspelt compound words (e.g. তেলেবাগুনে)
- Flags many proper nouns (e.g. সত্যজিত)
- Flags some words that are actually correct according to modern (reformed) spelling standards (e.g. বাঙালি)
- For some commonly misspelt words, the suggestions are not always as expected (e.g. আকাংখা -> আকাঙ্ক্ষা, but it suggests only আকাটা instead)
- No transliteration support.

## Plans

- [x] API  
- [x] [Chrome extension](https://chrome.google.com/webstore/detail/bangla-banan/ccgiicmknbnmpdidmdfbnonejhodcfpi?hl=en). Repo [here](https://github.com/asifm/bangla-banan-chrome-ext).  
- [x] Transliteration from Latin script  


## Data

The data comes from http://cgit.freedesktop.org/libreoffice/dictionaries/tree/

## Technologies

Node package to use: https://github.com/Wulf/nodehun

Also, looks useful: https://github.com/rexxars/nodehun-sentences. It's not working currently with Bangla text.
