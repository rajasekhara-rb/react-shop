import React from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import CardsSection from "./components/itemCardsSection";
import Footer from "./components/footer";
import data from "./data/data.json"

function App() {
  return (
    <>
      {/* <h1>  React Shop</h1> */}
      <Navbar />
      <Header />
      <CardsSection products={data} />
      <Footer />
    </>
  )
}

export default App;