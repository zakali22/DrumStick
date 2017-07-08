window.addEventListener('keydown', function(e){
  const audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
  if(!audio){ //if key clicked doesn't exist then stop function
    return; //stops function
  }
  console.log(audio);
  audio.play(); //this plays the corresponding audio
});
