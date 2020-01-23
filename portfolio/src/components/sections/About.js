import React from 'react';
import Section from './Section';
import me from '../../images/others/me.png';
import html from '../../images/languages/html.jpg';
import css from '../../images/languages/css.jpg';
import javascript from '../../images/languages/javascript.jpg';
import cSharp from '../../images/languages/cSharp.png';
import sqlServer from '../../images/languages/sql-server.png';
import net from '../../images/libraries/net.png';
import jquery from '../../images/libraries/jquery.png';
import react from '../../images/libraries/reactjs.png';
import bootstrap from '../../images/libraries/bootstrap.jpg';
import sass from '../../images/libraries/sass.png';
import photoshop from '../../images/design/photoshop.svg';
import illustrator from '../../images/design/illustrator.jpg';
import adobexd from '../../images/design/adobe-xd.svg';
import gimp from '../../images/design/gimp.png';
import inkscape from '../../images/design/inkscape.png';
import github from '../../images/teamwork/github.jpg';
import slack from '../../images/teamwork/slack.png';
import icescrum from '../../images/teamwork/icescrum.png';
import figma from '../../images/teamwork/figma.png';

export default function About() {
	// 	function displaySection(obj, subtitle, img) {

	// 	}
	// 	const about = {
	// 		languages: ['Some of the languages I use today include:', { img: ['html.jpg', 'css.jpg', 'javascript.jpg', 'cSharp.png', 'sql-server.png']}],
	// 		libraries: ['Libraries & Frameworks:', { img: ['bootstrap.jpg', 'jquery.png', 'net.png', 'reactjs.png', 'sass.png']}],
	// 		design: ['Designing software:', {img: ['adobe-xd.svg', 'photoshop.svg', 'illustrator.jpg', 'gimp.png', 'inkscape.png']}],
	// 		others: ['Others:', {img: ['github.jpg', 'slack.png', 'icescrum.png', 'figma.png']}]
	// }
	// }

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
				<div className='m-5'>
					<div className='px-5 mb-5'>
						<p>Hi</p>
						<p>
							My name is Antonella and I'm a self-taught Front End Developer,
							currently working to become a Full Stack Developer.
						</p>
					</div>
				</div>
				<div>
					<div className='p-5'>
						<h2>Some of the languages I use today include:</h2>
						<div className='smallIcons d-flex flex-row flex-wrap'>
							<img
								src={html}
								alt='html'
								className='mx-auto img-fluid p-2 col-4 col-md-2'
								title='HTML'
							/>
							<img
								src={css}
								alt='css'
								className='mx-auto img-fluid p-2 col-4 col-md-2'
								title='CSS'
							/>
							<img
								src={javascript}
								alt='javascript'
								className='mx-auto img-fluid p-2 col-4 col-md-2'
								title='javascript'
							/>
							<img
								src={cSharp}
								alt='c#'
								className='mx-auto img-fluid p-2 col-4 col-md-2'
								title='C#'
							/>
							<img
								src={sqlServer}
								alt='SQL Server'
								className='mx-auto img-fluid p-2 col-4 col-md-2'
								title='SQL Server'
							/>
						</div>
					</div>
					<div className='p-5'>
						<h2>Libraries &amp; Frameworks:</h2>
						<div className='smallIcons row'>
							<img
								src={net}
								alt='.NET'
								className='mx-auto img-fluid p-2 col-4 col-md-2'
								title='.NET'
							/>
							<img
								src={jquery}
								alt='jquery'
								className='mx-auto img-fluid p-2 col-4 col-md-2'
								title='JQuery'
							/>
							<img
								src={react}
								alt='React JS'
								className='mx-auto img-fluid p-2 col-4 col-md-2'
								title='React'
							/>
							<img
								src={bootstrap}
								alt='Bootstrap'
								className='mx-auto img-fluid p-2 col-4 col-md-2'
								title='Bootstrap'
							/>
							<img
								src={sass}
								alt='Sass'
								className='mx-auto img-fluid p-2 col-4 col-md-2'
								title='SASS'
							/>
						</div>
					</div>
					<div className='p-5'>
						<h2>Designing software:</h2>
						<div className='smallIcons row'>
							<img
								src={photoshop}
								alt='Photoshop'
								className='mx-auto img-fluid p-2 col-4 col-md-2'
								title='Photoshop'
							/>
							<img
								src={illustrator}
								alt='Illustrator'
								className='mx-auto img-fluid p-2 col-4 col-md-2'
								title='Illustrator'
							/>
							<img
								src={adobexd}
								alt='XD'
								className='mx-auto img-fluid p-2 col-4 col-md-2'
								title='Adove XD'
							/>
							<img
								src={gimp}
								alt='Gimp'
								className='mx-auto img-fluid p-2 col-4 col-md-2'
								title='Gimp'
							/>
							<img
								src={inkscape}
								alt='Inkscape'
								className='mx-auto img-fluid p-2 col-4 col-md-2'
								title='Inkscape'
							/>
						</div>
					</div>
					<div className='p-5'>
						<h2>Teamwork:</h2>
						<div className='smallIcons row'>
							<img
								src={github}
								alt='github'
								className='mx-auto img-fluid p-2 col-6 col-md-2'
								title='GitHub'
							/>
							<img
								src={slack}
								alt='Slack'
								className='mx-auto img-fluid p-2 col-6 col-md-2'
								title='Slack'
							/>
							<img
								src={icescrum}
								alt='IceScrum'
								className='mx-auto img-fluid p-2 col-6 col-md-2'
								title='IceScrum'
							/>
							<img
								src={figma}
								alt='Figma'
								className='mx-auto img-fluid p-2 col-6 col-md-2'
								title='Figma'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
