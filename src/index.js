// Import the React and ReactDoom librearies
import React from "react";
import ReactDoom from "react-dom";

//Create react component

const App = () => {
  return (
    <div>
      <label className="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        Submit
      </button>
    </div>
  );
};

//Take de react component and show it on the screen
ReactDoom.render(<App />, document.querySelector("#root"));
