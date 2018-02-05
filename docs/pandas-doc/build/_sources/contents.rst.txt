====================================
How to write a good pandas docstring
====================================

About docstrings and standards
------------------------------

A Python docstring is a string used to document a Python function or method,
so programmers can understand what it does without having to read the details
of the implementation.

Also, it is a commonn practice to generate online (html) documentation
automatically from docstrings. `Sphinx <http://www.sphinx-doc.org>`_ serves
this purpose.

Next example gives an idea on how a docstring looks like:

.. code-block:: python

    def add(num1, num2):
    """Add up to integer numbers.

    This function simply wraps the `+` operator, and does not
    do anything interesting, except for illustrating what is
    the docstring of a very simple function.

    Parameters
    ----------
    num1 : int
        First number to add
    num2 : int
        Second number to add

    Returns
    -------
    int
        The sum of `num1` and `num2`

    Examples
    --------
    >>> add(2, 2)
    4
    >>> add(25, 0)
    25
    >>> add(10, -10)
    0
    """
    return num1 + num2

To make it easier to understand docstrings, and to make it possible to export
them to html, some standards exist.

The first conventions every Python docstring should follow are defined in
`PEP-257 <https://www.python.org/dev/peps/pep-0257/>`_.

As PEP-257 is quite open, some other standards exist. In the case of pandas,
the numpy docstring convention is followed. There are two main documents
that explain this convention:

- `Guide to NumPy/SciPy documentation <https://github.com/numpy/numpy/blob/master/doc/HOWTO_DOCUMENT.rst.txt>`_
- `numpydoc docstring guide <http://numpydoc.readthedocs.io/en/latest/format.html>`_

numpydoc is a Sphinx extension to support the numpy docstring convention.

The standard uses reStructuredText (reST). reStructuredText is a markup
language that allows encoding styles in plain text files. Documentation
about reStructuredText can be found in:

- `Sphinx reStructuredText primer <http://www.sphinx-doc.org/en/stable/rest.html>`_
- `Quick reStructuredText reference <http://docutils.sourceforge.net/docs/user/rst/quickref.html>`_
- `Full reStructuredText specification <http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html>`_

The rest of this document will summarize all the above guides, and will
provide additional convention specific to the pandas project.

Writing a docstring
-------------------

General rules
~~~~~~~~~~~~~

Docstrings must be defined with three double-quotes. No blank lines should be
left before or after the docstring. The text starts immediately after the
opening quotes (not in the next line). The closing quotes have their own line
(and are not added at the end of the last sentence).

**Good:**

.. code-block:: python

    def func():
        """Some function.

        With a good docstring.
        """
        foo = 1
        bar = 2
        return foo + bar

**Bad:**

.. code-block:: python

    def func():

        """
        Some function.

        With several mistakes in the docstring.
        
        It has a blank like after the signature `def func():`.
        
        The text 'Some function' should go in the same line as the
        opening quotes of the docstring, not in the next line.
        
        There is a blank line between the docstring and the first line
        of code `foo = 1`.
        
        The closing quotes should be in the next line, not in this one."""

        foo = 1
        bar = 2
        return foo + bar

Section 1: Short summary
~~~~~~~~~~~~~~~~~~~~~~~~

The short summary is a single sentence that express what the function does in a
concise way.

The short summary must start with a verb infinitive, end with a dot, and fit in
a single line. It needs to express what the function does without providing
details.

**Good:**

.. code-block:: python

    def astype(dtype):
        """Cast Series type.

        This section will provide further details.
        """
        pass

**Bad:**

.. code-block:: python

    def astype(dtype):
        """Casts Series type.

        Verb in third-person of the present simple, should be infinitive.
        """
        pass

    def astype(dtype):
        """Method to cast Series type.

        Does not start with verb.
        """
        pass

    def astype(dtype):
        """Cast Series type

        Missing dot at the end.
        """
        pass

    def astype(dtype):
        """Cast Series type from its current type to the new type defined in
        the parameter dtype.

        Summary is too verbose and doesn't fit in a single line.
        """
        pass

Section 2: Extended summary
~~~~~~~~~~~~~~~~~~~~~~~~~~~

The extended summary provides details on what the function does. It should not
go into the details of the parameters, or discuss implementation notes, which
go in other sections.

A blank line is left between the short summary and the extended summary. And
every paragraph in the extended summary is finished by a dot.

.. code-block:: python

    def unstack():
        """Pivot a row index to columns.

        When using a multi-index, a level can be pivoted so each value in
        the index becomes a column. This is especially useful when a subindex
        is repeated for the main index, and data is easier to visualize as a
        pivot table.

        The index level will be automatically when added as columns.
        """
        pass

Section 3: Parameters
~~~~~~~~~~~~~~~~~~~~~

The details of the parameters will be added in this section. This section has
the title "Parameters", followed by a line with a hyphen under each letter of
the word "Parameters". A blank line is left before the section title, but not
after, and not between the line with the word "Parameters" and the one with
the hyphens.

After the title, each parameter in the signature must be documented, including
`*args` and `**kwargs`, but not `self`.

The parameters are defined by their name, followed by a space, a colon, another
space, and the type (or type). Note that the space between the name and the
colon is important. Types are not defined for `*args` and `**kwargs`, but must
be defined for all other parameters. After the parameter definition, it is 
required to have a line with the parameter description, which is indented, and
can have multiple lines. The description must start with a capital letter, and
finish with a dot.

**Good:**

.. code-block:: python

    class Series:
        def plot(kind, **kwargs):
            """Generate a plot.

            Render the data in the Series as a matplotlib plot of the
            specified kind.

            Parameters
            ----------
            kind : str
                Kind of matplotlib plot.
            **kwargs
                These parameters will be passed to the matplotlib plotting
                function.
            """

**Bad:**

.. code-block:: python

    class Series:
        def plot(kind, **kwargs):
            """Generate a plot.

            Render the data in the Series as a matplotlib plot of the
            specified kind.

            Note the blank line between the parameters title and the first
            parameter. Also, not that after the name of the parameter `kind`
            and before the colo, a space is missing.

            Also, note that the parameter descriptions do not start with a
            capital letter, and do not finish with a dot.

            Finally, the `**kwargs` is missing.

            Parameters
            ----------

            kind: str
                kind of matplotlib plot
            """

Parameter types
^^^^^^^^^^^^^^^

When specifying the parameter types, Python built-in data types can be used
directly:

- int
- float
- str

For complex types, define the subtypes:

- list of int
- dict of str : int
- tuple of (str, int, int)
- set of str

In case there are just a set of values allowed, list them in curly brackets
and separated by commas (followed by a space):

- {0, 10, 25}
- {'simple', 'advanced'}

If the type is defined in a Python module, the module must be specified:

- datetime.date
- datetime.datetime
- decimal.Decimal

If the type is in a package, the module must be equally specified:

- numpy.ndarray
- scipy.sparse.coo_matrix

If the type is a pandas type, also specify pandas:

- pandas.Series
- pandas.DataFrame

If more than one type is accepted, separate them by commas, except the
last two types, that need to be separated by the word 'or':

- int or float
- float, decimal.Decimal or None
- str or list of str

Section 4: Returns or Yield
~~~~~~~~~~~~~~~~~~~~~~~~~~~
