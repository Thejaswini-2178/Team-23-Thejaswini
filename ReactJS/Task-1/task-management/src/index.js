import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use 'react-dom/client' instead of 'react-dom'
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Correct way in React 18

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
