---
layout: default
title: Shorts
---

<script>
  document.querySelector('.header a.shorts').classList.add('selected')
</script>


<ul class="posts">
  {% for post in site.posts %}
    {% if post.tags contains "short" %}
      <li><div class="date">{{ post.date | date_to_string }}</div><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
