import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
