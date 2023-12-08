function trouverCharlie() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    setTimeout(function() {
        popup.style.display = "none";
    }, 2000); // Masquer le popup après 2 secondes (ajustez selon vos besoins)
}
