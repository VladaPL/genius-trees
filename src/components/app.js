import React from "react";

import { HeaderSection } from "./header";
import { FooterSection } from "./footer";
import { LandingPage } from "../index";

export const App = () => {
  return (
    <div>
      <HeaderSection />
      <LandingPage />
      <FooterSection />
    </div>
  );
};



