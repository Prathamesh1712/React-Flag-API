import './App.css';
import { useState } from 'react';
import CountriesList from './components/CountriesList';
import Header from './components/Header';
import Select from './components/Select';
import SerachBar from './components/SerachBar';

function App() {
  const [query, setQuery] = useState('')
  return (
    <>
    <Header/>
    <main>
    <div className="search-filter-container">
    <SerachBar setQuery={setQuery}/>
    <Select/>
        </div>
       <CountriesList query={query}/>
    </main>
    </>
  );
}

export default App;
