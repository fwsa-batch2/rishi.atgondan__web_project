function checkingAdminKey(event) {
    event.preventDefault();
    const keyFromUser = document.getElementById("key").value;
    const key = "rishi@123"
    if (key == keyFromUser) {
        window.location.href = "./../../pages/show_queries.html"
    } else {
        alert("INVALID ADMIN KEY");
    }
}
