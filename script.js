

let elements = document.querySelectorAll('.box');

for (let i = 0; i < elements.length; i++) {
    let el = elements[i];
    el.addEventListener('click', onBoxClick);
}

function onBoxClick(e) {
    let element = e.currentTarget;
    element.classList.toggle('clicked')

    /*setTimeout(function () {
        element.classList.toggle('clicked')  
    }, 2000);*/
}