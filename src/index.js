import React from "react";
import ReactDom from "react-dom"
import "./css/main.css"
import "@clayui/css/lib/css/atlas.css";
import {App} from "./pages/App";

ReactDom.render(<App/>, document.querySelector('#root'))