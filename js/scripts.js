$(document).ready(function(){


  // when submit is clicked the following will add to n for front end and subtract for back end relevance, and n will determine the result
  $("#tf").submit(function(event) {
    event.preventDefault();
    $("#tf-btn").hide();
    $("input:radio").attr('disabled',true);
    var n = 0;
    $("input:radio:checked").each(function() {
      n += parseInt($(this).val());
    });
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
  // when submitted, multipe answers sorted based on most checked relevant answers
  $("#lang-survey").submit(function() {
    event.preventDefault();
    $("#lang-btn").hide();
    $("#lang-answer").show();
    $("#end-message").show();
    $("input:checkbox").attr('disabled',true);
    var a = "";
    $("input:checkbox:checked").each(function() {
      a += $(this).val();
    });
    // this creates an array with arrays storing relevant checkbox ticks for each language
    var c = []
    var java = []
    var php = []
    var ruby = []
    var langs = [c,java,php,ruby]

    if (a.includes("c")){
      c.push((a.match(/c/g)).length, "c");
    } else{
      c.push(0, c);
    }
    if (a.includes("java")){
      java.push((a.match(/java/g)).length, "java");
    } else{
      java.push(0, java);
    }
    if (a.includes("php")){
      php.push((a.match(/php/g)).length, "php");
    } else{
      php.push(0, "php");
    }
    if (a.includes("ruby")){
      ruby.push((a.match(/ruby/g)).length, "ruby");
    } else{
      ruby.push(0, "ruby");
    }
    langs.sort(function(a, b)
    {
      return b[0] - a[0];
    });
    var plural = 0
    // this will append each answer into #lang-answer in order of amount of relevant checkboxes clicked, using data stored in the arrays
    $(langs).each(function(){
      if (this[0] == 0){
        // do nothing
      } else{
        if (this[1] == "c"){
          $("#lang-answer").append($("#c"));
          plural ++;
        }else if (this[1] == "java"){
          $("#lang-answer").append($("#java"));
          plural ++;
        }else if (this[1] == "php"){
          $("#lang-answer").append($("#php"));
          plural ++;
        }else if (this[1] == "ruby"){
          $("#lang-answer").append($("#ruby"));
          plural ++;
        }
      }
      if (plural > 1){
        $("#plural").show();
      }
      window.scrollBy(0,300);
    });
  })
})
