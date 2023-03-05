import { useState, useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Quote from '../componenets/Quote/Quote'

function App() {

  const [quote, setQuote] = useState('')


  useEffect(() => {

    const quoteFromApi = `https://healthruwords.p.rapidapi.com/v1/quotes/?t=Wisdom&maxR=1&size=medium&id=731`
    console.log('useEffect ran')

    async function makeApiCall(){
      try{
        const responseJson = await fetch(quoteFromApi);
        console.log(responseJson, 'responseJson here <--')

        const data = await responseJson.json()
        console.log(data, 'data from the api')

      } catch(err){
        console.log(err)
      }
    }


  })


  return (
    <div className="container max-w-full h-screen">
      <h1 className="bg-red-500 w-screen">MOTIVATIONAL QUOTE PROJECT</h1>
    </div>
  );
}

export default App;
