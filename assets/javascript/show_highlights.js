let getHighlights = [];

function onPageLoader() {
    let newDetails = JSON.parse(localStorage.getItem("HIGHLIGHTS"));
    if (newDetails != null) {
        getHighlights = newDetails;
        getHighlights.forEach(highlights);
        console.log(newDetails);
    }
}
onPageLoader();

// function highlights() {
//     let newhighlights = "";
//     for (let i of getHighlights) {
//         let watchlist =
//             `<div class=\"box1\">
//                    <iframe class=\"video1\" src=\"${i.video}\" title=\"highlights\"></iframe> 
//                    <p class=\"para1\"> ${i.text} </p>
//               </div>`;
//         newhighlights = newhighlights + watchlist;
//     }
//     document.getElementById("added_highlights").innerHTML += newhighlights;
// }
// highlights();
 
function redirectToAdminPage() {
    window.location.href = "./../../pages/admin_highlights.html"
}

function highlights(item) {
    document.getElementById("added_highlights").innerHTML += `<div class="box1">
                                                                 <iframe class="video1" src="${item.video}" title="highlights"></iframe> 
                                                                 <p class="para1"> ${item.text} </p>
                                                              </div>`
}



