$(document).ready(function() {
  $("#formName").submit(function(event) {
    var firstNameInput = $("input#firstName").val();

    $(".firstName").text(firstNameInput);
  
    var lastNameInput = $("input#lastName").val()
    ;

    $(".lastName").text(lastNameInput);

    var addressInput = $("input#address").val();

    $(".address").text(addressInput);

    $("#reciept").show();

    event.preventDefault();
  });
});