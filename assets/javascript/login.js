let userArr = [];
function assign_from_Ls() {
    let users = JSON.parse(localStorage.getItem('details'));
    if (users != null) {
        userArr = users;
    }
}
assign_from_Ls();

function submitHandler() {
    event.preventDefault();
    const mail = document.getElementById("mail").value;
    const clan = document.getElementById("clan").value;
    const team = document.getElementById("team_name").value;
    const ign_1 = document.getElementById("ign-1").value;
    const ign_2 = document.getElementById("ign-2").value;
    const ign_3 = document.getElementById("ign-3").value;
    const ign_4 = document.getElementById("ign-4").value;
    const ign_5 = document.getElementById("ign-5").value;
    const chr_1 = document.getElementById("chr_id-1").value;
    const chr_2 = document.getElementById("chr_id-2").value;
    const chr_3 = document.getElementById("chr_id-3").value;
    const chr_4 = document.getElementById("chr_id-4").value;
    const chr_5 = document.getElementById("chr_id-5").value;

    const email_exist = email_valid(mail);
    if (email_exist) {
        alert('email already exist');
    }
    else {
        const details = {
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





}

function email_valid(current_email) {
    let used = false;
    for (i = 0; i < userArr.length; i++) {
        const user = userArr[i];
        const email = user.mail;
        if (current_email == user) {
            used = true;
            break;
        }
    }
    return used;
}