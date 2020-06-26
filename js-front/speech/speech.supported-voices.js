speechSynthesis.getVoices().forEach(function (voice) {
  console.log(voice.name, voice.default ? voice.default : "");
});
