import React from 'react';
import Section from './Section';
import Card from './Card';

export default function Projects() {
	const projects = [
		{
			id: 1,
			title: 'Weather App',
			info:
				'An app that searches the weather conditions of an specific country or city in real time',
			img: 'weather.png',
			colour: '#579801'
		},
		{
			id: 2,
			title: 'Retail Phone Store',
			info:
				'A phone retail shop with incorporated cart and paypal transactions',
			img: 'retail.png',
			colour: '#980140'
		},
		{
			id: 3,
			title: 'To do App',
			info:
				'An app that lets you add anything to do the list with get and fetch actions.',
			img: 'todo.png',
			colour: '#0490b3'
		}
	];
	return (
		<div>
			<Section sectionName='My Projects' sectionId='projects' key='2'></Section>
			<p>React projects</p>
			<div className='my-5'>
				<h2 className='my-5'>React Projects</h2>
				<div className='row'>
					<Card projects={projects}></Card>
				</div>
			</div>
		</div>
	);
}
