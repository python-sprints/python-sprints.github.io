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
---), and the main description of the chapter afterwards.
We are using markdown files to store your data and they can contain either markdown tags for text formatting or pure html - it is up to you how to style your content.<br>
The image that will represent your chapter should be in jpeg format. The size the content is optimized for is: 1920 x 600 px.
Please name it <your_chapter_name_1920x600px.jpg>.
This is the format:

    ---
    category: "the-city-where-your-chapter-is-located-in"
    title: "Name of your chapter"
    meetup_link: <url-of-your-other-website-if-any>
    address: "Description of your location, usually City, Country"
    country_code: <2-digit-country-code-used-for-the-flag>
    image: <relative path to the chapter image>
    lat: <float-number-with-latitude-for-the-marker-in-the-map>
    lng: <float-number-with-longitude-for-the-marker-in-the-map>
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


Example chapter setup
---------------------
    ---
    category: "london"
    title: "London Python Sprints"
    meetup_link: https://www.meetup.com/Python-Sprints/
    address: London, United Kingdom
    country_code: gb
    image: static/images/chapters/london_python_sprints_1920x600px.jpg
    lat: 51.512344
    lng: -0.090985
    sponsors:
      - harvey_nash
      - touch_surgery
      - bloomberg
    ---
    The content of your chapters description goes below ---.

How to add an event
-------------------

Before sending an event, you need to have your chapter set up. See the section *How to
add your chapter* for more information on how to do it.

You can also add a sponsor, to give credit to the companies/institutions supporting your
group with a venue, pizzas, beers... And if you are sprinting in a project not in the
system, you may also want to add it.

To create an event, you need to add a new file to the `_posts` directory with the file
name following the format `YYYY-MM-DD-slug-of-the-event.md`. Were `YYYY-MM-DD` is the
date of the event (this will be the date shown on site), and the slug of the event is the title in a format URL friendly
(only lowercase ascii letters and numbers, separating words with hyphens). For example
`2017-12-31-django-bugfixing.md` could be the name of a sprint "Django bugfixing"
happening on December 31st of 2017.

The content of the file has a header section with some fields (started and finished with
---), and the main description of the event afterwards. This is the format:

    ---
    category: "<same-as-category-of-your-chapter>"
    title: "Short summary of your event"
    level: "Target audience of the event (e.g. Beginners, All levels, Advanced,...)"
    time: "hh:mm"
    rsvp_link: <url-of-your-meetup-eventbrite-etc-page>
    project: <id-of-the-project-you-will-work-on>
    sponsor: <id-of-the-sponsor-for-the-event>
    ---

    This space is the main description of the event, where you can provide further details.

    Note that you don't need to add information about the project if it already exists in the `_projects` folder, as the description of the
    project, the logo, and the environment set up instructions should be rendered automatically
    after specifying the id of the project. If the project has not been added yet, you will need to add it before calling it here. If the event is not related to a specific project, you can leave the `<id-of-the-project-you-will-work-on>` blank.

    Also, by specifying the id of the sponsor, a box with its information will appear.

Example event setup
---------------------
    ---
    category: "london"
    title: "Pandas internals"
    level: "All levels"
    time: "18:30"
    rsvp_link: https://www.meetup.com/Python-Sprints/events/249350212/
    project: pandas
    sponsor: harvey_nash
    ---
    The content of your event's description goes below ---.

You may want to copy one of the last events in `_posts` to be used as reference.

How to add a sponsor
--------------------
If you need to add your local sponsor which is not already in the `_sponsors` folder you can do so easily.<br>
To add a sponsor logo please copy it to the static/images/sponsors folder with a name matching the obj_id of your sponsor.
We use png files for our sponsors. The maximum size is: 258px x 82px so please scale them down to match one of those dimensions. The logo width is: 150px, if a logo having width smaller than that will be stretch to match the logo width.

Create a <name_of_your_sponsor>.md file using the format below:

    ---
    obj_id: <unique_identifier_of_your_sponsor>
    name: "name of your sponsor"
    logo: <relative path to your sponsor logo>
    link: <website link to your sponsor>
    address: "sponsor's full address"
    lat: <float-number-with-latitude-for-the-marker-in-the-map>
    lng: <float-number-with-longitude-for-the-marker-in-the-map>
    ---
    Here you can place a short description of your sponsor's business etc.

Example sponsor setup
---------------------
    ---
    obj_id: quantum_black
    name: "Quantum Black"
    logo: static/images/sponsors/quantum_black.png
    link: https://www.quantumblack.com/
    address: "Kinnaird House, 1 Pall Mall<br/>London, SW1Y 5AU, UK"
    lat: 51.507954
    lng: -0.130718
    ---
    QuantumBlack is an advanced analytics firm operating at the intersection of strategy, technology & design to improve performance outcomes for organisations. With roots in Formula One, we now work across sector with some of the world's leading organisations in advanced industries, healthcare and finance.

How to add a project
--------------------
If you the project that you are going to work on is not already in the `_projects` folder you can do add it easily.<br>
To add a project logo please copy it to the static/images/projects folder.
We use png files for projects.

Create a <name_of_your_project>.md file using the format below:

    ---
    obj_id: <unique_identifier_of_your_project>
    name: "name of your project"
    logo: <relative path to your project logo>
    website: <website link to your project>
    setup_html: |
        <p>
            <!-- (link to) instruction of how to setup in html format -->
        </p>
    ---
    Here you can place a short description of your project.

Example project setup
---------------------
    ---
    obj_id: pandas
    name: "Pandas"
    logo: static/images/projects/pandas_logo_donation.png
    website: https://pandas.pydata.org/
    setup_html: |
        <p>
            Please follow the instruction in this link:
            <a href="https://python-sprints.github.io/pandas/guide/index.html">
                https://python-sprints.github.io/pandas/guide/index.html
            </a>
        </p>
    ---
    Pandas is an open source, BSD-licensed library providing high-performance, easy-to-use data structures and data analysis tools for the Python programming language.


How does Jekyll work?
---------------------

- Posts (files in `_posts/*.md`) are the event pages in markdown
- Projects (`_project/*.md`) are the open source projects we contribute to
- Sponsors (`_sponsors/*.md`) are the companies providing the venue and pizzas
- Layouts (files in `_layouts/*.html`) are equivalent to Django templates,
  and used to render the posts (events)
- CSS is managed with scss/sass and built by Jekyll
- GitHub pages automatically builds the site when the repository is updated
