import React from "react";
import ReactDOM from "react-dom";
import Header from "homepage/Header";
import Footer from "homepage/Footer";

import "./index.scss";

const App = () => (
  <div className="text-3xl justify-between">
    <Header />
    <div className="text-center h-screen items-center">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
        className="rounded-full w-32 mb-4 mx-auto"
        alt="Avatar"
      />
      <h5 className="text-xl font-medium leading-tight mb-2">John Wick</h5>
      <p className="text-gray-500">Frontend Developer</p>
    </div>
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
