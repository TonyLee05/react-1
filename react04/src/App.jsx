import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState('olive');

  function changeColor(color) {
    setColor(color);
  }

  return (
    <div style={{backgroundColor: color}} className="w-full h-screen duration-200 bg-black">
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap py-2 px-3 rounded-3xl justify-center gap-3 bg-white shadow-lg">
          <button onClick={() => changeColor('red')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg">Red</button>
          <button onClick={() => changeColor('yellow')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg">yellow</button>
          <button onClick={() => changeColor('green')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg">green</button>
        </div>
      </div>
    </div>
  );
}

export default App;
