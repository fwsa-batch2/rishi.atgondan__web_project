function checkingAdminKey(event) {
    event.preventDefault();
    const keyFromUser = document.getElementById("key").value;
    const key = "rishi@popup"
    if (key == keyFromUser) {
        window.location.href = "./../../pages/show_queries.html"
    } else {
        document.getElementById("error").innerText = "*invalid admin key";
    }
}
