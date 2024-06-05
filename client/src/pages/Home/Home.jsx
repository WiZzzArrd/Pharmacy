import React from "react";
import Intro from "../../components/Intro/Intro";
import Quality from "../../components/Quality/Quality";
import Products from "../../components/Products/Products";

export default function Home() {
  return (
    <main>
      <Intro></Intro>
      <Quality></Quality>
      <Products></Products>
    </main>
  );
}
