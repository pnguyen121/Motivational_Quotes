import { useState, useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Quote from "./Components/Quote/Quote";

function App() {

  const [quote, setQuote] = useState('')


  useEffect(() => {

    // Link from https://rapidapi.com/HealThruWords/api/universal-inspirational-quotes
    // const quoteFromApi = `https://healthruwords.p.rapidapi.com/v1/quotes/?t=Wisdom&maxR=1&size=medium&id=731`
    const quoteFromApi = `https://type.fit/api/quotes`
    console.log('useEffect ran')

    async function makeApiCall(){
      try{
        const responseJson = await fetch(quoteFromApi);
        console.log(responseJson, 'responseJson here <--')

        const data = await responseJson.json()
        console.log(data, 'data from the api')


        // Set the quote taken from the API to state called quote
        setQuote(data[0])

      } catch(err){
        console.log(err)
      }
    }
    // Must call the function 
    makeApiCall()


  })


  return (
    <div className="container max-w-full h-screen">
      <h1 className="bg-red-500 w-screen">MOTIVATIONAL QUOTE PROJECT</h1>
      <Quote quoteData={quote}/>
    </div>
  );
}

export default App;
