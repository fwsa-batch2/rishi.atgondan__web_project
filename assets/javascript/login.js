
function submitHandler() {
    event.preventDefault();
    let mail = document.getElementById("mail").value;
    let clan = document.getElementById("clan").value;
    let team = document.getElementById("team_name").value;
    let ign_1 = document.getElementById("ign-1").value;
    let ign_2 = document.getElementById("ign-2").value;
    let ign_3 = document.getElementById("ign-3").value;
    let ign_4 = document.getElementById("ign-4").value;
    let ign_5 = document.getElementById("ign-5").value;
    let chr_1 = document.getElementById("chr_id-1").value;
    let chr_2 = document.getElementById("chr_id-2").value;
    let chr_3 = document.getElementById("chr_id-3").value;
    let chr_4 = document.getElementById("chr_id-4").value;
    let chr_5 = document.getElementById("chr_id-5").value;


    let details = {
        "mail": mail,
        "clan": clan,
        "team": team,
        "Player 1 IGN": ign_1,
        "Player 2 IGN": ign_2,
        "Player 3 IGN": ign_3,
        "Player 4 IGN": ign_4,
        "Player 5 IGN": ign_5,
        "character id-1": chr_1,
        "character id-2": chr_2,
        "character id-3": chr_3,
        "character id-4": chr_4,
        "character id-5": chr_5,
    };


    const detailsInString = JSON.stringify(details);
    localStorage.setItem("details", detailsInString);
    window.location.href = "./popup.html";



}
