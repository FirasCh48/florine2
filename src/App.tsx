/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Categories } from "./components/Categories";
import { BestSellers } from "./components/BestSellers";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LoadingScreen } from "./components/LoadingScreen";
import { FloatingSocials } from "./components/FloatingSocials";
import { BackToTop } from "./components/BackToTop";
import { LanguageProvider } from "./context/LanguageContext";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-brand-cream font-sans transition-all duration-300">
        <AnimatePresence mode="wait">
          {isLoading && (
            <LoadingScreen 
              key="loading" 
              onComplete={() => setIsLoading(false)} 
            />
          )}
        </AnimatePresence>

        <FloatingSocials />
        <BackToTop />
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Categories />
          <BestSellers />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

