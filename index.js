// Function which builds sentences from the elements of two arrays

function theBeatlesPlay(musicians, instruments) {
  var musicianSentence;
  var musicianAndInstrumentPlayed = [];
  for (var i = 0; i < musicians.length; i++) {
    musicianSentence = musicians[i] + ' plays ' + instruments[i];
    musicianAndInstrumentPlayed[i] = musicianSentence;
  }
  return musicianAndInstrumentPlayed;
}

// Function for facts about John Lennon

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];
  
function johnLennonFacts(factsArray) {
  var i;
  while (factsArray.length > 0) {
  }
  return "done";
}




