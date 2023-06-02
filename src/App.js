import React, { useState } from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import CardsSection from "./components/itemCardsSection";
import Footer from "./components/footer";
import data from "./data/data.json"

function App() {

  const [itemCount, setItemCount] = useState(0);

  const manageItems = (event) => {
    if (event.target.innerText === 'Add to cart') {
      addItem(event);
    } else if (event.target.innerText === 'Remove from cart') {
      removeItem(event);
    } else {

    }
  }

  const addItem = (event) => {
    setItemCount(() => itemCount + 1);
    event.target.innerText = "Remove from cart";
    event.target.classList.value = "btn btn-danger";
  }

  const removeItem = (event) => {
    setItemCount(() => itemCount - 1);
    event.target.innerText = "Add to cart";
    event.target.classList.value = "btn btn-primary";
  }

  return (
    <>
      {/* <h1>  React Shop</h1> */}
      <Navbar itemCount={itemCount} />
      <Header />
      <CardsSection products={data} manageItems={manageItems} />
      <Footer />
    </>
  )
}

export default App;