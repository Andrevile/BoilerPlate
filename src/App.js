import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import { Container } from "@/components/styles/Container.styled";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import content from "@/static/constants/content";
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

const Main = lazy(() => import("./pages/Main" /* webpackPrefetch: true */));
const Second = lazy(() => import("./pages/Second" /* webpackPrefetch: true */));
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Suspense fallback={<div>suspense fallback</div>}>
          {
            <BrowserRouter>
              {" "}
              <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/second" element={<Second />}></Route>
              </Routes>
            </BrowserRouter>
          }
        </Suspense>
      </>
    </ThemeProvider>
  );
}

export default App;
