function theBeatlesPlay(musicians, instruments) {
  var musicianSentence;
  var instrumentPlayed = [];
  for (var i = 0; i < 30; i++) {
    musicianSentence = musicians[i] + 'plays' + instruments[i];
    musicianAndInstrumentSentence[i] = musicianSentence
  }
  return musicianAndInstrumentSentence;
}
