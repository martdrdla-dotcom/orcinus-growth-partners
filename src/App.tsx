import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import InvestmentApproach from "./pages/InvestmentApproach";
import Portfolio from "./pages/Portfolio";
import ForPartners from "./pages/ForPartners";
import News from "./pages/News";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import LegalNotice from "./pages/LegalNotice";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/o-nas" element={<AboutUs />} />
          <Route path="/investicni-pristup" element={<InvestmentApproach />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pro-partnery" element={<ForPartners />} />
          <Route path="/novinky" element={<News />} />
          <Route path="/kariera" element={<Career />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/gdpr" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/pravni-upozorneni" element={<LegalNotice />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
