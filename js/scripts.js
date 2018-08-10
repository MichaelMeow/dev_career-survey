$(document).ready(function(){




  $("#tf").submit(function(event) {
    event.preventDefault();
    $("#tf-btn").hide();
    $("input:radio").attr('disabled',true);
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
      $("#end-message").show();
    }
    if (n < 0) {
      $("#hidden-b").show();
      $("#lang-survey").show();
    }
    window.scrollBy(0,1000);
  })



  $("#lang-survey").submit(function() {
    event.preventDefault();
    $("#lang-btn").hide();
    $("#lang-answer").show();
    $("input:checkbox").attr('disabled',true);
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
      php.push(0, "php");
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


    var plural = 0
    $(langs).each(function(){
      console.log(this[1]);
      if (this[0] == 0){
        // do nothing
      } else{

        if (this[1] == "c"){
          console.log("working");
          $("#c").show();
          plural ++;
        }else if (this[1] == "java"){
          $("#java").show();
          plural ++;
        }else if (this[1] == "php"){
          $("#php").show();
          plural ++;
        }else if (this[1] == "ruby"){
          $("#ruby").show();
          plural ++;
        }
      }


      if (plural > 1){
        $("#plural").show();
      }
      window.scrollBy(0,300);

      $("#end-message").show();

    });



  })
})
