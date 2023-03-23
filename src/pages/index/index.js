import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../../components/index.js/Navbar";
import Sidebar from "../../components/index.js/Sidebar";
import Main from "../../components/index.js/Main";

function Index() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Main />
    </>
  );
}

export default Index;
