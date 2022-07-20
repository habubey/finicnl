import React from "react";
import NavbarStyleSix from "@/components/_App/NavbarStyleSix";
import MainBanner from "@/components/DigitalAgencyPortfolio/MainBanner";
import Footer from "@/components/_App/Footer";
import WhyChoose from "@/components/Hosting/WhyChoose";
import PartnerStyleTwo from "@/components/Common/PartnerStyleTwo";
import Feedback from "@/components/BigdataAnalytics/Feedback";
import BigdataFunFacts from "@/components/BigdataAnalytics/BigdataFunFacts";
import AboutUsContent from "@/components/PCRepair/AboutUsContent";
const Index = () => {
  return (
    <>
      <NavbarStyleSix />
      <MainBanner />
      <AboutUsContent/>
      <WhyChoose />
      <BigdataFunFacts />
      <PartnerStyleTwo />
      <Feedback />
      <Footer />
    </>
  );
};

export default Index;
