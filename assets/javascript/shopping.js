function clear1() {
    document.getElementById("div_1").style.display = "none";
}

function clear2() {
    document.getElementById("div_2").style.display = "none";
}

function action1() {
    window.open("https://play.google.com/store/apps/details?id=com.pubg.imobile", "_blank")
}

function action2() {
    window.open("https://apps.apple.com/in/app/battlegrounds-mobile-india/id1526436837", "_blank")

}

let noOfUc;

function display(x) {
    let input = document.getElementById("chr_id").value;
    if (input == "") {
        document.getElementById("error").innerHTML = "*Please fill user id";
    }
    else if (input != "") {
        noOfUc = x;
        return noOfUc;
    }

}

let userList = [];
function submitHandler(event) {
    event.preventDefault();
    const characterId = document.getElementById("chr_id").value;

    if (noOfUc == null) {
        alert("Please add No Of UC");
    } else {
        const objectUC = {
            "user ID": characterId,
            "UC": noOfUc
        }
        userList.push(objectUC);
        let detailsInString = JSON.stringify(userList);
        localStorage.setItem("UC purchased", detailsInString);
        alert("Thank you for purchasing UC");
        window.location.reload();
    }
}

function getAll() {
    const arrayToString = localStorage.getItem("UC purchased");
    let inArray = [];
    if (arrayToString) {
        inArray = JSON.parse(arrayToString);
    }
    return inArray;
}
function pageOnLoadHandler() {
    const all = getAll();
    userList = all;
}

pageOnLoadHandler();



