$(document).ready(function(){


  // when submit is clicked the following will add to n for front end and subtract for back end relevance, and n will determine the result
  $("#trueFalse").submit(function(event) {
    event.preventDefault();
    $("#trueFalseButton").hide();
    $("input:radio").attr('disabled',true);
    var n = 0;
    $("input:radio:checked").each(function() {
      n += parseInt($(this).val());
    });
    if (n == 0) {
      $("#hidden-stack").show();
      $("#lang-survey").show();
    }
    if (n > 0) {
      $("#hidden-front").show();
      $("#end-message").show();
    }
    if (n < 0) {
      $("#hidden-back").show();
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
    var checkedAnswerValues = "";
    $("input:checkbox:checked").each(function() {
      checkedAnswerValues += $(this).val();
    });
    // this creates an array with arrays storing relevant checkbox ticks for each language
    var cArray = [];
    var javaArray = [];
    var phpArray = [];
    var rubyArray = [];
    var langsArray = [cArray,javaArray,phpArray,rubyArray];

    if (checkedAnswerValues.includes("c")){
      cArray.push((checkedAnswerValues.match(/c/g)).length, "c");
    } else{
      cArray.push(0, "c");
    }
    if (checkedAnswerValues.includes("java")){
      javaArray.push((checkedAnswerValues.match(/java/g)).length, "java");
    } else{
      javaArray.push(0, "java");
    }
    if (checkedAnswerValues.includes("php")){
      phpArray.push((checkedAnswerValues.match(/php/g)).length, "php");
    } else{
      phpArray.push(0, "php");
    }
    if (checkedAnswerValues.includes("ruby")){
      rubyArray.push((checkedAnswerValues.match(/ruby/g)).length, "ruby");
    } else{
      rubyArray.push(0, "ruby");
    }
    // a and b are for comparison for which value is greater
    langsArray.sort(function(a, b){
      return b[0] - a[0];
    });
    var plural = 0;
    // this will append each answer into #lang-answer in order of amount of relevant checkboxes clicked, using data stored in the arrays
    $(langsArray).each(function(){
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
