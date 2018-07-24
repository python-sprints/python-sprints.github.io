.. _pandas_pr:

=======================
Submitting your changes
=======================

.. note::
  `Video tutorial: Submitting docstring changes to GitHub
  <https://www.youtube.com/watch?v=7eC3MjDIxNM>`_ by Frank Akogun.

Once you finished the changes to your assigned docstring, you can follow the
instructions in this document in order to get your changes merged into pandas,
and released in the next version.

1. Validate that your docstring does not have technical errors
--------------------------------------------------------------

There is a script in pandas that validates whether a docstring follows the
technical parts of the pandas docstring convention. To run the script,
execute in your terminal: ::

    cd <pandas-dir>
    python scripts/validate_docstrings.py <your-function-or-method>

where ``<your-function-or-method>`` is for example ``pandas.DataFrame.head``,
``pandas.Series.tail`` or ``pandas.to_datetime``.

The output of the script will show the final docstring. In many cases just a
verbatim copy, but in some cases the docstring is implemented as a template,
and reused by more than one method or function, and this is useful to see
the final result.

The output will also highlight any issues with the docstring. Mainly style
errors, where the docstring does not respect the convention. For example, a
missing dot at the end of a sentence, a blank line where it should not be, etc.

Finally, the output will also contain errors from running the examples.

With few exceptions, you should fix all the errors before continuing.

If you are changing a docstring in a cython file (with ``.pyx`` extension),
you need to rebuild the pandas C extensions to be able to see the resulting
changes in the docstring and to validate the docstring with the command
above. 

To recompile pandas, run: ::

    cd <pandas-dir>
    python setup.py build_ext --inplace

2. Visual validation of the docstring
-------------------------------------

The previous script validates things like the names of the sections, or
that there are dots, spaces, or blank lines in the right place. It does
not validate for typos, unclear sentences, or other mistakes. To validate
them, as well as the visualization of your docstring in the pandas website
you need to generate the html version of the page you worked on.

To build the documentation run: ::

    cd <pandas-dir>/doc
    python make.py html --single <your-function-or-method>

where ``<your-function-or-method>`` follows the format described in the previous
section.

This will generate a file
``<pandas-dir>/doc/build/html/generated_single/<your-function-or-method>.html``
that can be opened with your web browser.

3. Validate that the docstring is clear to others
-------------------------------------------------

As the last validation, please show the html version of your docstring to a
person in the sprint not involved in the changes to that specific docstring,
and make sure they are able to fully understand it.

4. Commit your changes
----------------------

Once all the validations are successful, you can proceed to commit the changes
into git.

Before committing your changes, make sure you are in the branch of the feature
you are going to commit with: ::

    git branch

If the current branch is ``master``, do not commit your changes, as you can get
into a situation where you need to undo your history in git, which is not
straightforward.

Then, get the latest upstream changes and commit your changes on top: ::

    git fetch upstream
    git merge upstream/master
    git add <modified-file(s)>
    git commit -m "<commit-message>"

where ``<modified-file(s)>`` is the file where you made your changes (in rare
cases it could be more than one file). And ``<commit-message>`` is a short
description of your changes, starting by "DOC:" (e.g. "DOC: Improve the
docstring of DataFrame.head()").

5. Push your changes to pandas
------------------------------

Once you committed your changes locally, you need to make them available to
pandas maintainers, so they can add them to the main pandas repository.

The first step is to push your local changes to your own fork, so they are
available online: ::

    git push -u origin <your-branch-name>

Then, visit https://github.com/pandas-dev/pandas in your browser, and click
on the "Compare & pull request" button in the yellow box above the repository
files.

If you have only one commit, the pull request will automatically use its commit
message as title. Otherwise, please name it following the same standard as
described before (e.g. "DOC: Improve the docstring of DataFrame.head()").  In
the body of the description, there are some checkboxes. For the sprint, we do
not have an issue for each docstring change, and as we are not changing code,
we do not need to add/run tests or add a `whatsnew` entry. So you can ignore
these check boxes. Just verify that your changes respect the PEP-8 style by
running the command: ::

    git diff upstream/master -u -- "*.py" | flake8 --diff

If you don't already have flake8 installed, you can install it in the Anaconda
Prompt it via ::

    conda install flake8

If the command does not return any warning, mark that checkbox with an X (do
not leave spaces inside the brackets, use `[X]`). If it returns a warning,
fix it, commit your changes, and push to your remote branch before opening
the pull request.

After the checklist, please **copy the output of the validate_docstrings.py
script**. This will help reviewers see the rendered docstring, as well as
identify any validation problem.

This will create a pull request, and other developers will review it.

Updating a pull request
~~~~~~~~~~~~~~~~~~~~~~~

It is unlikely that a pull request is accepted in its first version, so expect
some comments on things that can be improved, from more senior pandas
contributors.

For comments in your review, you can make new changes in your local branch for
that pull request. And once you addressed all the comments, you can commit them
and push again to your local branch. As you used the parameter ``-u`` to set
the upstream branch in your first push, you can simply run: ::

    git push

from your local branch, and the changes will be pushed to your remote branch.

Updating your remote branch automatically updates the pull request, so you do
not need to create a new pull request, or make any other changes in the one
already created.

If you want to add any clarification to your changes, or you think the reviewer
misunderstood something, you can add a comment to the pull request.

Do not feel discouraged by having more than one review requesting changes for
the same pull request. While in the first contributions is normal to feel
frustrated for getting feedback requesting changes, it is actually because of
reviews that the open source software quality is very high. And also, it is
probably the part of contributing to open source projects in which you will
learn the most. So, be patient and enjoy. And feel free to provide constructive
feedback in other contributors pull requests too.
