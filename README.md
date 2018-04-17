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

The content of the file should list:
- object_id: same as the name of the file, as described before (without the extension)
- title: name of your chapter (using normal text)
- website_link: link to your website
- address: name of the city, country... or anything relevant so users understand where
    you are based
- lnt and lng: latitude and longitude used to display a marker for your chapter in
    a map

How does Jekyll work?
---------------------

- Posts (files in `_posts/*.md`) are the event pages in markdown
- Projects (`_project/*.md`) are the open source projects we contribut to
- Sponsors (`_sponsors/*.md) are the companies providing the venue and pizzas
- Layouts (files in `_layouts/*.html`) are equivalent to Django templates,
  and used to render the posts (events)
- CSS is managed with scss/sass and built by Jekyll
- GitHub pages automatically builds the site when the repository is updated
