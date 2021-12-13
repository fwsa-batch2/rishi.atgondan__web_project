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
    // const ifTeamNameExists = teamName(teamname);
    // const ifplayer_1Exists = characterId_1(ign_1);
    // const ifplayer_2Exists = characterId_1(ign_2);
    // const ifplayer_3Exists = characterId_1(ign_3);
    // const ifplayer_4Exists = characterId_1(ign_4);
    // const ifplayer_5Exists = characterId_1(ign_5);
    // const ifchr_1Exists = characterId_1(chr_1);
    // const ifchr_2Exists = characterId_1(chr_2);
    // const ifchr_3Exists = characterId_1(chr_3);
    // const ifchr_4Exists = characterId_1(chr_4);
    // const ifchr_5Exists = characterId_1(chr_5);

    if (isEmailExist) {
        document.getElementById("error").innerHTML = "*Email already exist"
    }
    // else if (ifTeamNameExists) {
    //     document.getElementById("squadname").innerHTML = "Team name already exist"
    // }
    // else if (player_1Name) {
    //     document.getElementById("error").innerHTML = "player name already exist"
    // }
    // else if (player_2Name) {
    //     document.getElementById("error").innerHTML = "player name already exist"
    // }
    // else if (player_3Name) {
    //     document.getElementById("error").innerHTML = "player name already exist"
    // }
    // else if (player_4Name) {
    //     document.getElementById("error").innerHTML = "player name already exist"
    // }
    // else if (player_5Name) {
    //     document.getElementById("error").innerHTML = "player name already exist"
    // }
    // else if (characterId_2) {
    //     document.getElementById("error").innerHTML = "character id already exist"
    // }
    // else if (characterId_3) {
    //     document.getElementById("error").innerHTML = "character id already exist"
    // }
    // else if (characterId_4) {
    //     document.getElementById("error").innerHTML = "character id already exist"
    // }
    // else if (characterId_5) {
    //     document.getElementById("error").innerHTML = "character id already exist"
    // }
    // else if (characterId_6) {
    //     document.getElementById("error").innerHTML = "character id already exist"
    // }
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
            "character id-5": chr_5
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

// function teamName(currentTeam) {
//     let team = false;
//     for (i = 0; i < userlist.length; i++) {
//         let list = userlist[i];
//         let user = list.teamname;
//         if (currentTeam == user) {
//             team = true;
//             break;

//         }
//     } return team;

// }


// function inGameName_1(player_1) {
//     let isUsed = false;
//     for (i = 0; i < userlist.length; i++) {
//         let list = userlist[i];
//         let user = list.ign_1;
//         if (player_1 == user) {
//             isUsed = true;
//             break;

//         }
//     } return isUsed;

// }

// function inGameName_2(player_2) {
//     let isUsed = false;
//     for (i = 0; i < userlist.length; i++) {
//         let list = userlist[i];
//         let user = list.ign_2;
//         if (player_2 == user) {
//             isUsed = true;
//             break;

//         }
//     } return isUsed;

// }

// function inGameName_3(player_3) {
//     let isUsed = false;
//     for (i = 0; i < userlist.length; i++) {
//         let list = userlist[i];
//         let user = list.ign_3;
//         if (player_3 == user) {
//             isUsed = true;
//             break;

//         }
//     } return isUsed;

// }

// function inGameName_4(Player_4) {
//     let isUsed = false;
//     for (i = 0; i < userlist.length; i++) {
//         let list = userlist[i];
//         let user = list.ign_4;
//         if (player_4 == user) {
//             isUsed = true;
//             break;

//         }
//     } return isUsed;

// }

// function inGameName_5(Player_5) {
//     let isUsed = false;
//     for (i = 0; i < userlist.length; i++) {
//         let list = userlist[i];
//         let user = list.ign_5;
//         if (player_5 == user) {
//             isUsed = true;
//             break;

//         }
//     } return isUsed;

// }

// function characterId_1(id_1) {
//     let isUsed = false;
//     for (i = 0; i < userlist.length; i++) {
//         let list = userlist[i];
//         let user = list.chr_1;
//         if (id_1 == user) {
//             isUsed = true;
//             break;

//         }
//     } return isUsed;

// }

// function characterId_2(id_2) {
//     let isUsed = false;
//     for (i = 0; i < userlist.length; i++) {
//         let list = userlist[i];
//         let user = list.chr_2;
//         if (id_2 == user) {
//             isUsed = true;
//             break;

//         }
//     } return isUsed;

// }

// function characterId_3(id_3) {
//     let isUsed = false;
//     for (i = 0; i < userlist.length; i++) {
//         let list = userlist[i];
//         let user = list.chr_3;
//         if (id_3 == user) {
//             isUsed = true;
//             break;

//         }
//     } return isUsed;

// }

// function characterId_4(id_4) {
//     let isUsed = false;
//     for (i = 0; i < userlist.length; i++) {
//         let list = userlist[i];
//         let user = list.chr_4;
//         if (id_4 == user) {
//             isUsed = true;
//             break;

//         }
//     } return isUsed;

// }

// function characterId_5(id_5) {
//     let isUsed = false;
//     for (i = 0; i < userlist.length; i++) {
//         let list = userlist[i];
//         let user = list.chr_5;
//         if (id_5 == user) {
//             isUsed = true;
//             break;

//         }
//     } return isUsed;

// }

