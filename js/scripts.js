$(document).ready(function(){
  $("#tf").submit(function(event) {
    event.preventDefault();

    var n = 0;
    $("input:radio:checked").each(function() {
      n += parseInt($(this).val());
    });
    console.log(n);

    if (n == 0) {
      $("#hidden-s").show();
      $("#lang-survey").show();
    }
    if (n > 0) {
      $("#hidden-f").show();
    }
    if (n < 0) {
      $("#hidden-b").show();
      $("#lang-survey").show();
    }
    $("#tf-btn").hide();
  })

  $("#lang-survey").submit(function() {

  })
})
