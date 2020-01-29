import React from 'react';
import Section from './Section';
import Card from './Card';

export default function Projects() {
	return (
		<div>
			<Section sectionName='My Projects' sectionId='projects' key='2'></Section>
			<p>Here are some of my projects.</p>
			<p>Take a look!</p>
			<div>
				<h2>React Projects</h2>
				<Card></Card>
			</div>
			<div><h2>Vanilla JS Projects</h2></div>
		</div>
	);
}
