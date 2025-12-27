import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BackToTop from "@/components/BackToTop";
import Legal from "./pages/Legal";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "@/components/theme-provider";
import Maintenance from "./pages/Maintenance";

const queryClient = new QueryClient();

const App = () => {
  // SET THIS TO 'false' TO REVEAL THE FULL WEBSITE
  const isMaintenanceMode = false;

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <TooltipProvider>
            <Toaster />
            <Sonner />
            
            {/* Main Application Container */}
            <div className="min-h-screen bg-background text-foreground">
              {isMaintenanceMode ? (
                /* Only the Maintenance page shows when active */
                <Maintenance />
              ) : (
                /* Full Website Routing */
                <BrowserRouter>
                  <ScrollToTop />
                  <Routes>
                    <Route path="/" element={<Index />} />
                    
                    <Route 
                      path="/privacy" 
                      element={
                        <Legal 
                          title="Privacy Policy" 
                          content={
                            <div className="space-y-4">
                              <p>At Synctech, we value your privacy. This policy explains how we handle your data.</p>
                              <h3 className="text-foreground font-bold">1. Data Collection</h3>
                              <p>We only collect information provided through our contact form to assist with your inquiries.</p>
                            </div>
                          } 
                        />
                      } 
                    />

                    <Route 
                      path="/terms" 
                      element={
                        <Legal 
                          title="Terms of Service" 
                          content={
                            <div className="space-y-4">
                              <p>By accessing our site, you agree to our terms of service and engineering standards.</p>
                              <h3 className="text-foreground font-bold">1. Usage</h3>
                              <p>The content provided is for informational purposes regarding our technical services.</p>
                            </div>
                          } 
                        />
                      } 
                    />

                    <Route path="*" element={<NotFound />} />
                  </Routes>
                  <BackToTop />
                </BrowserRouter>
              )}
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;