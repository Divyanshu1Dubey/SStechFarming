import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Layout from "@/components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={
            <Layout>
              <About />
            </Layout>
          } />
          <Route path="/services" element={
            <Layout>
              <Services />
            </Layout>
          } />
          <Route path="/products" element={
            <Layout>
              <Products />
            </Layout>
          } />
          <Route path="/contact" element={
            <Layout>
              <Contact />
            </Layout>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
