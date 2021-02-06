import React, {useState, useEffect} from 'react'
import './PostCard.sass'

function PostView({headline, author, description, image}) {
	return (
		<div className='post-card'>
			<img className='post-card__image' src={image} alt=""/>
			<div className="post-card-left">
				<h1 className="post-card-left_title">{headline}</h1>
				<h2 className="post-card-left_author">{author}</h2>
				<p className='post-card-left_description'>{description}</p>
			</div>
		</div>
			
	)
}

export default PostView
