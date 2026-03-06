import React, { createContext, useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Addtocart from "./Components/Addtocart/Addtocart";
import Contact from "./Components/Contact/Contact";
import Cards from "./Components/Cards/Cards";
import RandomImg from "./Components/RandomImg/RandomImg";

export const d = createContext();
export const a = createContext();
export const s = createContext();
export const pr = createContext();

export const r = createContext();
export const u = createContext();

export const rem = createContext();

const App = () => {
  const [data, setdata] = useState([]);

  let f_data = async () => {
    let datas = await fetch("https://productsapi-ov63.onrender.com/api/");
    let fetch_data = await datas.json();
    setdata(fetch_data);
  };
  useEffect(() => {
    f_data();
  }, []);

  const [cart, setcart] = useState([]);
  const [price,setprice]=useState(0);

  const add = (e) => {
  const update = [...cart];

  let u = confirm("Do u want to add to cart");

  if (u === true) {

    if (cart.includes(e)) {
      alert("Item already present in cart");
    } else {

      const item = { ...e, qty: 1 };   

      update.push(item);
      setcart(update);

      setprice(price + item.price);

      alert("added successfully");
    }
  }
};

 const remove = (i) => {
  const de = [...cart];
  let con = confirm("Are you sure to delete");

  if (con === true) {
    const item = de[i];
    const qty = item.qty || 1;   

    setprice(price - item.price * qty);

    de.splice(i, 1);
    setcart(de);
  }
};
const remore = (index) => {
  const update = [...cart];

  if ((update[index].qty || 1) > 1) {
    update[index].qty -= 1;

    setcart(update);
    setprice(price - update[index].price);
  }
};

const addmore = (index) => {
  const update = [...cart];
  update[index].qty = (update[index].qty || 1) + 1;
  setcart(update);
  setprice(price + update[index].price);
};

  return (
    <div>
      <rem.Provider value={remore}>
      <u.Provider value={addmore}>
      <r.Provider value={remove}>
      <pr.Provider value={price}>
      <s.Provider value={cart}>
        <a.Provider value={add}>
          <d.Provider value={data}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Addtocart" element={<Addtocart />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/RandomImg" element={<RandomImg />} />
              <Route path="/Cards" element={<Cards />} />
            </Routes>
          </d.Provider>
        </a.Provider>
      </s.Provider>
      </pr.Provider>
      </r.Provider>
      </u.Provider>
      </rem.Provider>
    </div>
  );
};

export default App;
