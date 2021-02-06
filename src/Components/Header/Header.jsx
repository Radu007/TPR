import React from 'react'
import './Header.sass'

function Header() {
	return (
		<div className='header'>
			<a href="/"><img className='logo' src="/images/logo.png" alt=""/></a>
			<ul className="header-list">
				<li className="header-list_item"><a className='header-list_item__link' href="/">Acasa</a></li>
				<li className="header-list_item"><a className='header-list_item__link' href="/about">About</a></li>
				<li className="header-list_item"><a className='header-list_item__link' href="/posts">Postrări</a></li>
			</ul>
		</div>
	)
}

export default Header