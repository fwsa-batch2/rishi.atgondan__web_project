function checkingAdminKey(event) {
    event.preventDefault();
    const keyFromUser = document.getElementById("key").value;
    const key = "rishi@highlights"
    if (key == keyFromUser) {
        window.location.href = "./../../pages/addhighlights.html"
    } else {
        document.getElementById("error").innerText = "*invalid admin key";
    }
}
