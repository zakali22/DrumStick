window.addEventListener('keydown', function(e){
  const audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
  const key = document.querySelector('.key[data-key="' + e.keyCode + '"]');

  // Related to audio play
  if(!audio){ //if key clicked doesn't exist then stop function
    return; //stops function
  }
  audio.currentTime = 0;
  audio.play(); //this plays the corresponding audio


  // Related to key animation
  key.classList.add('playing');

  // Logging out info
  console.log(audio);
  console.log(key);
});
