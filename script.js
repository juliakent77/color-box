var container =document.getElementByID('container')

for (var 1 = 0; i < 100; i++) {
  var elem = document.createElement('div');
  container.appendChild(elem);
}

// build an element and then add it after, so it is not on your page in the very start