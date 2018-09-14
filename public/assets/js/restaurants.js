// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    //on click of like button send a PUT request
    $(".liked").on("click", function(event) {
        var id = $(this).data("id");

        //create object with new values
        var newRestaurantState = {
            visited: true,
            liked :true
        };

        // Send the PUT request with id in query parameter and values in request body
        $.ajax("/api/restaurants/" + id, {
            type: "PUT",
            data: newRestaurantState
        }).then(
            function() {
            location.reload();
            }
        );
    });
  
    //on click of dislike button send a PUT request
    $(".disliked").on("click", function(event) {
        var id = $(this).data("id");

        //create object with new values
        var newRestaurantState = {
            visited: true,
            liked :false
        };

        // Send the PUT request with id in query parameter and values in request body
        $.ajax("/api/restaurants/" + id, {
            type: "PUT",
            data: newRestaurantState
        }).then(
            function() {
            location.reload();
            }
        );
    });

    //on click of delete button send a DELETE request
    $(".delrestaurant").on("click", function(){
      var id = $(this).data("id");
  
      // Send the DELETE request with id in query parameter
      $.ajax("/api/restaurants/"+id, {
        type: "DELETE"
      }).then(
        function() {
          location.reload();
        }
      );
    });

    //on click of Add restuarant button send a POST request
    $("#submit-restaurant").on("click",function(event){
        event.preventDefault();

        //get name of the restaurant from textbox
        var name = $("#restaurant-name").val().trim();

        // Send the POST request with values in request body
        $.ajax("/api/restaurants", {
            type: "POST",
            data:{name:name}
          }).then(
            function() {
              location.reload();
        });
    });
  });
  