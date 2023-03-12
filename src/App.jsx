import { useState, useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Quote from "./Components/Quote/Quote";

function App() {
  const [quote, setQuote] = useState("");

  // Link from https://rapidapi.com/HealThruWords/api/universal-inspirational-quotes
  const quoteFromApi = `https://type.fit/api/quotes`;
  console.log("useEffect ran");

  // variable to get a random number to get a random quote between 1 - 1600
  let randomNum = Math.floor(Math.random() * 1600) + 1;

  // On Load run these functions
  useEffect(() => {
    async function makeApiCall() {
      try {
        const responseJson = await fetch(quoteFromApi);
        console.log(responseJson, "responseJson here <--");

        const data = await responseJson.json();
        console.log(data, "data from the api");
        console.log(randomNum, "randomNum");

        // Set the quote taken from the API to state called quote
        setQuote(data[randomNum]);
      } catch (err) {
        console.log(err);
      }
    }
    // Must call the function
    makeApiCall();
  }, []);



  // onClick function
  async function newQuoteClick(){
    console.log('button clicked')
    try {
      // fetch quote from apiLink above
      const responseJson = await fetch(quoteFromApi);
      console.log(responseJson, "responseJson here <--");

      // Turn it into json so we can read it and use it
      const data = await responseJson.json();
      console.log(data, "data from the api");
      console.log(randomNum, "randomNum");

      // Set the quote taken from the API to state called quote
      setQuote(data[randomNum]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container max-w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="w-screen text-center pt-5">KEEP PUSHING</h1>
      <div className="flex flex-col grid-rows-1 justify-items-center justify-center items-center w-screen max-w-full h-5/6">
        {/* Pass the quote as a prop to Quote Compononent so we can use it */}
        <Quote quoteData={quote} />
        <button onClick={() => newQuoteClick()} class="bg-white hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-8">
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
