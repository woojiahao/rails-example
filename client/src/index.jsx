import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";

const call = () => {
  axios.get("http://localhost:8083/api/hello")
    .then(r => {
      console.log(r)
    })
}

const Index = () => {
  return (
    <div>
      <p>Hello world</p>
      <button onClick={call()}></button>
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('app'))
