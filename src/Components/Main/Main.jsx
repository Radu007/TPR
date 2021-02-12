import React from 'react'
import PostCard from '../PostCard/PostCard'
import { useHistory } from "react-router-dom"


function Main({articles}) {
	const history = useHistory()


return (
		<div>
			  {articles?.map((article) => (
				<PostCard onClick={() => history.push(`/post/${article.id}`)} key={article.id} headline={article.headline} author={article.name} description={article.description} image={article.image}  />
			))} 

			
		</div>
	)
}

export default Main
