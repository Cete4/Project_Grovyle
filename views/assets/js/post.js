
    $("#form").on("submit", function(event) {
        event.preventDefault();
        console.log("ran the wrong call");
        // make a newActivity obj
        var newActivity = {
          // name from name input
          ACTIVITY: $("#name").val(),
          // role from role input
          TEMP: weather.temperature.value
        };
        console.log(newActivity);
    
    //   send an AJAX POST-request with jQuery
      $.post("/api/activities", newActivity)
        // on success, run this callback
        .then(function(data) {
          // log the data we found
          console.log(data);
          // tell the user we're adding a character with an alert window
          alert("Adding post...");
        });
      // empty each input box by replacing the value with an empty string
      $("#name").val("");
    });

//   send an AJAX POST-request with jQuery
    // $.get("/api/activities")
    // // on success, run this callback
    // .then(function(data) {
    //   // log the data we found
    //   console.log(data);
    //   // tell the user we're adding a character with an alert window
    //   alert("Adding post...");
    // });

// });