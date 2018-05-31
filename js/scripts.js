$(function(){
  var inputtedName;
  var inputtedAddress;
  var inputtedPhone;
  var inputtedEmail;

  $("#submitButton").click(function(event){
    inputtedName = $("#nameInput").val();
    inputtedAddress = $("#addressInput").val();
    inputtedPhone = $("#phoneInput").val();
    inputtedEmail = $("#emailInput").val();

    var inputtedInfo = "<h3 class='clickable-name'>" + inputtedName + "</h3><div class='invisible-info'><strong>Address</strong>: " + inputtedAddress + "<br><strong>Phone</strong>: " +inputtedPhone + "<br><strong>Email</strong>: " + inputtedEmail + "<br></div>";


    $("#list-area").html(inputtedInfo);
    $(".clickable-name").click(function(){
      $(".invisible-info").toggle();
    });

    inputtedName="";
    inputtedAddress="";
    inputtedPhone="";
    inputtedEmail="";

    event.preventDefault();
  });



});
