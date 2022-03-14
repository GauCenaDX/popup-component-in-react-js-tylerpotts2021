import Popup from "./components/Popup";
import { useState } from "react";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);

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
    </div>
  );
}

export default App;
