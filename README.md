# **Eat-Da-Burger**

Eat-Da-Burger is a full stack application that logs the burgers eaten by the user. The user has the ability to enter any burger name into the application, which is stored in a MySQL database.

Once submitted the burger name is placed into the left column. The user has the ability to click the "devour it" button, which moves the burger name to the right column and updates the status within the MySQL database.

## **Requirements**

    *Creation of separate files for server logic, storing of friends, views, and routing.
    *10-question survey to assess users qualities.
    *Use express and path npm packages in the server.js file.
    *Separate JavaScript files for routing (htmlRoutes.js and apiRoutes.js).
    *GET and POST routes for serving HTML pages and API.
    *Separate file for storing potential friends (friends.js)
    *Algorithim to calculate the best match for the user after survey completion and return the best match.

## **Technologies**

    *Javascript
    *jQuery
    *MySQL
    *Handlebars
    *ORM
    *Node.js
    *Express.js
    *HTML
    *Bootstrap

## **Code Explanation**

    *The server.js file houses the Express server, port numbers, the npm packages, route, and Handlebars application.
    *Two Handlebars files (main.handlebars and index.handlebars) displays what the user visually sees with the assistance of Bootstrap for visual appeal. 
    *The Public directory contains front end JQuery for the user event delegations (submission of burger name, devouring burger) and styling elements used.
    
A snippet of the code used are provided below:

**burgers.js**

```javascript
 $(".create-form").on("submit", function(event) {
        event.preventDefault();

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
```
```javascript
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
```
## **Demo**

A link to demostrating the app is provided below:

https://drive.google.com/file/d/1ZXpVez9b5qO-VhmPTVRevIelfEu6kRaj/view