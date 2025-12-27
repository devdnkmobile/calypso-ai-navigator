import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Technologies from "./pages/Technologies";
import Cases from "./pages/Cases";
import Contacts from "./pages/Contacts";
import Workflow from "./pages/Workflow";
import Speech from "./pages/services/Speech";
import Assistants from "./pages/services/Assistants";
import N8N from "./pages/services/N8N";
import MCP from "./pages/services/MCP";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/services/speech" element={<Speech />} />
          <Route path="/services/assistants" element={<Assistants />} />
          <Route path="/services/n8n" element={<N8N />} />
          <Route path="/services/mcp" element={<MCP />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
