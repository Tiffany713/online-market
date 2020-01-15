$(document).ready(function() {
  $("#formName").submit(function(event) {
   
    var firstNameInput = $("input#firstName").val();
    $(".firstName").text(firstNameInput);


    var lastNameInput = $("input#lastName").val()
    ;
    $(".lastName").text(lastNameInput);


    var streetInput = $("input#street").val();
    $(".street").text(streetInput);

    var cityInput = $("input#city").val();
    $(".city").text(cityInput);

    var stateInput = $("input#state").val();
    $(".state").text(stateInput);

    var zipInput = $("input#zip").val();
    $(".zip").text(zipInput);

    $("#reciept").show();

    event.preventDefault();
  });
});