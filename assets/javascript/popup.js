let userlist = [];
function submithandler(event) {
    event.preventDefault();
    const comments = document.getElementById("query").value;
    const queries = {
        "comments": comments,
    }
    userlist.push(queries);
    let detailsInString = JSON.stringify(userlist);
    localStorage.setItem("queries", detailsInString);
    alert("Thanks for the comments");
    window.location.reload();
}


