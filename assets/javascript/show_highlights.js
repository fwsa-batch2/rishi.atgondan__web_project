let getHighlights = [];

function onPageLoader() {
    let newDetails = JSON.parse(localStorage.getItem("HIGHLIGHTS"));
    if (newDetails != null) {
        getHighlights = newDetails;
    }
}
onPageLoader();

function highlights() {
    let getFromLs = JSON.parse(localStorage.getItem("HIGHLIGHTS"));
    let newhighlights = "";
    for (let i of getFromLs) {
        let watchlist =
            `<div class=\"box7\">
                   <iframe class=\"video7\" src=\"${i.video}\" title=\"highlights\"></iframe> 
                   <p class=\"para1\"> ${i.text} </p>
              </div>`;
        newhighlights = newhighlights + watchlist;
    }
    document.getElementById("added_highlights").innerHTML += newhighlights;
}
highlights();

function redirectToAdminPage() {
    window.location.href = "/pubgtournamentapp-ui/pages/admin_highlights.html"
}



