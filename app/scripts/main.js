var audioList = [];
function playSound(e){
  var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
  var key = document.querySelector('.key[data-key="' + e.keyCode + '"]');

  // Related to audio play
  if(!audio){ //if key clicked doesn't exist then stop function
    return; //stops function
  }
  audioList.push(audio);
  audio.load();
  audio.play(); //this plays the corresponding audio

  // // Related to key animation
  key.classList.add('playing');

  // Logging out info
  console.log(audioList);
  console.log(key);
}


function stopSound(e){
  var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');


}


var button = document.querySelector('.play');
var stop = document.querySelector('.stop');
button.addEventListener('click', function(){
  audioList.forEach(function(sound){
    sound.loop = true;
    sound.play();
  });
});

stop.addEventListener('click', function(){
  audioList.forEach(function(sound){
    sound.pause();
    sound.currentTime = 0;
  });
});

var keys = document.querySelectorAll('.key');
function removeTransition(){
  this.classList.remove('playing');
}

keys.forEach(function (key) {
  return key.addEventListener('transitionend', removeTransition);
});




window.addEventListener('keydown', playSound);
