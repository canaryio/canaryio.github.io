function showSignup () {
 $("#signup").css("display", "inline");   
}

function closeSignup () {
    $("#signup").css("display", "none");
}

function showThankyou () {
  $("#thankyou").css("display", "inline");
}

function closeThankyou () {
  $("#thankyou").css("display", "none");
}

function sendMail() {
    var myName = $('#uName').val();
    var myEmail = $('#uEmail').val();
  $.get("http://54.200.206.48/pass?user=" + myName + "&email=" + myEmail, function(result) {
    closeSignup();
    showThankyou();
  });
}