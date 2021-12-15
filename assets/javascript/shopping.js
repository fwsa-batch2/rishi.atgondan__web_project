function clear1() {
    document.getElementById("div_1").style.display = "none";
}

function clear2() {
    document.getElementById("div_2").style.display = "none";
}



let noOfUc;

function display(x) {
    noOfUc = x;
    return noOfUc;
}

let userList = [];
function submitHandler() {
    event.preventDefault();
    const characterId = document.getElementById("chr_id").value;

    if (noOfUc == null) {
        alert("Please add No of UC");
    } else {
        const obj = {
            "user ID": characterId,
            "UC": noOfUc
        }
        userList.push(obj);

        let detailsInString = JSON.stringify(userList);
        localStorage.setItem("UC purchased", detailsInString);
        alert("Thank you for purchasing UC");
    }

}







