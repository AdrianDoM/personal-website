---
title: 'Teaching'
layout: 'layouts/raw.njk'
date: Last Modified
---

<article>

## Awards and honours

<table class="tutoring-table">
<tbody>
<tr>
    <td><a href="https://advance-he.ac.uk/fellowship/associate-fellowship/">Associate Fellow of the Higher Education Academy</a> </td>
    <td>2025</td>
</tr>
<tr>
    <td>Nominee for <a href="https://www.eusa.ed.ac.uk/whatson/awards/roll-of-honour-2023">Student Tutor of the Year</a></td>
    <td>2023</td>
</tr>
</tbody>
</table>

</article>
<article>

## Other teaching

<table class="tutoring-table">
<tbody>
<tr>
    <td>Tutor and mentor for the <a href="https://www.agq-cdt.org/count-me-in/">Count Me In programme</a> </td>
    <td>2025 Summer</td>
</tr>
<tr>
    <td>Co-organiser and tutor of <a href="https://glams-lean-2024.github.io/">GlaMS course on Lean</a></td>
    <td>2023-24 Sem 2</td>
</tr>
<tr>
    <td>Co-organiser and tutor of an introductory course on Lean</td>
    <td>2022-23 Sem 2</td>
</tr>
</tbody>
</table>

</article>

<article>

<h2>Tutoring</h2>
<p>I have tutored the following courses at the <strong>University of Edinburgh</strong>.</p>

<table class="tutoring-table">
<thead>
	<tr>
		<th>Course name</th>
		<th>Dates taught</th>
	</tr>
</thead>
<tbody>
	{%- for course in tutoredCourses -%}
	<tr>
		<td>{{ course.name }}</td>
		<td>
			{%- for year in course.years -%}
			<p>{{ year }}</p>
			{%- endfor -%}
		</td>
	<tr>
	{%- endfor -%}
</tbody>
</table>

</article>
