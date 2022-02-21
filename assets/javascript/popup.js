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
    alert("Your queries are noted and we will soon respond back");
    window.location.reload();
}


function redirectToAdminPage() {
    window.location.href = "/rishi.atgondan__web_project/pages/admin_popup.html"
}
