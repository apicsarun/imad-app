console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

var img = document.getElementById('madi');
console.log('Before Click');

img.onclick = function(){
        var left =  img.style.marginLeft;
         console.log(left);
        img.style.marginLeft = '20px';
      
    };
    
console.log('After Click');