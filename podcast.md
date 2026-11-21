---
layout: default
title: Podcast
---

The transcript collection has moved to the [podcast archive](http://podcast.josherich.me/).

## Earlier posts

<ul class="posts">
  {% for post in site.posts %}
    {% if post.tags contains "podcast_script" %}
      <li><div class="date">{{ post.date | date_to_string }}</div><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>

