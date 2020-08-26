# Project Overview

Wrote a number of tests against a pre-existing Feed Reader application as part of the Front End Nano degree at Udacity. Tested the underlying business logic of the application as well as the event handling and DOM manipulation. Used [Jasmine](http://jasmine.github.io/)

# To run this unit test, take the following steps:

* Clone this repo to your local machine and open `index.html` in the root folder. This index loads jasmine reader at the bottom of the feed.
* Verify the following tests (Also clearly documented in `feedreader.js`:
 * Loop through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
 * Loop through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
 * Ensure the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
 * Ensure the menu changes visibility when the menu icon is clicked.
 * Ensure when the loadFeed function is called and completes its work, there is at least a single `.entry` element within the `.feed` container. Remember, `loadFeed()` is asynchronous so this test wil require the use of Jasmine's `beforeEach` and asynchronous `done()` function.
 * Ensure when a new feed is loaded by the `loadFeed` function that the content **actually changes**. Remember, `loadFeed()` is asynchronous.
 * Psuedowrote a test that greys out link when previously clicked to visually indicate read. Functionality not built out yet.

# To complete this project I:

1. Took the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Downloaded the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Reviewed the functionality of the application within your browser.
4. Explored the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5. Explored the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
6. Edited the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Returned the `allFeeds` variable to a passing state.
8. Wrote a test that looped through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
9. Wrote a test that looped through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
10. Wrote a new test suite named `"The menu"`.
11. Wrote a test that ensured the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. Wrote a test that ensured the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. Wrote a test suite named `"Initial Entries"`.
14. Wrote a test that ensured when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. Wrote a test suite named `"New Feed Selection"`.
16. Wrote a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. Ensured no test be dependent on the results of another.
18. Ensured callbacks be used to ensure that feeds are loaded before they are tested.
19. Verified - all tests pass.
20. Appended details all steps required to successfully run the application below.

