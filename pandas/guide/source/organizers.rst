==========================
Information for organizers
==========================

Thanks for your interest in organizing one of the chapters of the pandas
documentation sprint. It will surely be an amazing experience to work with
Pythonistas all around the world. And the hundreds of thousands of users of
pandas will surely appreciate having better documentation.

This document provides the information you need, in order to join the sprint.

The venue
---------

The first thing, and in some cases the most difficult is to find a venue for
the sprint. In most cases, sprints will be hosted in the offices of a company
that will provide them for free. And even better, that will also provide
drinks and lunch.

It is up to you to decide the number of people who can join your sprint, but we
do not recommend more than 20. If you are not that much experienced with open
source, pandas or organizing events, probably 20 is even too much.

The basic requirements for a venue is to have tables or desks for people to
sit in a comfortable way, wifi, and electricity for people to charge their
computers.

If you are the organizer of a user group, probably you already have experience
with it. If you are not, here you have some tips:

Find the local user groups, mainly Python and PyData user groups. Organizers
may already have some companies who hosted events before, and are happy to do
it again. If that is not the case, they can mail the members of the community,
and surely one of them works in a company happy to offer the venue.

If that does not work for you, universities, local government agencies
supporting employment and entrepreneurship, startup incubators, and
co-working spaces, could be interested in offering you a venue. In general,
it is easier to get a positive answer by trying to directly contact someone
there, than by filling a form or sending an email to info@whatever.

Another option is to check www.meetup.com for other groups (other programming
languages or tech meetups mainly). See where they host their events, and if
it seems like one of them could work, contact the organizer of the group to
get introduced to their contact in the venue.

One more option is to check for job offers related to pandas/Python, and
contact the companies asking if they could be interested in hosting the event.
Python programmers and data scientists are hard to find, and it can be a great
opportunity for them, to get their company promoted.

If nothing else works, you can find a bar, pub, restaurant... with some quiet
area for the sprint. And if you do not even find that, please contact us, and
we will find a solution.

The local community and publishing the event
--------------------------------------------

Now that you have got a venue, you need people to come to the event. Again, if
you are the organizer of a user group, you already know what to do. If you are
not, get in touch with a local Python user group, or PyData meetup. To find
them:

* https://wiki.python.org/moin/LocalUserGroups
* https://www.meetup.com/pro/pydata
* Using a search engine

Based on our experience, Python communities are always very welcoming, and happy
to help. If they are using www.meetup.com, the simplest is that they create an
event for you, and give you permissions as an event host, so you can manage the
event.

If the local community is using a distribution list, google groups, or something
similar, you can use that to promote the sprint, but you can create the event in
a page like www.eventbrite.com so you can manage and control attendance.

In the unlikely case that there is no organized community where you are, you
should consider starting one. The Python Software Foundation and NumFOCUS
provide financial help to pay the meetup fees, and they can also help get
started.

Selecting attendees
-------------------

In general, most events are managed in a *first come, first served* way. While
the decision on how to manage attendees is yours, we recommend to follow the
next approach:

* Ask people about their level in Python, pandas, git and contributing to open
  source
* Do not let people join the event directly, add them to the waiting list first

The reason for that, is that a sprint is different from talks are tutorials, in
the way that people need to be independent and capable of working on the sprint
task. If you have a sprint with only people who just started learning Python
(which is not so unlikely), there is not much that will be done. And regardless
of pandas and the contributions, this will be very disappointing for attendees.

Keeping a good proportion of experienced people, will make sure that newcomers
have someone to learn from, and people can make good contributions and enjoy
the day.

Another thing to consider when deciding the attendees, is inclusion and
diversity. The Python community has put a lot of effort in being an inclusive
community, and this is something good for all. In practice, you may want to
give priority to people from underrepresented minorities. What is an
underrepresented minority is subjective, but it is probably reasonable to
consider:

* Non male (which does not necessarily mean female)
* People over an age (50 year old?)
* Ethnic background depending on where you are

We do not recommend asking people for their race, sexual orientation,
religion... in order to find people from underrepresented minorities. We find
a better practice to kindly request people to let you know if they consider
they are, and use common sense based on their answers.

Updating the global event website
---------------------------------

When you find your venue, create the event... it would be good that you keep
the main website of the event updated with it:

https://python-sprints.github.io/pandas/

