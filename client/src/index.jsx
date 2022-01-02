import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";

const call = () => {
  axios.get("/api/hello")
    .then(r => {
      console.log(r)
    })
}

const Index = () => {
  return (
    <div>
      <p>Hello world</p>
      <button onClick={call()}>Call</button>
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('app'))
