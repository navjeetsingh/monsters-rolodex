import React from 'react';
import './SearchBox.css';

const SearchBox = ({ placeholder, searchField, handleChange }) => {
	return (
		<input
			className="search"
			type="search"
			name={searchField}
			placeholder={placeholder}
			onChange={handleChange}
		/>
	);
};

export default SearchBox;
