console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

var img = document.getElementById('madi');
console.log('Before Click');

img.onClick = function(){
        img.style.marginLeft = '100 px';
    };
    
console.log('After Click');