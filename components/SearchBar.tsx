'use client'

import { useState } from 'react'
import { SearchManufaturer } from '.'

const SearchBar = () => {
	const [manufacturer, setfirst] = useState<string>('')

	const handleSearch = () => {}

	return (
		<form className='searchbar' onSubmit={handleSearch}>
			<div className='searchbar__item'>
				<SearchManufaturer manufacturer='' setManufacturer={() => {}} />
			</div>
		</form>
	)
}

export default SearchBar
