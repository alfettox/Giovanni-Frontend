import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App.js";

const rendered = (<div>
                    <App />
                    </div>
)


ReactDOM.createRoot(document.getElementById("root")).render(rendered)
