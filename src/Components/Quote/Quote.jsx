import React from "react";




function Quote({quoteData}) {
    return ( 
        <div>
            <p>{quoteData.text}</p>
        </div>
     );
}

export default Quote;