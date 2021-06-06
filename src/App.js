import React from "react";
import StoreContextProvider from "./contexts/StoreContext";
import Routes from "./Routes";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

toast.configure();

function App() {
    return (
        <StoreContextProvider>
            <Routes />
        </StoreContextProvider>
    );
}

export default App;
