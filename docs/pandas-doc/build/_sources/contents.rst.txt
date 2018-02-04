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
