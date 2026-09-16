/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
red = #ed1c24
carbon black = #222725
black oynx = #121113
*/ 


const numberInput = document.getElementById('input');
numberInput.addEventListener('input', function() {
  if (this.value.length > 2) {
    this.value = this.value.slice(0, 2);
  }
});