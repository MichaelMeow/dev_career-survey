$(document).ready(function(){
  $("#tf").submit(function(event) {
    event.preventDefault();
    $("#tf-btn").hide();

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
  })



  $("#lang-survey").submit(function() {
    event.preventDefault();
    $("#tf-btn").hide();
    // multipe answers displayed, and sorted based on most commonly checked relevant answers


    var n = "";
    $("input:checkbox:checked").each(function() {
      n += $(this).val();
      console.log(n);
    });

    var c = []
    var java = []
    var php = []
    var ruby = []
    var langs = [c,java,php,ruby]

    if (n.includes("c")){
      c.push((n.match(/c/g)).length, "c");
    } else{
      c.push(0, c);
    }

    if (n.includes("java")){
      java.push((n.match(/java/g)).length, "java");

    } else{
      java.push(0, java);
    }

    if (n.includes("php")){
      php.push((n.match(/php/g)).length, "php");
    } else{
      php.push(0, php);
    }

    if (n.includes("ruby")){
      ruby.push((n.match(/ruby/g)).length, "ruby");
    } else{
      ruby.push(0, "ruby");
    }
    console.log(langs);
    console.log(langs[0]);
    langs.sort(function(a, b)
{
    return b[0] - a[0];
});

    console.log(langs);
    console.log(langs[0]);


  })
})
