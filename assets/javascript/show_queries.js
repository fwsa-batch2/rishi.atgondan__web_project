function showListOfQueries() {
    let listOfQueries = JSON.parse(localStorage.getItem("QUERIES"));
    let ShowQueries = "";
    for (let i of listOfQueries) {
        let addedQueries = `<div class="queries"><p class="comments">${i.comments}</p></div>`;
        ShowQueries = ShowQueries + addedQueries;
    }
    document.getElementById("list_of_queries").innerHTML = ShowQueries;
    console.log(ShowQueries);
}
showListOfQueries(event);