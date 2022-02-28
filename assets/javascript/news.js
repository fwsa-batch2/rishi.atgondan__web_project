function get1(x) {
    if (x == "all") {
        document.getElementById("events").style.display = "";
        document.getElementById("box_all").style.display = "";
        document.getElementById("notice_all").style.display = "";
        document.getElementById("added_notices").style.display = "";
        document.getElementById("added_achievements").style.display = "";
        document.getElementById("added_events").style.display = "";
    }
}
function get2(x) {
    if (x == "events") {
        document.getElementById("box_all").style.display = "none";
        document.getElementById("notice_all").style.display = "none";
        document.getElementById("events").style.display = "";
        document.getElementById("added_notices").style.display = "none";
        document.getElementById("added_achievements").style.display = "none";
        document.getElementById("added_events").style.display = "";
    }
}
function get3(x) {
    if (x == "notice") {
        document.getElementById("box_all").style.display = "none";
        document.getElementById("events").style.display = "none";
        document.getElementById("notice_all").style.display = "";
        document.getElementById("added_notices").style.display = "";
        document.getElementById("added_achievements").style.display = "none";
        document.getElementById("added_events").style.display = "none";
    }
}
function get4(x) {
    if (x == "achievements") {
        document.getElementById("notice_all").style.display = "none";
        document.getElementById("events").style.display = "none";
        document.getElementById("box_all").style.display = "";
        document.getElementById("added_notices").style.display = "none";
        document.getElementById("added_achievements").style.display = "";
        document.getElementById("added_events").style.display = "none";
    }
}

function redirectToAdminPage() {
    window.location.href = "./admin_news.html"
}

