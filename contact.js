const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(name === "" || email === "" || message === ""){
        alert("Veuillez remplir tous les champs !");
        return;
    }

    emailjs.send("TON_SERVICE_ID", "TON_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        message: message
    }).then(function(){
        alert("Message envoyé avec succès !");
        form.reset();
    }, function(error){
        alert("Erreur lors de l'envoi : " + JSON.stringify(error));
    });
});