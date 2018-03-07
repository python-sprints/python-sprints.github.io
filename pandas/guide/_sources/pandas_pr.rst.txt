.. _pandas_pr:

=======================
Submitting your changes
=======================

Once you finished the changes to your assigned docstring, you can follow the
instructions in this document in order to get your changes merged into pandas,
and released in the next version.

1. Validate that your docstring does not have technical errors
--------------------------------------------------------------

There is a script in pandas that validates whether a docstring follows the
technical parts of the pandas docstring convention. To run the script,
execute in your terminal:

    | ``cd <pandas-dir>``
    | ``scripts/validate_docstrings.py <your-function-or-method>``

where `<your-function-or-method>` is for example `pandas.DataFrame.head`,
`pandas.Series.tail` or `pandas.to_datetime`.

The output of the script will show the final docstring. In many cases just a
verbatim copy, but in some cases the docstring is implemented as a template,
and reused by more than one method or function, and this is useful to see
the final result.

The output will also contain a list of issues with the docstring. Mainly style
errors, where the docstring does not respect the convention. For example, a
missing dot at the end of a sentence, a blank line where it should not be, etc.

Finally, the output will also contain errors from running the examples.

With few exceptions, you should fix all the errors before continuing.

2. Visual validation of the docstring
-------------------------------------

The previous script validates things like the names of the sections, or
that there are dots, spaces, or blank lines in the right side. But does
not validate for typos, unclear sentences, or other mistakes. To validate
them, as well as the visualization of your docstring in the pandas website
you need to generate the html version of the page you worked on.

To build the documentation run:

    | ``cd <pandas-dir>/doc``
    | ``python make.py html --single <your-function-or-method>``

where `<your-function-or-method>` follows the format described in the previous
section.

This will generate a file `<pandas-dir>/doc/build/html/generated_single/<your-function-or-method>.html`
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
you are going to commit with:

    | ``git branch``

If the current branch is `master`, do not commit your changes, as you can get
into a situation where you need to undo your history in git, which is not
straightforward.

Then, follow the next steps:

    | ``git fetch upstream``
    | ``git merge upstream/master``
    | ``git add <modified-file(s)>``
    | ``git commit -m "<commit-message>"``

where `<modified-file(s)>` is the file where you made your changes (in rare
cases it could be more than one file). And `<commit-message>` is a short
description of your changes, starting by "DOC:" (e.g. "DOC: Improved the
docstring of DataFrame.head()").

5. Push your changes to pandas
------------------------------

Once you committed your changes locally, you need to make them available to
pandas maintainers, so they can add them to the main pandas repository.

The first step is to push your local changes to your own fork, so they are
available online:

    | ``git push -u origin <your-branch-name>``

Then, visit https://github.com/pandas-dev/pandas in your browser, and click
on the "Compare & pull request" button in the yellow box above the repository
files.

This will create a pull request, will be reviewed by other developers. It is
unlikely that a pull request is accepted in its first version, so expect some
comments on things that can be improved, from more senior pandas contributors.

For comments in your review, you can make new changes in your local branch for
that pull request. And once you addressed all the comments, you can commit them
and push again to your local branch. As you used the parameter `-u` in your
first push, you can simply run:

    | ``git push``

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
learn more. So, be patient and enjoy. And feel free to provide constructive
feedback in other contributors pull requests too.
