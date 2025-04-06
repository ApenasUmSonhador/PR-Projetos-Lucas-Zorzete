const enviarEmail = document.getElementById('sendEmail');
enviarEmail.addEventListener('click', () => {
    const campo = document.getElementById('space');
    const nameInput = document.getElementById('name');
    const numberInput = document.getElementById('number');
    const emailInput = document.getElementById('email');
    const commentsInput = document.getElementById('comments');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const number = numberInput.value.trim();
    const comments = commentsInput.value.trim(); 

    if ((!name) || (!number) || (!email) || (!comments)) {
        campo.style.display = "block";
        campo.textContent = "Há um campo vazio.";
        campo.style.color = "rgb(255, 105, 105)";
        campo.style.textShadow = "1px 1px 20px rgb(145, 0, 0)";

        setTimeout(() => {
            campo.textContent = "";
            campo.style.display = "none";
        }, 3000);

        return;
    } else {
        window.alert("Seu email foi enviado! Obrigado.");
        campo.style.display = "none";
    }
});

// const enviarFeed = document.getElementById('sendFeed');
// enviarEmail.addEventListener('click', () => {
//     const campo = document.getElementById('space-feed');
//     const nameInputFeed = document.getElementById('nameFeed');
//     const emailInputFeed = document.getElementById('emailFeed');
//     const commentsInputFeed = document.getElementById('commentsFeed'); // <== linha adicionada

//     const nameFeed = nameInputFeed.value.trim();
//     const emailFeed = emailInputFeed.value.trim();
//     const commentsFeed = commentsInputFeed.value.trim(); 

//     if ((!nameFeed) || (!emailFeed) || (!commentsFeed)) {
//         campo.style.display = "block"
//         campo.textContent = "Há um campo vazio.";
//         campo.style.color = "rgb(255, 105, 105)";
//         campo.style.textShadow = "1px 1px 20px rgb(145, 0, 0)"

//         setTimeout (() => {     // exposto por 3 segundos
//           campo.textContent = "";
//         }, 3000)
//         return;
//     } else {
//         window.alert("Seu email foi enviado! Obrigado.");
//         campo.style.display = "none";
//     }
// });