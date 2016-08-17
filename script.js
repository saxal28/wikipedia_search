//tst
//https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=pizza&srwhat=text&srprop=timestamp&continue=&srprop=snippet&inprop=url&format=json&callback=?

$("button").click(function() {
  var searchText = $("input").val();
  var jsonUrl = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchText + "&srwhat=text&srprop=timestamp&continue=&srprop=snippet&format=json&callback=?";
  $("h1").css("margin-top", "50px");
  $.getJSON(jsonUrl, function(json) {
    $("#container").html("");
    for (var i = 0; i < 11; i++) {
      //gets title
      var title = json.query.search[i].title;
      //gets snippet
      var snip = json.query.search[i].snippet;
      //creates page url to link back to wikipedia when clicked
      var urlLink = "<a href='https://en.wikipedia.org/wiki/" + title + "'>Link</a>";
      var other = "https://en.wikipedia.org/wiki/" + title;
      //adds divs with title and snippet
      $("#container").append("<a href='" + other + "'><div class='result'><h4>" + title + "</h4><small>" + snip + "......</small></div></a>").hide().fadeIn(400);
      $(".result").on("mouseover", function() {
        $(this).css("border-left", "10px solid orange");
        $(".result").on("mouseleave", function() {
          $(this).css("border-left", "none");
        });
      });
    }
    //^end of loop       
  });
  //end of getJSON function
});
//end of click