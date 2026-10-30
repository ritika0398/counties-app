import React from 'react'
import { useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
import { themeContext } from '../../../contexts/ThemeContext'
import { useContext } from 'react'

export default function Home() {
    const [count, setCount] = useState(0)
    const [query, setquery] = useState('');
    const [isDark] = useContext(themeContext);
    return (
        <main className={`${(isDark) ? 'dark' : ''}`}>
            <div className="search-filter-container">
                <div className="header-seaech-container">
                    <SearchBar setQuery={setquery} />
                    <SelectMenu setQuery={setquery} />
                </div>
                {
                    query === 'unmount' ? '' : <CountriesList query={query} />
                }
            </div>
        </main>
    )
}
