import React from "react";
import WalletBalance from "../components/walletbalance";
import AppLayout from "../layouts/AppLayout";

function Home() {
  return (
    <AppLayout>
      <WalletBalance/>
    </AppLayout>
  );
}

export default Home;
