var p;
for (var i = 32; i >= 8; i--) {
  p = document.createElement('p');
  p.appendChild(document.createTextNode('Grumpy wizards make toxic brew for the evil Queen and Jack.'));
  p.setAttribute('class', 'b' + i);
  document.body.appendChild(p);
}
