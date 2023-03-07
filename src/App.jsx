import { useState, useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Quote from "./Components/Quote/Quote";

function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    // variable to get a random number to get a random quote between 1 - 1600
    let randomNum = Math.floor(Math.random() * 1600) + 1;

    // Link from https://rapidapi.com/HealThruWords/api/universal-inspirational-quotes
    const quoteFromApi = `https://type.fit/api/quotes`;
    console.log("useEffect ran");

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

  return (
    <div className="container max-w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="w-screen text-align-center">KEEP PUSHING</h1>
      <div className="flex grid-rows-1 justify-items-center justify-center items-center w-screen max-w-full h-screen">
        <Quote quoteData={quote} />

      </div>
    </div>
  );
}

export default App;
