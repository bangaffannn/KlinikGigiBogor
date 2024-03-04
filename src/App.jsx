import React from "react";

import Header from "./components/Header";
import Banner from "./components/Banner";
import BannerBellow from "./components/BannerBellow";
import Layanan from "./components/Layanan";
import TestimonialMap from "../src/components/content/TestimonialMap";
import Footer from "./components/Footer";
import WhatsappButton from "./components/content/WhatsappButton";
import FAQ from "./components/FAQ";

export default function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header></Header>
      <Banner></Banner>
      <Layanan></Layanan>
      <BannerBellow></BannerBellow>
      <TestimonialMap />
      <FAQ></FAQ>
      <WhatsappButton></WhatsappButton>
      <Footer></Footer>
    </div>
  );
}
