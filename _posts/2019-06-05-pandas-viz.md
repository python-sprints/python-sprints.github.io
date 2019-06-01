---
category: "london"
title: "pandas visualisation"
level: "All"
time: "18:00"
rsvp_link: https://www.meetup.com/Python-Sprints/events/261730665/
project:
sponsor: jpmorgan
---

Plotting in `pandas` is very easy, mainly by using `Series.plot()` and `DataFrame.plot()` methods.
There is a plotting subsystem in `pandas` based in `matplotlib` that implement different types of
plots (e.g. lines, bars, boxplots, kde...).

In the last months, several new projects have been create to address new use cases for visualising
in `pandas`. For example, to generate interactive plots. Some of these projects are:

- https://hvplot.pyviz.org
- https://github.com/PatrikHlobil/Pandas-Bokeh
- https://github.com/altair-viz/pdvega/

Those libraries have been monkey patching `pandas` to be able to plot easily, so plotting can be
done by using `DataFrame.hvplot()`, `DataFrame.plot_bokeh()`...

But a better design would be to decouple the existing plotting code in pandas into an extension
registered with the `pandas` extension capabilities, and be able to select with an option with
plotting backend the user wants to use. The resulting code would be:

```python
pandas.set_option('plotting.backend', 'hvplot')
df.plot()
```

With this architecture, there are several advantages:

- Developing new plotting backends for pandas becomes much simpler
- Plotting backends share a common API
- Users of pandas don't need to learn a new syntax for each plugin
- Migrating existing code becomes trivial, by just adding a single line of code setting the option for the backend
- Internal pandas code becomes cleaner, with the plotting code fully decoupled from the rest

Work on this is already going on, with a first PR that decoupled the current plotting code:

https://github.com/pandas-dev/pandas/pull/26414

In this sprint we will continue the work, by working on different tasks:
- Adding the option to select the backend
- Defining and documenting the pandas plotting API
- Porting existing libraries to the new plotting API
- Document current pandas functionality

We also can work on other pandas issues, for example:
- https://github.com/pandas-dev/pandas/issues/26601
- https://github.com/pandas-dev/pandas/issues/24173 / https://github.com/pandas-dev/pandas/issues/24661
- https://github.com/pandas-dev/pandas/issues/24507
- Feel free to propose yours

As usual, we will give priority to join the sprint to the next people:

- Experienced open source contributors
- People from underrepresented minorities in our sprints

Agenda
------

- 6pm: Food and networking
- 6:30pm: Presentation of the project and the sponsor
- 6:45pm: Coding
- 9pm: Retrospective presentations


The day of the sprint
---------------------

- Bring your own laptop if you can
- Join the [Gitter channel](https://gitter.im/py-sprints/pandas-bokeh) of the sprint
