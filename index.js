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
  if (word.toLowerCase('hi')){
    return "I can't hear you!";
  } 
  else if (word.toUpperCase('HI')){
    return "YES INDEED!"
  }
  else if ("I love you, Grandma."){
    return "I love you, too."
  }
}