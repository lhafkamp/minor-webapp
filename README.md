# minor-webapp
Assignments for the course Web App from Scratch


# opdracht 2
To start this one off I'm gonna say jQuery vs vanilla Javascript does have some hard facts but when it comes down to it its something that depends on the project, your preferences and subjective overall.

A lot of developers have stated that with the upcoming of ES6, React and Angular, jQuery is being used less and less. And while this statement isn't false, it wasn't as dramatic as developers made it out to be. A few common perks that I know out of the top of my head for Javascript & jQuery are:

jQuery
+ short
+ easy to use
+ gives beginners a sense of accomplishment
- doesn't teach you how to write Javascript
- takes up some space because its a library
- you're depending on a library

Javascript
+ doesn't take up any extra space
+ writing it makes you understand what exactly you're doing
+ you can do everything Javascript in Javascript because its Javascript
- harder to use
- might take you more time for certain tasks

As seen here writing jQuery does make your code shorter but it doesn't exactly tell you what it does. (example taken from: https://blog.udemy.com/jquery-vs-javascript/).

<!-- jQuery -->

$(‘body’).css(‘background’, ‘#ccc’);

<!-- JavaScript -->

Function changeBackground(color) {
    document.body.style.background = color;
}

Onload=”changeBackground(‘red’);"

# opdracht 3
Information taken from https://www.oberon.nl/whitepapers/single-page-applications

A single page web app is a client-side application that makes sure it never completely reloads. This doesn't mean that the application never shows any new information but that it only loads certain elements on the page.

SPA pro's and cons
+ speed is improved because it only loads what it needs to load
+ server performance is improved for the same reason
- crawlers from search engines isn't optimized because they are still looking for traditional webpage loading. To properly set this up in an SPA takes some effort.
- unlike a normal webpage your SPA stays 'open' all the time, you have to keep track of the memory usage





