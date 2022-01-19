let emptyarray = [];

function onPageLoader() {
    let newDetails = JSON.parse(localStorage.getItem("highlights"));
    if (newDetails != null) {
        emptyarray = newDetails;
    } else {
        localStorage.setItem("highlights", JSON.stringify([]));
    }
    return emptyarray;
}
onPageLoader();

function addingVideo(event) {
    event.preventDefault();
    let video = document.getElementById("video_input").value;
    let text = document.getElementById("description_input").value;

    console.log(video, text);
    let toBeAdded = {
        video: video,
        text: text,
    };
    emptyarray.push(toBeAdded);
    localStorage.setItem("highlights", JSON.stringify(emptyarray));
    window.location.href = "./highlights.html"
}