This way, anyone interested in joining (or organizing) the event in your city
can quickly find you.

To get your data in the website, the best option is to send a pull request
adding the information of your chapter to the list of chapters:

https://github.com/python-sprints/python-sprints.github.io/blob/master/pandas/index.html#L25

If you do not know how to send a pull request, it is a good time to start
learning it, as in the sprint is basically what you need to do. :)

In short:

* Fork the repository (click on the top right "Fork" button at https://github.com/python-sprints/python-sprints.github.io
* Clone your fork: `git clone git@github.com:<your-github-user>/python-sprints.github.io.git`
* Inside your local copy of the repo (`cd python-sprints.github.io`)...
* Create a branch for your changes: `git checkout -b adding_<your-city>_chapter`
* Edit the file with the chapter info: `vim pandas/index.html` and add an entry with the same fields as the rest
* Add your changed to be committed: `git add pandas/index.html`
* Commit your changes: `git commit -m "Adding <your-city> to the pandas sprint page"`
* Push your changes to your fork: `git push -u origin adding_<your-city>_chapter`
* Create a pull request by clicking on the "Compare & pull request" button in the yellow box at https://github.com/python-sprints/python-sprints.github.io
* Write a short description and save

Getting ready for the sprint
----------------------------

Even if writing documentation seems easy, it is not. And if you are not familiar
contributing to open source, you probably discovered that sending a pull request
is not trivial either.

For this reason, we expect at least one person in each sprint, to make a
contribution to the pandas documentation before the sprint. This way you
will have a much better understanding of the process, and of all the subtle
details concerning docstrings.

For you first, and for all the participants in the sprint later, we prepared
a guide with detailed information on all the required steps to work on the
pandas documentation.

At the moment this documentation is under discussion, but it will soon be
in its final state. You can find it here:

https://python-sprints.github.io/pandas/guide/contents.html

There is a document on how to set up your computer for the sprint, which
attendees are expected to follow before the sprint.

Then there is a very detailed tutorial on how to write a docstring.

Finally, there are instructions on how to send a pull request.

The day of the sprint
---------------------

On the day of the sprint, please be in the venue at least 30 minutes
before the announced time (as many people usually arrived earlier).

Before the sprint, every organizer will have the list of pandas methods
and functions for their chapter. So, there is no duplicate work having
people in different chapters working on the same.

For your chapter, you need to manage that people do not duplicate
work among this list. You can use a whiteboard, a shared google docs
spreadsheet, or a gitter channel. Whatever you think it is better.

We recommend people to pair program. Meaning that two people will
be working in a single computer, and will discuss about everything
they code. Ideally, pairs of experienced and junior people. Pair
programming will not only make the experience more social and
enjoyable, but will help avoid mistakes, and improve the quality
of the documentation.

Keep in mind that **the main goal of the event is that people have
fun and enjoy the day**. For that, make sure:

* Everybody is treated with courtesy, dignity and respect
* There is no form of discrimination, harassment or bullying

We do not expect to have any problem in this respect, but if you find any
behavior that can make anyone feel uncomfortable, please let the person
know politely, and keep a welcoming environment for everyone at all
times.

One important thing to consider, is that **quality is much more important
than quantity**. For pandas, it will be much more productive if we send
50 excellent pull requests, than if we send 500 not so good pull requests.

Core developers are usually the bottleneck of open source projects. And
while with their experience they will surely provide great reviews to
enrich our contributions, we surely do not want to waste their time by reviewing
code that doesn't work, spelling mistakes, bad grammar, incorrect text, or
anything like that. In the documentation for the sprint we provide as many
methods as possible to assure quality in our end. If there is something that
you can do in your end, that is highly appreciated.

Do not forget
-------------

Please, during the sprint do not forget to keep tweeting about your local
chapter with the hashtag #PandasSprint. Also, make as many photos as possible.

We will have a gitter channel for the people in all the sprints, so there is
communication, and people can ask questions if they have them. The channel is:

https://gitter.im/py-sprints/pandas-doc

We can also create a specific channel for your chapter, if you think that is
useful.

We will also have couple of videocalls between chapters. Exact times will be
announced later. We will use this hangouts link:

https://plus.google.com/hangouts/_/calendar/Z2FyY2lhLm1hcmNAZ21haWwuY29t.7d3rc1ft3gocl3qo9eisarusn6?authuser=0
