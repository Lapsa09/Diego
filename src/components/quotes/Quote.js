import React from "react";
import "./Quote.css";

function Quote({ imgUrl, quote, time }) {
  return (
    <div className="quotes">
      <img
        src="https://www.infobae.com/new-resizer/_FZJGXgrQ8k4T-2sZOtWudKkagk=/420x236/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/4E34FOOC2NGDPO3LAYWB5SAENQ"
        alt=""
      />
      <h3>"Yo me equivoque y pague. Pero la pelota no se mancha"</h3>
      <p>-Diego en su partido de despedida</p>
    </div>
  );
}

export default Quote;
