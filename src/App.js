import { useEffect, useState } from 'react';
import './App.css';

const GIPHY_API_KEY = "2cZkiFTqyiS79UdSapL6LHWlublpl7iy";

function App() {

  const [catFact, setCatFact] = useState('');
  const [catFactGiphy, setCatFactGiphy] = useState('');

  const callGiphyAPI = (string) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${string}&api_key=${GIPHY_API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data[0].images.original.url);
        setCatFactGiphy(data.data[0].images.original.url);
      });
  };

  const callApi = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        setCatFact(data.fact);
        callGiphyAPI(data.fact.split(" ",3).join(' '))
        console.log(data.fact);
      });
  }
  useEffect(callApi, []);

  return (
    <div className='container'>
      <p>{catFact}</p>
      <img src={catFactGiphy} />
      <button></button>
    </div>
  );
}

export default App;
