const skjema = document.querySelector("#skjema");
const resultatDiv = document.querySelector("#resultat");
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

skjema.addEventListener("submit", hånterSkjema);

function hånterSkjema(evt) {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    let ord = formData.get("ord");
    console.log(ord);

    hentDefinisjon(ord);
}

async function hentDefinisjon(ord) {
    const requestUrl = url + ord;

    let response = await fetch(requestUrl);
    let data = await response.json();

    console.log(data);

    if (data.length > 0) {
        genererResultat(data);
    } else {
        resultatDiv.innerHTML = "";
        let div = document.createElement("div");
        resultatDiv.appendChild(div);

        let title = document.createElement("h2");
        title.innerText = "Error";
        div.appendChild(title);

        let tekst = document.createElement("p");
        tekst.innerText = 'No description found for the word: "'+ord+'"';
        div.appendChild(tekst);
    }

}

function genererResultat(data) {
    resultatDiv.innerHTML = "";

    let betydning = data["0"]["meanings"];
    console.log(betydning);

    betydning.forEach(element => {
        let div = document.createElement("div");
        resultatDiv.appendChild(div);

        let type = document.createElement("h2");
        type.innerText = element["partOfSpeech"];
        div.appendChild(type);

        let list = document.createElement("ul");
        div.appendChild(list);

        element["definitions"].forEach(def => {
            let beskrivelse = document.createElement("li");
            beskrivelse.innerText = def["definition"];
            list.appendChild(beskrivelse);
        });
        // let beskrivelse = document.createElement("p")
        // beskrivelse.innerText = element["definitions"]["0"]["definition"]
        // div.appendChild(beskrivelse)   
        
    });

    let kilder = document.createElement("p")
    kilder.innerText = data["0"]["sourceUrls"]["0"]
    resultatDiv.appendChild(kilder);
}