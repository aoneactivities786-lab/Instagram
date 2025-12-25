const message = "Ab jab tumne Instagram deactivate kar hi diya hai, toh khud par focus karna. Be consistent in your work and your goals. Yeh waqt tumhare liye bahut bada change layega. I'm always here to support you. Chak de phatte!";

function openLetter() {
    document.getElementById('letter').classList.add('open');
    typeWriter();
}

function closeLetter() {
    document.getElementById('letter').classList.remove('open');
}

let i = 0;
function typeWriter() {
    if (i < message.length) {
        document.getElementById("typewriter").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 50); // Speed of typing
    }
}
