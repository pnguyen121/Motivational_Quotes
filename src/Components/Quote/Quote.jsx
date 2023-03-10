import React from "react";

function Quote({ quoteData }) {
  return (
    <div class="max-w-sm h-fit rounded overflow-hidden shadow-black shadow-lg bg-white ">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Quote</div>
        <p class="text-gray-700 text-base mt-5">{quoteData.text} </p>
        <p class="text-gray-900 mt-5">- {quoteData.author} </p>
      </div>
    </div>
  );
}

export default Quote;
