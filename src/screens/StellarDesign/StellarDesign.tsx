import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { DashboardSection } from "./sections/DashboardSection/DashboardSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { IntegrationSection } from "./sections/IntegrationSection/IntegrationSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";

export const StellarDesign = (): JSX.Element => {
  return (
    <div className="bg-white w-full">
      <div className="w-full">
        <div className="relative w-full bg-white">
          <div className="w-full">
            <HeroSection />
          </div>

          <FeaturesSection />

          <TestimonialsSection />

          <CallToActionSection />

          <IntegrationSection />

          <DashboardSection />
        </div>
      </div>
    </div>
  );
};
