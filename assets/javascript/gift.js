let fb_list = [];

function onLoad () {
    let getFromLs = JSON.parse(localStorage.getItem('feedback'));
    console.log(getFromLs);
    if (getFromLs != null) {
        fb_list = getFromLs;
    };
};
onLoad();
function submitHandler(event) {
    event.preventDefault();
    let user_id = document.getElementById('user_id').value;
    let email_id = document.getElementById('email_id').value;
    let feedback = document.getElementById('feedback').value;
  
    let obj = {
        'user_id' : user_id,
        'email_id' : email_id,
        'feedback' : feedback
    };
    pushToLs(obj);
    window.location.href = '../../index.html';
};

function pushToLs(obj) {
    fb_list.push(obj);
    fb_list = JSON.stringify(fb_list);
    localStorage.setItem('feedback', fb_list);
};