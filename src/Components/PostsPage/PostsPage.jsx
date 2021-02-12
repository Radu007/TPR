import React from 'react'
import Card from '../Card/Card'
import {useHistory} from 'react-router-dom'

function PostsPage({articles}) {
	const history = useHistory()
	return (
		<div>
			{articles?.map((article) => (
				<Card onClick={() => history.push(`/article/${article.id}`)} key={article.id} headline={article.headline} author={article.name} description={article.description} image={article.image}/>
			))}
		</div>
	)
}

export default PostsPage
