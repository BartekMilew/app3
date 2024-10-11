import React, { useState } from "react";
import "./App.css";

function App() {
  const [showIframe, setShowIframe] = useState(false);

  // Function to open the external website in a new tab
  const openNewTab = () => {
    window.open(
      "https://app2-sand.vercel.app/",
      "Click",
      "height=600, width=400"
    );
  };

  // Function to show or hide the iframe
  const toggleIframe = () => {
    setShowIframe(!showIframe);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Popup and Iframe Example</h1>

        {/* Button to open external website in a new tab */}
        <button onClick={openNewTab}>Open External Website in New Tab</button>

        {/* Button to toggle iframe */}
        <button onClick={toggleIframe} style={{ marginLeft: "10px" }}>
          {showIframe ? "Hide Iframe" : "Open Website in Iframe"}
        </button>

        {/* Conditionally render iframe */}
        {showIframe && (
          <div style={{ marginTop: "20px", width: "40%", height: "100px" }}>
            <iframe
              src="https://app2-sand.vercel.app/"
              width="100%"
              height="100%"
              title="External Website"
              frameBorder="0"
            />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
