Python sprints website
======================

This is the website of the Python sprints group.

It was started by the London Python Sprints meetup, but open to any other
Python User Group (PUG), interested in running sprints.

Website set up
--------------

The website is built using Jekyll, a Ruby (yes, Ruby ;) static website
generator supported by GitHub pages. To build the website locally you
need to:

- Install ruby and ruby-dev
    - `dnf install ruby ruby-devel` on Fedora, CentOS and RedHat
    - `apt-get install ruby-full ruby-dev` on Debian and Ubuntu
    - `brew install ruby` on MacOS
    - More information about installing Ruby is here
    <https://www.ruby-lang.org/en/documentation/installation/>.
- Install Jekyll with `gem install jekyll bundle`.
- Install dependencies with `bundle install` in the project directory.
- Run the server with `bundle exec jekyll serve`.
- Open the rendered website at http://localhost:4000/

How to add your chapter
-----------------------

Send a pull request adding a new file `_chapters/<your-chapter-name>.md`, where
`<your-chapter-name>` is the name of your chapter in ascii lowercase, and
separating words with underscore (e.g. `london_pyton_sprints`).

The content of the file has a header section with some fields (started and finished with
---), and the main description of the chapter afterwards. This is the format:

```
---
obj_id: <unique-identifier-of-your-chapter--same-as-file-name>
title: "Name of your chapter"
meetup_link: <url-of-your-other-website-if-any>
address: "Description of your location, usually City, Country"
country_code: <2-digit-country-code-used-for-the-flag>
lat: <float-number-with-latitude-for-the-marker-in-the-map>
lng: <float-number-with-longitude-for-the-marker-in-the-map>
chapter: <this-seems-duplicated-of-obj_id-need-to-take-a-look>
sponsors:
    - <first-sponsor-id-to-be-listed-in-your-page>
    - <second-sponsor-id-to-be-listed-in-your-page>
    - <feel-free-to-add-as-many-as-you-want>
---

Here you can add any information about your group. How it started, which are the goals,
what people can expect from it.

This is a good time to remind you, that no sort of discrimination (gender, religion,
age, sexual orientation...) is tolerated in the Python sprints (or in the Python
community in general). And as an organizer you must not allow any sort of harassment
in the events. Feel free to add in your chapter description to policies you have to
make sure the events are as diverse and welcoming as possible.
```

How to add an event
-------------------

Before sending an event, you need to have your chapter set up. See the section *How to
add your chapter* for more information on how to do it.

You can also add a sponsor, to give credit to the companies/institutions supporting your
group with a venue, pizzas, beers... And if you are sprinting in a project not in the
system, you may also want to add it.

To create an event, you need to add a new file to the `_posts` directory with the file
name following the format `YYYY-MM-DD-slug-of-the-event.md`. Were `YYYY-MM-DD` is the
date of the event, and the slug of the event is the title in a format URL friendly
(only lowercase ascii letters and numbers, separating words with hyphens). For example
`2017-12-31-django-bugfixing.md` could be the name of a sprint "Django bugfixing"
happening on December 31st of 2017.

The content of the file has a header section with some fields (started and finished with
---), and the main description of the event afterwards. This is the format:

```
---
category: <id-of-your-chapter>
title: "Short summary of your event"
level: "Target audience of the event (e.g. Beginners, All levels, Advanced,...)"
date: "YYYY-MM-DD"
time: "hh:mm"
rsvp_link: <url-of-your-meetup-eventbrite-etc-page>
project: <id-of-the-project-you-will-work-on>
sponsor: <id-of-the-sponsor-for-the-event>
---

This space is the main description of the event, where you can provide further details.

Note that you don't need to add information about the project, as the description of the
project, the logo, and the environment set up instructions should be rendered automatically
after specifying the id of the project.

Also, by specifying the id of the sponsor, a box with its information will appear.
```

You may want to copy one of the last events in `_posts` to be used as reference.

How does Jekyll work?
---------------------

- Posts (files in `_posts/*.md`) are the event pages in markdown
- Projects (`_project/*.md`) are the open source projects we contribut to
- Sponsors (`_sponsors/*.md`) are the companies providing the venue and pizzas
- Layouts (files in `_layouts/*.html`) are equivalent to Django templates,
  and used to render the posts (events)
- CSS is managed with scss/sass and built by Jekyll
- GitHub pages automatically builds the site when the repository is updated
