import Popup from "./components/Popup";
import { useState, useEffect } from "react";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  // -- Use useEffect to call this only one time
  useEffect(() => {
    // -- Use setTimeout() to delay the execution
    setTimeout(() => {
      setTimedPopup(true);
    }, 3000);
  }, []);

  return (
    <div className="App">
      <main>
        <h1>React Popup</h1>
        <button onClick={() => setButtonPopup(true)}>Open Popup</button>
      </main>

      {/* -- This Popup is trigged by clicking on Open Popup button */}
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>My popup</h3>
        <p>This is my button triggerd popup</p>
      </Popup>

      {/* -- This Popup is triggered by timed */}
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h3>My popup</h3>
        <p>This is my button triggerd popup</p>
      </Popup>
    </div>
  );
}

export default App;
