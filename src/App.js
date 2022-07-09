import "./styles.css";
import Header from "./components/Header";
import "@animxyz/core";
import { XyzTransition } from "@animxyz/react";

export default function App() {
  return (
    <XyzTransition appear duration="auto">
      <div className="page-wrap">
        <Header />
      </div>
    </XyzTransition>
  );
}
