
import './App.css';
import Header from './components/Header'
import CharacterTable from './components/CharacterTable'
import axios from 'axios'
import React , {useEffect, useState} from 'react'
const hash ="01510c6df65d2985b529f0ffb2561772"

function App() {
  const [items,setItems]=useState([])
  const[isLoading,setLoading]=useState(true)
  useEffect(()=> {
    const fetch= async()=>{
      const result = await axios('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b0852685735dbbcb9a4075a643b1e023&hash=01510c6df65d2985b529f0ffb2561772')
    console.log(result.data.data.results)
    setItems(result.data.data.results)
    setLoading(false)
    }
    fetch()
  },[])
  return (
    <div className="container">
      <Header/>
      <CharacterTable items={items}isLoading={isLoading}/>

    </div>
  );
}

export default App;
