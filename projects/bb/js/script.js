//Variables
var $input = $(".table input");
var $money = $("input.moneyInput");
var $time = $("input.timeInput");
var $burger = $("#burger");
var $menu = $("#menu");
var $h2 = $(".container-fluid > .row:nth-child(6) h2");
var $temp, $value, $rate;


//Functions
function showList() {
  $h2.on("click", function() {
    if (window.matchMedia('(max-width: 768px)').matches) {
      $temp = $(this).attr("class");
      $temp = "ul." + $temp + " li";
      $($temp).toggle();
    }
  });
};
function showMenu() {
  $burger.on("click", function() {
    $("#menu").toggle();
  });
};

function valueSet() {
  $input.on("input", function() {
    $temp = $(this).attr("class");
    $temp = "p." + $temp;
    $value = $(this).val();
    if ($temp == "p.moneyInput") {
      $value += " zł";
    } else {
      if ($value == 1) {
        $value += " rok";
      } else if ($value <= 4) {
        $value += " lata";
      } else if ($value  >= 5) {
        $value += " lat";
      }
    };
    $($temp).text($value);
  });
}

function showRate() {
  $input.on("input", function() {
    if ($("p.moneyInput").text().indexOf("??") != -1 || $("p.timeInput").text().indexOf("??") != -1) {
      // Do nothing
    } else {
      $rate = $money.val() / ($time.val() * 12);
      $rate += $rate * (10/100);
      $("h3 span").text(" " + Math.floor($rate) + " zł");
    }
  });
};


$(document).on("ready", function() {
  valueSet();
  showMenu();
  showRate();
  showList();
});
