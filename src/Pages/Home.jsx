import React, { useEffect, useState } from "react";
import { SiConvertio } from "react-icons/si";
import { Suspense } from "react";
import { FaRegCopy } from "react-icons/fa";

const Home = () => {
  const [showQuote, setShowQuote] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.api-ninjas.com/v1/quotes?category=",
        {
          method: "GET",
          headers: {
            "X-Api-Key": "9Lm2JsWLNcuKDmSZaR7YAA==Zf7h2nzIZtK88xVE",
          },
          "Content-Type": "application/json",
        }
      );
      const result = await response.json();
      setShowQuote(result);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (showQuote && showQuote.length > 0) {
      const quoteCopy = `${showQuote[0].quote}`;
      navigator.clipboard.writeText(quoteCopy);
    }
  };
  return (
    <div>
      <h1>Quote Generator</h1>
      <div className="container">
        {loading ? (
          <>
            <div class="d-flex justify-content-center my-4">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </>
        ) : showQuote && showQuote.length > 0 ? (
          showQuote.map((c) => (
            <>
              <h5 className="text" key={c}>
                <span>Category:</span> {c.category}
              </h5>
              <h4>
                <i>" {c.quote} "</i>
              </h4>
              <p>- {c.author}</p>
            </>
          ))
        ) : (
          <>
            <h5 className="text">
              <span>Category:</span> Motivation and Perseverance
            </h5>
            <h4>
              <i>
                " Success is not final, failure is not fatal: It is the courage
                to continue that counts. "
              </i>
            </h4>
            <p>- Winston Churchill</p>
          </>
        )}
        <div className="buttons">
          <button className="new" onClick={handleClick}>
            <SiConvertio /> New Quote
          </button>
          <button className="copy" onClick={handleCopy}>
            <FaRegCopy /> Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
