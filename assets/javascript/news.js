// function selector() {
//     event.preventDefault();
//     const achieve = document.getElementById("achievements").value;
//     const note = document.getElementById("notice").value;
//     const event = document.getElementById("events").value;
// }

// if (achieve) {
//     document.getElementById("achievements").value;
// }
// else if (notice) {
//     document.getElementById("notice").value;
// }
// // else if (event) {
// //     document.getElementById("events").value;
// // }

function filter(event) {
    alert(this.options[this.selectedIndex].text);
}