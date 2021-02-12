import React from 'react'
import './Card.sass'

function Card({headline, author, description, image, onClick}) {
	return (
		<div className="cards" >
			<div className='card_p'>
					<div className="container">
						<img src={image} alt=""/>
					</div>
					<div className="details">
						<h3>{headline}</h3>
						<p>{description}</p>
					</div>
					<button onClick={onClick}>Read More</button>
		</div>
		</div>
	)
}

export default Card
