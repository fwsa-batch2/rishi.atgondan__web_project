let userlist = [];

function pageOnLoad() {
    let getAll = JSON.parse(localStorage.getItem("QUERIES"));
    if (getAll != null) {
        userlist = getAll;
    }
}
pageOnLoad();


function submithandler(event) {
    event.preventDefault();
    const comments = document.getElementById("query").value;
    const queries = {
        "comments": comments,
    }
    userlist.push(queries);
    let detailsInString = JSON.stringify(userlist);
    localStorage.setItem("QUERIES", detailsInString);
    alert("Thanks for the comments");
    window.location.reload();
}


function redirectToAdminPage() {
    window.location.href = "./../../pages/admin_popup.html"
}
