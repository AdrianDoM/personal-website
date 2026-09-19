---
title: 'Research'
layout: 'layouts/raw.njk'
date: Last Modified
---
<article>

I am interested in category theory as a tool for clarifying relationships across mathematics and its applications. Much of my work has focused on monads, a fundamental categorical concept with many uses, including categorical universal algebra. In particular, I've studied codensity and pushforward monads, which generate new monads from functors and other monads.

I've also spent time thinking about enriched categories, which provide a setting
able to encompass on the same footing differential graded categories and metric
spaces. This has led to my interest in the concept of Cauchy dense functor, about which I have written a short article.

Before that, I researched magnitude homology, a homology theory for enriched categories, and hence also metric spaces. I studied when two closed subsets of Euclidean space are magnitude homology equivalent, in the sense of having back-and-forth distance-decreasing maps between them inducing isomorphisms in magnitude homology. This turns out to be characterised up to isometry by an important subset, called the core.

</article>

{% from "partials/components.njk" import articleCard %}

<article class="publications-list">
<h2>Finished work</h2>
{%- for article in collections.publications -%}
	{{ articleCard(article, 'publications') }}
{%- endfor -%}
</article>

<article class="other-writing-list">
<h2>Other writing</h2>
{%- for article in collections.otherWriting -%}
	{{ articleCard(article, 'otherWriting') }}
{%- endfor -%}
</article>
