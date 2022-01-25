let emptyarray = [];

function onPageLoader() {
    let newDetails = JSON.parse(localStorage.getItem("HIGHLIGHTS"));
    if (newDetails != null) {
        emptyarray = newDetails;
    } else {
        localStorage.setItem("HIGHLIGHTS", JSON.stringify([]));
    }
    return emptyarray;
}
onPageLoader();

function addingVideo(event) {
    event.preventDefault();
    let video = document.getElementById("video_input").value;
    let text = document.getElementById("description_input").value;
    let toBeAdded = {
        video: video,
        text: text,
    };
    emptyarray.push(toBeAdded);
    localStorage.setItem("HIGHLIGHTS", JSON.stringify(emptyarray));
    window.location.href = "./highlights.html"
}

