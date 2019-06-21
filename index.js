function theBeatlesPlay(musicians, instruments) {
  var musicianSentence;
  var musicianAndInstrumentPlayed = [];
  for (var i = 0; i < musicians.length; i++) {
    musicianSentence = musicians[i] + 'plays' + instruments[i];
    musicianAndInstrumentPlayed[i] = musicianSentence;
  }
  return musicianAndInstrumentPlayed;
}
