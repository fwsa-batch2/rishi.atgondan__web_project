let emptyArray = [];

function onPageLoader() {
    let newDetails = JSON.parse(localStorage.getItem("HIGHLIGHTS"));
    if (newDetails != null) {
        emptyArray = newDetails;
    }
}
onPageLoader();

function addingVideo(event) {
    event.preventDefault();
    let video = document.getElementById("video_input").value;
    let text = document.getElementById("description_input").value;
    let toBeAdded = {
        "video": video,
        "text": text,
    };
    emptyArray.push(toBeAdded);
    localStorage.setItem("HIGHLIGHTS", JSON.stringify(emptyArray));
    window.location.href = "/pubgtournamentapp-ui/pages/highlights.html"
}

