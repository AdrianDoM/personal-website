---
title: 'Talks'
layout: 'layouts/raw.njk'
date: Last Modified
---
{% from "partials/components.njk" import talkCard %}

<article>
<h2>Research talks</h2>
<table>
<tbody>
{% for talk in collections.researchTalks %}
  <tr>
    <td>
    {{- talkCard(talk) -}}
    </td>
  </tr>
{% endfor %}
</tbody>
</table>
</article>
<article>
<h2>Expository talks</h2>
<table>
<tbody>
{% for talk in collections.expositoryTalks %}
  <tr>
    <td>
    {{- talkCard(talk) -}}
    </td>
  </tr>
{% endfor %}
</tbody>
</table>
</article>
