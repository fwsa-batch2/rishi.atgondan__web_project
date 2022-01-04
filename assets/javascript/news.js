function get1(x) {
    if (x == "all") {
        document.getElementById("events").style.display = "block";
        document.getElementById("box_all").style.display = "block";
        document.getElementById("notice_all").style.display = "block";
    }
}
function get2(x) {
    if (x == "events") {
        document.getElementById("box_all").style.display = "none";
        document.getElementById("notice_all").style.display = "none";
        document.getElementById("events").style.display = "block";
    }
}
function get3(x) {
    if (x == "notice") {
        document.getElementById("box_all").style.display = "none";
        document.getElementById("events").style.display = "none";
        document.getElementById("notice_all").style.display = "block";
    }
}
function get4(x) {
    if (x == "achievements") {
        document.getElementById("notice_all").style.display = "none";
        document.getElementById("events").style.display = "none";
        document.getElementById("box_all").style.display = "block";
    }
}

