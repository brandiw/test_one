$(document).ready(function(){
  $("#doit").click(function(){
    console.log("Doing");
    $.ajax({
      method: "GET",
      url: "https://www.opentdb.com/api.php?amount=10&category=9&type=multiple&token=436ca162dc13768dae3dfb22610c9944301293c966ee578b3635467c541e08c1"
    }).done(function(data){
      console.log("done");
      console.log(data);
      console.log("done 2");
    });
  });
});
