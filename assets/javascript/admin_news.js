function checkingAdminKey(event) {
    event.preventDefault();
    const keyFromUser = document.getElementById("key").value;
    const key = "rishi@news"
    if (key == keyFromUser) {
        window.location.href = "./add_news.html"
    } else {
        document.getElementById("error").innerText = "*invalid admin key";
    }
}