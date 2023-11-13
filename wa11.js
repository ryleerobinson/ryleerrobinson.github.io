const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const fileNames = ["images/pic.jpeg", "images/pic2.jpeg", "images/pic3.jpeg", "images/pic4.jpeg", "images/pic5.jpeg"];
const fileAlts = ["1", "2", "3", "4", "5"];

for (let i = 0; i < fileNames.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', fileNames[i]);
    newImage.setAttribute('alt', fileAlts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', () => changeDisplay(fileNames[i], fileAlts[i]));
}

function changeDisplay(srcName, altName){
    if (srcName != displayedImage.getAttribute('src')){
        displayedImage.setAttribute('src', srcName);
        displayedImage.setAttribute('alt', altName);
    }
}

btn.addEventListener('click', onOff);

function onOff(){
    if (btn.getAttribute('class') == 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}