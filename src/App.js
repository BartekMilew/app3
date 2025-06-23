import React, { useState } from "react";
import "./App.css";
import keepTabAlive from "./keep-tab-alive";

function App() {
  const [showIframe, setShowIframe] = useState(false);

  // Function to open the external website in a new tab
  const openNewTab = () => {
    keepTabAlive.createTabContext();
    window.open(
      "https://app1a-071c852a3c31.herokuapp.com/",
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

        {/* Button to clear keepAliveContext */}
        <button onClick={keepTabAlive.clearTabContext} style={{ marginTop: "10px" }}>
          Clear tab context (stop sound)
        </button>

        {/* Conditionally render iframe */}
        {showIframe && (
          <div style={{ marginTop: "20px", width: "80%", height: "100px" }}>
            <iframe
              src="https://app1a-071c852a3c31.herokuapp.com/"
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
