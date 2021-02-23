import React, {useEffect} from 'react'
import { useParams } from "react-router-dom"


function Article({articles, asaProp}) {
	const {id} = useParams()
	
	
	const findArticle = (neededArticle, id) => {
		const idReturned = neededArticle && neededArticle.find(function(article, index) {
			return article.id = id
		})
		return idReturned
	}

  let neededArticle = findArticle(articles, id)

	componentDidMount() {
		console.log(neededArticle);
	}
	
	

	return (
		<div className='article'>
		<h1>{neededArticle.headline}</h1>
		<img src={neededArticle.image} alt=""/>
		<p>{neededArticle.description}</p>
		</div>
	)
}

export default Article
