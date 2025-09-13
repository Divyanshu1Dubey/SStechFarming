import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Layout from "@/components/Layout";
import LanguageModal from "@/components/LanguageModal";
import { useTranslation } from "react-i18next";

const queryClient = new QueryClient();

const App = () => {
  const { i18n } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  // ✅ Robust cookie getter
  const getCookie = (name: string): string | null => {
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? match[2] : null;
  };

  useEffect(() => {
    const savedLang = getCookie("preferredLanguage");
    console.log("SavedLang:", savedLang); // Debug log

    if (!savedLang) {
      setShowModal(true); // First visit → show popup
    } else {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const handleSelectLanguage = (lang: string) => {
    i18n.changeLanguage(lang);

    // ✅ Save to cookie for 1 year
    document.cookie = `preferredLanguage=${lang}; path=/; max-age=${60 * 60 * 24 * 365}`;

    setShowModal(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {showModal && <LanguageModal onSelect={handleSelectLanguage} />}

        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Index />
                </Layout>
              }
            />
            <Route
              path="/about"
              element={
                <Layout>
                  <About />
                </Layout>
              }
            />
            <Route
              path="/services"
              element={
                <Layout>
                  <Services />
                </Layout>
              }
            />
            <Route
              path="/products"
              element={
                <Layout>
                  <Products />
                </Layout>
              }
            />
            <Route
              path="/contact"
              element={
                <Layout>
                  <Contact />
                </Layout>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
