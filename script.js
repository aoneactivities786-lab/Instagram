const message = "Ab jab tune Instagram deactivate kar hi diya hai, toh khud par focus karna. Honista use krta hai bhai tu to message dekhega to pta bhi kaise chalegaaaa mekooooo. Dekh le lala teraaa hi time haiii. Mainnn teree saath hi hu beee . Chak de phatte!";

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
