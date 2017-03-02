# Github App for Everything Web
An overview page of all the students from the minor: Everything Web. With this app we can all quickly find our fellow students and go to their Github patients.

To use the app simply go to:<br>
https://lhafkamp.github.io/minor-webapp/week%202/assignment%201%20-%20data/#main

You can click on any student to see more information about that student or use the searchbar to search for the student you had in mind.

**Adding new users:**<br>
To add a new Github user to the app open the javascript file which you can find here:<br>
https://github.com/lhafkamp/minor-webapp/blob/master/week%202/assignment%201%20-%20data/assets/js/script.js

In the javascript file, simply add a new string in the *users* array and make sure the string matches the name of the Github you want to add:
```javascript
const users = ['someuser', 'someuser', 'addNewUserHere']
```

## Code Flow:
<img src="week 2/assignment 1 - data/assets/images/diagram.png"></img>

## Interaction diagrams
<img src="week 2/assignment 1 - data/assets/images/main.png"></img>
<img src="week 2/assignment 1 - data/assets/images/zoom.png"></img>
<img src="week 2/assignment 1 - data/assets/images/searchfunction.png"></img>

## Resources:
The data from each student is fetched from api.github.com

## Wishlist:
Currently I'm only using the features that are available from the Github API without oauth2. If I would use oauth2 I would expand the user pages by showing what repositories they've been working on lately.

## Links:
Javascript:
https://github.com/lhafkamp/minor-webapp/blob/master/week%202/assignment%201%20-%20data/assets/js/script.js

App:
https://lhafkamp.github.io/minor-webapp/week%202/assignment%201%20-%20data/#main