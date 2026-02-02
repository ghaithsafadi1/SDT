import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* The basename prop tells React Router that the app 
          lives in a subfolder named /SDT/ 
      */}
      <BrowserRouter basename="/SDT">
        <Routes>
          {/* Use "index" or "/*" to ensure the home page captures the subfolder path */}
          <Route index element={<Index />} />
          <Route path="/" element={<Index />} />

          {/* The catch-all for anything else */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
