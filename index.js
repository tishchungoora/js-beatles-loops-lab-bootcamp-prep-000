function theBeatlesPlay(musicians, instruments) {
  var musicianSentence;
  var musicianAndinstrumentPlayed = [];
  for (var i = 0; i < 30; i++) {
    musicianSentence = musicians[i] + 'plays' + instruments[i];
    musicianAndInstrumentPlayed[i] = musicianSentence
  }
  return musicianAndInstrumentPlayed;
}
