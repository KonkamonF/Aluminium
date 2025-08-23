import React from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import SlideBody from "./Body/SlideBody";

export default function App() {
  return (
    <>
      <div className="font-Athiti">
        <Header />
        <SlideBody/>
        <Body />
        <Footer />
      </div>
    </>
  );
}
