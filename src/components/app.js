import React from "react";

import { HeaderSection } from "./header";
import { FooterSection } from "./footer";
import { LandingPage } from "../index";

import { InspirationPage } from "../pages/inspiration";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <HeaderSection />
      <LandingPage />
      <FooterSection />
    </div>
  );
};
