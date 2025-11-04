import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/quote");
      const data = await res.json();
      setQuote(data.quote);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">💬 Quote Generator</h1>
        <p className="quote">{loading ? "Loading..." : quote}</p>
        <button onClick={fetchQuote} className="btn">
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
