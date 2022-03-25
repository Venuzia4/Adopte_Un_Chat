const slider = document.querySelector(".slider-img");
const imgSlider = ["./assets/Photos-chats/Beebop.jpg", "./assets/Photos-chats/Bella.jpg","./assets/Photos-chats/Bossa.jpeg", "./assets/Photos-chats/Chacha.jpg", "./assets/Photos-chats/Charly.jpg","./assets/Photos-chats/Chatons.jpg", "./assets/Photos-chats/Daisy.jpg", "./assets/Photos-chats/Dominika.jpg", "./assets/Photos-chats/Donatello.jpg", "./assets/Photos-chats/Koshka.jpg", "./assets/Photos-chats/Leonardo.jpg", "./assets/Photos-chats/Luigi.jpg", "./assets/Photos-chats/Mario.jpg", "./assets/Photos-chats/Michelangelo.jpg", "./assets/Photos-chats/Nova.jpg", "./assets/Photos-chats/Raphaello.jpg", "./assets/Photos-chats/Sacha.jpg", "./assets/Photos-chats/Samba.jpg", "./assets/Photos-chats/Spoutnik.jpg", "./assets/Photos-chats/Sveta.jpg", "./assets/Photos-chats/Warrio.jpg",];
const time = 5000;
let i = 0;

function changeImage() {

    document.slide.src = imgSlider[i];

    if (i < imgSlider.length -1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImage()", time);
};

window.onload = changeImage;