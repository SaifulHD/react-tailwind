import React from "react";
import Header from "parts/Header";
// import Hero from "parts/Hero";
// import JustArrived from "parts/HomePage/JustArrived";
// import BrowseRoom from "parts/HomePage/BrowseRoom";
import Breadcrumb from "components/Breadcrumb";
import Clients from "parts/Clients";
import SiteMap from "parts/SiteMap";
import Footer from "parts/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/23214", name: "Office Room" },
          { url: "/categories/23214/products/89089", name: "Details" },
        ]}
      />
      <Clients />
      <SiteMap />
      <Footer />
    </>
  );
}
