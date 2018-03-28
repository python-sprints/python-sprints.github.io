---
obj_id: tornado
name: "Tornado"
logo: static/images/projects/tornado.png
website: http://www.tornadoweb.org/en/stable/
setup_html: |
    <p>
        Just fork and clone Tornado from
        <a href="https://github.com/tornadoweb/tornado/">
            https://github.com/tornadoweb/tornado/
        </a>
    </p>
---

Tornado is a Python web framework and asynchronous networking library,
originally developed at FriendFeed. By using non-blocking network I/O,
Tornado can scale to tens of thousands of open connections, making it
ideal for long polling, WebSockets, and other applications that require
a long-lived connection to each user.
