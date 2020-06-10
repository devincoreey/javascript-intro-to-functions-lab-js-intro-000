function shout(word){
  return word.toUpperCase()
}
function whisper(word){
  return word.toLowerCase()
}
function logShout(word){
  console.log(shout(word))
}
function logWhisper(word){
  console.log(whisper(word))
}
function sayHiToGrandma(word){
  if(word.toLowerCase()){
  return "I can't hear you!";
  } else (word.toUpperCase()){
    return "YES INDEED!"
}