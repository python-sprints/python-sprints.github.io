Instructions for Pandas Sprints
*******************************

The project
===========
`pandas <https://pandas.pydata.org/>`_ is an open source, BSD-licensed library providing high-performance, easy-to-use data structures and data analysis tools for the Python programming language.

pandas is a `NumFOCUS <https://www.numfocus.org/sponsored-projects/>`_ sponsored project. This will help ensure the success of development of pandas as a world-class open-source project, and makes it possible to `donate <https://pandas.pydata.org/donate.html>`_ to the project.


Set up for the sprint
=====================

Make sure you **bring your own laptop** to the sprint.

You need the next softwares installed:

* Git
* An editor (vim, emacs, PyCharm,...)

To **set up the environment**, you have detailed instructions in the `pandas contributing guide <https://pandas.pydata.org/pandas-docs/stable/contributing.html>`_.

Create an account on Github github.com

Get the pandas source code:

* Fork the `pandas project <https://github.com/pandas-dev/pandas>`_ on GitHub (click on the top-right fork button)
* In the terminal, run:
    ``git clone https://github.com/<your-github-username>/pandas``

A summary of it would be:

* Download and install `Anaconda <https://www.anaconda.com/download/#linux>`_
* Activate conda by one of the next (or equivalent, if you know what you're doing):
    | Restart your terminal
    | ``. ~/.bashrc``
    | ``export PATH="<path-to-anaconda>/bin:$PATH"``
* Create a conda environment:
    ``conda create -n pandas_dev -f <path-to-pandas>/ci/environment-dev.yaml``
* Activate the new conda environment:
    ``source activate pandas_dev``    
* Install pandas development dependencies:
    ``conda install -c defaults -c conda-forge --file=<path-to-pandas>/ci/requirements-optional-conda.txt``
* Compile C code in pandas:
    | ``python setup.py build_ext --inplace``
    | Run the tests:
    | ``cd <path-to-pandas>``
    | ``pytest pandas``
