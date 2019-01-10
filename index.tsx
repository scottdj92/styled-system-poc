import ReactDOM from "react-dom";
import React from "react";
import Box from "./Box";

const App = () => <Box color="#fff" bg="cornflowerblue">hello world</Box>;

ReactDOM.render(<App/>, document.getElementById("app"));
