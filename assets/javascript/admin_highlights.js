function checkingAdminKey(event) {
    event.preventDefault();
    const keyFromUser = document.getElementById("key").value;
    const key = "rishi@highlights"
    if (key == keyFromUser) {
        window.location.href = "/rishi.atgondan__web_project/pages/addhighlights.html"
    } else {
        document.getElementById("error").innerText = "*invalid admin key";
    }
}
