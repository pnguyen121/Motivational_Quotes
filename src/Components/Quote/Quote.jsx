import React from "react";

function Quote({ quoteData }) {
  return (
    <div class="max-w-sm h-1/4 rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Quote</div>
        <p class="text-gray-700 text-base">{quoteData.text} </p>
        <p class="text-gray-900">-{quoteData.author} </p>
      </div>
    </div>
  );
}

export default Quote;
