const messages = [
    "Are you sure?",
    "Really sure??",
    "Ennann",
    "Pleaseee...",
    "Orappano?",
    "Ini choikkulle",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Orappaaa??",
    "Ok fine, I will stop asking...",
    "Just kidding, maryayk yes paranjo! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.28}px`;
}

function handleYesClick() {
    window.location.href = "3.html";
}