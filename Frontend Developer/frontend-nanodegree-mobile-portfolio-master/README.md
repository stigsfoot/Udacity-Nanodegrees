# Udacity Website Optimization Project
The goal of this project is to optimize this online portfolio and increase performance speed along the critical rendering path.

## index.html
Increased Google PageSpeed Insight score from 40/100 (Desktop/Mobile) to 90+/100 (Descktop/Mobile)

### style.css

Inlined all of the CSS into the head of the document and added the HTML media="print" attribute to the external style sheet link for print styles.

### main.js

Added the HTML async attribute to all script tags and used the Brunch build tool to concatenate and minify.

### /img

Optimized and reduced image sizes as per the recommendation of the Google PageSpeed tool.

## views/pizza.html

Increased Google PageSpeed Insight score from 40/100 (Desktop/Mobile) to 90+/100 (Descktop/Mobile)

### views/main.js
Optimizations made to `views/js/main.js` make `views/pizza.html` render with a consistent frame-rate at `60fps` when scrolling.
See comments inline.

## Getting Started
* Get a copy of the code.
* Install the dependencies if you don't already have them.
* Gulp:
 * Install globally: `npm install -g gulp`
 * Serve locally `gulp serve`
* or ngrok. `cd /path/to/your-project-folder`:
 * serve `python -m SimpleHTTPServer`
 * Then, in another terminal, run ngrok. (see also: https://ngrok.com/)

