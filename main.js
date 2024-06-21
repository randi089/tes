const btn = document.querySelector('.btn');
const h1 = document.querySelector('h1');

btn.addEventListener('click', function() {
    h1.setAttribute('id', 'mantap');
});

const img = document.querySelector('.img');
const bar = document.querySelector('.bar');
let width = 100;

img.addEventListener('click', function() {
        width = width-10;
        bar.style.width = `${width}%`;
        if(width == 0) {
            confirm('You Win, Again?');
            location.reload();            
        }      
});