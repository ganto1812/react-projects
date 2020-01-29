import React from 'react'
// import ./;

export default function Card() {
	return (
		<div className="flip-card mx-auto">
			<div className="flip-card-inner">
				<div className="flip-card-front">
					<img src="img_avatar.png" alt="Avatar" />
				</div>
				<div className="flip-card-back">
					<h1>John Doe</h1>
					<p>Architect & Engineer</p>
					<p>We love that guy</p>
				</div>
			</div>
		</div>
	)
}
