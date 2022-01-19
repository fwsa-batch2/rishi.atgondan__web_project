function highlights() {
    let getHighlights = JSON.parse(localStorage.getItem("highlights"));

    let newhighlights = "";
    for (let i of getHighlights) {

        let watchlist =
            `<div class="box1">
                  <iframe class="video1"> ${i.video} </iframe>
                  <p class="para1"> ${i.text} </p>
              </div>`;
        newhighlights = newhighlights + watchlist;
    }
    document.getElementById("added_highlights").innerHTML = newhighlights;
}
highlights();

