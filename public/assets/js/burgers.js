
$(function(){

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        alert("hello world");

        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

        // send POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
                console.log("created new burger");
                // reload the page to get the updated list
                location.reload();
        });
    });

    $(".change-devour").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var newDevourState = {
            devoured: 1
            
        };

        // send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
              console.log("changed devour to", newDevourState);
              // reload the page to get the updated list
              location.reload();
            }
        );
    });

    // $(".delete-burger").on("click", function(event){
    //     var id = $(this).data("id");

    //     $.ajax("api/burgers/", + id, {
    //         type: "DELETE"
    //     }).then(
    //         function() {
    //             console.log("deleted burger", id);
    //             location.reload();
    //         }
    //     );
    // });
});