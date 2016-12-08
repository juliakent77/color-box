var container = document.getElementById('container');

// build an element and then add it after, so it is not on your page in the very start

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for(var i = 0; i < 300; i++) {
  var elem = document.createElement('div');
  elem.classList.add('box');

  var rndNum = getRandomInt(1, 4); 
  console.log (rndNum);
  if (rndNum === 1) {
    elem.classList.add('red');
  } else if (rndNum === 2) {
    elem.classList.add('blue');
  } else if (rndNum === 3) {
    elem.classList.add('green');
  } else {
    elem.classList.add('yellow');
  }

  container.appendChild(elem);
}



