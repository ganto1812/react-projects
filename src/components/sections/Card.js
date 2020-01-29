import React from 'react';
import Projects from './Projects';
// import ./;

export default function Card(props) {
	const { id, title, info, img } = props.projects;
	return props.projects.map(project => (
		<div className='flip-card mx-auto'>
			<div className='flip-card-inner'>
				<div className='flip-card-front'>
					<img
						src={'/images/projects/' + project.img}
						className='img-fluid'
						alt='Project'
					/>
				</div>
				<div className='flip-card-back'>
					<h1>{project.title}</h1>
					<p>{project.info}</p>
				</div>
			</div>
		</div>
	));
}
