import React from 'react';
import Section from './Section';
import me from './me.png';
import { about } from '../data/about';

export default function About() {
	return (
		<div>
			<Section sectionName='About Me' sectionId='about' key='1'></Section>
			<img
				src={me}
				id='profile'
				alt='Me'
				title='Antonella Pisani'
				className='img-fluid mx-auto mt-5 col-6 col-md-2'
			></img>
			<div className='intro'>
				<div className='my-5'>
					<div className='col-8 col-sm-4 mx-auto my-5'>
						<p>Hi</p>
						<p>
							My name is Antonella and I'm a self-taught Front End Developer,
							currently working to become a Full Stack Developer.
						</p>
					</div>
				</div>
				<div>
					<p>
						Here are some of the languages, libraries and softwares that I use
						today.
					</p>
					<div className='row'>
						{about.map(subSection => {
							return (
								<div className='col-10 col-md-8 mx-auto my-5'>
									<h2>{subSection.info}</h2>
									<div className='smallIcons d-flex flex-row row flex-wrap'>
										{subSection.img.map(img => {
											return (
												<img
													src={'/images/about/' + img.src}
													alt={img.title}
													title={img.title}
													className='mx-auto img-fluid p-2 col-4 col-md-2'
												/>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
