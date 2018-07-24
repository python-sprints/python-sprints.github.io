---
obj_id: python.org
name: "www.python.org"
logo: static/images/projects/python.png
website: https://www.python.org/
setup_html: |
    <p>To set up an environment for the sprint, we recommend creating a conda environment:</p>
    <p>
        <ul>
            <li><a href="https://www.anaconda.com/download/">Download</a> and install Anaconda</li>
            <li>Fork <a href="https://github.com/python/pythondotorg">the project repository</a> by clicking on the top-right "Fork" button</li>
            <li><code>git clone your fork git@github.com:/pythondotorg.git</code></li>
            <li>Create a conda environement: <code>conda create -n pythondotorg_dev python=3.4</code></li>
            <li>Install requirements: <code>pip install -r /dev-requirements.txt</code></li>
            <li>You'll also need to install PostgreSQL</li>
            <li>And create a database: <code>createdb pythondotorg -E utf-8 -l en_US.UTF-8</code></li>
        </ul>
    </p>
    <p>More detailed project instructions are available <a href="https://pythondotorg.readthedocs.io/install.html#manual-setup">here</a>.</p>
---
www.python.org is the official Python language and community website. The Python Software Foundation is responible for it, but it's mainly developed and maintained by volunteers. Its important is key, and it is usually one of the first websites visited by people new to Python. And it also contains important content such as the official Python installation files, news, events, information about the Python Software Foundation, the community job board, and links to relevant information like the documentation or the list of user groups.
