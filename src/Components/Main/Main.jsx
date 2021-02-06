import React, {useState, useEffect} from 'react'
import PostCard from '../PostCard/PostCard'
import axios from 'axios'


function Main() {
	const url = 'https://601e7239b5a0e90017069ac2.mockapi.io/Article'
	const [articles, setArticles] = useState(null)

	useEffect(() => {
		axios.get(url).then((response) => {
		setArticles(response.data)
	})
	}, [url])
	console.log(articles);

	return (

		<div>
			{articles?.map((article) => (
				<PostCard headline={article.headline} author={article.name} description={article.description} image={article.image}  />
			))}
		</div>
	)
}

export default Main
