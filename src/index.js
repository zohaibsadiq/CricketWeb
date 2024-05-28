import React from "react";
import reactDom from "react-dom";
import "./index.css";
import {Typography} from '@mui/material'

import AllCompo from "./allCompo";
const App = () => {

  return (
    <div>
      <AllCompo/>
     
    </div>
  );
}

const root = reactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);