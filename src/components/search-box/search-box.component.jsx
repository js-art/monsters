import React, { memo } from 'react'
import './search-box.styles.css'

export const SearchBox = memo(({ placeholder, handleChange }) => (
    <input type="search" placeholder={placeholder} className="search" onChange={handleChange} />

))
