for(let i = 0; i < 256; i++) {
    document.querySelector(".app").innerHTML += '<div></div>'; 
}
document.body.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = '#0ff';
            event.target.style.border = '1px dotted #f0f';
            event.target.className = 'SUPERMAN';
});
