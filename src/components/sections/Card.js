import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
	const { id, title, info, img } = props.projects;
	return props.projects.map(project => (
		<div className='flip-card mx-auto' key={project.id}>
			<Link to={'/projects/' + project.id}>
				<div className='flip-card-inner'>
					<div className='flip-card-front'>
						<img
							src={'/images/projects/' + project.img}
							className='img-fluid'
							alt='Project'
						/>
					</div>
					<div className='flip-card-back'>
						<h1 className='pt-3'>{project.title}</h1>
						<p>{project.info}</p>
					</div>
				</div>
			</Link>
		</div>
	));
}
