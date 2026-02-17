const skjema = document.getElementById("form");

const rabattKoder = ["rabatt10", "rabatt15", "2026"];

skjema.addEventListener("submit", function (event) {
    event.preventDefault();
    const data = new FormData(event.target);

    let fornavn = data.get("fornavn");
    let rabattkode = data.get("rabatt").toString();
    alert(`Takk for din registrering, ${fornavn}!`);
    if (skjekkRabattKode(rabattkode)) {
        alert(`Rabattkoden ${rabattkode} er gyldig`);
    } else {
        alert(`Rabattkoden ${rabattkode} er ikke gyldig`);
    }

});

function skjekkRabattKode(kode) {
    return rabattKoder.includes(kode);
}