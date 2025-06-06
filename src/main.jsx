import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import store from "./store.js";
import { Provider } from "react-redux";
import { createTheme, MantineProvider } from "@mantine/core";
import App from "./App.jsx";
import Articles from "./components/Articles.jsx";
import NewDetails from "./components/newsDetail.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@mantine/core/styles.css';

createRoot(document.getElementById("root")).render(
  <MantineProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/articles" element={<Articles />} />
          <Route path='/article/:id' element={<NewDetails/>}/>
        </Routes>
      </BrowserRouter>
      
    </Provider>
  </MantineProvider>
);
