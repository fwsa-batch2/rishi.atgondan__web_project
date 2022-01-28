let notice = [];
let achievements = [];
let events = [];

function onPageLoader() {
    let newDetails = JSON.parse(localStorage.getItem("NOTICE"));
    if (newDetails != null) {
        notice = newDetails
    }
}
onPageLoader();

function onPageLoader() {
    let newDetails = JSON.parse(localStorage.getItem("ACHIEVEMENTS"));
    if (newDetails != null) {
        achievements = newDetails
    }
}
onPageLoader();

function onPageLoader() {
    let newDetails = JSON.parse(localStorage.getItem("EVENTS"));
    if (newDetails != null) {
        events = newDetails
    }
}
onPageLoader();

function addingNotice(event) {
    event.preventDefault();
    let text = document.getElementById("description_input").value;
    let toBeAdded = {
        "text": text,
    };
    notice.push(toBeAdded);
    localStorage.setItem("NOTICE", JSON.stringify(notice));
    window.location.href = "./../../pages/news.html"
}

function addingAchievements(event) {
    event.preventDefault();
    let image = document.getElementById("image_input1").value;
    let text = document.getElementById("achievements_text").value;
    let toBeAdded = {
        "image": image,
        "text": text,
    };
    achievements.push(toBeAdded);
    localStorage.setItem("ACHIEVEMENTS", JSON.stringify(achievements));
    window.location.href = "./../../pages/news.html"
}

function addingEvents(event) {
    event.preventDefault();
    let image = document.getElementById("image_input2").value
    let text = document.getElementById("event_name").value;
    let toBeAdded = {
        "image": image,
        "text": text,
    };
    events.push(toBeAdded);
    localStorage.setItem("EVENTS", JSON.stringify(events));
    window.location.href = "./../../pages/news.html"
}

function addNotice(x) {
    if (x == "notice") {
        document.getElementById("add_achievements").style.display = "none";
        document.getElementById("add_events").style.display = "none";
        document.getElementById("add_notice").style.display = "block";
    }
}

function addAchievements(x) {
    if (x == "achievements") {
        document.getElementById("add_achievements").style.display = "block";
        document.getElementById("add_events").style.display = "none";
        document.getElementById("add_notice").style.display = "none";
    }
}

function addEvents(x) {
    if (x == "events") {
        document.getElementById("add_achievements").style.display = "none";
        document.getElementById("add_events").style.display = "block";
        document.getElementById("add_notice").style.display = "none";
    }
}