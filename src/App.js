import "./App.css";
import React, { useState } from "react";
import History from "./pages/History.js";
import SignUp from "./pages/SignUp.js";
import SignIn from "./pages/SignIn.js";
import Contact from "./pages/Contact.js";
import Favorites from "./pages/Favorites.js";
import Profile from "./pages/profile.js";
import About from "./pages/About.js";
import Setting from "./pages/Setting.js";
import Product from "./pages/Product.js";
import Home from "./pages/Home.js";
import { Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories.js";
import ProductAnalysis from "./pages/ProductAnalysis.js";
import Profiledata from "./component/Profiledata.js";
import Resetpassdata from "./component/Resetpassdata.js";

function App() {
  const [token, setToken] = useState("");
  return (
    <>
      {token !== "" ? (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/History" element={<History />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route
            path="/SignIn"
            element={<SignIn setToken={setToken} />}
          ></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Favorites" element={<Favorites />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Setting" element={<Setting />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Product" element={<Product />}></Route>
          <Route path="/ProductAnalysis" element={<ProductAnalysis />}></Route>
          <Route path="/Categories" element={<Categories />}></Route>
          <Route path="/Profiledata" element={<Profiledata />}></Route>
          <Route path="/Resetpassdata" element={<Resetpassdata />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<SignIn setToken={setToken} />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/History" element={<History />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route
            path="/SignIn"
            element={<SignIn setToken={setToken} />}
          ></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Favorites" element={<Favorites />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Setting" element={<Setting />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/ProductAnalysis" element={<ProductAnalysis />}></Route>
          <Route path="/Product" element={<Product />}></Route>
          <Route path="/Categories" element={<Categories />}></Route>
          <Route path="/Profiledata" element={<Profiledata />}></Route>
          <Route path="/Resetpassdata" element={<Resetpassdata />}></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
