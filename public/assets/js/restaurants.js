// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".liked").on("click", function(event) {
        var id = $(this).data("id");

        var newRestaurantState = {
            visited: true,
            liked :true
        };

        // Send the PUT request.
        $.ajax("/api/restaurants/" + id, {
            type: "PUT",
            data: newRestaurantState
        }).then(
            function() {
            location.reload();
            }
        );
    });
  
    $(".disliked").on("click", function(event) {
        var id = $(this).data("id");

        var newRestaurantState = {
            visited: true,
            liked :false
        };

        // Send the PUT request.
        $.ajax("/api/restaurants/" + id, {
            type: "PUT",
            data: newRestaurantState
        }).then(
            function() {
            location.reload();
            }
        );
    });

    $(".delrestaurant").on("click", function(){
      var id = $(this).data("id");
  
      $.ajax("/api/restaurants/"+id, {
        type: "DELETE"
      }).then(
        function() {
          location.reload();
        }
      );
    });

    $("#submit-restaurant").on("click",function(){
        var name = $("#restaurant-name").val().trim();

        $.ajax("/api/restaurants", {
            type: "POST",
            data:{name:name}
          }).then(
            function() {
              location.reload();
        });
    });
  });
  