function clear1() {
    document.getElementById("div_1").style.display = "none";
}

function clear2() {
    document.getElementById("div_2").style.display = "none";
}

let userid = [];

function submitHandler() {
    event.preventDefault();
    const characterId = document.getElementById("chr_id").value;

    console.log(characterId);


}

