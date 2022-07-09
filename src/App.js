import "./styles.css";
import "@animxyz/core";
import { XyzTransition } from "@animxyz/react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function App() {
  return (
    <XyzTransition appear duration="auto">
      <div className="page-wrap">
        <Header />
        <Body />
        <Footer/>
      </div>
    </XyzTransition>
  );
}
