import React from "react";
import Card from "../components/Card";
import AppLayout from "../layouts/AppLayout";

function Home() {
  return (
    <AppLayout>
      <h1>Hellow</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        reiciendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        reiciendis?
      </p>
    <Card content="$2,000.05" title="Balance"/>
    </AppLayout>
  );
}

export default Home;
