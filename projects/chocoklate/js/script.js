// Variables
var $purchases = "";
var $div = "";
var $random = $("#random");

$(document).on("ready", function() {
  $.getJSON("cakes.json", function(json) {
      for (var i = 0; json.length > i; i++) {
        // pick which class new <p> element will have, each class has diffrent color and font-size
        if (json[i].purchases < 200) {
          $purchases = "grey";
        } else if (json[i].purchases < 400) {
          $purchases = "light";
        } else if (json[i].purchases < 600) {
          $purchases = "mid";
        } else if (json[i].purchases >= 600) {
          $purchases = "dark";
        }
        //add to the existing div new <p> element with cake name take from json file
        $div += "<p class=\"" + $purchases + "\">" + json[i].cakeName + "</p>";
      }
      $random.append($div);
  });
});
