// ######################################   Back End Code   #################################


var course = function(selection){
  if(selection === 1){
    return "Ruby";
  }else if (selection ===2){
    return "Python";
  }else{
    return "php";
  }
  };

var stateMent = function(choice, highSchool, javaScript, engineeringDegree, interest, aptitude){

  if (!highSchool){
    return "Web development is not for you. Please go get more education";
  }else if(engineeringDegree){
    return "You selected " +choice+ ". Python is right for you as engineers. With Python engineers are more attractive to employers";
  }else if (!javaScript){
    return "you selected " +choice+ ". It is really better if you first learn javaScript. Your choice of course has  java script as a pre-req.";
  }else if(!interest){
    return "Please go and change your planned profession. You are not a good fit here";
  }else if(aptitude){
    return "you selected " +choice+ ". It is really better if you take ruby because ruby is very powerfull and will be more utilized by person that like abstract scenairios as opposed to a logical person who would do better with a restrictive but very fast language as Python";
  } else {
    return "you selected " +choice+ ". It is really better if you take Python as this suits more to a logical person who wants to strictly harnesses his code on what it should do";
  }
  };
// ###########################################   Front End code    ######################################


/*$(document).ready(function() {
 $("form#courseSelection").submit(function(event){
    //alert("we are at the beginning of another block");
    //$("result").val()= "";
    event.preventDefault();
    //$("#output").text("result");
    var highSchool = parseInt($("#highSchool").val());
    var javaScript = parseInt($("#javaScript").val());
    var engineeringDegree = parseInt($("#engineeringDegree").val());
    var interest = parseInt($("#interest").val());
    var aptitude = parseInt($("#aptitude").val());
    var selection = parseInt($("#courseType").val());
    console.log(javaScript);
    console.log(selection);  // for debugging
    console.log(highSchool);  // for debugging
    console.log(engineeringDegree);  // for debugging
    var courseType = course(selection);
    var result = stateMent(courseType, highSchool, javaScript, engineeringDegree, interest, aptitude);
    $("#choice").toggle();
    $("#questions").toggle();
    //$("#myButton").toggle();
    //if ("#output"){
      //$("#output") = "";
    //}
    $("#output").text(result);
    //$("#returnButton").toggle();
    });
});*/
$(document).ready(function() {
  $("form#courseSelection").submit(function(event){
    event.preventDefault();
    var myJqueryInputs = ["highSchool", "javaScript", "engineeringDegree", "interest", "aptitude"];
    var duplicate = [];
    myJqueryInputs.forEach(function(myInputs){
      var myInputs = parseInt($("#" + myInputs).val());
      duplicate.push(myInputs);
      console.log(myInputs);
      $("#newForEachLoopPractice").prepend("<li>" +myInputs + "</li>");
      $("#olPractice").prepend("<li>" +myInputs + "</li>");
    });
     /*var highSchool = parseInt($("#highSchool").val());
     var javaScript = parseInt($("#javaScript").val());
     var engineeringDegree = parseInt($("#engineeringDegree").val());
     var interest = parseInt($("#interest").val());
     var aptitude = parseInt($("#aptitude").val());
     var selection = parseInt($("#courseType").val());
     console.log(javaScript);
     console.log(selection);  // for debugging
     console.log(highSchool);  // for debugging
     console.log(engineeringDegree);  // for debugging*/

     var selection = parseInt($("#courseType").val());
     var courseType = course(selection);
     var result = stateMent(courseType, duplicate[0], duplicate[1], duplicate[2], duplicate[3],duplicate[4]);
    
     $("#choice").toggle();
     $("#questions").toggle();
     $("#output").text(result);
 });
});