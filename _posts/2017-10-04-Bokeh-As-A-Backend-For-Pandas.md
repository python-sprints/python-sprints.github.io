---
category: london
title: Bokeh as a backend for Pandas
level: All
date: 2017-10-04
time: "18:30"
meetup_link: https://www.meetup.com/Python-Sprints/events/243422372/
event_link:
project: pandas
image: static/images/events/pandas_bokeh_backend_harvey_nash_960x539px.jpeg
sponsor: harvey_nash
---

According to this recent blog post by [Stack Overflow](https://stackoverflow.com/), Python is declared as the fastest-growing major programming language.
10% of its credit is considered to be due to the [pandas](http://pandas.pydata.org/) library.
One of the popular features of pandas is that it can directly plot the data it contains (in a Series or DataFrame).

When this feature was implemented, [matplotlib](https://matplotlib.org/) was the standard plotting library in Python.
But things changed, and now there are many great available libraries. One of the most popular ones is [Bokeh](https://bokeh.pydata.org/en/latest/).

Bokeh generates interactive visualization charts in the style of D3.js.
Plotting pandas data in Bokeh is quite straight-forward.
But it would be more efficient and consistent, if pandas could be configured for a different backend like Bokeh, and then use the current pandas methods to plot with your favorite library. 

Pandas is already well prepared to be integrated with other backends. Having all the matplotlib logic in a directory plotting [https://github.com/pandas-dev/pandas/tree/master/pandas/plotting](https://github.com/pandas-dev/pandas/tree/master/pandas/plotting).
But some work needs to be done, adding a setting to define the backend, and further decoupling the plotting logic.

Also, a new package pandas-bokeh needs to be created, that can be called from the .plot() pandas methods.
In this sprint we will code this new module (that can be later added to pandas), and we will send the pull request for the required pandas packages.