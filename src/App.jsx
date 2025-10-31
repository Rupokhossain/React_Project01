import React from "react";
import Header from "./Components/Shared/Header/Header";
import Footer from "./Components/Shared/Footer";
import Home from "./Page/Home/Home";
import TopHeader from "./Components/Shared/Header/TopHeader";

const App = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <div className="bg-[#F5F5FA]">
        <Home />
        <Footer />
      </div>
    </div>
  );
};

export default App;
