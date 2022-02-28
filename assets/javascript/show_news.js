let notice = [];
let achievements = [];
let events = [];

function onPageLoaderNews() {
    let newDetails = JSON.parse(localStorage.getItem("NOTICE"));
    if (newDetails != null) {
        notice = newDetails
    }
}
onPageLoaderNews();

function onPageLoaderAchievements() {
    let newDetails = JSON.parse(localStorage.getItem("ACHIEVEMENTS"));
    if (newDetails != null) {
        achievements = newDetails
    }
}
onPageLoaderAchievements();

function onPageLoaderNotice() {
    let newDetails = JSON.parse(localStorage.getItem("EVENTS"));
    if (newDetails != null) {
        events = newDetails
    }
}
onPageLoaderNotice();

function addingNotice() {
    let newsFromLocalStorage = JSON.parse(localStorage.getItem("NOTICE"));
    let newNews = "";
    for (let i of newsFromLocalStorage) {
        let listOfNews = `<div class=\"notice1\"> 
                                <img class=\"notice_img\" src=\"./../../assets/images/notice1.jpg\" alt=\"notice\"> 
                                <p class=\"notice\">NOTICE :-</p>
                                <p class=\"issue\"><strong>${i.heading}</strong></p><br>
                                <p class = \"info"\>${i.text}</p>
                          </div>`
        newNews = newNews + listOfNews;
    }
    document.getElementById("added_notices").innerHTML = newNews;
}

addingNotice();

function addingAchievements() {
    let achievementsFromLocalStorage = JSON.parse(localStorage.getItem("ACHIEVEMENTS"));
    let newAchievements = "";
    for (let i of achievementsFromLocalStorage) {
        let listOfAchievements = `<div class=\"sub_box4\">
                                      <h1 class=\"tournament\">${i.heading}</h1>
                                      <img class=\"rivals\" alt=\"tourney\" src=${i.image}>
                                      <p class=\"para4\">${i.text}</p>
                                  </div>`

        newAchievements = newAchievements + listOfAchievements;
    }
    document.getElementById("added_achievements").innerHTML = newAchievements;
}

addingAchievements();

function addingEvents() {
    let eventsFromLocalStorage = JSON.parse(localStorage.getItem("EVENTS"));
    console.log(eventsFromLocalStorage);
    let newEvents = "";
    for (let i of eventsFromLocalStorage) {
        let listOfEvents = `<div class=\"sub_box4\">     
                                 <img class=\"rivals\" alt=\"tourney\" src=${i.image}>
                                 <p class=\"para4\">${i.text}</p>
                            </div>`
        newEvents = newEvents + listOfEvents;
    }
    document.getElementById("added_events").innerHTML = newEvents;
}

addingEvents();


