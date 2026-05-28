import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const generateShortUrl = () => {
    if (!url) return;

    const code = Math.random().toString(36).substring(2, 8);

    setShortUrl(`https://short.ly/${code}`);
  };

  return (
    <div
      style={{
        fontFamily: "Arial",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1>URL Shortener</h1>

      <input
        type="text"
        placeholder="Enter your URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          width: "300px",
          padding: "10px",
          marginRight: "10px",
        }}
      />

      <button
        onClick={generateShortUrl}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Shorten
      </button>

      {shortUrl && (
        <div style={{ marginTop: "20px" }}>
          <h3>Short URL:</h3>

          <a href={shortUrl} target="_blank">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);