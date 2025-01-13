// Gestion du formulaire d'avis
document.getElementById('avis-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nom = document.getElementById('nom').value;
    const avis = document.getElementById('avis').value;
    document.getElementById('result').innerHTML = `Merci, ${nom}, pour votre avis : "${avis}"`;
    document.getElementById('avis-form').reset();  // Réinitialise le formulaire après soumission
});

// Gestion du formulaire de sondage
document.getElementById('sondage-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const choix = document.querySelector('input[name="couleur"]:checked').value;
    document.getElementById('sondage-result').innerHTML = `Vous avez voté pour : ${choix}`;
});
