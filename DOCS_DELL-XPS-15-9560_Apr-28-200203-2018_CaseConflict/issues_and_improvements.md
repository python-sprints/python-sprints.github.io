# Improvements

- automatic srcset generation for responsive images (portrait, landscape and sizes) - #88
- responsive background image for events chapters (portrait) and globally - #90
- convert main navigation to (ul li) keeping the styling (it is display: block) - #84
- move map related javascript code to site.js and confirm all works - #91
- add event location map to event details with exact event's address - #92
- add calendar icon in events list on the home page where date / time is shown - #85
- find a way to detect users location before generating chapters map and center it on users location - #86
- change button in events list from "Learn More" to (i) - info icon - #89
- introduce events calendar (got a web link to a project which did that for jekyll) - #93
- additional layout for events card for special events (like global pandas was), something to make a particular event stand out - bigger card, with an image and a short description etc. - #94
- style google map markers to match site's color theme / fonts etc. - #95
- add Selenium tests to make sure all links and stuff works across all browsers - #96


# Issues
- create chapter detailed view - #97
- create event detailed view - #98
- forced site regeneration (to keep events up to date) (empty commit on a cron job at night?) - #99
- create Thursday's event (@ QuantumBlack) (should we display all future events?, display only 1 closest to today's date per chapter or display within time limit (like all in next week/fortnight/month))
- decide on chapters card layout (what link should there be, any additional info) - #100
- automate chapters cards generation - #87
- check what happens if too many events are concurrent - how far do we want that section to stretch (the background image goes out of sharpness) - #101
- create include to generate chapters variable used for google map - #102
- create resources section with guides (pull request, pandas docs etc., this is least priority) - #103

# Documentation

- document image sizes required for all sections including responsive, set standard image naming policy - #104
currently it is name_SizeXxSizeYpx.ext, we may need to agree on adding orientation to the name as well (_op, _ol or similar).
- document collections (sponsors, chapters) (what items are in, what data they hold, where are they displayed, examples of usage) - #105
- document _includes (layout snippets and function like code, examples of usage, parameters, returns etc.) - #106
- document _layouts (which one is for what page etc., variables used, variables required) - #107
- document _pages (what sections are contained within, dependecies) - #108
- document _sass (set some standards what css goes where etc.) - #109
- documents events (how to create an event, what variables are required, what can be blank etc.) - #110
- documents chapters(how to create a chapter, what variables are required, what can be blank etc.) - #111