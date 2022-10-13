import React from 'react';
import './App.css';

function App() {

  const [state, setState] = React.useState({isLightOn : false})

  function handleClick (evt) {
      // console.log("handleclick!");
      // console.log(state.isLightOn);
      // const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
      setState({
          ...state,
          [evt.target.name]: !state.isLightOn
      });
  }

  return (
    <>
      <button
          type="button"
          name="isLightOn"
          onClick={handleClick}
      >
          {state.isLightOn? "ON" : "OFF"}
      </button>
    </>
  );
}

export default App;
