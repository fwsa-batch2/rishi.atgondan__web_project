let userlist = [];


function onPageLoad() {
    let users = JSON.parse(localStorage.getItem("details"));
    if (users != null) {
        userlist = users;
    }
}

onPageLoad()

function submitHandler() {
    event.preventDefault();
    const mail = document.getElementById("mail").value;
    const clan = document.getElementById("clan").value;
    const team = document.getElementById("teamName").value;
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

    const isEmailExist = emailValid(mail);
    const ifTeamNameExists = teamName(team);
    const ifplayer_1Exists = inGameName_1(ign_1);
    const ifplayer_2Exists = inGameName_2(ign_2);
    const ifplayer_3Exists = inGameName_3(ign_3);
    const ifplayer_4Exists = inGameName_4(ign_4);
    const ifplayer_5Exists = inGameName_5(ign_5);
    const ifchr_1Exists = characterId_1(chr_1);
    const ifchr_2Exists = characterId_2(chr_2);
    const ifchr_3Exists = characterId_3(chr_3);
    const ifchr_4Exists = characterId_4(chr_4);
    const ifchr_5Exists = characterId_5(chr_5);

    if (isEmailExist) {
        document.getElementById("error").innerText = "*Email already exist"
    }
    else if (ifTeamNameExists) {
        document.getElementById("error").innerText = "Team name already exist"
    }
    else if (ifplayer_1Exists) {
        document.getElementById("error").innerText = "player name already exist"
    }
    else if (ifplayer_2Exists) {
        document.getElementById("error").innerText = "player name already exist"
    }
    else if (ifplayer_3Exists) {
        document.getElementById("error").innerText = "player name already exist"
    }
    else if (ifplayer_4Exists) {
        document.getElementById("error").innerText = "player name already exist"
    }
    else if (ifplayer_5Exists) {
        document.getElementById("error").innerText = "player name already exist"
    }
    else if (ifchr_1Exists) {
        document.getElementById("error").innerText = "character id already exist"
    }
    else if (ifchr_2Exists) {
        document.getElementById("error").innerText = "character id already exist"
    }
    else if (ifchr_3Exists) {
        document.getElementById("error").innerText = "character id already exist"
    }
    else if (ifchr_4Exists) {
        document.getElementById("error").innerText = "character id already exist"
    }
    else if (ifchr_5Exists) {
        document.getElementById("error").innerText = "character id already exist"
    }
    else {
        const details = {
            "mail": mail,
            "clan": clan,
            "team": team,
            "Player1Ign": ign_1,
            "Player2Ign": ign_2,
            "Player3Ign": ign_3,
            "Player4Ign": ign_4,
            "Player5Ign": ign_5,
            "characterid1": chr_1,
            "characterid2": chr_2,
            "characterid3": chr_3,
            "characterid4": chr_4,
            "characterid5": chr_5
        }
        userlist.push(details);
        let detailsInString = JSON.stringify(userlist);
        localStorage.setItem("details", detailsInString);
        window.location.href = "./popup.html"

    }

}

function emailValid(currentMail) {
    let isUsed = false;
    for (i = 0; i < userlist.length; i++) {
        let list = userlist[i];
        let user = list.mail;
        if (currentMail == user) {
            isUsed = true;
            break;

        }
    } return isUsed;

}

function teamName(currentTeam) {
    let team1 = false;
    for (i = 0; i < userlist.length; i++) {
        let list = userlist[i];
        let user = list.team;
        if (currentTeam == user) {
            team1 = true;
            break;

        }
    } return team1;

}


function inGameName_1(player_1) {
    let isUsed = false;
    for (i = 0; i < userlist.length; i++) {
        let list = userlist[i];
        let user = list.Player1Ign;
        if (player_1 == user) {
            isUsed = true;
            break;

        }
    } return isUsed;

}

function inGameName_2(player_2) {
    let isUsed = false;
    for (i = 0; i < userlist.length; i++) {
        let list = userlist[i];
        let user = list.Player2Ign;
        if (player_2 == user) {
            isUsed = true;
            break;

        }
    } return isUsed;

}

function inGameName_3(player_3) {
    let isUsed = false;
    for (i = 0; i < userlist.length; i++) {
        let list = userlist[i];
        let user = list.Player3Ign;
        if (player_3 == user) {
            isUsed = true;
            break;

        }
    } return isUsed;

}

function inGameName_4(player_4) {
    let isUsed = false;
    for (i = 0; i < userlist.length; i++) {
        let list = userlist[i];
        let user = list.Player4Ign;
        if (player_4 == user) {
            isUsed = true;
            break;

        }
    } return isUsed;

}

function inGameName_5(player_5) {
    let isUsed = false;
    for (i = 0; i < userlist.length; i++) {
        let list = userlist[i];
        let user = list.Player5Ign;
        if (player_5 == user) {
            isUsed = true;
            break;

        }
    } return isUsed;

}

function characterId_1(id_1) {
    let isUsed = false;
    for (i = 0; i < userlist.length; i++) {
        let list = userlist[i];
        let user = list.characterid1;
        if (id_1 == user) {
            isUsed = true;
            break;

        }
    } return isUsed;

}

function characterId_2(id_2) {
    let isUsed = false;
    for (i = 0; i < userlist.length; i++) {
        let list = userlist[i];
        let user = list.characterid2;
        if (id_2 == user) {
            isUsed = true;
            break;

        }
    } return isUsed;

}

function characterId_3(id_3) {
    let isUsed = false;
    for (i = 0; i < userlist.length; i++) {
        let list = userlist[i];
        let user = list.characterid3;
        if (id_3 == user) {
            isUsed = true;
            break;

        }
    } return isUsed;

}

function characterId_4(id_4) {
    let isUsed = false;
    for (i = 0; i < userlist.length; i++) {
        let list = userlist[i];
        let user = list.characterid4;
        if (id_4 == user) {
            isUsed = true;
            break;

        }
    } return isUsed;

}

function characterId_5(id_5) {
    let isUsed = false;
    for (i = 0; i < userlist.length; i++) {
        let list = userlist[i];
        let user = list.characterid5;
        if (id_5 == user) {
            isUsed = true;
            break;

        }
    } return isUsed;

}

