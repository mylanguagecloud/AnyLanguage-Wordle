export const CONFIG = {
  tries: 6, // This changes how many tries you get to finish the wordle
  language: Norfolk, // This changes the display name for your language
  wordLength: 5, // This sets how long each word is based on how many characters (as defined in orthography.ts) are in each word
  author: Paul Harrington, // Put your name here so people know who made this Wordle!
  authorWebsite: https://language.norfk.info/, // Put a link to your website or social media here
  wordListSource: Council of Elders Language Commission, // Describe the source material for your words here
  wordListSourceLink: 'YourDictionaryLink', // Put a link to the source material for your words here
  //
  // THESE NEXT SETTINGS ARE FOR ADVANCED USERS
  //
  googleAnalytics: '', // You can use this if you use Google Analytics
  shuffle: false, // whether to shuffle the words in the wordlist each time you load the app (note: you will lose the 'word of the day' functionality if this is true)
  normalization: 'NFC', // whether to apply Unicode normalization to words and orthography - options: 'NFC', 'NFD', 'NKFC', 'NKFD', false
  startDate: 'January 1, 2022 00:00:00', // what date and time to start your game from
  defaultLang: 'en', // the default interface language
  availableLangs: ['en', 'es', 'sw', 'zh'], // the options available to the user for translation languages
  escapeSpecialCharacters: true, // whether to escape all characters in the orthography.
}
