import React from "react";
import "./More.css";

function More() {
  return (
    <div className="more">
      <h4>
        Podes leer mas de su trayectoria en
        <a
          id="tribute-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://es.wikipedia.org/wiki/Diego_Maradona"
        >
          Wikipedia
        </a>
      </h4>
    </div>
  );
}

export default More;
